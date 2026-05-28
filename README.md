# anaselimam.com

Personal site of Anas Elimam — founder of LEOMAX, based in Riyadh.

## Stack

- Static HTML / CSS, no framework
- Google Fonts: Cormorant Garamond, EB Garamond, Inter
- Deployed via GitHub Pages

## Identity

**Aesthetic:** Old Money — FT Weekend × Aman Resorts. Cream paper, serif
typography, generous margins, burgundy accent reserved for emphasis.

**Palette:**
- Bone background `#FAF8F3`
- Ink body `#2A2622`
- Deep navy headings `#0A1628`
- Burgundy accent `#722F37`
- Stone hairlines `#A8A29E`

**Voice:** Executive on the homepage. Editorial / personal essay in Notes.
Restraint over performance. The personal site uses burgundy; LEOMAX
(the company) stays strictly monochrome.

## Structure

```
/
├── index.html              ← Homepage (hero, bio, currently, recent notes, contact)
├── notes.html              ← Essays index ("Notes")
├── essay-*.html            ← Individual essays
├── styles.css              ← All styles
└── CNAME                   ← anaselimam.com (once registered)
```

## Adding a new essay

1. Copy `essay-uber-ai-costs.html` as a template
2. Update `<title>`, `<meta description>`, `<link canonical>`,
   OG tags, JSON-LD `headline` and `datePublished`
3. Replace the article body
4. Add a new `<li>` at the top of `notes.html` and `index.html` recent list

## Deployment

GitHub Pages. Pushes to `main` deploy automatically.

When `anaselimam.com` is registered, point the apex `A` records to
GitHub Pages IPs and add `CNAME` file with the domain.
