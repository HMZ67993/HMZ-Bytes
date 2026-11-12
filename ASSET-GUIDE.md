# HMZ-Bytes Website — Asset Upload Guide

Upload files using the paths and names below. The website already references these locations.

## Brand identity — assets/brand/

| File | Usage |
|---|---|
| `hmz-bytes-logo.png` | Main logo and browser icon (favicon) |
| `hmz-bytes-logo-white.png` | White logo for dark navigation/footer backgrounds |
| `hmz-bytes-hero.webp` | Main brand artwork used in the hero background |

## Application icons — assets/icons/

- `pdf-toolkit-pro.png`
- `omni-calc-studio.png`
- `screencast-pro.png`
- `image-toolkit-pro.png`
- `smart-file-hub.png`
- `video-studio.png`

The current icons are already present in the repository. Recommended source dimensions are 512×512 or 1024×1024.

## Optional product screenshots — assets/screenshots/

Each folder maps to the product ID used in `data/products.js`:

| Product | Folder |
|---|---|
| PDF Toolkit Pro | `assets/screenshots/pdf-toolkit-pro/` |
| OmniCalc Studio | `assets/screenshots/omni-calc-studio/` |
| ScreenCast Pro | `assets/screenshots/screencast-pro/` |
| Image Toolkit Pro | `assets/screenshots/image-toolkit-pro/` |
| HMZ Video Studio Pro | `assets/screenshots/hmz-video-studio-pro/` (or update the product's screenshotDir) |
| Smart File Hub | `assets/screenshots/smart-file-hub/` |

Suggested names: `01-main.webp`, `02-workspace.webp`, `03-feature-1.webp`, `04-feature-2.webp`, `05-settings.webp`.

The current product cards and detail galleries use the published Gumroad cover images. These local screenshots are optional additional material; when adding them, update the relevant product's `cover` or screenshot data in `data/products.js` as needed.

Recommended screenshot size: 1600×900 or a similar 16:9 ratio. Use clear captures of the real app UI.

## Local brand video — assets/videos/

- `hmzbytes-intro.mp4` — the original video, played directly in the browser with HTML5 video.
- `hmzbytes-intro-poster.webp` — optional preview image shown before playback.

Recommended encoding: MP4 / H.264 video / AAC audio, 1920×1080 or 1280×720. Keep the file as small as practical for fast loading. GitHub's browser upload limit is usually 25 MiB per file; regular Git rejects files above 100 MiB. Git LFS files should not be used as GitHub Pages site assets.

## Adding another product

Add one product object to `data/products.js` rather than editing the card layout or application JavaScript. Use a unique lowercase kebab-case product ID, a matching icon path, bilingual copy, category, published status, exact Gumroad URL and the current minimum/suggested price. A product marked `soon` will not display a purchase button.

## Current repository assets

Brand logo, white logo, hero artwork, all six app icons, local MP4 video and video poster have already been uploaded. Product-specific desktop screenshots have not yet been uploaded.
