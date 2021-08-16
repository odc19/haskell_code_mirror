import {parser} from "./parser.js"
import {foldNodeProp, foldInside, indentNodeProp} from "@codemirror/language"
import {styleTags, tags as t} from "@codemirror/highlight"
import {LRLanguage} from "@codemirror/language"
import {LanguageSupport} from "@codemirror/language"

let parserWithMetadata = parser.configure({
  props: [
    styleTags({
      Comment: t.lineComment,
      Ncomment: t.blockComment,
    }),
    indentNodeProp.add({

    }),
    foldNodeProp.add({

    })
  ]
})

export const haskellLanguage = LRLanguage.define({
  parser: parserWithMetadata,
  languageData: {
    commentTokens: {line: "--"}
  }
})

export function haskell() {
  return new LanguageSupport(haskellLanguage, [])
}
