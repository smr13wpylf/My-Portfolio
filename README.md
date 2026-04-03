# Shayly McDonnell — Personal Portfolio Website

**Live at:** [Deploy via Publish Tab]

---

## Project Overview

A polished personal portfolio and brand site for **Shayly McDonnell** — writer, publisher, archival researcher, intuitive analyst, and spiritual-cultural archivist. Founder of Rebel Archives.

Aesthetic: Dark · Editorial · Mythic · Sophisticated  
Not witchy-woo, not corporate. Think literary meets mythic — ink-dark backgrounds, warm gold accents, Cormorant Garamond serif display type, and generous architectural spacing.

---

## ✅ Completed Features

### Navigation
- Fixed top navigation with scroll-triggered frosted glass effect
- Active section highlighting via IntersectionObserver
- Mobile hamburger menu with animated toggle
- Smooth anchor scroll with nav offset compensation

### Hero Section
- Large typographic name display with italic gold accent
- Parallax background text ("REBEL ARCHIVES")
- Radial glow background mesh
- Typing effect on subtitle tagline
- Soul blueprint identifiers (HD type, incarnation cross, life path, placements)
- Dual CTA buttons

### Marquee
- Continuously scrolling keyword ticker (projects, modalities)
- Pauses on hover

### About Section
- Two-column grid: portrait placeholder (for photo upload) + bio copy
- Full biographical text drawn from actual writing samples
- Tags for specializations
- Styled pull quote

### Projects Section (6 Cards)
1. **Rebel Archives** — Flagship (featured, full-width)
2. **Soul Blueprint** — Book in progress
3. **Rebel Alchemist** — Book in progress
4. **The Infinite Weight of Mediocrity** — Book in progress
5. **Christians vs. New Age** — Research ongoing
6. **New Earth Bible** — Framework ongoing

### Writing / Essays Section (5 Essays)
- Featured large essay: *The Thing They Criticized Was Always the Design*
- 4 supporting essays covering shadow work, spirituality, cultural critique, faith, meaning-making
- Subscribe CTA linking to newsletter

### Method & Philosophy Section
- 5 frameworks: Astrology, Human Design, Gene Keys, Numerology, Shadow Work
- 5 core principles (truth before comfort, process over performance, etc.)
- Soul Blueprint At a Glance card (all key placements)

### Statement Section
- Full-page pull quote from *My Intentions* document

### Contact / CTA Section
- Three service offerings: Writing/Editorial, Soul Blueprint Analysis, Consulting/Advisory
- Contact form with all fields (name, email, inquiry type, message)
- Newsletter subscription widget
- Form stores submissions to localStorage

### Footer
- Brand + tagline + social icons
- Navigation links
- Project links
- Incarnation cross gates display (33 · 19 · 2 · 1)
- Copyright

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background (primary) | `#0d0d0f` |
| Background (deep) | `#080809` |
| Gold (accent) | `#c9a84c` |
| Cream (text) | `#f5f0e8` |
| Mist (secondary text) | `#9fa0a8` |
| Display font | Cormorant Garamond / Playfair Display |
| Body font | Inter |

---

## 📁 File Structure

```
index.html          ← Main single-page portfolio
css/
  style.css         ← All styles (reset, components, responsive)
js/
  main.js           ← Navigation, scroll, animations, forms, cursor
README.md
```

---

## 🔧 Customization Notes

### To Add a Real Photo
Replace the `.about__portrait-placeholder` div with:
```html
<img src="images/shayly-portrait.jpg" alt="Shayly McDonnell" class="about__portrait-img" />
```
Then add to CSS: `.about__portrait-img { width: 100%; border-radius: 2px; }`

### To Link Social Media
Update footer anchor tags with real URLs:
- Substack link
- Instagram handle
- Twitter/X handle

### To Connect a Real Form Backend
Replace the `contactForm` submit handler in `js/main.js` with a fetch call to your form endpoint (Formspree, Netlify Forms, etc.)

### To Add Substack Integration
Replace the newsletter form action with your Substack embed URL.

### To Add Real Essay Links
Update `essay-card__read` anchor tags with actual Substack post URLs.

---

## 🚀 Features Not Yet Implemented

- [ ] Real photo upload / portrait
- [ ] Live social media links
- [ ] Real form submission backend (Formspree / Netlify Forms)
- [ ] Substack embed for newsletter
- [ ] Individual essay/project detail pages
- [ ] Blog/essay listing with search and filter
- [ ] Booking/calendar integration for consulting calls
- [ ] Substack post feed via RSS (dynamic)
- [ ] Dark/light mode toggle (optional)
- [ ] Analytics integration

---

## 📋 Recommended Next Steps

1. **Add your portrait photo** — the placeholder is ready for a real image
2. **Connect form to Formspree** — free tier works, takes 2 minutes
3. **Add real social links** — especially Substack
4. **Write 1–2 actual essays** for the writing section and link them
5. **Deploy via Publish Tab** to get a live URL
6. **Share the URL** in your Substack bio, social profiles, and consulting materials

---

*Built for Shayly McDonnell · Rebel Archives · 2026*
