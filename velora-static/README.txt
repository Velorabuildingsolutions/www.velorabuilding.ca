VELORA BUILDING SOLUTIONS - STATIC WEBSITE
==========================================

WHAT THIS IS
A complete, production-ready static website. No frameworks, no build
tools, no template runtime. Pure HTML5 + CSS3 + vanilla JavaScript.
Open index.html directly in a browser, or upload to GitHub Pages.

FILE STRUCTURE
  index.html      Homepage
  services.html   Services (7 detailed sections with anchors)
  projects.html   Project gallery + before/after slider + lightbox
  quote.html      Quote request form (Formspree-ready)
  contact.html    Contact info, form, map placeholder, service areas
  styles.css      All styling (mobile-first responsive)
  script.js       Mobile menu, FAQ accordion, lightbox, before/after
                  slider, form handling, scroll reveal
  sitemap.xml     Search-engine sitemap
  robots.txt      Crawler rules
  CNAME           Custom domain file - contains: velorabuilding.ca
  uploads/        All images (PNG originals + optimized WebP copies)

WHAT WAS REBUILT
The previous version used a component runtime (support.js,
image-slot.js, {{ }} placeholders, <sc-for>/<sc-if>/<x-dc> tags).
Every page was rebuilt from scratch as plain static HTML with the
same VELORA branding (black/gold/white, Marcellus + Jost fonts,
honeycomb background, gold hexagon logo), the same wording, images
and page structure. None of the old runtime files remain.

HOW TO UPLOAD TO GITHUB
1. Create a repository (e.g. velora-website).
2. Upload ALL files in this folder, keeping the uploads/ folder intact.
   These files REPLACE the entire old website - delete the old files
   first (support.js, image-slot.js, and the old .html files).
3. Settings > Pages > Source: "Deploy from a branch" > main, / (root).
4. The included CNAME file (velorabuilding.ca) makes GitHub Pages serve
   the custom domain automatically once DNS is set up:
   - At your domain registrar, add a CNAME record pointing
     www.velorabuilding.ca to <your-username>.github.io, and A records
     for the apex domain per GitHub's "custom domain" documentation.

HOW TO CONNECT FORMSPREE (makes the forms actually send email)
1. Sign up free at https://formspree.io and create a form.
2. Copy your form endpoint (looks like https://formspree.io/f/abcdwxyz).
3. In quote.html and contact.html, find the comment marked
   "connect to Formspree" and replace YOUR_FORM_ID in the form's
   action attribute with your real form id.
Until you do this, submitting shows a notice asking visitors to call
or email instead - nothing fake is sent.

HOW TO UPDATE PHONE / EMAIL / IMAGES
- Phone: search all .html files for 2503008029 and "250 300 8029".
- Email: search for velorabuilding@gmail.com.
- Images: drop new files into uploads/ and update the <img src> (and
  the matching <source srcset> WebP line, or delete the <source> line).
- Business hours: search for "8am".

IMAGES / PERFORMANCE
Each photo ships as the original PNG plus an optimized WebP copy
(70-95% smaller; e.g. the hero went from 3.5 MB PNG to 256 KB WebP).
Browsers pick WebP automatically via the <picture> element with PNG
as fallback. Below-the-fold images lazy-load; the homepage hero loads
eagerly.

CONFIRMATION
- CNAME contains exactly: velorabuilding.ca
- No {{ }} placeholders, no <sc-for>, no <sc-if>, no <x-dc>,
  no support.js, no image-slot.js anywhere in this build.
