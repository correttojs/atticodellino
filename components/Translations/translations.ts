const t = (en: string, it: string) => ({ it, en });

export const Translations = {
  SPACE: t("The space", "Lo spazio"),
  NEIGHBORHOOD: t("Neighborhood", "Quartiere"),
  OTHER_THINGS: t("Other things to note", "Altre cose da tenere a mente"),
  AMENITIES: t("Amenities", "Servizi"),
  LOADING: t("Loading...", "Loading..."),
  ERROR: t(
    "An error has occurred. Please try again",
    "C'è stato un errore. Per favore riprova"
  ),
  BOOK: t("Book", "Prenota"),
  BOOK_RESPONSE: t(
    "We will send you a response soon.",
    "Ti invieremo presto una risposta"
  ),
  REGISTER: t("Register", "Registrazione"),
  REVIEWS: t("Reviews", "Recensioni"),
  THANKYOU: t(
    "Thank you [name] [lastName]. You will receive a confirmation email soon.",
    "Grazie [name] [lastName]. Riceverai presto un'email di conferma"
  ),
  CODE: t("The apartment code [code]", "Il codice dell'appartamento è [code]"),
  RERAD_MORE: t("Read more...", "Leggi ancora..."),
  HIDE: t("Hide...", "Nascondi..."),
  GUEST_ACCESS: t("Guest access", "Accesso ospiti"),
  HOST: t("Lino", "Lino"),
  HOUSE_RULES: t("House rules", "Regole della casa"),
  TRANSIT: t("Mobility services", "Mobilità"),
  GUESTS: t("[n] guests", "[n] ospiti"),
  BEDROOM: t("[n] bedroom", "[n] stanza"),
  BED: t("[n] bed", "[n] letto"),
  BATH: t("[n] bath", "[n] bagno"),
  ALSO: t("Also at [c]", "Anche a [c]"),
} as const;

export const LOCALES = {
  en: "en",
  it: "it",
  de: "de",
};

export const ALL_LOCALES = Object.keys(LOCALES);
