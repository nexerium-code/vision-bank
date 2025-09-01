import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import arTranslation from "./ar.json";
import enTranslation from "./en.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en-US",
        supportedLngs: ["en-US", "ar-SA"],
        detection: {
            order: ["localStorage"],
            caches: ["localStorage"]
        },
        interpolation: {
            escapeValue: false
        },
        resources: {
            "en-US": { translation: enTranslation },
            "ar-SA": { translation: arTranslation }
        }
    });

if (i18n.isInitialized) {
    const direction = i18n.language.startsWith("ar") ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", i18n.language);
    document.documentElement.setAttribute("dir", direction);
}

i18n.on("languageChanged", (lng) => {
    const direction = lng.startsWith("ar") ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lng);
    document.documentElement.setAttribute("dir", direction);
});

export default i18n;
