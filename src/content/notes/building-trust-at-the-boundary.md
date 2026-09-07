---
title: "Building Trust at the Boundary: Device Authority, Signed Sessions and Authoritative Records"
description: "Engineering notes on device authority, asymmetric signing, authenticated API boundaries, authoritative records and moving the verification frontier."
date: 2026-09-07
draft: false
topic: "Medicine / Blood / Evidence"
---

There comes a point in building a serious field system when the interesting question is no longer whether the interface works.

It is whether the system has any justified reason to believe what it is being told.

I reached that boundary today.

The project behind this work is confidential, and will remain so. What is worth publishing is the engineering: Android, asymmetric cryptography, authenticated API boundaries, server-side authority, relational data, evidence provenance and the discipline of proving one trust boundary before moving to the next.

The central question was simple:

**Why should a server trust a request merely because it claims to have come from the correct device?**

It should not.

## From Application Authentication to Device Authority

HTTPS protects data in transit. User authentication can establish who has presented valid credentials. API authentication can restrict access to an application boundary.

None of those things, alone, proves that a request originated from a particular authorised physical device.

That requires another layer.

The implementation now moving into focus uses an asymmetric key pair generated for the Android device. The private key remains under the protection of the Android Keystore; the backend is enrolled with the corresponding public key.

The useful property is straightforward:

```text
DEVICE                                  SERVER

private key
    |
    |  signs fresh material
    |
    +----------------------------------> signature
                                         |
public key ---- enrolled beforehand ---> verify
```

The server does not need the device's private signing key in order to establish whether the device possesses it.

That distinction matters enormously.

A database containing public keys may reveal identities and relationships that still deserve protection, but it does not contain the secret required to manufacture the corresponding signatures.

## Identity, Possession and Authority Are Different Things

One of the clearest lessons from the implementation is that three concepts should remain separate:

**Identity** says which device is being claimed.

**Cryptographic possession** demonstrates control of the private key associated with that identity.

**Authority** is the server-side decision that the enrolled identity is currently permitted to perform the requested operation.

Knowing an identifier proves almost nothing.

Possessing the correct private key proves something much stronger, but even that should not allow the client to grant itself authority.

Authority belongs on the server.

That separation provides an explicit place for enrolment, revocation, suspension and policy enforcement.

## The Value of a Failed Request

The most satisfying result in security work is sometimes a failure.

Once strong device authentication becomes mandatory, an unsigned request must be rejected.

A successful authenticated request proves that one path works.

A rejected unauthenticated request proves that a boundary exists.

```text
unsigned request
       |
       v
authentication boundary
       |
       +--------> 401 Unauthorized
```

This changes the way I increasingly test systems.

Instead of asking only:

> Does the legitimate client work?

I want to know:

> What happens when one part of the trust ceremony is deliberately removed?

Remove the signature.

Present an unknown identity.

Use the wrong key.

Corrupt the authentication material.

Attempt to reuse material that should have expired.

The negative cases often tell you more about the actual security of a system than another successful demonstration of the happy path.

## The Database as an Authority Boundary

Another lesson from today's work concerns the database.

It is tempting to think of a database simply as somewhere an application stores things.

For evidence-oriented systems, that description is inadequate.

The authoritative data layer is where a claimed event becomes a durable system record.

The interface is not the authority.

The mobile application is not the authority.

A photograph sitting in object storage is not automatically the authority.

The useful record is the relationship between the observation and its provenance:

```text
device
  |
  +-- authenticated session
          |
          +-- evidence record
                  |
                  +-- observation
                  +-- time
                  +-- location observation
                  +-- measurement quality
                  +-- validation result
                  +-- evidence reference
                  +-- review state
```

For the structured portion of the current system I am using Cloudflare D1.

The attraction is not novelty. It is that the problem is naturally relational.

Eventually the system must be capable of answering questions such as:

Which authorised device produced the record?

Under which session?

What was observed?

When was it observed?

What validation was applied?

Which evidence belongs to it?

What decision did the system make?

Was human review subsequently required?

If those relationships are designed into the data model, answering such questions is ordinary database work.

If they are not, reconstructing provenance later becomes archaeology.

## Record the Observation Once

This led to another rule that sounds obvious until implementation pressure tests it:

**Do not silently reconstruct evidence later.**

Suppose the device makes a location observation when evidence is captured.

That observation has coordinates, an accuracy measurement and a time.

Those values belong together.

If a later interface needs to show the location, it should present the committed observation rather than quietly asking for a newer location and presenting that as though it were the original one.

The correct direction of travel is:

```text
OBSERVE
   |
   v
VALIDATE
   |
   v
COMMIT
   |
   v
PRESENT
```

Presentation is downstream of evidence.

It should not rewrite history.

The same principle applies to timestamps, identifiers, validation outcomes and other captured measurements.

A trustworthy system must preserve the distinction between **what was observed then** and **what is known now**.

## Presentation Is a Derived Product

The same thinking applies to dashboards, reports and stakeholder communications.

They are valuable, but they are presentations of the record.

They are not the record itself.

```text
REAL-WORLD OBSERVATION
          |
          v
AUTHORITATIVE RECORD
          |
          v
DERIVED PRESENTATION
```

This has a useful practical consequence.

A dashboard can be redesigned.

A report can be regenerated.

A stakeholder message can change format.

None of those changes should alter the underlying evidence.

That separation is one of the quiet architectural decisions that makes a system easier to trust later.

## Serverless Still Requires Systems Engineering

The backend for this work uses managed, serverless infrastructure.

That removes a considerable amount of operational machinery.

It does not remove architecture.

There still have to be explicit boundaries for authentication, enrolment, authorisation, sessions, validation, database writes, evidence storage, exceptions, review and auditability.

Serverless computing can make deploying code remarkably easy.

It cannot decide what the code is entitled to trust.

That remains an engineering problem.

## Move the Verification Frontier

Perhaps the most useful lesson from today's work was procedural.

A major production boundary had already been demonstrated successfully.

There was more work I could have done there. There always is.

More polish. More interface work. More abstraction. More code.

But its present acceptance criteria had been satisfied.

Continuing there would have produced activity rather than knowledge.

So the development frontier moved to the next unproven assumption: device authority.

The working sequence is becoming:

```text
IMPLEMENT
    |
    v
DEPLOY
    |
    v
TEST THE REAL BOUNDARY
    |
    v
RECORD THE RESULT
    |
    v
MOVE TO THE NEXT UNPROVEN ASSUMPTION
```

This is considerably more efficient than building several speculative layers and testing the complete chain afterwards.

Prove one boundary.

Then advance.

## What I Learned Today

Trustworthy systems are built as much by removing assumptions as by adding functionality.

A project can have a polished interface, encrypted transport, authentication, managed infrastructure, automated deployments and a perfectly respectable database while still containing an unproven assumption at the point where digital information meets physical reality.

The question at every boundary should therefore be:

**What exactly have I proved?**

Not what have I implemented.

Not what ought to happen.

Not what the architecture diagram says happens.

What has actually been demonstrated?

Today the verification frontier moved closer to the source.

The next successful request must earn its authority cryptographically.

And the requests which cannot must fail.

There is no dramatic interface attached to that progress. No new feature to photograph. No impressive dashboard.

Just one fewer assumption.

In engineering, that can be the more important achievement.

---

*TB-000 is my continuing collection of engineering notes, experiments and observations from systems I build. Project and client details are deliberately omitted where the underlying work is confidential.*
