---
title: "Via Negativa for the Personal Computer"
slug: "via-negativa-personal-computer"
date: 2026-09-02
topic: "FIELD"
summary: "A personal computer becomes more useful when unnecessary software, hidden state and interface friction are removed rather than continually added."
description: "An engineering note on applying via negativa to the personal computer: removing software, background processes, duplication and interface friction until the machine becomes a quieter, more legible instrument."
tags: ["systems", "linux", "archmac", "workflow", "via-negativa"]
---

# Via Negativa for the Personal Computer

Most attempts to improve a computer begin with addition.

Add another application.

Add another extension.

Add another productivity system.

Add another synchronization service.

Add another background daemon.

Add another layer of automation.

Add another dashboard for observing the tools that were added to manage the tools already present.

This is a natural response to friction because software is sold as capability. When something feels slow, unclear or inconvenient, the apparent solution is to install something that promises to make it easier.

But a personal computer is not merely a collection of capabilities.

It is an operating environment.

Every additional component changes that environment.

The more components it accumulates, the more state must be understood, the more interfaces must be crossed, the more background behaviour must be tolerated and the more failure modes must be carried.

There is another way to improve a computer.

Remove things.

---

## Via negativa

Via negativa is improvement through subtraction.

Instead of asking:

> What should I add?

ask:

> What can I remove without reducing useful capability?

For a workstation, this question is unusually powerful.

A machine used for serious work spends much of its life mediating between intention and execution.

You decide to write something.

Open an editor.

Decide to inspect a repository.

Open a terminal.

Need a file.

Find it.

Need to change a value.

Edit it.

Need to verify a result.

Run the command.

Need to publish.

Commit and deploy.

The quality of the workstation is therefore not determined only by how many operations it can theoretically perform.

It is determined by how little resistance exists between thought and action.

---

## Friction accumulates quietly

Modern desktop systems accumulate friction in small pieces.

A launcher searches several overlapping application indexes.

A tray fills with resident programs.

A note application keeps a second copy of information already stored elsewhere.

A cloud client watches the filesystem.

An updater runs independently of the system package manager.

An extension injects behaviour into the browser.

Another application starts on login because it might be needed later.

A prompt framework runs code before every shell command.

A desktop widget repeatedly gathers information that is rarely acted upon.

Each individual cost seems trivial.

Collectively they alter the character of the machine.

The user begins to wait for the computer.

The computer begins making decisions independently.

The system becomes harder to reason about because its visible interface represents only part of its actual state.

---

## Removal improves legibility

A smaller system is easier to understand.

If there is one package manager, software provenance is clearer.

If there is one primary editor, editing behaviour becomes predictable.

If files have one canonical location, search becomes simpler.

If there is one project history, recovery becomes easier.

If the desktop has fewer persistent programs, background activity becomes easier to explain.

This is not minimalism as decoration.

It is reduction of system ambiguity.

The important quantity is not the number of installed packages.

It is the number of things whose behaviour must be remembered.

---

## Fewer tools, deeper tools

There is a difference between having few tools and being under-equipped.

A good workstation can remain small because several tools are unusually deep.

A terminal is not one application in the same sense as a single-purpose desktop utility.

It is an interface to the operating system.

Vim is not simply a text box.

It is a programmable editing environment.

Git is not simply a synchronization mechanism.

It is durable history, branching, comparison, recovery and collaboration.

A browser remains useful because the web itself is an enormous application platform.

The objective is therefore not to remove powerful tools.

It is to remove overlapping tools.

That distinction matters.

---

## The cost of overlapping capability

Suppose three applications can all manage notes.

At first this appears to increase capability.

In practice it creates decisions:

Where should this note live?

Which version is canonical?

Which application has the latest copy?

Which search surface should be used?

Which format is portable?

Which service owns the synchronization?

Which application must remain installed to recover the information later?

The same problem appears with:

- multiple file managers;
- multiple launchers;
- overlapping cloud storage;
- duplicate development environments;
- several package frameworks;
- multiple messaging clients;
- several task managers;
- duplicate terminal applications;
- redundant system monitors.

The cost is not primarily disk space.

The cost is attention.

---

## Human time is the scarce resource

Computers are becoming faster.

Storage is inexpensive.

Memory is abundant compared with earlier machines.

Human attention has not experienced the same improvement.

That changes the optimisation target.

A workstation should not primarily minimise CPU cycles.

It should minimise unnecessary human transitions.

Menu hunting matters.

Repeated authentication matters.

Waiting for animations matters.

Remembering where something lives matters.

Switching interaction models matters.

Recovering after a hidden update matters.

Re-learning software that changes its interface matters.

The most expensive resource in the system is the operator's focused time.

---

## Keyboard-first is a consequence

Keyboard-first operation is sometimes treated as an aesthetic preference.

It is more useful to understand it as a consequence of reducing interface transitions.

When the hands remain on the keyboard, many operations share one interaction model.

Search.

Edit.

Navigate.

Execute.

Commit.

Inspect.

Switch workspace.

