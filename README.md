

# ⚡ Lightning TipJar

A Lightning-powered tipping application designed with Rwanda and the wider African context in mind.

The application allows people to support creators, workers, developers, or other individuals by sending Bitcoin over the Lightning Network. The recipient can then convert the received satoshis into Rwandan Francs and withdraw the value through Mobile Money.

---

## 📌 Project Overview

### The Problem

Digital tipping and small international payments can be difficult because of:

- High transaction fees
- Slow cross-border payments
- Limited access to traditional online payment systems
- Difficulty receiving international payments directly into Mobile Money
- Lack of simple payment options for creators and individuals

### Our Solution

Lightning TipJar combines:

**Lightning Network + Blink API + Flutterwave + Mobile Money**

A user can:

1. Open a person's TipJar page.
2. Choose a suggested tipping amount.
3. Enter a custom amount if desired.
4. Add a reason/message for the tip.
5. Send the tip using Bitcoin Lightning.
6. The recipient receives the satoshis.
7. The backend handles the conversion process.
8. The value can eventually be converted into Rwandan Francs.
9. The recipient can receive the value through Mobile Money.

---

# 🏗️ Architecture

The project consists of two separate applications:

```text
Lightning-TipJar/
│
├── frontend/
│
├── backend/
│
├── .gitignore
└── README.md
```

The frontend and backend are intentionally separated because they are independent applications with their own dependencies and configuration.

```text
                ┌────────────────────┐
                │       User         │
                └─────────┬──────────┘
                          │
                          ▼
                ┌────────────────────┐
                │   React Frontend   │
                │      + Vite        │
                └─────────┬──────────┘
                          │
                    HTTP/API Requests
                          │
                          ▼
                ┌────────────────────┐
                │   Express Backend  │
                │      Node.js       │
                └──────┬─────┬───────┘
                       │     │
              ┌────────┘     └──────────┐
              ▼                         ▼
      ┌───────────────┐         ┌────────────────┐
      │  Blink API    │         │ Flutterwave API│
      │ Lightning     │         │ Conversion /   │
      │ Payments      │         │ Mobile Money   │
      └───────────────┘         └────────────────┘
```

---

# 💻 Technology Stack

## Frontend

### React

Used to build the user interface and reusable components.

### TypeScript

Used instead of plain JavaScript to provide static typing and improve reliability when working with the application.

### Vite

Vite is the development/build tool used by the React application.

It provides:

- Fast development server
- Fast Hot Module Replacement (HMR)
- Production builds
- Modern frontend development setup

### Axios

Axios is used to make HTTP requests from the frontend to the backend.

For example:

```text
React Component
      │
      ▼
    Axios
      │
      ▼
Express Backend
```

It can be used for requests such as:

```ts
axios.get(...)
axios.post(...)
```

### TanStack Query

TanStack Query is used for managing server-side data.

It helps with:

- Fetching API data
- Caching
- Loading states
- Error states
- Refetching
- Keeping frontend server data synchronized

Instead of manually managing every API request with `useEffect` and `useState`, TanStack Query can handle much of this work.

### Lucide React

Lucide React provides reusable icons for the user interface.

Examples include:

- Lightning icons
- Wallet icons
- Send/payment icons
- User icons
- Success/error icons

---

# ⚙️ Backend

## Node.js

Node.js provides the runtime environment for the backend.

## Express

Express is the backend web framework.

It is responsible for:

- Creating API routes
- Receiving frontend requests
- Processing requests
- Calling external APIs
- Returning responses to the frontend

## TypeScript

The backend is also written in TypeScript.

This keeps the frontend and backend consistent and provides better type safety.

## Zod

Zod is used for validating data coming into the backend.

For example, when the frontend sends a tipping request, the backend should validate things such as:

- Amount
- Recipient information
- Message/reason
- Required fields
- Data types

The backend should never blindly trust data coming from the frontend.

## Helmet

Helmet improves Express application security by setting various HTTP security headers.

It provides an additional security layer for the backend.

