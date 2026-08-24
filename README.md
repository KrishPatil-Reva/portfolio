# Krish's Personal Portfolio Website

A modern, professional, and responsive personal portfolio website built with **React JS**, **Vite**, and **Vanilla CSS**. Designed with a dark technology theme, glassmorphic cards, custom animations, and a centralized data architecture.

This portfolio is tailored for a **B.Tech Artificial Intelligence & Data Science student** and is suitable for internship applications, placements, LinkedIn, and GitHub.

---

## 🚀 Key Features

* **Modern Dark Tech UI**: Smooth gradients, glassmorphic cards, and custom micro-animations.
* **Centralized Data**: All profile details, projects, education history, and social links are managed in a single file (`src/data/portfolioData.js`).
* **Animated AI/DS Visuals**: A custom, pure-CSS animated SVG neural-network grid illustration.
* **Dynamic GitHub Integration**: Dynamically fetches your latest updated repositories using the public GitHub API, with a styled fallback if the API fails or is rate-limited.
* **Form Validation**: Fully validated contact form with instructions for connecting mail backends.
* **SEO Optimized**: Pre-configured title tags, description headers, and Open Graph tags.
* **100% Responsive**: Supports desktop, laptop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

* **Core**: React JS
* **Build Tool**: Vite
* **Styling**: Vanilla CSS (Responsive Flex/Grid layouts, CSS variables, Glassmorphism)
* **Icons**: `react-icons` (FontAwesome, Devicons, Simple Icons)

---

## 📂 Project Structure

```text
Website/
├── public/                 # Static assets
│   ├── resume.pdf          # Placeholder resume (replace this!)
│   └── favicon.svg         # Tab favicon
├── src/
│   ├── assets/             # Images and local certificate assets
│   ├── components/         # Modular React components
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── About.jsx / About.css
│   │   ├── Education.jsx / Education.css
│   │   ├── Skills.jsx / Skills.css
│   │   ├── Projects.jsx / Projects.css
│   │   ├── Certificates.jsx / Certificates.css
│   │   ├── Achievements.jsx / Achievements.css
│   │   ├── GitHub.jsx / GitHub.css
│   │   ├── LinkedIn.jsx / LinkedIn.css
│   │   ├── Contact.jsx / Contact.css
│   │   └── Footer.jsx / Footer.css
│   ├── data/
│   │   └── portfolioData.js # Central portfolio data store
│   ├── App.jsx             # Orchestrates page layouts
│   ├── index.css           # Global design tokens and animations
│   └── main.jsx            # Entry mount point
├── index.html              # Main HTML with SEO metadata
├── package.json            # Scripts & dependencies
└── vite.config.js          # Vite config
```

---

## ⚙️ Setup and Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Step 1: Install Dependencies
Open your terminal in the project directory and run:
```bash
npm install
```

### Step 2: Run Development Server
Start the local server for development:
```bash
npm run dev
```
Open your browser and visit: `http://localhost:5173`

### Step 3: Build for Production
To build the application for deployment:
```bash
npm run build
```
This generates a production-ready bundle inside the `dist/` directory.

---

## ✏️ How to Customize Your Info

You do not need to modify any code inside the components. Open the central data file:

👉 `src/data/portfolioData.js`

Here is a guide on what you should replace:

1. **Personal Information**: Update `name`, `email`, `mobile`, and paste your actual LinkedIn URL inside `linkedin`.
2. **Resume**: Replace the file at `public/resume.pdf` with your actual resume PDF (keeping the name `resume.pdf`), or change `resumeUrl` to point to a different filename.
3. **Education Details**: Under `education`, replace `institution`, `duration`, and `gpa` placeholder strings with your university details.
4. **Certificates**: Add new certification metadata objects into the `certificates` array. You can place your certificate images inside `src/assets/certificates/` and import them, or supply links.
5. **Projects**: Replace or add projects in the `projects` list.

---

## ✉️ Connecting the Contact Form

The form comes preconfigured with validation, but does not send emails out of the box. You can connect it to a free service like **Formspree** or **EmailJS** in `src/components/Contact.jsx`.

### Option A: Formspree (Easiest, no code packages)
1. Register on [Formspree](https://formspree.io) and create a new project.
2. Inside `src/components/Contact.jsx`'s `handleSubmit` function, add a fetch call replacing the mock simulation:
   ```javascript
   fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   })
   .then(response => {
     if (response.ok) {
       setSubmitSuccess(true);
       setFormData({ name: '', email: '', message: '' });
     }
   });
   ```

---

## 🚀 Deployment Instructions

### Deployment to GitHub Pages

1. **Install `gh-pages`**:
   ```bash
   npm install gh-pages --save-dev
   ```
2. **Configure `vite.config.js`**:
   Add a `base` property with your repository name:
   ```javascript
   export default defineConfig({
     base: '/repository-name/', // e.g., '/portfolio/'
     plugins: [react()],
   })
   ```
3. **Add Deploy Scripts in `package.json`**:
   Add these inside the `"scripts"` object:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. **Deploy**:
   Run the deploy command in your terminal:
   ```bash
   npm run deploy
   ```

### Deployment to Vercel (Easiest)

1. Sign up on [Vercel](https://vercel.com).
2. Connect your GitHub account.
3. Import your portfolio repository and click **Deploy**. Vercel will automatically detect Vite, install dependencies, build, and publish the website with a live URL.
