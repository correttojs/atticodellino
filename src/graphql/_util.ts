export const getLangByPhone = (phone: string) =>
  /\+39/.test(phone) ? "it" : "en";

type Props = { phone?: string; hash?: string; id?: string };

export const faqLink = ({ phone, hash, id }: Props) =>
  `https://www.atticodellino.com/${getLangByPhone(phone)}/faq?hash=${hash}`;

export const registerLink = ({ phone, hash, id }: Props) =>
  `https://www.atticodellino.com/${getLangByPhone(
    phone
  )}/register?hash=${hash}`;
