interface Props {
  onEnter: () => void;
}

const SplashScreen = ({ onEnter }: Props) => (
  <div className="flex flex-col items-center justify-center h-screen bg-black text-green-400 space-y-6 animate-fadeIn">
    <h1 className="text-5xl font-bold">TARBOO Deobfuscate JS</h1>
    <button onClick={onEnter}>Enter Site</button>
  </div>
);

export default SplashScreen;
