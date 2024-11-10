import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-http-backend";

// const getCurrentHost = 
//     import.meta.env.MODE === "development" 
//     ? "http://localhost:3000" 
//     : "LINK";

i18n
    .use(i18nBackend)
    .use(initReactI18next)
    .init({
        lng: "nl",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: `http://localhost:3000/i18n/{{lng}}.json`,
        },
    });

    // `${getCurrentHost}`

export default i18n;