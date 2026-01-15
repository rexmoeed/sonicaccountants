# Sonic Accountants

This repository contains the source code for the **Sonic Accountants** website.  
The project is built as a modern, scalable web application designed to showcase accounting services, client information, pricing, and contact workflows.

---

## Project Details

- **Business:** Sonic Accountants  
- **Project Type:** Accounting Firm Website  
- **Frontend Framework:** React + TypeScript  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS  
- **UI Components:** shadcn-ui  

---

## How can I edit this code?

### Use your preferred IDE (Local Development)

You can work locally using any IDE (VS Code recommended).

---

## Requirements

- Node.js  
- npm  

## Install Node using **nvm** if needed:  
[https://github.com/nvm-sh/nvm#installing-and-updating](https://github.com/nvm-sh/nvm#installing-and-updating)

---

## Steps

### Step 1: Clone the repository
```bash
git clone <YOUR_GIT_URL>
Step 2: Navigate to the project directory
bash
Copy code
cd <YOUR_PROJECT_NAME>
Step 3: Install dependencies
bash
Copy code
npm install
Step 4: Start the development server
bash
Copy code
npm run dev
The application will be available at:


Copy code
http://localhost:5173
Edit files directly on GitHub
Open the file you want to edit



Make your changes and commit

Use GitHub Codespaces
Open the repository

Click Code → Codespaces

Create a new Codespace

Edit files and commit changes directly in the browser

Project Structure Overview
The website is modular and component-driven for scalability and maintainability.

Important folders & files
src/pages – Main site pages (Home, About, Services, Pricing, Contact)

src/components – Reusable UI components

src/components/layout – Header, Footer, navigation

src/lib – Centralized data and configuration

src/assets – Images, icons, and static media

src/routes – Application routing

Services & Content Management
Services, pricing, and features are managed via data files

No hardcoded business content inside UI components

Updating service data automatically updates all related pages

Updating Services or Content
Open the relevant data file in src/lib

Edit or add service objects

Save the file — no UI changes required

All updates propagate automatically across the site.

Forms & Client Interaction
Contact and inquiry forms are component-based

Easily integratable with:

WordPress backend

Email services

CRM or form APIs

Anti-spam and validation supported at the component level

Styling & UI
Fully responsive design

Tailwind CSS utility-first styling

shadcn-ui components for consistency

Clean, professional accounting-focused UI

Technologies Used
Vite

React

TypeScript

Tailwind CSS

shadcn-ui

React Router

Build & Deployment
To create a production build:

bash
Copy code
npm run build
The compiled output will be in the dist folder.

You can deploy this folder to any static hosting provider such as:

Vercel

Netlify

Cloudflare Pages

Developer Notes
Do not hardcode business content inside components

Keep data centralized in src/lib

Maintain reusable and clean components

Follow TypeScript interfaces strictly

Store all images inside src/assets

Copyright
© Sonic Accountants All rights reserved.
