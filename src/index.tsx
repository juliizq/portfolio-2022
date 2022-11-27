import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

// Languages
import globalEs from './translations/es/global.json'
import globalEn from './translations/en/global.json'
import globalFr from './translations/fr/global.json'

const language = localStorage.getItem('language')

i18next.init({
  interpolation: { escapeValue: false },
  lng: language ?? 'en',
  resources: {
    en: {
      global: globalEn
    },
    es: {
      global: globalEs
    },
    fr: {
      global: globalFr
    }
  }
}).catch((error) => {
  console.error(error)
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
