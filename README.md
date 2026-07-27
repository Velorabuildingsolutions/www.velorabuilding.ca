# VELORA Building Solutions — Website

Static site for VELORA Building Solutions (Kelowna, BC).

## Pages
- index.html (Home)
- services.html
- projects.html
- quote.html
- contact.html

## Deploy on GitHub Pages
1. Create a repository (e.g. `velora-website`) and upload ALL files in this folder (keep the `uploads/` folder structure).
2. In the repo: Settings → Pages → Source: "Deploy from a branch" → Branch: main, folder: / (root) → Save.
3. Your site goes live at `https://<your-username>.github.io/velora-website/` within a couple of minutes.
4. Custom domain (velorabuilding.com/.ca): add it under Settings → Pages → Custom domain, then point the domain's DNS (CNAME) at `<your-username>.github.io`.

## Notes
- The quote form is front-end only — it shows a confirmation but does not send email yet. To make it live, connect a form service (Formspree, Netlify Forms if hosting on Netlify, etc.).
- The map on the contact page is a placeholder — swap in a Google Maps embed when ready.
