import { create } from "zustand";
import { defaultJavaScriptReact } from "../../components/editor/value/javascriptreact";

interface LangState {
  language: string;
}

export const useLangStore = create((set) => ({
  language: defaultJavaScriptReact,
  chooseLanguage: (lang: string) =>
    set((state: LangState) => ({ language: lang })),
}));
