export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">TombatuWeb</h2>
          <p className="text-gray-400 text-sm">
            Solusi digital dan pengembangan website profesional untuk bisnis Anda.
          </p>
        </div>

        {/* Layanan */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Layanan</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#layanan" className="hover:text-white transition">Website Company Profile</a></li>
            <li><a href="#layanan" className="hover:text-white transition">Website Toko Online</a></li>
            <li><a href="#layanan" className="hover:text-white transition">Website Sekolah</a></li>
            <li><a href="#layanan" className="hover:text-white transition">Website Marketplace</a></li>
          </ul>
        </div>

        {/* Bantuan */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Bantuan</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/contact" className="hover:text-white transition">Hubungi Kami</a></li>
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/terms" className="hover:text-white transition">Syarat & Ketentuan</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Kebijakan Privasi</a></li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54v-2.21c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.883h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.05 9.05 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.12 12.8 12.8 0 01-9.3-4.71 4.48 4.48 0 001.4 6.06 4.4 4.4 0 01-2.05-.57v.06a4.52 4.52 0 003.62 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.21 3.14 9 9 0 01-5.6 1.93A9.32 9.32 0 012 19.54 12.8 12.8 0 008.29 21c7.547 0 11.675-6.155 11.675-11.48 0-.175 0-.35-.012-.52A8.18 8.18 0 0023 3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 2.5a1 1 0 110 2 1 1 0 010-2zm-4.25 1a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM2 9h6v12H2zM8 9h6v1.71h.09a6.6 6.6 0 016-3.29c6.44 0 7.63 4.25 7.63 9.78V21H18v-7.13c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.76V21H8z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TombatuDev. All rights reserved.
      </div>
    </footer>
  );
}