---

# ⚡ External APIs

## Blink API

Blink is used for the Lightning/Bitcoin payment functionality.

The backend communicates with Blink rather than having the frontend directly handle sensitive Lightning API credentials.

Conceptually:

```text
Frontend
   │
   │ Tip request
   ▼
Backend
   │
   │ API request
   ▼
Blink
   │
   ▼
Lightning Network
```

The Blink API key must remain private and must never be placed in the frontend.

---

## 💰 Flutterwave API

Flutterwave is planned for the fiat/mobile-money side of the application.

The intended flow is:

```text
Lightning Tip
      │
      ▼
Satoshis
      │
      ▼
Conversion
      │
      ▼
Rwandan Francs
      │
      ▼
Mobile Money
```

The exact implementation and available Mobile Money functionality will depend on the APIs and services supported by the chosen Flutterwave integration.

---

# 📁 Project Structure

```text
Lightning-TipJar/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── types/
│   │   ├── assets/
│   │   └── ...
│   │
│   ├── public/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── ...
│
├── backend/
│   │
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── schemas/
│   │   ├── middleware/
│   │   ├── types/
│   │   └── ...
│   │
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

> The exact internal folders can evolve as the team implements the application.

---

# 🔐 Environment Variables

Secrets must not be committed to GitHub.

The backend uses environment variables such as:

```env
PORT=3000

BLINK_API_KEY=your_key_here

FLUTTERWAVE_SECRET_KEY=your_key_here
```

The frontend can use its own `.env` file for frontend-specific configuration.

For example:

```env
# frontend/.env

# Frontend configuration goes here
```

If the frontend needs to know the backend URL, it can eventually contain something such as:

```env
VITE_API_URL=http://localhost:3000
```

Do not put secret API keys in frontend environment variables.

Anything exposed through a Vite frontend can potentially become accessible to the client.

---

# 🚀 Installation

## 1. Clone the repository

```bash
git clone https://github.com/ajang20/lightning-tipjar.git
```

Enter the project:

```bash
cd lightning-tipjar
```

---

# 🎨 Frontend Setup

Enter the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will provide a local development URL.

---

# ⚙️ Backend Setup

Open another terminal.

Enter the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
touch .env
```

Add the required environment variables:

```env
PORT=3000

BLINK_API_KEY=your_key_here

FLUTTERWAVE_SECRET_KEY=your_key_here
```

Start the backend:

```bash
npm run start:dev
```

---

# 🧪 Development Workflow

When developing a feature:

```text
1. Understand the feature
        ↓
2. Design the frontend
        ↓
3. Define the API contract
        ↓
4. Implement backend route
        ↓
5. Validate request with Zod
        ↓
6. Implement business logic
        ↓
7. Connect external APIs if required
        ↓
8. Connect frontend with Axios
        ↓
9. Manage server state with TanStack Query
        ↓
10. Test the complete flow
```

---

# 💸 Tipping Flow

The intended user flow is:

```text
User visits TipJar
        │
        ▼
Views recipient information
        │
        ▼
Chooses suggested tip
OR
enters custom amount
        │
        ▼
Adds optional reason/message
        │
        ▼
Clicks "Tip"
        │
        ▼
Frontend sends request
        │
        ▼
Backend validates request
        │
        ▼
Backend communicates with Blink
        │
        ▼
Lightning payment is processed
        │
        ▼
Recipient receives satoshis
        │
        ▼
Conversion/withdrawal process
        │
        ▼
Rwandan Francs → Mobile Money
```

---

# 🎨 Tipping Interface

The tipping form should provide three main options.

## Suggested Amounts

The user should be able to quickly select predefined amounts.

For example:

```text
⚡ 1,000 sats
⚡ 5,000 sats
⚡ 10,000 sats
⚡ 50,000 sats
```

The exact amounts can be adjusted during development.

## Custom Amount

Users should also be able to enter their own amount.

```text
Enter custom amount
[________________]
```

## Reason / Message

Users can optionally explain why they are tipping.

