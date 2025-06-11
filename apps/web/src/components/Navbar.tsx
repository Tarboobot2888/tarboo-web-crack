import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-900 text-green-400 p-4 shadow-md">
    <div className="container mx-auto flex gap-4">
      <Link href="/home" className="hover:text-white">Home</Link>
      <Link href="/about" className="hover:text-white">About</Link>
      <Link href="/contact" className="hover:text-white">Contact</Link>
      <Link href="/history" className="hover:text-white">History</Link>
      <Link href="/privacy" className="hover:text-white">Privacy</Link>
    </div>
  </nav>
);

export default Navbar;
