import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import lngUz from './Translation/uz.json'
import lngRu from './Translation/ru.json'

const resources = {

    uz: {
        translation: lngUz
    },
    ru: {
        translation: lngRu
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru",
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false
        }
    });
export default i18n