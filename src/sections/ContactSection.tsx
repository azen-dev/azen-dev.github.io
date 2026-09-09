import FadeIn from '../components/FadeIn';
import OrderForm from '../components/OrderForm';
import { useLang } from '../components/LangContext';

export default function ContactSection() {
  const { t } = useLang();

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6"
          style={{ fontSize: 'clamp(2.8rem, 10vw, 130px)' }}
        >
          {t('contact.title')}
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p
          className="text-[#D7E2EA] font-light text-center max-w-xl mx-auto mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
        >
          {t('contact.desc')}
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <OrderForm />
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex justify-center mt-16 sm:mt-20">
          <a
            href="mailto:azen-dev@proton.me"
            className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base transition-opacity duration-200 hover:opacity-70"
          >
            {t('contact.emailBtn')} →
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
