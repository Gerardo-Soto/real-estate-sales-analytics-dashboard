"use client";

import {
  useLanguage,
} from "@/lib/i18n/LanguageContext";


export default function LanguageSwitcher() {
  const {
    language,
    setLanguage,
  } = useLanguage();


  return (
    <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">

      <button
        type="button"
        onClick={() =>
          setLanguage("es")
        }
        aria-pressed={
          language === "es"
        }
        className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
          language === "es"
            ? "bg-gray-900 text-white"
            : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
        }`}
      >
        ES
      </button>


      <button
        type="button"
        onClick={() =>
          setLanguage("en")
        }
        aria-pressed={
          language === "en"
        }
        className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
          language === "en"
            ? "bg-gray-900 text-white"
            : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
        }`}
      >
        EN
      </button>

    </div>
  );
}