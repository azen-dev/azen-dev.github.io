import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { useLang } from '../components/LangContext';

const PLAN_KEYS = ['plan1', 'plan2', 'plan3'];

export default function PricingSection() {
  const { t } = useLang();

  return (
    <section
      id="pricing"
      className="relative bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-4 sm:mb-5"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {t('pricing.title')}
        </h2>
      </FadeIn>

      <FadeIn delay={0.05}>
        <p
          className="text-[#0C0C0C] font-light text-center max-w-xl mx-auto mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
        >
          {t('pricing.subtitle')}
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 items-stretch">
        {PLAN_KEYS.map((key, i) => {
          const isFeatured = i === 1;
          const featureCount = 4;

          return (
            <FadeIn key={key} delay={i * 0.12} className="h-full">
              <div
                className="relative h-full flex flex-col rounded-[24px] sm:rounded-[28px] px-6 sm:px-7 md:px-8 py-8 sm:py-9 md:py-10 transition-transform duration-300 hover:-translate-y-2"
                style={
                  isFeatured
                    ? {
                        background:
                          'linear-gradient(160deg, #18011F 0%, #4B0F63 45%, #7621B0 100%)',
                        boxShadow:
                          '0px 20px 50px -10px rgba(118, 33, 176, 0.45)',
                      }
                    : {
                        background: '#F4F5F6',
                      }
                }
              >
                {isFeatured && (
                  <span
                    className="absolute -top-3 sm:-top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap"
                    style={{
                      background:
                        'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      outline: '2px solid white',
                      outlineOffset: '-2px',
                    }}
                  >
                    {t('pricing.popular')}
                  </span>
                )}

                <h3
                  className={`font-medium uppercase mb-2 ${
                    isFeatured ? 'text-white' : 'text-[#0C0C0C]'
                  }`}
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}
                >
                  {t(`pricing.${key}.name`)}
                </h3>

                <p
                  className={`font-light leading-relaxed mb-6 sm:mb-7 ${
                    isFeatured ? 'text-white' : 'text-[#0C0C0C]'
                  }`}
                  style={{
                    fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)',
                    opacity: isFeatured ? 0.75 : 0.6,
                  }}
                >
                  {t(`pricing.${key}.desc`)}
                </p>

                <div className="flex items-baseline gap-2 mb-7 sm:mb-8">
                  <span
                    className={`font-black leading-none ${
                      isFeatured ? 'text-white' : 'text-[#0C0C0C]'
                    }`}
                    style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)' }}
                  >
                    {t(`pricing.${key}.price`)}
                  </span>
                  <span
                    className={`font-light uppercase tracking-wide ${
                      isFeatured ? 'text-white/60' : 'text-[#0C0C0C]/45'
                    }`}
                    style={{ fontSize: 'clamp(0.65rem, 1vw, 0.8rem)' }}
                  >
                    {t('pricing.priceFrom')}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 sm:gap-3.5 mb-8 sm:mb-10 flex-1">
                  {Array.from({ length: featureCount }).map((_, fi) => (
                    <li
                      key={fi}
                      className={`flex items-start gap-2.5 font-light leading-snug ${
                        isFeatured ? 'text-white/85' : 'text-[#0C0C0C]/75'
                      }`}
                      style={{ fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)' }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="flex-shrink-0 mt-1"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="8"
                          fill={isFeatured ? 'white' : '#0C0C0C'}
                          fillOpacity={isFeatured ? 0.18 : 0.08}
                        />
                        <path
                          d="M4.8 8.2L6.8 10.2L11.2 5.6"
                          stroke={isFeatured ? 'white' : '#0C0C0C'}
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {t(`pricing.${key}.f${fi + 1}`)}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="mt-auto">
                  {isFeatured ? (
                    <ContactButton
                      label={t('pricing.cta')}
                      className="w-full !px-6"
                    />
                  ) : (
                    <button
                      type="button"
                      className="w-full rounded-full px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#0C0C0C] border border-[#0C0C0C]/20 transition-colors duration-200 hover:bg-[#0C0C0C] hover:text-white"
                    >
                      {t('pricing.cta')}
                    </button>
                  )}
                </a>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.3}>
        <p
          className="text-[#0C0C0C] font-light text-center mt-10 sm:mt-12"
          style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)', opacity: 0.5 }}
        >
          {t('pricing.note')}
        </p>
      </FadeIn>
    </section>
  );
}
