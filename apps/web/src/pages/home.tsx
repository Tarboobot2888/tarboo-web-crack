import { useState } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import Layout from '../components/Layout';

const Home = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);


  async function handleDeobfuscate() {
    setLoading(true);
    try {
      const res = await fetch('/api/deobfuscate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: input })
      });
      const data = await res.json();
      setResult(hljs.highlight(data.code, { language: 'javascript' }).value);
      const history = JSON.parse(localStorage.getItem('history') || '[]');
      history.unshift(input);
      localStorage.setItem('history', JSON.stringify(history.slice(0, 10)));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  return (
    <Layout>
      <div className="space-y-4">
        <textarea
          className="w-full h-48 p-2 bg-secondary rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste obfuscated code here"
        />
        <button
          onClick={handleDeobfuscate}
          className="bg-primary text-black py-2 px-4 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Deobfuscate'}
        </button>
        {result && (
          <pre className="bg-secondary p-2 rounded overflow-x-auto">
            <code className="language-js" dangerouslySetInnerHTML={{ __html: result }} />
          </pre>
        )}
        <p className="text-muted text-sm">The result is syntax highlighted for readability.</p>
      </div>
    </Layout>
  );
};

export default Home;
