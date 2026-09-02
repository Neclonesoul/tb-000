---
id: "TB–005"
title: "ARCHMAC"
slug: "archmac"
year: 2026
type: "SOVEREIGN WORKSTATION"
status: "PUBLIC"
featured: true
summary: "A sovereign professional workstation engineered around flow, ownership and deliberate constraint."
description: "ARCHMAC is an Arch Linux workstation built on constrained 2012 Apple hardware and treated as an engineering system rather than a collection of applications: inspectable, keyboard-first, recoverable, reproducible and deliberately resistant to unnecessary software, hidden state and platform dependence."
technologies: ["Arch Linux", "Hyprland", "Quickshell", "Kitty", "Vim", "Git", "Rust", "Bash"]
disciplines: ["Systems Engineering", "Linux", "Systems Administration", "Software Engineering"]
systemNodes: ["physical", "computational", "published"]
order: 5
---

ARCHMAC began with an ordinary constraint: a MacBook Pro from 2012.

The useful engineering question was not whether old hardware could be made to imitate a modern workstation. It was whether the machine could be reduced, understood and deliberately configured until the remaining system was capable of serious professional work without unnecessary abstraction between the operator and the computer.

The result is not an exercise in retro-computing and not a themed Linux installation.

ARCHMAC is the workstation itself treated as an engineered system.

Its operating system, boot path, window management, applications, configuration, recovery strategy, project history and working doctrine are considered parts of the same machine.

## Machine

At the time of this record:

| Component | Configuration |
| --- | --- |
| Host | Apple MacBookPro9,2 |
| Year | 2012 |
| CPU | Intel Core i5-3210M |
| GPU | Intel HD Graphics 4000 |
| Memory | 16 GB |
| Internal display | 1280 × 800 |
| Operating system | Arch Linux |
| Kernel | 7.1.11-arch1-1 |
| Display protocol | Wayland |
| Window manager | Hyprland 0.56.2 |
| Shell | Bash |
| Terminal | Kitty |
| Primary editor | Vim |

The hardware is old enough that its limitations are visible.

That is useful.

There is little incentive to hide inefficient software behind surplus compute. Resident processes, duplicated applications, unnecessary services and expensive abstractions have measurable consequences.

The constraint encourages architectural discipline.


## Problem

Modern personal computers frequently accumulate complexity without a corresponding increase in capability.

A typical workstation may contain several overlapping applications for the same task, persistent background services, multiple synchronisation systems, hidden state, GUI-only workflows, vendor-specific configuration and layers of software whose purpose is difficult to inspect.

The machine becomes powerful while the operating environment becomes increasingly opaque.

ARCHMAC takes the opposite approach.

The objective is to reduce the distance between intent and execution while retaining:

- ownership;
- inspectability;
- recoverability;
- reproducibility;
- explicit configuration;
- durable project history;
- and operator control.

Performance matters, but responsiveness alone is not the target.

The larger target is **low-friction professional operation**.


## Operating doctrine

### Design principle

The governing principle is Via Negativa:

> Improve the workstation first by identifying what can be removed without reducing capability.

This changes the normal direction of workstation design.

Instead of asking which application, daemon, extension or framework should be added next, ARCHMAC asks whether an existing component is necessary at all.

The preferred system has:

- fewer resident applications;
- fewer overlapping tools;
- fewer background services;
- fewer synchronisation mechanisms;
- fewer places where authoritative files can exist;
- fewer GUI-only operations;
- fewer hidden automations;
- fewer package ecosystems;
- and fewer steps between deciding to do something and doing it.

Minimalism is therefore not an aesthetic target.

It is an operational property.


## System architecture

### Boot architecture

ARCHMAC does not treat boot configuration as disposable installation machinery.

The MacBook retains its original Apple EFI environment and macOS installation while Arch Linux occupies its own root filesystem.

The boot chain is deliberately preserved rather than casually overwritten.

This provides two important properties.

First, the original machine remains recoverable.

Second, changes to Linux can be reasoned about independently from the firmware and retained Apple installation.

Kernel maintenance follows the same principle.

Before a kernel upgrade is allowed to become a reboot event, the system verifies that the actual EFI filesystem is mounted where expected, that kernel and initramfs writes have landed on the booted filesystem and that matching modules exist.

A successful package transaction is not considered proof of a bootable machine.

