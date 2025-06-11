import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-secondary text-text py-4">
      <div className="container mx-auto flex gap-4">
        <Link href="/home" className="hover:text-primary">Home</Link>
        <Link href="/guide" className="hover:text-primary">Guide</Link>
        <Link href="/tools" className="hover:text-primary">Tools</Link>
        <Link href="/changelog" className="hover:text-primary">Changelog</Link>
        <Link href="/about" className="hover:text-primary">About</Link>
        <Link href="/contact" className="hover:text-primary">Contact</Link>
        <Link href="/history" className="hover:text-primary">History</Link>
        <Link href="/privacy" className="hover:text-primary">Privacy</Link>
      </div>
    </nav>
  );
};

export default Navbar;
