import { FC, ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-background text-text">
    <Navbar />
    <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
    <Footer />
  </div>
);

export default Layout;
