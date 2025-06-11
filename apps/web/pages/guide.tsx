import Layout from '../components/Layout';

const Guide = () => (
  <Layout>
    <h1 className="text-3xl font-bold mb-4">Usage Guide</h1>
    <ol className="list-decimal list-inside text-muted space-y-2">
      <li>Upload your JavaScript file.</li>
      <li>Select the appropriate deobfuscation tool.</li>
      <li>Review the output and download the result.</li>
    </ol>
  </Layout>
);

export default Guide;
