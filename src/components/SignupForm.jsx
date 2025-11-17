import { useMemo, useState } from 'react';

const EMAIL_REGEX = /[^\s@]+@[^\s@]+\.[^\s@]+/;
const STORAGE_KEY = '4th-wall-sec-email-signups';

const storeSignup = (payload) => {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push({ ...payload, timestamp: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    return true;
  } catch (error) {
    console.warn('Unable to store signup locally', error);
    return false;
  }
};

const tones = {
  success: 'form-message--success',
  warning: 'form-message--warning',
  error: 'form-message--error',
  info: 'form-message--info',
};

const SignupForm = ({
  id,
  includeName = false,
  includeConsent = false,
  inline = false,
  submitLabel = 'Join the list',
  messageId,
}) => {
  const [message, setMessage] = useState('');
  const [tone, setTone] = useState('info');

  const messageClass = useMemo(() => tones[tone] ?? tones.info, [tone]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email')?.toString().trim();
    const name = formData.get('name')?.toString().trim();
    const consent = formData.get('consent') === 'on';

    if (!EMAIL_REGEX.test(String(email).toLowerCase())) {
      setTone('error');
      setMessage('Enter a valid email address to join the list.');
      return;
    }

    const stored = storeSignup({ email, name, consent });
    form.reset();

    if (stored) {
      setTone('success');
      setMessage("Thanks! You're on the list. Expect an invite soon.");
    } else {
      setTone('warning');
      setMessage("Thanks! We'll be in touch soon (local storage unavailable).");
    }
  };

  return (
    <form
      id={id}
      className={`cta-form ${inline ? 'cta-form--inline' : ''}`}
      noValidate
      onSubmit={handleSubmit}
    >
      <div className={`cta-form__grid ${inline ? 'cta-form__grid--inline' : ''}`}>
        {includeName && (
          <label className="input-group">
            <span className="sr-only">Name (optional)</span>
            <input type="text" name="name" placeholder="Name (optional)" autoComplete="name" />
          </label>
        )}
        <label className="input-group">
          <span className="sr-only">Email</span>
          <input type="email" name="email" placeholder="Work email" required autoComplete="email" />
        </label>
        <button type="submit" className={`button ${inline ? 'button--secondary' : 'button--primary'}`}>
          {submitLabel}
        </button>
      </div>
      {includeConsent && (
        <label className="checkbox">
          <input type="checkbox" name="consent" />
          <span>I agree to receive updates from 4th wall sec.</span>
        </label>
      )}
      <p id={messageId} className={`form-message ${messageClass}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
};

export default SignupForm;
