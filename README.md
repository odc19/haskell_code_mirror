CodeMirror 6 mode for haskell language - GSoC 2021 

This is a Haskell grammar for the [lezer](https://lezer.codemirror.net/) parser system. 
The project was forked from the JSON grammar (https://github.com/lezer-parser/json) for lezer,
so that we could get the configuration.

What is done

- https://github.com/odc19/haskell_code_mirror/compare/cdb8870..HEAD
- Wrote a Haskell grammar based on the 2010 Haskell report
- Builded a parser from the haskell grammar
- Started to work on a CodeMirror 6 mode

TO BE DONE:

- Make a CodeMirror mode
    Lezer grammar is one input into a CodeMirror mode
    Also needs a mode definition in JavaScript
    * https://codemirror.net/6/examples/lang-package/
    * Highlighting tags: https://codemirror.net/6/docs/ref/#highlight.tags

- Handle layout
    Current grammar requires explicit {, }, and ;
    See Layout spec

- [DRAFT] Capitalize the right productions
    Reference: all types and constructors from https://hackage.haskell.org/package/template-haskell-2.17.0.0/docs/
    * Language-Haskell-TH-Syntax.html
    * Comments
    * Qmodid
    * Anything else that you’d want syntax highlighting for
    * Maybe fewer of the exp rules (Lexp, Infixexp, etc)

- Unit tests for the grammar
- Documentation
- Description of rules
    (low priority) Examples of major rules

REFERENCE:

- https://lezer.codemirror.net/docs/guide/
- https://codemirror.net/6/examples/lang-package/
- https://codemirror.net/6/examples/bundle/
- https://www.haskell.org/onlinereport/haskell2010/haskellch1.html#tailhaskellch1.html
