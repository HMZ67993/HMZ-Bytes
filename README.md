# HMZ-Bytes Website

Static bilingual website for the HMZ-Bytes Windows software collection. No build tools, package manager or backend are required.

## Structure

- `index.html` — page structure and SEO metadata.
- `data/products.js` — the product catalog: names, Gumroad URLs, current prices, availability, summaries, feature groups, image covers and product notes.
- `assets/css/site.css` — all visual design and responsive styling.
- `assets/js/site.js` — rendering, language switching, filters, product modal, video player and interactions.
- `assets/brand/` — brand logos and hero artwork.
- `assets/icons/` — application icons.
- `assets/screenshots/<product-id>/` — optional local screenshots for each product.
- `assets/videos/` — the local MP4 brand film and its poster.

## Add a product

1. Open `data/products.js`.
2. Add one object to `window.HMZ_CATALOG.products`.
3. Give it a unique `id`, name, category (`productivity` or `creative`), status (`live` or `soon`), exact Gumroad URL, icon path, cover URLs, price and bilingual text.
4. Add bilingual feature groups, audience and notes.
5. Upload the icon to `assets/icons/`. Optional screenshots go into `assets/screenshots/<product-id>/`.
6. Commit the changes. GitHub Pages deploys the static site.

## Update Gumroad information

The site is static; it does not call Gumroad at page-load time. When price, suggested amount, availability, product description or product URL changes on Gumroad, update the matching entry in `data/products.js` and commit it. The catalog was reviewed against the connected Gumroad creator account on 2026-11-12.

## Pricing display

Every currently published product uses Pay What You Want. The catalog records the minimum price and suggested amount separately. The suggested amount is optional; do not replace the minimum with it.

## Product details

Product cards open an accessible feature dialog. Product dialogs can be linked directly with hashes such as `#app/omni-calc-studio`.

## Local video

The brand film is loaded from `assets/videos/hmzbytes-intro.mp4` with the poster `assets/videos/hmzbytes-intro-poster.webp`. It is a native HTML5 video element; there is no YouTube embed.

## Deployment

The repository is published through GitHub Pages from the main branch. The site has no server-side dependencies.
