import FadeIn from '../components/FadeIn';
import { useLang } from '../components/LangContext';

const STEP_KEYS = ['step1', 'step2', 'step3', 'step4', 'step5'];

export default function ProcessSection() {
  const { t } = useLang();

  return (
    <section className="bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {t('process.title')}
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col gap-10 sm:gap-12 md:gap-16">
        {STEP_KEYS.map((key, i) => (
          <FadeIn key={key} delay={i * 0.1}>
            <div className="flex items-start gap-6 sm:gap-10">
              <span
                className="text-[#0C0C0C] font-black flex-shrink-0"
                style={{
                  fontSize: 'clamp(2.5rem, 7vw, 90px)',
                  opacity: 0.15,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.2rem)' }}
                >
                  {t(`process.${key}.title`)}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {t(`process.${key}.desc`)}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
