/** Form submissions (FormSubmit). Override with NEXT_PUBLIC_FORM_RECIPIENT in Vercel / .env.local for testing. */
export const FORM_RECIPIENT = process.env.NEXT_PUBLIC_FORM_RECIPIENT ?? "contact@goethos.us";

export function getFormSubmitAction() {
  const email = encodeURIComponent(FORM_RECIPIENT);
  return `https://formsubmit.co/${email}`;
}