Move files.

Open projects.

Close processes.

The user does not continually translate intention into pointer movement, menu discovery and visual targeting.

This does not mean the mouse is bad.

It means the workstation should not require a new physical interaction mode for routine operations when a faster learned interface already exists.

---

## Remove resident software

Persistent processes deserve more scrutiny than ordinary programs.

A program that runs only when invoked has a bounded cost.

A resident process continuously participates in the workstation.

It may consume memory.

Wake the CPU.

Watch files.

Maintain network connections.

Display notifications.

Install updates.

Create logs.

Add icons.

Modify startup behaviour.

Interact with other services.

The question for resident software should therefore be stronger than:

> Is this useful?

It should be:

> Is this useful enough to remain active whenever the workstation is active?

Many applications fail that test.

---

## Remove hidden state

Hidden state is one of the largest sources of computer frustration.

A setting exists somewhere but its location is unclear.

A service starts because an installer modified login behaviour.

An application stores data in a proprietary directory.

A configuration changed through a graphical interface cannot easily be reproduced.

A machine behaves differently from another apparently identical machine because undocumented state accumulated over time.

Text configuration, package manifests, repositories and explicit service definitions reduce this problem because they make state visible.

Visible state can be inspected.

Inspectable state can be reasoned about.

Reasoned-about state can be reproduced.

---

## Remove unnecessary abstraction

Abstraction is useful when it removes complexity.

It is harmful when it merely hides complexity.

A graphical tool that converts a clear command into six undocumented background operations has not necessarily simplified the system.

It may have simplified the immediate interaction while making the resulting state harder to understand.

The correct question is not whether an interface is graphical or textual.

The question is whether it makes the important state more legible.

Sometimes a graphical interface wins.

Sometimes a command wins.

Sometimes the correct answer is not to have the tool at all.

---

## Remove failure modes

Every dependency introduces another place where the system can fail.

A workstation dependent on several synchronization services can fail when any one of them changes policy, credentials, formats or availability.

A development environment dependent on a particular IDE extension ecosystem can become difficult to reproduce elsewhere.

A document workflow dependent on one proprietary application can make old work inaccessible.

A machine whose boot process has been repeatedly modified without documentation can become difficult to recover.

Via negativa therefore improves reliability as well as speed.

Removing a dependency removes its entire family of possible failures.

---

## Constraint can improve design

Older hardware makes this principle obvious.

A machine with limited CPU, graphics performance or battery life cannot hide inefficient design behind excess capacity.

The operator becomes aware of unnecessary animation.

Resident software becomes visible.

Heavy applications become expensive.

Background activity matters.

That pressure can produce a better workstation architecture.

Once the architecture is sound, moving it to faster hardware does not make the principle obsolete.

It simply provides more headroom.

The faster machine should feel like the same instrument with a larger operating range.

---

## ARCHMAC

[ARCHMAC](/systems/archmac/) is the practical implementation of this idea.

It uses Arch Linux, Hyprland, Kitty, Vim, Git and a deliberately small desktop environment built around direct operation.

The important part is not the particular software list.

The important part is the governing rule:

**software must justify its continued presence.**

The workstation is periodically evaluated for things that can be removed:

- duplicate applications;
- unnecessary startup services;
- overlapping launchers;
- redundant desktop widgets;
- background synchronization;
- unused package frameworks;
- GUI-only tools that duplicate existing terminal capability;
- opaque automation;
- dependencies whose function is no longer clear.

The process is continuous because entropy is continuous.

Systems accumulate.

Via negativa removes the accumulation.

---

## What should remain

Subtraction without judgement becomes austerity.

The goal is not to create a computer incapable of ordinary work.

What remains should be excellent.

A workstation still needs:

- a dependable operating system;
- a strong browser;
- a serious editor;
- a capable shell;
- version control;
- reliable document production;
- communication tools;
- backup;
- security;
- search;
- media handling where required;
- specialist software when the work genuinely demands it.

The difference is that these components are selected deliberately.

They are not retained merely because they arrived by default.

---

## A practical test

For each component on a workstation, ask:

1. What useful capability does this provide?
2. Do I already have that capability elsewhere?
3. Does it need to run continuously?
4. Can its state be inspected?
5. Can its configuration be reproduced?
6. What happens if it disappears tomorrow?
7. Does it save more attention than it consumes?

The seventh question is usually the most important.

---

## The disappearing computer

The ideal workstation becomes less noticeable as it improves.

Not because the interface becomes invisible.

Because fewer parts of the interface demand attention for themselves.

The editor becomes where writing happens.

The terminal becomes where commands happen.

The repository becomes where history lives.

The filesystem becomes where work exists.

The operating system becomes the substrate rather than the activity.

The machine stops repeatedly asking to be managed.

That is the real objective.

Not minimalism.

Not asceticism.

Not nostalgia for simpler computers.

A better ratio between **human intention and machine action**.

The personal computer becomes most powerful when enough unnecessary machinery has been removed that the remaining system behaves like an instrument.
