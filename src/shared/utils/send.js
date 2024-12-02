import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_gepvg04';
const PUBLIC_KEY = 'lgWFGyt9_p0WJdd1J';
const TEMPLATE_ID = 'template_0ppt6yf';
export async function sendEmail(templateParams) {
  return emailjs
    .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .catch((err) => {
      console.error("Can't send email!");
      console.error(err);
    });
}
