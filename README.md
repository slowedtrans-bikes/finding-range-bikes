# Ridgeline Rebuilds — bike site

A simple, free-to-host site with two pages of listings:

- **index.html** — bikes currently for sale
- **archive.html** — bikes you've built and sold in the past
- **about.html** — your story + contact links

Everything is generated from one file, **bikes.js** — you never need to
touch the HTML to add, edit, or remove a bike.

## 1. Change the shop name

I used a placeholder name, "Ridgeline Rebuilds." Find-and-replace it
across `index.html`, `archive.html`, and `about.html` (search for
`Ridgeline Rebuilds`). Also update:

- The `<title>` and `meta description` tags at the top of each page
- The `mailto:you@example.com` link in `about.html`
- The Facebook / eBay / Pinkbike links in the footer of each page (and
  in `bikes.js`, per-bike `listingLinks`) — point these at your actual
  profile/listing URLs

## 2. Add your real photos

Drop your bike photos into the `images` folder. I've filled it with
labeled placeholder images so you can see how the layout looks before
you swap them — replace them freely, and use whatever file names make
sense to you (just keep the paths in `bikes.js` matching).

A few photo tips since this design is very photo-forward:
- Use landscape (wider-than-tall) photos where possible — the hero and
  card images crop to fill their frame, so a horizontal shot avoids
  losing the front or rear wheel.
- 1600px wide is plenty; there's no need for huge multi-megabyte files.

## 3. Add or edit a listing

Open **bikes.js**. Each bike is one block like this:

```js
{
  id: "hightower-2019",          // unique, no spaces — used internally
  status: "for-sale",            // "for-sale" or "sold"
  year: 2019,
  make: "Santa Cruz",
  model: "Hightower",
  category: "Trail",             // powers the filter buttons
  price: 2650,
  size: "Large",
  frameMaterial: "Carbon (CC)",
  wheelSize: "29\"",
  suspension: "150mm / 135mm",
  drivetrain: "SRAM GX Eagle 12-speed",
  condition: "Excellent — light trail wear, fresh brake pads",
  excerpt: "One or two sentences for the big featured card.",
  description: "The longer write-up shown in the detail popup.",
  photos: ["images/your-photo-1.jpg", "images/your-photo-2.jpg"],
  listingLinks: [
    { label: "View on Facebook Marketplace", url: "https://..." }
  ]
}
```

**To sell a bike:** find it in `bikes.js`, change `status: "for-sale"`
to `status: "sold"`, and add a `soldDate: "March 2026"` line. It will
automatically move from the homepage to the archive.

**To add a brand-new bike:** copy an entire `{ ... }` block, paste it
at the top of the `bikes` array (right after `const bikes = [`), and
change the values. Don't forget the comma between blocks.

## 4. Preview it locally

You can just double-click `index.html` to open it in a browser, but
some browsers block local file loading of `bikes.js`. If a page looks
empty, run a tiny local server instead — from this folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000` in your browser.

## 5. Host it for free

**Option A — Netlify (easiest):**
1. Go to [netlify.com](https://netlify.com) and sign up (free).
2. Drag this whole folder onto the Netlify dashboard where it says
   "Deploy manually" / drag-and-drop.
3. You'll get a live URL immediately. You can add a custom domain
   later under Site settings.

**Option B — GitHub Pages:**
1. Create a new GitHub repository and upload all these files to it.
2. Go to the repo's Settings → Pages.
3. Under "Source," choose the `main` branch and `/ (root)` folder,
   then save.
4. Your site will be live at `https://yourusername.github.io/reponame`
   within a minute or two.

Either way, whenever you edit `bikes.js` or add photos, just re-upload
(GitHub Pages) or re-drag the folder (Netlify) to update the live site.

## Design notes

Typography is **Fraunces** (headlines) + **Inter** (everything else),
loaded from Google Fonts — both free. The palette is a warm paper
background with near-black text and a single rust-red accent, kept
deliberately quiet so the bike photos do the talking. Cards use large
photos, thin hairline dividers, and small type — no boxes or shadows —
which is the same restrained, photo-first language as sites like The
Radavist.