The boot artefacts themselves are the evidence.


### Inspect before modify

ARCHMAC maintenance follows a simple engineering rule:

**observe the current system before changing it.**

Configuration is not modified from assumptions about how Arch, Hyprland, systemd or a MacBook *normally* behaves.

The live state is inspected first.

That may include:

- mounted filesystems;
- running processes;
- installed packages;
- systemd units;
- kernel versions;
- device interfaces;
- environment variables;
- configuration paths;
- logs;
- service dependencies;
- and hardware state.

Only then is a modification made.

This is slower than blindly pasting a generic fix once.

It is considerably faster than repairing an incorrectly modified workstation repeatedly.

The same discipline is used in ARCHMAC automation and in the associated ArchPilot tooling: establish evidence, classify risk, perform the smallest justified operation, then verify the resulting state.


### Hyprland

Hyprland is used because the workstation is organised around windows as working objects rather than applications as destinations.

Tiling removes much of the manual geometry normally involved in desktop use.

A new terminal, browser, document or monitoring surface can enter the current workspace without requiring repeated dragging, resizing and arrangement.

Keyboard-controlled workspaces provide spatial context without forcing the operator through application launchers and task-switching interfaces.

Hyprland also remains sufficiently modular that the desktop does not need to become a complete desktop environment.

The window manager solves window management.

Other functions can remain independent.

This separation is intentional.


### Galaxy

ARCHMAC's desktop shell is a Quickshell system called **Galaxy**.

Galaxy provides the workstation-specific layer above Hyprland:

- dashboard;
- launcher;
- overview;
- notifications;
- session controls;
- status surfaces;
- and system feedback.

It exists because a sovereign workstation still benefits from coherent instrumentation.

The objective is not to eliminate graphical interfaces.

It is to ensure that graphical interfaces serve explicit functions rather than becoming the primary control plane for the machine.

Galaxy is therefore closer to an instrument panel than a conventional desktop shell.

The underlying Linux system remains independently operable.


## Working environment

### Kitty

Kitty is the principal terminal surface.

The terminal is where a large portion of the workstation becomes composable.

Files, processes, Git repositories, builds, searches, deployments, remote systems and diagnostic information can all be addressed through the same textual operating environment.

The terminal's value is not nostalgia.

It is interface density.

A command can often express an operation more directly than navigating several layers of graphical state, and the resulting operation can be copied, reviewed, versioned, automated or repeated.

That property compounds over time.


### Vim

Vim is the primary editor because text is one of the workstation's most important universal interfaces.

Source code, configuration, documentation, Markdown, shell scripts, structured data and publication records can all be manipulated without changing editing environments.

Vim also allows editing operations to become commands rather than sequences of pointer movements.

The advantage is not that every user should adopt Vim.

The advantage within ARCHMAC is that one deeply learned editor replaces several shallower editing surfaces.

That is Via Negativa applied to text manipulation.


### Why not an IDE?

ARCHMAC does not prohibit integrated development environments.

It simply does not make one the centre of the engineering environment.

The primary development system is assembled from smaller authorities:

- Vim edits;
- Git records;
- compilers build;
- test runners verify;
- shells compose;
- GitHub coordinates;
- CI independently executes;
- and browsers inspect deployed systems.

This keeps project state closer to the repository itself.

A repository should remain understandable and buildable without requiring one particular editor's private project model.

For projects where an IDE provides a genuine technical advantage, it can still be introduced.

It is a tool, not an architectural dependency.


### Git as durable history

Git is not used merely as an upload mechanism for GitHub.

It is the durable history of engineering decisions.

A useful workstation should permit experimentation without making experimentation destructive.

Version-controlled configuration and projects make that possible.

Changes can be inspected.

Earlier states can be compared.

Branches can isolate work.

Commits establish checkpoints.

Remote repositories provide an additional copy of important project history.

This makes aggressive iteration safer because the path backwards remains explicit.


### GitHub

GitHub provides the external engineering layer around the local machine.

Repositories contain the durable artefacts.

Issues describe work.

Projects coordinate the portfolio.

Pull requests provide review boundaries where appropriate.

Actions provide independent build and verification environments.

Releases establish named outputs.

The workstation therefore does not need to contain every piece of organisational state locally.

It needs to contain enough information to reproduce and continue the work.


### Keyboard-first operation

