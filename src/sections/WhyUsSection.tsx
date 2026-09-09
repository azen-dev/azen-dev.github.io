import FadeIn from '../components/FadeIn';
import { useLang } from '../components/LangContext';

const REASON_KEYS = ['card1', 'card2', 'card3', 'card4'];

export default function WhyUsSection() {
  const { t } = useLang();

  return (
    <section
      id="why"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {t('why.title')}
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {REASON_KEYS.map((key, i) => (
          <FadeIn key={key} delay={i * 0.1}>
            <div
              className="flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom:
                  i < REASON_KEYS.length - 1
                    ? '1px solid rgba(215, 226, 234, 0.15)'
                    : 'none',
                borderTop:
                  i === 0 ? '1px solid rgba(215, 226, 234, 0.15)' : 'none',
              }}
            >
              <div
                className="text-[#D7E2EA] font-black flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="text-[#D7E2EA] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {t(`why.${key}.title`)}
                </h3>
                <p
                  className="text-[#D7E2EA] font-light leading-relaxed max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {t(`why.${key}.desc`)}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
