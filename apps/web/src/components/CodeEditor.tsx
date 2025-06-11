import { useState } from 'react';

const CodeEditor = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
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
      setOutput(data.code);
      const history = JSON.parse(localStorage.getItem('history') || '[]');
      history.unshift(input);
      localStorage.setItem('history', JSON.stringify(history.slice(0, 10)));
    } catch {
      setOutput('Error while deobfuscating');
    }
    setLoading(false);
  }

  return (
    <div className="space-y-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste obfuscated code here"
        rows={10}
      />
      <button onClick={handleDeobfuscate} disabled={loading} className="disabled:opacity-50">
        {loading ? 'Processing...' : 'Deobfuscate'}
      </button>
      {output && (
        <pre className="bg-gray-800 p-2 rounded overflow-x-auto whitespace-pre-wrap text-green-200">
          {output}
        </pre>
      )}
    </div>
  );
};

export default CodeEditor;
