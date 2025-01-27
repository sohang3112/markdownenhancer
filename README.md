# markdownenhancer README
VS Code extension: Misc Markdown enhancements.

**CHECK:** instead of new extension, is this better done using [Markdown Preview Github Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles) extension??

## Features
TODO: add screenshots

## Requirements
- Requires Markdown Preview (which should already be there in VS Code). TODO: this should be here or not?
- Partial/InProgress checkbox requires this setting to be enabled in VS Code Markdown Preview: *allow-insecure-local-content*.

## Extension Settings
TODO: no settings currently, maybe add any?

## Known Issues
TODO: add any issue?

Developer: Inspect Editor Tokens and Scopes  ---> VS Code command to debug which textmate area a piece of text comes under.
highlight any code, run this command --> found out about markup.fenced_code.block.markdown this way only (used below)

THIS WORKS (put in settings.json):
"editor.tokenColorCustomizations": {
    "textMateRules": [
        {
            "scope": [
                // Style codeblocks without a language in markdown (this doesn't affect language-specific codeblocks, as their syntax highlighting overrides this style).
                // in language-specific codeblocks, only the language itself is affected by this
                "markup.fenced_code.block.markdown"       
            ],
            "settings": {
                "foreground": "#6A9955"    // this is the green color used in VS Code for comments
            }
        }
    ]
}

<!--
VS Code Extension Guidelines: https://code.visualstudio.com/api/references/extension-guidelines
-->

```
HELLO
WORLD
```

language	markdown
standard token type	Other
foreground	#CCCCCC
background	#1F1F1F
contrast ratio	10.26
textmate scopes	punctuation.definition.markdown
markup.fenced_code.block.markdown
text.html.markdown
foreground	No theme selector

```javascript
console.log("Hello World!");
```

language	markdown
standard token type	Other
foreground	#CCCCCC
background	#1F1F1F
contrast ratio	10.26
textmate scopes	punctuation.definition.markdown
markup.fenced_code.block.markdown
text.html.markdown
foreground	No theme selector