ARCHMAC is designed around the fact that professional computer work contains thousands of tiny interface transitions.

Opening a terminal.

Changing workspace.

Selecting a file.

Searching a repository.

Editing text.

Running a build.

Inspecting a process.

Committing work.

Publishing it.

No individual pointer movement or menu traversal is expensive.

Their accumulation is.

Keyboard-first operation attempts to reduce that accumulated interface tax.

The objective is not to avoid the mouse as a matter of ideology.

Photography, graphics, web inspection and other spatial tasks remain naturally pointer-driven.

The rule is simpler:

**use the interaction method that introduces the least friction for the operation.**

For repeated symbolic operations, that is frequently the keyboard.


## Operational economy

### Software economy

Every permanently installed application increases the state space of the workstation.

It can introduce:

- packages;
- configuration;
- cache;
- services;
- startup behaviour;
- update obligations;
- file associations;
- security surface;
- and another way of performing work that may already be possible elsewhere.

ARCHMAC therefore treats software installation as an engineering decision rather than an automatic response to a task.

A new program should provide enough capability to justify the additional system state it creates.

This is especially important on constrained hardware, but the principle remains valuable on faster machines.

Additional compute should increase productive capacity rather than merely subsidise inefficient software.


### Publishing toolchain

ARCHMAC is also the machine from which this record is produced.

TB–000 is designed so normal publication happens through content rather than application code.

A typical publication operation is intentionally uneventful:

