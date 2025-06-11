import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const History = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('history');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4 text-green-400">History</h1>
      <ul className="space-y-2">
        {items.map((entry, i) => (
          <li key={i} className="bg-gray-800 p-2 rounded break-all text-gray-200">
            {entry}
          </li>
        ))}
        {items.length === 0 && <li className="text-gray-400">No history yet.</li>}
      </ul>
    </Layout>
  );
};

export default History;
