---
id: "TB–007"
title: "SA PUBLIC API OBSERVATORY"
slug: "sa-public-api-observatory"
year: 2026
type: "PUBLIC DATA INFRASTRUCTURE"
status: "PUBLIC"
featured: true
summary: "A continuously observed record of South African public digital infrastructure."
description: "A public infrastructure observatory that discovers, measures and records the operational behaviour of South African APIs and public data interfaces over time."
technologies: ["TypeScript", "Cloudflare Workers", "D1", "R2", "PWA"]
disciplines: ["Software Engineering", "Data Systems", "Observability", "Public Infrastructure"]
systemNodes: ["computational", "intelligence", "published"]
order: 7
---
## System

The **SA Public API Observatory** is a continuously inspectable record of public digital infrastructure in South Africa.

It exists to answer a deceptively simple question:

> Which public interfaces can actually be relied upon?

Government departments, municipalities, state-owned entities and public institutions publish increasing amounts of digital information, but availability alone does not make an interface operationally useful.

An endpoint may exist yet be undocumented.

A service may respond today and disappear tomorrow.

A dataset may be public but published in a format that makes automated use difficult.

The Observatory treats those conditions as measurable engineering properties rather than incidental inconvenience.

Its purpose is to discover public interfaces, test them repeatedly, preserve evidence of their behaviour and make the resulting state visible.

---

## Problem

Public digital infrastructure is usually encountered one interface at a time.

A developer finds an endpoint.

An analyst finds a spreadsheet.

A researcher discovers a portal.

A transport operator finds a downloadable PDF.

Each discovery remains isolated unless someone records what exists, how it behaves and whether it continues to work.

That creates several problems:

- interfaces are rediscovered repeatedly;
- outages may remain invisible;
- undocumented changes are discovered only after dependent software breaks;
- apparently public data may prove difficult to automate;
- organisations cannot easily distinguish dependable infrastructure from experimental or abandoned interfaces;
- useful public systems remain difficult to compare.

The Observatory turns those isolated observations into a common operational record.

---

## Design principle

The central design decision is that the product does not merely catalogue APIs.

It **observes them**.

A URL in a directory says that an interface existed when somebody recorded it.

An Observatory record should say more:

- what organisation owns it;
- what resource it represents;
- how it is accessed;
- whether it responded;
- when it was last checked;
- how consistently it has responded;
- whether the interface appears to have changed;
- what evidence supports the current assessment.

A catalogue describes infrastructure.

An observatory measures infrastructure.

---

## Architecture

The system is built around a deliberately small set of components.

| Component | Function |
| --- | --- |
| Cloudflare Workers | Public application and API execution layer |
| D1 | Structured Observatory records and monitoring state |
| R2 | Durable export and generated-data storage |
| Scheduled checks | Repeated interface observation |
| Web application | Human-readable national overview |
| `/api/v1` | Machine-readable Observatory interface |
| GitHub | Source, history, verification and release control |

The deployed system currently records **33 public resources across 11 organisations**.

The architecture is intentionally serverless because the workload is dominated by lightweight HTTP observation, state recording and publication rather than continuous compute.

---

## Resource model

Each observed resource is treated as an engineering object rather than merely a hyperlink.

A useful record needs identity, provenance and operational state.

Typical attributes include:

- owning organisation;
- resource name;
- interface or dataset type;
- canonical URL;
- observed status;
- response characteristics;
- availability history;
- last successful observation;
- interface-change evidence;
- notes about access or interpretation.

This creates a foundation on which more sophisticated analysis can be built without changing the basic public contract.

---

## Observation

Repeated observation is what turns the system from a directory into infrastructure intelligence.

A check records the state of a resource at a particular point in time.

Over successive checks those observations form a history.

That history allows the system to distinguish between:

- a healthy interface;
- an intermittent interface;
- a newly unavailable interface;
- a long-term failure;
- an interface whose behaviour has materially changed.

The important quantity is therefore not simply **UP** or **DOWN**.

It is behaviour through time.

---

## National API Pulse

The main dashboard compresses the Observatory into an operational national view.

It presents several complementary signals.

### 30-day availability

A longer-window indication of how reliably observed resources have remained reachable.

This prevents a resource that happens to be available at the current instant from appearing equivalent to one that has operated consistently for weeks.

### 7-day signal

A shorter operational window intended to expose recent deterioration or recovery.

### Incidents

Resources whose observed behaviour requires attention.

### Top availability

Interfaces demonstrating comparatively strong observed reliability.

