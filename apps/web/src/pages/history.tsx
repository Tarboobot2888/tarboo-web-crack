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
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <ul className="space-y-2">
        {items.map((entry, i) => (
          <li key={i} className="bg-secondary p-2 rounded break-all">
            {entry}
          </li>
        ))}
        {items.length === 0 && <li className="text-muted">No history yet.</li>}
      </ul>
    </Layout>
  );
};

export default History;