```text
Why are you tipping?

[________________________________]
[________________________________]
```

Examples:

```text
"Great content!"

"Thanks for helping me learn."

"Keep building!"

"Your work helped me a lot."
```

---

# 🔔 Notifications

The frontend should clearly communicate the state of an action.

For example:

### Successful

```text
✓ Tip sent successfully!
```

### Processing

```text
⚡ Processing your tip...
```

### Failed

```text
✕ Something went wrong. Please try again.
```

These notifications help users understand what is happening instead of leaving them wondering whether their payment was successful.

---

# 🔒 Security Principles

### Never expose API keys

Do not place:

```env
BLINK_API_KEY
FLUTTERWAVE_SECRET_KEY
```

inside the frontend.

These belong on the backend.

### Validate frontend input

Never assume frontend data is trustworthy.

The backend should validate incoming requests using Zod.

### Keep `.env` out of Git

The project `.gitignore` contains:

```gitignore
.env
.env.*
!.env.example
```

This means actual environment files should not be committed while example configuration files can be committed.

---

# 🌿 Git Workflow

The project is hosted on GitHub.

Remote:

```text
https://github.com/ajang20/lightning-tipjar.git
```

Check the remote:

```bash
git remote -v
```

Check the current branch:

```bash
git branch
```

Check changes:

```bash
git status
```

Stage changes:

```bash
git add .
```

Commit:

```bash
git commit -m "your message"
```

Push:

```bash
git push
```

For the first push of a new branch:

```bash
git push -u origin main
```

---

# 🧑‍💻 Team Development

Frontend and backend are separate applications inside the same repository.

Each application has its own:

```text
package.json
node_modules/
.env
TypeScript configuration
dependencies
```

Dependencies should NOT be shared through one root `package.json`.

For example:

```text
frontend/
└── package.json

backend/
└── package.json
```

This allows each application to have its own dependency requirements.

---

# 📦 Main Dependencies

## Frontend

| Dependency | Purpose |
|---|---|
| React | Build the UI |
| TypeScript | Static typing |
| Vite | Development/build tooling |
| Axios | HTTP/API requests |
| TanStack Query | Server-state management |
| Lucide React | UI icons |

## Backend

| Dependency | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express | Backend/API framework |
| TypeScript | Static typing |
| Zod | Request/data validation |
| Helmet | HTTP security headers |
| Blink API | Lightning payment functionality |
| Flutterwave API | Fiat/mobile-money integration |

---

# 🎯 Project Goal

The goal of Lightning TipJar is to make receiving small digital payments easier for people in Rwanda and potentially across Africa.

Instead of requiring the sender and recipient to use the same traditional financial system, the application uses Bitcoin Lightning as the payment layer and connects it to a familiar local financial system:

```text
Lightning
    ↓
Bitcoin / Satoshis
    ↓
Conversion
    ↓
Rwandan Francs
    ↓
Mobile Money
```

This creates a bridge between **Bitcoin's global payment network** and **local African payment infrastructure**.

---

# 🚧 Current Development Status

The project is currently under active development.

### Completed

- [x] Project repository created
- [x] Frontend application initialized
- [x] Backend application initialized
- [x] TypeScript configured
- [x] Initial dependencies installed
- [x] Git repository initialized
- [x] GitHub repository connected
- [x] Initial project pushed to GitHub

### In Progress

- [ ] Frontend UI implementation
- [ ] TipJar page
- [ ] Tipping form
- [ ] Backend API routes
- [ ] Blink integration
- [ ] Flutterwave integration
- [ ] Payment flow
- [ ] Mobile Money withdrawal flow
- [ ] Error handling
- [ ] Testing
- [ ] Deployment

---

# ⚡ Vision

Lightning TipJar aims to demonstrate how Bitcoin Lightning can be combined with existing African financial infrastructure to make small payments and tipping more accessible.

**Send sats globally.  
Receive value locally.**

git status
git add README.md
git commit -m "docs: add project README"
git push
```
