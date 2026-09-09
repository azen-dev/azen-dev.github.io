import { useState, FormEvent } from 'react';
import ContactButton from './ContactButton';
import { useLang } from './LangContext';

const TYPE_KEYS = ['form.type1', 'form.type2', 'form.type3', 'form.type4', 'form.type5'];
const BUDGET_KEYS = [
  'form.budget1',
  'form.budget2',
  'form.budget3',
  'form.budget4',
  'form.budget5',
];

type Status = 'idle' | 'sending' | 'sent';

const inputClasses =
  'w-full bg-transparent border-b border-[#D7E2EA]/30 text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 py-3 outline-none focus:border-[#D7E2EA] transition-colors duration-200 font-light';

export default function OrderForm() {
  const { lang, t } = useLang();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [typeIndex, setTypeIndex] = useState(0);
  const [budgetIndex, setBudgetIndex] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const isEn = lang === 'en';
    const typeText = t(TYPE_KEYS[typeIndex]);
    const budgetText =
      budgetIndex !== null
        ? t(BUDGET_KEYS[budgetIndex])
        : isEn
        ? 'not specified'
        : 'не вказано';

    const subject = isEn
      ? `Project request from ${name || 'a client'}`
      : `Заявка на проєкт від ${name || 'клієнта'}`;

    const bodyLines = isEn
      ? [
          `Name: ${name}`,
          `Contact: ${contact}`,
          `Project type: ${typeText}`,
          `Budget: ${budgetText}`,
          '',
          'Project description:',
          message || '—',
        ]
      : [
          `Ім'я: ${name}`,
          `Контакт: ${contact}`,
          `Тип проєкту: ${typeText}`,
          `Бюджет: ${budgetText}`,
          '',
          'Опис проєкту:',
          message || '—',
        ];

    window.location.href = `mailto:azen-dev@proton.me?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    setStatus('sent');
  };

  return (
    <div id="orderForm" className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="f-name"
              className="text-[#D7E2EA]/60 uppercase tracking-wider text-xs"
            >
              {t('form.nameLabel')}
            </label>
            <input
              id="f-name"
              type="text"
              placeholder={t('form.namePh')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="f-contact"
              className="text-[#D7E2EA]/60 uppercase tracking-wider text-xs"
            >
              {t('form.contactLabel')}
            </label>
            <input
              id="f-contact"
              type="text"
              placeholder={t('form.contactPh')}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className={inputClasses}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="f-type"
            className="text-[#D7E2EA]/60 uppercase tracking-wider text-xs"
          >
            {t('form.typeLabel')}
          </label>
          <select
            id="f-type"
            value={typeIndex}
            onChange={(e) => setTypeIndex(Number(e.target.value))}
            className={`${inputClasses} appearance-none [&>option]:bg-[#0C0C0C]`}
          >
            {TYPE_KEYS.map((key, i) => (
              <option key={key} value={i}>
                {t(key)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[#D7E2EA]/60 uppercase tracking-wider text-xs">
            {t('form.budgetLabel')}
          </span>
          <div className="flex flex-wrap gap-2">
            {BUDGET_KEYS.map((key, i) => (
              <button
                type="button"
                key={key}
                onClick={() => setBudgetIndex(i)}
                className={`rounded-full border px-4 py-2 text-xs sm:text-sm uppercase tracking-wide transition-colors duration-200 ${
                  budgetIndex === i
                    ? 'bg-[#D7E2EA] text-[#0C0C0C] border-[#D7E2EA]'
                    : 'border-[#D7E2EA]/30 text-[#D7E2EA]/70 hover:border-[#D7E2EA]'
                }`}
              >
                {t(key)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="f-message"
            className="text-[#D7E2EA]/60 uppercase tracking-wider text-xs"
          >
            {t('form.messageLabel')}{' '}
            <span className="normal-case opacity-60">
              ({t('form.optionalTag')})
            </span>
          </label>
          <textarea
            id="f-message"
            placeholder={t('form.messagePh')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className={`${inputClasses} resize-none`}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <button type="submit" disabled={status === 'sending'}>
            <ContactButton
              label={
                status === 'sending' ? t('form.sending') : t('form.submitBtn')
              }
            />
          </button>
          <span className="text-[#D7E2EA]/50 text-xs sm:text-sm">
            {t('form.note')}
          </span>
        </div>

        {status === 'sent' && (
          <div className="flex items-center gap-3 text-[#D7E2EA]">
            <span className="w-6 h-6 rounded-full bg-[#D7E2EA]/10 flex items-center justify-center text-sm">
              ✓
            </span>
            <span className="text-sm">{t('form.successMsg')}</span>
          </div>
        )}
      </form>
    </div>
  );
}
