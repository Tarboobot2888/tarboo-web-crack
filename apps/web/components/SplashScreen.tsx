import { FC } from 'react';

const SplashScreen: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white animate-fadeIn">
      <h1 className="text-5xl font-bold tracking-widest animate-pulse">TARBOO</h1>
    </div>
  );
};

export default SplashScreen;
