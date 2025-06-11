import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SplashScreen from '../components/SplashScreen';

const IndexPage = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => router.push('/home'), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative h-screen">
      <video autoPlay muted loop id="bg-video" className="fixed top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="https://qu.ax/xMioR.mp4" type="video/mp4" />
      </video>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black/60 z-0" />
      <SplashScreen />
    </div>
  );
};

export default IndexPage;
