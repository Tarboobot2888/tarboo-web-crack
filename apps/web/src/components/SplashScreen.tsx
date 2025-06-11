import { FC } from 'react';

const SplashScreen: FC<{ onEnter: () => void }> = ({ onEnter }) => (
  <div className="flex flex-col items-center justify-center h-screen bg-black text-white animate-fadeIn space-y-4">
    <h1 className="text-5xl font-bold tracking-widest animate-pulse">TARBOO Deobfuscate JS</h1>
    <button onClick={onEnter} className="bg-primary text-black py-2 px-4 rounded">Enter Site</button>
  </div>
);

export default SplashScreen;
