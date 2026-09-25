---
order: 1
title: "AlloCat"
tag: "Personal finance · 2026"
year: "2026"
logoColor: "green"
summary: "Offline-first personal finance app for India — budget the month, then let it read your bank SMS on-device and categorise every UPI and card spend automatically. Free, no ads."
stack: ["Next.js", "React", "TypeScript", "Capacitor", "IndexedDB", "TanStack Query", "Supabase", "Serwist"]
featured: true
subtitle: "Budget every rupee, automatically — a PWA and Android app that tracks your spending without you typing it in."
heroImage: "/media/projects/allocat.png"
links:
  live: "https://grow.allocat.xyz"
  playStore: "https://play.google.com/store/apps/details?id=com.octane.allocat"
features:
  - "Multi-currency budgeting: allocate income at the start of the month, spend against it"
  - "On-device SMS parsing that catches UPI and card debits without manual entry"
  - "Auto-categorisation from learned merchant rules that improve as you correct them"
  - "Fully offline-first: everything works with no connection, syncing when one returns"
  - "Debt, net worth and savings-goal tracking alongside day-to-day spend"
  - "Installable PWA plus a native Android build on the Play Store"
  - "Share-target ingestion: send a receipt or message straight into the app"
  - "Rate-limited AI assistant for questions about your own numbers"
  - "Free, with no ads"
caseStudy:
  role: "Solo · design + engineering"
  stackLabel: "Next.js · TypeScript · Capacitor · Supabase"
  time: "2026 – present"
  status: "Live · Play Store + PWA"
  overview: "AlloCat is the product I am building now, under Octane. You budget your income at the start of the month; from there the app notices your UPI and card spends from your bank SMS, on the phone itself, and helps you allocate them against what you planned. It also tracks debt, net worth and goals. It ships as an offline-first PWA and as an Android app built with Capacitor, and it is free with no ads."
  problem: "Every budgeting app asks you to type in what you spent. Nobody does that for long, so the budget drifts from reality within a fortnight and gets abandoned. In India the spending signal already exists — every UPI and card debit arrives as a bank SMS — but reading it usually means shipping your financial messages to somebody's server, which is a bad trade for the user."
  approach:
    - "Parsed bank and UPI debit SMS on-device, so the messages themselves never leave the phone — only hashed, extracted fields sync."
    - "Auto-categorised spending through learned merchant rules that sharpen as you correct them."
    - "Built the data layer offline-first on IndexedDB and TanStack Query, with optimistic writes so the UI never waits on a network."
    - "Made writes durable through a mutation queue with retry and rollback, reconciling temporary client IDs against server IDs once sync completes."
    - "Handled auth and sync with Supabase, and shipped a Serwist service worker with PWA share-target ingestion."
    - "Packaged the same codebase for Android with Capacitor and published it to the Play Store."
    - "Added a rate-limited AI assistant so questions about your own spending stay cheap to serve."
  outcome: "Live on the Play Store and as an installable PWA, free and ad-free. It is the project I am actively building — the offline-first data layer and on-device SMS parsing are the parts I would point at first."
  stats: []
  processShots: 4
---
