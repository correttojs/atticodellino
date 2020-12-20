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
  THANKYOU: t("Thank you [name]", "Grazie [name]"),
  THANKYOU_CONFIRMATION: t(
    "You will receive a confirmation sms soon.",
    "Riceverai presto un di conferma"
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
  ALSO: t("Have a look @[c]", "Dai un'occhiata @[c]"),
  PRIVACY: t("Privacy policy", "Informativa Privacy"),
  COOKIES: t(
    "This website uses cookies to enhance the user experience.",
    "Questo sito utilizza i cookies per migliorare l'esperienza dell'utente"
  ),
  CHECKIN: t("Check-in", "Check-in"),
  CHECKOUT: t("Check-out", "Check-out"),
  GUEST: t("Guest", "Ospite"),
  FIRST_NAME: t("First Name", "Nome"),
  LAST_NAME: t("Last Name", "Cognome"),
  DOC_TYPE: t("Document type", "Tipo di Documento"),
  DOC_NUMBER: t("Document Number", "Numero di Documento"),
  DOC_PLACE: t("Place of issue (if applicable)", "Emesso a (se presente)"),
  BIRTH_DATE: t("Date of Birth", "Data di nascita"),
  BROWSE_CALENDAR: t("Browse calendar", "Sfoglia il calendario"),
  NATIONALITY: t("Nationality", "Nazionalità"),
  PLACE_BIRTH: t("Place of birth", "Luogo di nascita"),
  UPLOAD_DOC: t("Upload your document", "Carica il tuo documento"),
  SUBMIT: t("Submit", "Invia"),
  BROWSE_FILE: t("Browse file", "Sfoglia file"),
} as const;
