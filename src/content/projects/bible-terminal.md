---
id: TB–001
title: BIBLE TERMINAL
slug: bible-terminal
year: 2026
type: SOFTWARE / GO / CLI / OPEN SOURCE
status: RELEASED
featured: true
summary: An offline command-line reader for KJV and historic 1611 text.
description: A compact Go application for direct verse lookup, chapter reading, comparison and word search without a network connection.
technologies: [Go, Embedded TSV, CLI]
disciplines: [SOFTWARE]
sourceUrl: https://github.com/Neclonesoul/bible-terminal
releaseUrl: https://github.com/Neclonesoul/bible-terminal/releases
relationships: [bible-illuminated]
systemNodes: [ANDROID, TERMUX, GO, GIT, GITHUB]
order: 1
---

## Objective

Make KJV and historic 1611 text directly accessible from a terminal, including on Android devices, without depending on a browser or network connection.

## Constraint

The reader had to remain compact, portable and offline. Its textual source is embedded into the compiled application rather than fetched at runtime.

## System

The Go command accepts a reference or search instruction, reads from the embedded datasets and returns plain terminal output. The same binary model supports the published Android and Linux targets.

## Build

- Go command-line application
- Embedded TSV datasets
- KJV and 1611 modes
- Verse and chapter lookup
- Parallel comparison
- Word search

## Interface

```text
$ ./bible --compare John 3:16
$ ./bible --1611 --search "beleeue"
$ ./bible Psalms 23
```

## Result

The repository contains functioning builds for Android ARM64, Linux ARM64 and Linux AMD64. Its source datasets contain 31,102 KJV lines and 36,702 1611 lines: 67,804 combined.
