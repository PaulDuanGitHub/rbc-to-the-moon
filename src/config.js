import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import tran_en from "./en.json";
import tran_fr from "./fr.json";
import tran_ar from "./ar.json";
import tran_es from "./es.json";
import tran_ko from "./ko.json";
import tran_ta from "./ta.json";
import tran_tr from "./tr.json";
import tran_zh from "./zh.json";

const resources = {
    en: {
        translation: tran_en,
    },
    fr: {
        translation: tran_fr,
    },
    ar: {
        translation: tran_ar,
    },
    es: {
        translation: tran_es,
    },
    ko: {
        translation: tran_ko,
    },
    ta: {
        translation: tran_ta,
    },
    tr: {
        translation: tran_tr,
    },
    zh: {
        translation: tran_zh,
    }
};

const DETECTION_OPTIONS = {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
};

i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        detection: DETECTION_OPTIONS,
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;