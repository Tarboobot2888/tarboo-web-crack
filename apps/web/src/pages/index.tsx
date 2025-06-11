import { useRouter } from 'next/router';
import { useState } from 'react';
import SplashScreen from '../components/SplashScreen';

const IndexPage = () => {
  const router = useRouter();
  const [show, setShow] = useState(true);

  const handleEnter = () => {
    setShow(false);
    router.push('/home');
  };

  return show ? <SplashScreen onEnter={handleEnter} /> : null;
};

export default IndexPage;
