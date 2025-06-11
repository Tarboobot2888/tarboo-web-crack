import Layout from '../components/Layout';

const Tools = () => (
  <Layout>
    <h1 className="text-3xl font-bold mb-4">Available Tools</h1>
    <ul className="list-disc list-inside text-muted space-y-2">
      <li>Deobfuscate</li>
      <li>Unminify</li>
      <li>Unpack</li>
    </ul>
  </Layout>
);

export default Tools;
