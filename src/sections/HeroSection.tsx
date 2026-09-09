import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import { useLang } from '../components/LangContext';

const NAV_LINKS = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#price' },
  { key: 'nav.pricing', href: '#pricing' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
];

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export default function HeroSection() {
  const { lang, setLang, t } = useLang();

  return (
    <section
      className="relative h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex justify-between items-center gap-4 px-6 md:px-10 pt-6 md:pt-8">
          <img
            src="/azen-wordmark.png"
            alt="Azen.dev"
            className="h-6 sm:h-7 md:h-8 w-auto flex-shrink-0"
            style={{ filter: 'brightness(0) invert(1)' }}
          />

          <div className="hidden sm:flex items-center gap-6 md:gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setLang(lang === 'uk' ? 'en' : 'uk')}
            className="flex items-center gap-1 rounded-full border border-[#D7E2EA]/40 px-3 py-1.5 text-xs md:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 flex-shrink-0"
            aria-label="Switch language"
          >
            <span className={lang === 'uk' ? 'opacity-100' : 'opacity-40'}>
              UA
            </span>
            <span className="opacity-40">/</span>
            <span className={lang === 'en' ? 'opacity-100' : 'opacity-40'}>
              EN
            </span>
          </button>
        </div>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40} as="h1">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Azen.dev
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      {/* On mobile the portrait sits in normal flex flow and fills the
          leftover vertical space between the heading and the trust stats,
          so it lands centered in that space instead of overlapping content.
          From sm and up, this wrapper collapses (display: contents) and the
          image goes back to being absolutely positioned against the bottom
          of the section, matching the original desktop layout exactly. */}
      <div className="w-full flex-1 flex items-center justify-center sm:contents">
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="z-10 w-[260px] sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:bottom-0 sm:w-[360px] md:w-[440px] lg:w-[520px]"
        >
          <FadeIn delay={0.6} y={30}>
            <img
              src={PORTRAIT_URL}
              alt="Azen.dev"
              className="w-full h-auto"
            />
          </FadeIn>
        </Magnet>
      </div>

      {/* Trust stats */}
      <div className="relative z-20 px-6 md:px-10 pt-4 sm:pt-6 pb-6 sm:pb-8">
        <FadeIn delay={0.25} y={20}>
          <div className="border-t border-[#D7E2EA]/15 pt-6 sm:pt-8 flex items-stretch gap-6 sm:gap-12 md:gap-16">
            <div className="flex flex-col gap-1.5 sm:gap-2.5">
              <span
                className="text-[#D7E2EA] font-black leading-none tabular-nums"
                style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)' }}
              >
                {t('hero.trust1n')}
              </span>
              <span
                className="text-[#D7E2EA]/45 font-light uppercase tracking-[0.14em] leading-snug max-w-[8rem] sm:max-w-[9.5rem]"
                style={{ fontSize: 'clamp(0.65rem, 1vw, 0.8rem)' }}
              >
                {t('hero.trust1t')}
              </span>
            </div>

            <div className="w-px bg-[#D7E2EA]/15" />

            <div className="flex flex-col gap-1.5 sm:gap-2.5">
              <span
                className="text-[#D7E2EA] font-black leading-none tabular-nums"
                style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)' }}
              >
                {t('hero.trust2n')}
              </span>
              <span
                className="text-[#D7E2EA]/45 font-light uppercase tracking-[0.14em] leading-snug max-w-[8rem] sm:max-w-[9.5rem]"
                style={{ fontSize: 'clamp(0.65rem, 1vw, 0.8rem)' }}
              >
                {t('hero.trust2t')}
              </span>
            </div>

            <div className="w-px bg-[#D7E2EA]/15" />

            <div className="flex flex-col gap-1.5 sm:gap-2.5">
              <span
                className="hero-heading font-black leading-none tabular-nums"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
              >
                {t('hero.trust3n')}
              </span>
              <span
                className="text-[#D7E2EA]/60 font-light uppercase tracking-[0.14em] leading-snug max-w-[8rem] sm:max-w-[9.5rem]"
                style={{ fontSize: 'clamp(0.65rem, 1vw, 0.8rem)' }}
              >
                {t('hero.trust3t')}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {t('hero.subtitle')}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <a href="#contact">
            <ContactButton label={t('hero.cta')} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
