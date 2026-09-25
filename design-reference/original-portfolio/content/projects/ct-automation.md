---
order: 8
title: "Fin: CT Automation"
tag: "Automation · 2024"
year: "2024"
logoColor: "blue"
summary: "Automates UAE corporate-tax registration end to end: scheduling, document verification and notifications, built in Retool with no bespoke backend."
stack: ["Retool", "PostgreSQL", "Amazon SQS", "API Gateway"]
featured: false
subtitle: "The corporate-tax registration process, minus the humans doing it by hand."
heroImage: "https://i.ibb.co/6m2RFq6/Screenshot-2024-11-24-at-1-40-50-PM.png"
links: {}
features:
  - "Automated appointment scheduling between clients and representatives"
  - "Document verification that flags expired or missing paperwork automatically"
  - "Email notification system for missing or expired documents"
  - "Asynchronous processing via Amazon SQS"
  - "REST API integration connecting API Gateway to SQS"
caseStudy:
  role: "Solo · built it end to end"
  stackLabel: "Retool · PostgreSQL · SQS"
  time: "Aug 2024 – Nov 2024"
  status: "Shipped · internal"
  overview: "An automation system that compresses the CT (corporate tax) registration process: appointments schedule themselves, documents get checked for expiry and completeness, clients get notified, and application status stays current. I built it in Retool rather than standing up a bespoke service, wiring it to PostgreSQL and an SQS queue for the asynchronous work."
  problem: "CT registration is checklist work: chase the documents, spot the expired trade licence, book the call, send the same email again. It scales linearly with client count, which is the wrong shape for a growing firm — and it is exactly the kind of process that does not justify a hand-written backend."
  approach:
    - "Chose Retool over a custom service — the job was internal workflow, not a product surface, and the build had to be fast."
    - "Modelled the slow steps as async jobs on Amazon SQS instead of blocking the UI."
    - "Automated document checks for expiry and completeness before a human ever looks."
    - "Triggered email notifications from the same flow for anything missing."
    - "Surfaced live application status so nobody has to ask where a case stands."
  outcome: "Went into internal use at Finanshels, taking the repetitive parts of CT registration off the team's plate. I built it solo; the throughput numbers belong to the company rather than to me."
  stats: []
  processShots: 4
---
