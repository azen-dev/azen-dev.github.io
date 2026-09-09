import FadeIn from '../components/FadeIn';
import { useLang } from '../components/LangContext';

const SERVICE_KEYS = ['card1', 'card2', 'card3'];

export default function ServicesSection() {
  const { t } = useLang();

  return (
    <section
      id="price"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {t('services.title')}
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICE_KEYS.map((key, i) => (
          <FadeIn key={key} delay={i * 0.1}>
            <div
              className="flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom:
                  i < SERVICE_KEYS.length - 1
                    ? '1px solid rgba(12, 12, 12, 0.15)'
                    : 'none',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
              }}
            >
              <div
                className="text-[#0C0C0C] font-black flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {t(`services.${key}.name`)}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {t(`services.${key}.desc`)}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
