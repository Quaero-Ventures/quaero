"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "../../app/memora/memora.module.css";
import {
  captureMemoraEvent,
  getMemoraAttribution,
  type MemoraAttribution,
} from "./memora-analytics";
import { trackMetaLead } from "./meta-pixel";

const MEMORA_FORM_ENDPOINT = process.env.NEXT_PUBLIC_MEMORA_FORM_ENDPOINT;

const FIELD_LIMITS = {
  name: 80,
  email: 150,
  message: 180,
} as const;

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;

type LeadSubmitResponse = {
  success?: boolean;
  duplicate?: boolean;
  error?: string;
};

const EMPTY_VALUES: FormValues = {
  name: "",
  email: "",
  message: "",
};

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const email = values.email.trim();

  if (!values.name.trim()) errors.name = "Informe seu nome.";
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Informe um e-mail válido.";
  }
  return errors;
}

export function MemoraForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [website, setWebsite] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const inputRefs = useRef<Partial<Record<FieldName, HTMLInputElement | HTMLTextAreaElement>>>({});
  const attributionRef = useRef<MemoraAttribution | null>(null);
  const formViewedRef = useRef(false);
  const formStartedRef = useRef(false);
  const submittingRef = useRef(false);
  const leadTrackedRef = useRef(false);

  useEffect(() => {
    attributionRef.current = getMemoraAttribution();

    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || formViewedRef.current) return;
        formViewedRef.current = true;
        captureMemoraEvent("memora_form_viewed", attributionRef.current ?? getMemoraAttribution());
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const field = event.target.name as FieldName;
    const value = event.target.value.slice(0, FIELD_LIMITS[field]);

    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitError("");

    if (!formStartedRef.current) {
      formStartedRef.current = true;
      captureMemoraEvent("memora_form_started", attributionRef.current ?? getMemoraAttribution());
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;

    const validationErrors = validateForm(values);
    setErrors(validationErrors);
    setSubmitError("");

    const firstInvalidField = (Object.keys(FIELD_LIMITS) as FieldName[]).find(
      (field) => validationErrors[field],
    );
    if (firstInvalidField) {
      inputRefs.current[firstInvalidField]?.focus();
      return;
    }

    submittingRef.current = true;
    setIsSubmitting(true);
    const attribution = attributionRef.current ?? getMemoraAttribution();

    try {
      if (!MEMORA_FORM_ENDPOINT) {
        throw new Error("Memora form endpoint is not configured.");
      }

      const response = await fetch(MEMORA_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          project: "memora",
          funnel: "father_day_card",
          name: values.name.trim(),
          email: values.email.trim(),
          phone: null,
          message: values.message.trim(),
          consent: true,
          utm_source: attribution.utm_source,
          utm_medium: attribution.utm_medium,
          utm_campaign: attribution.utm_campaign,
          utm_content: attribution.utm_content,
          utm_term: attribution.utm_term,
          fbclid: attribution.fbclid,
          source_url: window.location.href,
          referrer: attribution.referrer,
          metadata: {
            submitted_at: new Date().toISOString(),
            user_agent: navigator.userAgent,
          },
          website,
        }),
      });

      const result = await response.json().catch(() => null) as LeadSubmitResponse | null;

      if (!response.ok || result?.success !== true) {
        const message = response.status === 429
          ? "Muitas tentativas em pouco tempo. Aguarde alguns minutos e tente novamente."
          : "Não foi possível enviar sua mensagem. Tente novamente em alguns instantes.";

        setSubmitError(message);
        captureMemoraEvent("memora_form_submission_failed", attribution, {
          http_status: response.status,
        });
        window.requestAnimationFrame(() => errorRef.current?.focus());
        return;
      }

      if (result.duplicate !== true) {
        captureMemoraEvent("memora_form_submitted", attribution, {
          http_status: response.status,
        });
        if (!leadTrackedRef.current) {
          trackMetaLead();
          leadTrackedRef.current = true;
        }
      }
      setValues(EMPTY_VALUES);
      setWebsite("");
      setErrors({});
      setIsSuccess(true);
      window.requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setSubmitError(
        "Não foi possível enviar sua mensagem. Tente novamente em alguns instantes.",
      );
      captureMemoraEvent("memora_form_submission_failed", attribution);
      window.requestAnimationFrame(() => errorRef.current?.focus());
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="personalizar"
      ref={sectionRef}
      className={styles.formSection}
      aria-labelledby="form-title"
    >
      <div className={styles.form}>
        <h2 id="form-title" className={styles.formTitle}>
          Cadastre seu interesse
        </h2>
        <p className={styles.formIntro}>
          Deixe seu contato. Depois pediremos a foto e confirmaremos os detalhes
          com você, sem compromisso.
        </p>

        {isSuccess ? (
          <div ref={successRef} className={styles.successMessage} role="status" tabIndex={-1}>
            <h3>Cadastro recebido.</h3>
            <p>Enviaremos por e-mail os próximos passos da primeira edição.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.srOnly} aria-hidden="true">
              <label htmlFor="memora-website">Website</label>
              <input
                id="memora-website"
                name="website"
                type="text"
                autoComplete="off"
                tabIndex={-1}
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
            </div>
            <div className={styles.fields}>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Seu nome</span>
                <input
                  ref={(element) => { inputRefs.current.name = element ?? undefined; }}
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Como podemos chamar você?"
                  value={values.name}
                  onChange={handleChange}
                  maxLength={FIELD_LIMITS.name}
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <small id="name-error" className={styles.fieldError}>{errors.name}</small>}
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>E-mail</span>
                <input
                  ref={(element) => { inputRefs.current.email = element ?? undefined; }}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="voce@exemplo.com"
                  value={values.email}
                  onChange={handleChange}
                  maxLength={FIELD_LIMITS.email}
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <small id="email-error" className={styles.fieldError}>{errors.email}</small>}
              </label>
              <label className={`${styles.field} ${styles.messageField}`}>
                <span className={styles.fieldLabel}>
                  O que você imagina gravar? <small>(opcional)</small>
                </span>
                <textarea
                  ref={(element) => { inputRefs.current.message = element ?? undefined; }}
                  name="message"
                  placeholder="Uma mensagem, assinatura ou desenho..."
                  value={values.message}
                  onChange={handleChange}
                  maxLength={FIELD_LIMITS.message}
                  rows={3}
                  aria-describedby="message-count"
                />
                <span id="message-count" className={styles.counter}>{values.message.length}/{FIELD_LIMITS.message}</span>
              </label>
            </div>
            <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Quero personalizar"}
            </button>
            {isSubmitting && <span className={styles.srOnly} role="status">Enviando formulário.</span>}
            {submitError && (
              <p
                ref={errorRef}
                className={styles.submitError}
                role="alert"
                tabIndex={-1}
              >
                {submitError}
              </p>
            )}
          </form>
        )}

        <p className={styles.privacyNote}>
          Este é um cadastro de interesse. Depois entraremos em contato por e-mail
          para solicitar a foto da mensagem, assinatura ou desenho e confirmar todos
          os detalhes antes de qualquer cobrança.
        </p>
      </div>
    </section>
  );
}
