# CURSOR MASTER HANDOFF — CRAVE WEBSITE VISUAL REFRESH

You are working on the existing CRAVE website. The current site structure and section flow have already been reviewed and approved by the founder. This is an evolution, NOT a rebuild.

## Primary objective
Upgrade the existing website into a distinctive, rebellious, premium-feeling confectionery brand experience while preserving the current information architecture, routes, section order, interactions and responsive behaviour unless a genuine issue requires a change.

## Brand platform
- Brand: CRAVE
- Tagline: INDULGENCE, UNFILTERED.
- Hero headline: FUCK ORDINARY. FEED YOUR CRAVINGS.
- Supporting line: BOLD FLAVOURS. NO RULES. ZERO APOLOGIES.
- Brand attitude: rebellious, cheeky, bold, cocky, playful, unapologetic.
- Avoid corporate, childish or generic candy-brand language.

## Visual system
Website palette:
- Electric Pink #FF006E
- Neon Purple #9700FF
- Acid Green #D6FF00
- Tangerine #FF7800
- Electric Cyan #00DDEB
- Electric Blue #3882FF
- Off White #F8FAFC
- After Dark #08080B

Use the website as a multicolour canvas. Different sections may have different dominant accent colours, but preserve a coherent dark foundation and consistent typography/logo treatment.

Typography:
- Display: Bebas Neue / Anton / bold condensed or expressive brush display already available in the project.
- Body/UI: Inter or Manrope.
- Do not use five different display fonts. Keep headlines bold and highly legible.
- Use the supplied logo SVG as a starter reference only; do not stretch it or rasterise it as the only logo.

## Asset folders
- `01-brand/` contains logo concept references and starter SVGs.
- `02-website/hero/` contains the abstract hero background.
- `02-website/section-graphics/` contains website visual reference boards.
- `03-products/packaging-concepts/` contains editable packaging front-panel concept SVGs.
- `03-products/product-image-references/` contains product-range visual references.
- `04-graphics/` contains reusable decorative SVG elements and patterns.
- `05-guides/brand-tokens.css` contains CSS variables.

## Required workflow
1. Inspect the existing codebase and identify framework, routing, current section components, styling approach, animation libraries and asset conventions.
2. Make a section inventory of the existing site. Preserve the order and content intent. Do not delete sections simply to simplify implementation.
3. Map each existing section to assets in this pack. Use reference boards for art direction only; never use a whole collage as a page image.
4. Use the standalone hero background as a background layer. Keep headline, nav, CTA and supporting copy as real HTML text.
5. Integrate `brand-tokens.css` into the existing token system without duplicating variables.
6. Use the category packaging SVGs as concept/mockup visuals only. Do not imply final approved products, flavours, ingredients, weights or nutrition facts.
7. Keep all text editable HTML. Do not bake website copy into images.
8. Use image object-fit, focal positions and responsive crops deliberately.
9. Preserve existing forms, navigation, product interactions and CTA destinations. Never fake successful waitlist submissions.
10. Keep decorative elements pointer-events:none and out of the accessibility tree where appropriate.
11. Respect `prefers-reduced-motion`. Keep animations performant with transform/opacity. Do not add a new animation dependency if one is already installed.
12. Ensure mobile layouts are intentionally composed, not merely scaled desktop layouts.

## Art direction
- Rebellious editorial confectionery meets underground streetwear campaign.
- Distressed paint, halftone, torn paper, dark grain, stickers and controlled visual chaos.
- Large, expressive headlines and bold colour blocks.
- Product photography should be the hero of product sections.
- Floating one-word typography may be used sparingly around the hero: UNHINGED, TROUBLE, NAUGHTY, NO RULES, NOT SORRY, ZERO CHILL, SWEET SIN, OOPS!, GIMME MORE.
- Keep the hero headline dominant and readable.
- Avoid clutter that competes with product information or calls to action.

## Packaging colour families (conceptual)
- Lollipops: Electric Pink + Acid Green
- Gummies: Neon Purple + Electric Cyan
- Chocolates: Tangerine + Neon Purple
- Hard Candies: Electric Cyan + Neon Purple
Keep the CRAVE wordmark consistent across all categories. Treat flavour names in the SVG mockups as placeholders, not approved SKU names.

## Copy architecture
- Hero: FUCK ORDINARY. FEED YOUR CRAVINGS.
- Tagline: INDULGENCE, UNFILTERED.
- Brand attitude: GOOD TASTE. BAD ATTITUDE.
- Brand philosophy: WE WERE NEVER MADE TO BEHAVE.
- Product discovery: PICK YOUR KIND OF TROUBLE.
- Drops: LIMITED DROPS. MAXIMUM CRAVE.
- Community: TROUBLE LOVES COMPANY.

Do not add unsupported claims such as sugar-free, functional, healthy, organic, vegan, natural, specific ingredients, nutritional values or product benefits. Do not invent launch dates, prices, availability, shipping policies or testimonials. Use clearly marked placeholders where factual product data is missing.

## Quality bar
- Keep the existing site's approved structure.
- No generic template look.
- No random gradients on every element.
- No unreadably small text.
- No distorted logos.
- No broken or invented image paths.
- No horizontal overflow.
- Check desktop, tablet and mobile.
- Check contrast and keyboard focus.
- Run the project's existing lint/build/test commands and fix regressions.

## Deliverables
After implementation, report:
1. Existing sections preserved.
2. Components changed or added.
3. Assets used and any missing assets.
4. Responsive and accessibility checks completed.
5. Build/test results.
6. Any content/product facts still requiring founder confirmation.

Before coding, inspect the repository and summarize the current architecture. Then implement incrementally.
