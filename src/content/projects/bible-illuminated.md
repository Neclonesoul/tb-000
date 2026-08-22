---
id: TB–002
title: BIBLE ILLUMINATED
slug: bible-illuminated
year: 2026
type: PWA / OFFLINE / DIGITAL TEXT
status: LIVE
featured: true
summary: A visual offline-first reading environment for KJV and historic 1611 text.
description: A browser-based counterpart to Bible Terminal, built around reading continuity, comparison and manuscript-informed visual treatment.
technologies: [PWA, Service Worker, Offline Storage]
disciplines: [SOFTWARE, WEB]
liveUrl: https://kjv.tysonbarnes.co.uk
relationships: [bible-terminal]
systemNodes: [ANDROID, HUGO, GIT, GITHUB, CLOUDFLARE]
order: 2
---

## Objective

Create a visual reading environment for KJV and historic 1611 text that remains useful without a network connection.

## Constraint

The interface needed to reconcile manuscript-inspired typography with modern mobile reading, while preserving reading state and making two textual editions understandable.

## System

The static application, service worker and local browser state form an offline-first reading system. Direct references make a reading position addressable and shareable.

## Build

- KJV and 1611 editions
- Offline-first PWA behaviour
- Comparison view
- Bookmarks and sharing
- Persistent reading state
- Direct references
- Illuminated opening treatment
- Consolidated appearance controls

## Result

The reader is live at its dedicated KJV subdomain and remains installable as a progressive web application.
