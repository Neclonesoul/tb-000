---
id: TB–003
title: GALAXY LINUX
slug: galaxy-linux
year: 2026
type: LINUX / ANDROID / SYSTEMS
status: PUBLIC
featured: true
summary: Arch Linux desktop for Samsung/Android + Termux:X11.
description: A rootless mobile Linux environment combining an Arch Linux userspace with PRoot, Termux:X11 and the XFCE desktop environment.
technologies: [Android, Termux, Arch Linux, PRoot, Termux:X11, XFCE]
disciplines: [SYSTEMS, SOFTWARE]
sourceUrl: https://github.com/Neclonesoul/galaxy-linux
relationships: [field-terminal]
systemNodes: [ANDROID, TERMUX, LINUX, GIT, GITHUB]
order: 3
---

## Objective

Provide a practical desktop Linux environment on Samsung and Android hardware, including large-screen use through DeX.

## Constraint

The system runs without rooting the Android host. That requires a userspace distribution under PRoot and a display path through Termux:X11.

## System

Android remains the host operating system. Termux provides the terminal environment. PRoot runs the Arch Linux userspace, and XFCE supplies the desktop environment rendered through Termux:X11.

## Build

- Android host
- Termux tooling
- Rootless PRoot environment
- Arch Linux userspace
- XFCE desktop environment
- Termux:X11 display
- DeX-friendly operation

## Result

The public repository provides the installation system and documentation. XFCE is the desktop environment; Arch Linux is the distribution/userspace.