```text
vim src/content/notes/my-note.md
npm run verify
git add ...
git commit
git push

A Systems record follows the same model.

The Markdown document is authoritative.

The publication layer renders it.

If publishing an ordinary System or Note requires changing routing, layout architecture, navigation or application code, that is treated as a defect in the publishing system.

The boring publishing path is a feature.

### Development from constrained hardware

ARCHMAC has been used as a real development workstation rather than a demonstration environment.

Work produced from the machine includes projects spanning:

Android applications;
progressive web applications;
Cloudflare Workers;
public data infrastructure;
systems utilities;
terminal applications;
Rust software;
static publishing;
portfolio infrastructure;
operational dashboards;
and Linux workstation engineering.

Examples include ANDAMP, Bible Illuminated, Bible Terminal, SA Public API Observatory, AFRICALC, VELD//LIFE, ArchPilot and TB–000 itself.

This matters because workstation architecture should ultimately be judged by completed work.

A minimal desktop that merely looks controlled is not especially useful.

The system must produce.

## Reliability and recovery

### Reproducibility

Perfect workstation reproducibility is difficult because a personal computer includes hardware state, firmware, network services, credentials and other external dependencies.

ARCHMAC therefore distinguishes between what can be reproduced exactly and what can only be documented.

Configuration, scripts and project source should be version-controlled where practical.

Installed software should be discoverable.

Important system decisions should have written rationale.

Recovery procedures should describe actual machine topology rather than generic Linux assumptions.

Secrets should remain outside ordinary source history.

The target is not a magical command that recreates every electron on the machine.

The target is sufficient evidence that the workstation can be understood, repaired and reconstructed without relying on memory.

### Security

Sovereignty does not mean running everything as root.

Control is strengthened by explicit privilege boundaries.

Administrative operations are separated from ordinary user work.

Remote-command and automation systems are expected to reject malformed or unauthorised operations rather than simply execute arbitrary shell text.

Secrets are kept out of repositories.

Changes to sensitive system areas receive more inspection than routine user-level configuration.

Security is treated as another form of system legibility: the operator should know what authority a component possesses and why.

### Recovery

A workstation that cannot survive maintenance is not sovereign.

ARCHMAC therefore treats recovery capability as part of normal operation rather than emergency knowledge.

Important changes favour:

inspection;
backup or rollback path;
minimal modification;
verification;
reboot only when the expected post-change state has been established.

The retained Apple boot environment, explicit partition knowledge, Git history and documented system configuration all contribute to recovery.

The goal is not immunity from failure.

It is bounded failure.

### Why preserve macOS and EFI?

Erasing the original environment would have simplified the disk superficially while removing a useful recovery path and part of the machine's native architecture.

ARCHMAC instead isolates Linux while preserving the original Apple environment.

This reflects a broader engineering principle:

do not destroy optionality unless its removal creates a meaningful advantage.

The unused system does not need to dominate daily operation merely because it still exists.

Preservation and dependence are different things.

## Constraint and transferability

### Why an old MacBook?

Because capability is not proportional to hardware age.

For text-heavy engineering, source control, Linux administration, web development, documentation, remote infrastructure and many compilation workloads, the MacBookPro9,2 remains productive.

Its keyboard, display, x86-64 architecture, replaceable storage and sufficient memory allow it to function as a serious Unix workstation.

The machine is also useful precisely because it exposes inefficiency.

Bad background behaviour is noticeable.

Heavy applications are noticeable.

Unnecessary layers are noticeable.

The hardware therefore provides immediate feedback about software architecture.

### Where it is not enough

Deliberate constraint should not become romantic attachment to insufficient hardware.

The MacBookPro9,2 has clear limits.

The dual-core Ivy Bridge CPU is slow by contemporary standards.

Intel HD 4000 graphics restrict modern GPU workloads.

The 1280 × 800 internal panel constrains information density.

Large builds, virtual machines, local AI workloads, complex media production, 3D rendering and heavily parallel workloads quickly reveal the machine's age.

Those limitations are not failures of the ARCHMAC concept.

They define the point at which additional hardware produces real capability rather than compensating for software excess.

The workstation doctrine can move to a faster machine without preserving the old machine itself.

ARCHMAC is an architecture before it is a particular laptop.

### Transferability

The eventual successor to this MacBook can have more cores, more memory, faster storage and a larger display without becoming a heavier workstation.

That is an important distinction.

The purpose of better hardware is to expand the envelope of work:

larger builds;
more parallel processes;
heavier engineering tools;
local virtualisation;
more demanding data workloads;
and additional computational headroom.

It should not require abandoning the principles learned under constraint.

A faster ARCHMAC should feel like the same instrument with a larger operating range.

## Engineering decisions

### Why Arch Linux?

Because the system can be assembled deliberately from understandable components while remaining close to upstream Linux software.

The installation contains what the workstation requires rather than inheriting an entire predetermined desktop stack.

### Why Hyprland?

Because automatic tiling, workspaces and keyboard-driven window control reduce repeated desktop manipulation while retaining a modern Wayland environment.

### Why Vim?

Because one composable editor can cover most textual engineering work and rewards deep familiarity rather than application switching.

### Why Kitty?

Because the terminal remains the common control surface for development, administration, inspection, automation and publishing.

### Why minimal resident software?

Because every persistent component consumes resources, creates state, expands failure modes and demands future maintenance.

### Why Git?

Because experimentation is safer when important state has inspectable history and explicit restoration points.

### Why inspect before modify?

Because the running machine is evidence. Generic assumptions are not.

### Why preserve the original boot environment?

Because deleting a functioning recovery path provides little benefit and unnecessarily destroys optionality.

### Why build Galaxy?

Because useful graphical instrumentation can be added without surrendering the underlying machine to a monolithic desktop environment.

## The workstation as an instrument

ARCHMAC is ultimately an attempt to make the personal computer disappear in the correct way.

Not by hiding its mechanisms.

By making those mechanisms sufficiently understood and sufficiently consistent that operating them stops demanding significant conscious attention.

The terminal appears where expected.

Windows occupy predictable space.

Text can be manipulated quickly.

Projects have known locations.

Git records their history.

Builds have explicit commands.

The machine reports its state.

Failures can be investigated.

Publishing follows a standard path.

The computer becomes less of a destination and more of an instrument through which work passes.

## Operating rules

ARCHMAC can be summarised by a small set of rules:

Inspect before modifying.
Prefer removal before addition.
Keep authoritative state explicit.
Use one strong tool instead of several overlapping ones.
Automate repeated symbolic operations.
Preserve rollback and recovery paths.
Keep project history durable and externalised through Git.
Treat human attention as the scarce resource.
Use graphical interfaces where spatial interaction is genuinely superior.
Judge the workstation by the work it produces.
## Result

ARCHMAC demonstrates that an ageing general-purpose computer can remain professionally useful when the workstation is engineered around its operator rather than around the default assumptions of contemporary desktop software.

The significant result is not that Arch Linux runs on a 2012 MacBook Pro.

That is technically unremarkable.

The result is a coherent working environment in which boot architecture, desktop behaviour, tools, source control, maintenance, recovery and publishing follow the same design philosophy.

The hardware is constrained.

The operating model is not.
