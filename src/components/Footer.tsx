import { useLang } from './LangContext';

const LINKS = [
  { href: '#about', key: 'nav.about' },
  { href: '#price', key: 'nav.services' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#contact', key: 'nav.contact' },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-5 sm:px-8 md:px-10 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img
          src="/azen-wordmark.png"
          alt="Azen.dev"
          className="h-6 w-auto"
          style={{ filter: 'brightness(0) invert(1)' }}
        />

        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#D7E2EA] text-sm uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="mailto:azen-dev@proton.me"
            aria-label="Email"
            className="text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/azen.dev"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://github.com/azen-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center md:text-left mt-8 text-[#D7E2EA]/40 text-xs uppercase tracking-wide">
        {t('footer.text')}
      </div>
    </footer>
  );
}
