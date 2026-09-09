import FadeIn from '../components/FadeIn';
import { useLang } from '../components/LangContext';

const NAMES = ['Сергій', 'Михайло', 'Артем'];
const QUOTE_KEYS = ['q1', 'q2', 'q3'];

export default function TestimonialsSection() {
  const { t } = useLang();

  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {t('testimonials.title')}
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p
          className="text-[#D7E2EA] font-light text-center max-w-xl mx-auto mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
        >
          {t('testimonials.subtitle')}
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {QUOTE_KEYS.map((key, i) => (
          <FadeIn key={key} delay={i * 0.1}>
            <div className="h-full rounded-[30px] border border-[#D7E2EA]/20 p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex gap-1 text-[#D7E2EA]">
                {Array.from({ length: 5 }).map((_, star) => (
                  <svg
                    key={star}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.8l-5.3 2.8 1.1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
                  </svg>
                ))}
              </div>
              <p
                className="text-[#D7E2EA] font-light leading-relaxed flex-1"
                style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}
              >
                {t(`testimonials.${key}.text`)}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D7E2EA]/10 flex items-center justify-center text-[#D7E2EA] font-medium">
                  {NAMES[i].charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-[#D7E2EA] font-medium text-sm">
                    {NAMES[i]}
                  </span>
                  <span className="text-[#D7E2EA]/50 text-xs uppercase tracking-wide">
                    {t(`testimonials.${key}.label`)}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
