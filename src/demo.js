import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {haskell} from "haskell.js"

let demo = new EditorView({
  state: EditorState.create({
      extensions: [basicSetup, haskell()]
    }),
  parent: document.body
})
