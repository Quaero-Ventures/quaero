export const PAYMENT_URL = "#";

export const CHECKOUT_EVENT = "primeira_proposta_pj_checkout_click";

export function isExternalPaymentUrl(url: string) {
  return /^https?:\/\//i.test(url);
}
