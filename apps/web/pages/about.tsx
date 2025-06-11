import Layout from '../components/Layout';
import Image from 'next/image';

const About = () => (
  <Layout>
    <h1 className="text-3xl font-bold mb-4">About the Developer</h1>
    <div className="flex flex-col items-center">
      <Image src="/avatar.png" alt="Developer" width={150} height={150} className="rounded-full" />
      <p className="mt-4 text-center text-muted max-w-xl">
        Passionate developer behind TARBOO Deobfuscate JS. Connect with me on social media.
      </p>
    </div>
  </Layout>
);

export default About;
