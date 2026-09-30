# Lazy Suzy concept: source and handoff log

Checked 30 September 2026. This is a private pitch concept, not an official Lazy Suzy site.

## Menu

| Data | Source | Status |
| --- | --- | --- |
| Names, descriptions, prices and dietary marks for 131 regular items, sides and add-ons in 13 sections | Menu photographs supplied in this conversation; no public URL | Transcribed into `src/constants/menu.constant.js`. The photographs contain multiple undated price versions; the higher-priced versions matching the first supplied page are used provisionally. Café confirmation is required before commercial launch. |
| Item source fields | `src/constants/menu-view.js` | Each rendered item has `category`, `sourceLabel`, `sourceUrl` (`null` for supplied photographs), and `checkedAt`. The older-photo macaroon entry is flagged `needsConfirmation`. |
| Christmas turkey set menu | Supplied photograph; no public URL | Stored in `menu.constant.js` as seasonal historical material and excluded from the regular `/shop` menu. Do not advertise without owner confirmation. |
| Menu availability cross-check | [Zomato](https://www.zomato.com/bangalore/lazy-suzy-indiranagar), [Swiggy Dineout](https://www.swiggy.com/restaurants/bangalore/indiranagar/lazy-suzy-23322/dineout) | These listings identify Lazy Suzy and show menu galleries, but the galleries did not expose a reliable full text transcription. They do not establish that the supplied photo menu is current or complete. |

**Missing confirmation:** Ask the café for its dated master menu, including whether pizza/calzone, risotto, additional sandwich and burger variants in older public menus are still sold. Ask for the complete lower edge of the current dessert page, especially items after Banana walnut teacake. Confirm all 131 regular item prices, tax treatment, dietary marks, and seasonal availability. Only then label `/shop` a current complete menu.

## Business details and actions

| Detail | Source | Use |
| --- | --- | --- |
| Address: No. 36, 4th Main Corner, 80 Feet Road, HAL 3rd Stage, Indiranagar, Bengaluru 560075 | [Swiggy Dineout](https://www.swiggy.com/restaurants/bangalore/indiranagar/lazy-suzy-23322/dineout), checked 30 September 2026 | Footer, directions |
| Phone: +91 80730 32246 | [Zomato](https://www.zomato.com/bangalore/lazy-suzy-indiranagar), checked 30 September 2026 | `tel:` link; confirm with café |
| Instagram handle: `@lazysuzyblr` | [Café Instagram](https://www.instagram.com/lazysuzyblr/), supplied by client | External link; Instagram content was not accessible for verification in this session |
| Reservations | [Swiggy Dineout](https://www.swiggy.com/restaurants/bangalore/indiranagar/lazy-suzy-23322/dineout), checked 30 September 2026 | External reservation link only; verify current availability before launch |

Opening hours are intentionally omitted because listing data differs and may change. No checkout, delivery promise, or on-site reservation flow is implemented.

## Reviews

Eight attributed excerpts were supplied by the client from Google reviews. Their wording is shortened for the cards. The [supplied Google business link](https://share.google/GTu2s9JeokFMzUWZt) opens the business listing, not an individual review. Direct review URLs and overall star ratings were unavailable, so neither is claimed. Recheck every excerpt and obtain direct links before public launch.

## Images and rights

| Asset | Origin | Use / rights status |
| --- | --- | --- |
| `public/lazy-suzy-logo.jpg`, `src/assets/ambience-images/*` | Supplied project assets | Café identity and ambience; supplied copies are only 200 × 200 px, so request originals. |
| `public/images/lazy-suzy-logo-transparent.png` | Built-in image edit of supplied logo, background-extraction prompt | Transparent source-colour variant. |
| `public/images/lazy-suzy-logo-dark-transparent.png` | Built-in image edit of the transparent logo, recolour prompt | Optional cream-and-yellow dark-surface variant; inspect/approve before using as an official mark. |
| `public/images/suzy-burger-source.jpg` | [Indulge Express](https://www.indulgexpress.com/food/food-bengaluru/2023/Mar/10/lazy-suzy-adds-an-array-of-new-dishes-to-their-european-menu-47622.html) | Temporary concept image; usage rights not granted. |
| `public/images/suzy-raspberry-hot-chocolate-source.jpg` | [Femina](https://www.femina.in/food/instant-fix/9-must-try-choco-filled-treats-from-south-india-for-world-chocolate-day-287366.html) | Temporary concept image; usage rights not granted. |
| `public/images/suzy-benedict-source.jpg` | [Zomato diner review gallery](https://www.zomato.com/bangalore/lazy-suzy-indiranagar/reviews) | Temporary concept image; usage rights not granted. |
| `public/images/suzy-pancakes-source.png` | [MouthShut](https://www.mouthshut.com/product-reviews/lazy-suzy-indiranagar-bangalore-reviews-925953577) | Temporary concept image; usage rights not granted. |
| `public/images/suzy-dessert-source.jpg` | [Indulge Express](https://www.indulgexpress.com/food/food-bengaluru/2023/Mar/10/lazy-suzy-adds-an-array-of-new-dishes-to-their-european-menu-47622.html) | Category / ambience image only, not labelled as a specific current menu item. Temporary concept image. |
| `public/images/suzy-table-source.jpg` | [District listing](https://www.district.in/dining/bangalore/lazy-suzy-indiranagar) | Temporary concept image; usage rights not granted. |
| `public/images/suzy-interior-source.jpg` | [Swiggy Dineout photos](https://www.swiggy.com/restaurants/lazy-suzy-indiranagar-indiranagar-23322/dineout/photos) | Temporary concept image; usage rights not granted. |
| `*-cutout.png` for burger, hot chocolate, Benedict and pancakes | Built-in image background extraction from the corresponding photographs | Concept cutouts. They preserve the photographed subject, but need café / photographer permission alongside the originals. |

**Image edit prompts:** The built-in image editor was asked to extract only the real burger; only the real dark ceramic hot chocolate cup; the full photographed Benedict plate; and the full photographed pancake plate, each with clean transparent alpha and no invented food. The logo prompts requested background removal without redesign, followed by a cream recolour of the dark strokes while keeping the yellow cat. All generated assets were copied into `public/images`.

Replace third-party images with café-approved originals or obtain written usage rights before commercial launch. The Instagram and `share.google` short links did not expose downloadable or verifiable image files here.

## Next phase

After the café supplies a dated master menu and approved photographs, connect an owner-managed menu editor and confirm whether the café wants direct ordering or a reservation integration. Keep Dineout and phone links until those flows are actually operational.
