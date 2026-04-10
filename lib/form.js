/** Form submissions (FormSubmit). Change via .env when switching to contact@goethos.us */
export const FORM_RECIPIENT =
  process.env.NEXT_PUBLIC_FORM_RECIPIENT ?? "saikrishnareddypoluri@gmail.com";

export function getFormSubmitAction() {
  const email = encodeURIComponent(FORM_RECIPIENT);
  return `https://formsubmit.co/${email}`;
}
