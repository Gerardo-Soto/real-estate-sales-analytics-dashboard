"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
} from "react";

import {
  translations,
} from "./translations";

import type {
  Language,
  TranslationSchema,
} from "./translations";


type LanguageContextType = {
  language: Language;
  setLanguage: (
    language: Language
  ) => void;
  t: TranslationSchema;
};


const LanguageContext =
  createContext<
    LanguageContextType | undefined
  >(undefined);


const LANGUAGE_STORAGE_KEY =
  "dashboard-language";

const LANGUAGE_CHANGE_EVENT =
  "dashboard-language-change";


function getLanguageSnapshot(): Language {
  const savedLanguage =
    localStorage.getItem(
      LANGUAGE_STORAGE_KEY
    );

  if (
    savedLanguage === "es" ||
    savedLanguage === "en"
  ) {
    return savedLanguage;
  }

  return "es";
}


function getServerLanguageSnapshot(): Language {
  return "es";
}


function subscribeToLanguage(
  callback: () => void
) {
  function handleStorageChange() {
    callback();
  }

  window.addEventListener(
    "storage",
    handleStorageChange
  );

  window.addEventListener(
    LANGUAGE_CHANGE_EVENT,
    handleStorageChange
  );

  return () => {
    window.removeEventListener(
      "storage",
      handleStorageChange
    );

    window.removeEventListener(
      LANGUAGE_CHANGE_EVENT,
      handleStorageChange
    );
  };
}


export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const language =
    useSyncExternalStore(
      subscribeToLanguage,
      getLanguageSnapshot,
      getServerLanguageSnapshot
    );


  function setLanguage(
    newLanguage: Language
  ) {
    localStorage.setItem(
      LANGUAGE_STORAGE_KEY,
      newLanguage
    );

    window.dispatchEvent(
      new Event(
        LANGUAGE_CHANGE_EVENT
      )
    );
  }


  const t =
    translations[language];


  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}


export function useLanguage() {
  const context =
    useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}