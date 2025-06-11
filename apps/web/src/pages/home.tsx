import Layout from '../components/Layout';
import CodeEditor from '../components/CodeEditor';

const Home = () => (
  <Layout>
    <h1 className="text-3xl font-bold mb-4 text-green-400">Deobfuscate</h1>
    <CodeEditor />
  </Layout>
);

export default Home;
