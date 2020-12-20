export const getLangByPhone = (phone: string) =>
  /\+39/.test(phone) ? "it" : "en";
