// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-800 text-white py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <img
            src="/images/logo.png" // Pastikan file logo.png ada di public/images
            alt="TombatuDev"
            className="h-10 w-auto cursor-pointer"
          />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#layanan">Layanan</Link></li>
            <li><Link href="#portofolio">Portofolio</Link></li>
            <li><Link href="/contact">Kontak</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