### Interface changes

Evidence that an interface may have altered in a way capable of affecting consumers.

Together these provide a much more useful picture than a static registry.

---

## Evidence and confidence

The Observatory is designed around a simple rule:

**operational claims should be tied to evidence.**

A displayed status without a timestamp rapidly becomes meaningless.

A reliability figure without an observation history is difficult to trust.

A statement that an interface changed should be traceable to the observations that caused that conclusion.

For that reason the system architecture favours explicit timestamps, retained observations and derived metrics whose inputs can be inspected.

Every operational number should carry enough provenance to answer where it came from and how recently it was known to be true.

---

## Public API

The Observatory itself exposes a versioned interface under:

```text
/api/v1
```

That decision makes the project recursive in a useful way.

A system concerned with the quality of public interfaces should itself expose a clear machine-readable interface.

The API allows Observatory data to be consumed independently of the graphical dashboard and provides a foundation for:

- research;
- monitoring;
- comparative analysis;
- external dashboards;
- automated exports;
- future regional or sector-specific tooling.

The web interface is therefore one consumer of the data rather than the boundary of the product.

---

## Exports

R2 object storage provides a durable location for generated exports.

Exports decouple downstream analysis from the live application.

A researcher should not need to query production state repeatedly merely to obtain a stable snapshot.

The export layer also provides a natural boundary for future:

- CSV datasets;
- JSON snapshots;
- historical archives;
- research packages;
- third-party ingestion.

---

## Verification

Verification is part of normal publication rather than a separate cleanup stage.

The delivery path is:

```text
requirement
    ↓
implementation
    ↓
tests
    ↓
verification
    ↓
deployment
    ↓
observation
```

Changes are expected to pass the repository verification gate before release.

This matters particularly for an observability system because a broken Observatory can produce misleading conclusions about the systems it is measuring.

The measuring instrument itself has to be trustworthy.

---

## Failure modes

The project exposed several classes of failure that are easy to overlook when building data products.

### HTTP success is not semantic success

A server can return `200 OK` while delivering an error document, login page, malformed data or structurally different payload.

### Public does not mean stable

An interface can be openly accessible without providing any compatibility guarantee.

### Availability does not imply usability

A resource can remain online while becoming impractical for automated consumption.

### Documentation can lag implementation

Published specifications and actual interface behaviour can diverge.

### Upstream state is outside our control

The Observatory can measure public infrastructure but cannot make the originating organisation operate it reliably.

The system should report reality, not manufacture confidence.

---

## What the project taught

The most important outcome was not the dashboard.

It was the recognition that **the valuable system is the data fabric behind the dashboard**.

The visible interface is replaceable.

The accumulated knowledge of:

- where resources live;
- who owns them;
- how they behave;
- how frequently they fail;
- how their interfaces evolve;
- and how confidently their state is known

is considerably harder to reproduce.

That principle now informs larger operational-intelligence systems.

---

## Extension

The architecture can expand in several directions without changing its governing model.

Potential extensions include:

- more South African public organisations;
- municipal infrastructure;
- transport and logistics interfaces;
- energy and utility data;
- environmental observation;
- structured schema-change detection;
- historical reliability scoring;
- public-data quality metrics;
- geographic and sector views;
- notification and incident feeds.

The Observatory is therefore both a useful public product and an experimental platform for understanding how operational data infrastructure should be measured.

---

## Engineering decisions

### Why Cloudflare Workers?

The workload consists primarily of request handling, scheduled observation and lightweight transformation.

Workers provide a small operational surface while keeping deployment close to the network edge.

### Why D1?

The Observatory requires structured relational state but not a large continuously managed database server.

D1 provides sufficient structure while preserving the serverless operating model.

### Why R2?

Exports and generated artifacts should not be forced into relational storage.

Object storage gives those outputs a durable independent lifecycle.

### Why a public API?

The website should not become the boundary of the product.

Machine-readable access allows other systems to consume the Observatory directly.

### Why preserve observation history?

Current state without history cannot distinguish reliability from coincidence.

### Why version the interface?

An Observatory studying interface stability should itself practise interface stability.

---

## Result

The SA Public API Observatory demonstrates a progression from **finding public data** to **engineering knowledge about public data**.

It provides a national operational view across dozens of observed resources while preserving the individual evidence required to understand those signals.

More importantly, it established a design principle that extends well beyond this project:

**the dashboard is an interface; the durable product is the observed, structured and provenance-aware data beneath it.**
