> Historical design reference: identity examples and route instructions below describe the original handoff. Current Joyal Varghese content lives in src/content/. See README.md for the implemented six-page structure; the current font is Kalam.

# Content input: fill this, I'll wire it into the site

Fill whatever you can. Leave `?` where you don't know. Anything you skip, I'll fall
back to the neobrutalism data or drop the field. Don't reformat, keep the headings.

---

## 1. PROFILE / BASICS

```
Full name:              ASHWIN K V
Display name:           Ashwin KV
Headline (LinkedIn):    ?
Location:               Trivandrum, Kerala, India?
Current status:         (pick: open to work / open to freelance / not looking / hiring)
Short bio (2-3 lines):  ?
Pronouns (optional):    ?
```

### Contact links: paste real URLs
```
Email:      ?  (innovationsoctane@gmail.com: is this the one to publish, or a personal one?)
GitHub:     https://github.com/dreamographer
LinkedIn:   https://www.linkedin.com/in/ashwin-kv/
X/Twitter:  https://x.com/Dreamographer_   (still active?)
Instagram:  https://www.instagram.com/dreamographer_/  (include on site? y/n)
Website:    ashwinkv.vercel.app  (keep pointing here, or will simple portfolio replace it?)
Resume PDF: ?
Other:      ?
```

### Photo
```
Which photo for the hero cutout?  (current one is an AI-generated ChatGPT image)
Caption under photo:              ?
```

---

## 2. EXPERIENCE: one block per role, newest first

Copy this block per job. **Dates matter**: the neobrutalism data has broken/overlapping
ranges (`Dec 2024 - Aug 2024` reversed, ELT + Finanshels overlapping), so give me exact months.

```
Company:        Octane Innovations
Title:          Co-founder (+ what else: engineering lead? CTO?)
Type:           full-time / part-time / self-employed / contract
Start:          MMM YYYY
End:            Present  (or MMM YYYY)
Location:       city + remote/hybrid/onsite
What you do:    3-5 bullets. Concrete. What shipped, what scale, what tech.
                -
                -
                -
```

Roles I already have (correct/complete them, don't retype if right):

```
1. ELT Global - Senior Frontend Engineer      Aug 2024? - ?        <- exact dates?
2. ELT Global - Frontend Engineer             Dec 2024 - Aug 2024  <- BROKEN, fix
3. Finanshels - Full Stack Developer          Aug 2024 - Nov 2024
4. Brototype  - MERN Stack Intern             Aug 2023 - Jul 2024
```
Question: were ELT Global and Finanshels concurrent, or did one end before the other started?

Also: **anything between mid-2025 and now (Aug 2026)** is completely missing from the old
data. That's a ~1 year gap on the site. What happened in that window?

---

## 3. EDUCATION

```
School:      St Aloysius College
Degree:      Bachelor of Computer Applications
Period:      2020 - 2023
Highlights:  CGPA 8.16 · Head of Coding Event, Composite 23 · 1st place Joshiana 11.0 ·
             1st place Noesis 2023
```
```
School:      SRMGHSS Ramnagar
Degree:      Higher Secondary
Period:      2018 - 2020
Highlights:  80.83%
```
Anything after 2023? Courses, certs, bootcamps?

---

## 4. SKILLS

Current groups (edit freely, add AI/LLM tooling, it's missing and clearly relevant now):
```
Languages:   JavaScript, TypeScript, Python, Java, SQL, HTML/CSS, Prompt Engineering
Frameworks:  React, Next.js, Express.js, Nest.js, Redux Toolkit, Tailwind CSS
Tools:       Git, Docker, AWS, Node.js, Socket.IO
Databases:   MongoDB, MySQL, PostgreSQL
Missing?:    (100ms SDK, Claude/OpenAI APIs, Vite, Astro, Retool, SQS, ... ?)
```
The simple portfolio shows skills as ~6 one-line strings, not groups. Tell me the 6 lines
you want, or let me condense the groups above.

---

## 5. PROJECTS

I have 7 from neobrutalism: **Zensync, OFFIQ, Eatables, Finanshels–Team, Fin CT-automation,
Finanshels, Portfolio**.

The simple portfolio has a full case-study page per project. Neobrutalism has no source for
these fields, so per project I need:

```
Project:      <name>
Your role:    e.g. "Solo · design + code" / "Team of 4 · frontend lead"
Timeline:     e.g. "3 months" / "Mar-Jun 2024"
Status:       e.g. "Live" / "Shipped, internal" / "Archived" / "Published · npm"
The problem:  1-2 sentences. What was broken before this existed?
Outcome:      1-2 sentences. What actually resulted? Numbers if you have them.
3 stats:      e.g. "980b / gzipped", "12k / users", "40% / faster"
```

**Add these too?** (from GitHub, not in the old portfolio)
```
100ms-prototype   - live-stream integration for edu-tech, 100ms React SDK.  Include? y/n
voice-log         - minimalist voice journaling, vanilla JS (Jan 2026).     Include? y/n
canvas-eval-PoC   - TypeScript, "Created with Blink" (Feb 2026).            Include? y/n
Trackwise / ideaVault / DailyDose / Quizzical / TechDock-Auth / enfiTech-library
```
Any **Octane Innovations** work that can be shown publicly? That's your current thing and
there's nothing about it on the site.

Which 3 are **featured** on the homepage?

---

## 6. BLOG / WRITING

You said you'll share real post links, LinkedIn posts where there's no other home. Per item:

```
Title:        ?
URL:          ?  (canonical post URL; LinkedIn post URL only if it lives nowhere else)
Date:         YYYY-MM-DD
Tag:          one word: react / ai / career / css / meta
Read time:    minutes (I can estimate if you skip)
Excerpt:      1-2 sentences
Featured:     y/n  (one or two get a bigger card)
```
Paste as many as you have. If you have a Medium/Dev.to/Hashnode profile, just give me the
profile URL and I'll pull the list from there myself, no need to do it by hand.

---

## 7. GALLERY

You said you'd give photos. Drop them in `public/media/` and list here:
```
filename.jpg: caption
```
12 slots on the page, but any number works. Current real one: graduation photo
(`https://i.ibb.co/0fKmZ1h/RKB-4208.jpg`): re-upload locally or keep the ibb link?

---

## 8. FROM LINKEDIN: extra sections the site can show

Scrape these if present, skip if empty:

```
Certifications:   name · issuer · date · credential URL
Awards / honors:  title · issuer · date · 1-line description
Volunteering:     org · role · dates
Languages:        language · proficiency
Featured section: the pinned links/posts on your profile
Recommendations:  who wrote it, their title, the text (I'd show 1-2 as pull-quotes)
Open source / publications: anything listed
```

---

## 9. SITE-LEVEL

```
Deploy URL:     ? (astro.config.mjs currently says https://ashwin-kv.example.com, placeholder)
Custom domain:  ? (own one?)
Footer line:    currently "© 2026 ashwin kv, built by hand, scribbled with love." keep?
Analytics:      want any? (Vercel/Plausible/none)
```
