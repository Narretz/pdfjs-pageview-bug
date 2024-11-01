pdfjs-dist bug with importing PDFPageView (in a webpack context)

Steps:

run `npm run dev:webpack`

Go to localhost:8080 (or whatever port it is)

Look at the console, and see

Uncaught TypeError: globalThis.pdfjsLib is undefined
    mjs pdf_viewer.mjs:1757
    Webpack 6
        __webpack_require__
        fn
        ts
        __webpack_require__
        <anonymous>
        <anonymous>
pdf_viewer.mjs:1757:2
