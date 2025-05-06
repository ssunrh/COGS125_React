import Link from 'next/link';

const Navbar = () => (
  <nav className="p-4 bg-white shadow">
    <ul className="flex space-x-6">
      <li><Link href="/">home</Link></li>
      <li><Link href="/about">about</Link></li>
      <li><Link href="/projects">projects</Link></li>
    </ul>
  </nav>
);

export default Navbar;