# Agro Exports PK — Custom-coded export website

A responsive, static B2B product catalogue website for rice, fresh fruit and fish meal. Built with HTML, CSS and vanilla JavaScript. No paid framework or build step is required.

## Files
- `index.html` — pages, product catalogue, quote form and contact sections
- `styles.css` — responsive visual design
- `script.js` — product filters, enquiry basket and email/WhatsApp message preparation

## Before publishing
1. Open `script.js` in a text editor.
2. Change `SITE_CONFIG.email` from `YOUR-EMAIL@example.com` to your real business email.
3. Change `SITE_CONFIG.whatsappNumber` to your real WhatsApp number in international format with digits only. For Pakistan, for example, `+92 300 1234567` becomes `923001234567`.
4. Update the visible email and WhatsApp links in `index.html` so they match the same contact details.
5. Check every product, claim, image and specification. Images are illustrative remote Unsplash images; replace with your own authentic product and shipment photos as available.
6. The quote form does not save data on a server. It prepares an email or WhatsApp message for the visitor to review and send. It does not process online payments.

## Test locally
Double-click `index.html` to open it in a browser. Internet access is needed for remote photos and Google Fonts.

## Publish free with GitHub Pages
1. Create/sign in to a GitHub account at https://github.com/.
2. Create a **public** repository, for example `agro-exports-pk`.
3. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for the published URL shown in Settings → Pages. It will be a GitHub Pages address; you can connect a custom domain later if you purchase one.

## Important business note
A static catalogue can receive enquiries but is not a complete e-commerce system. Payment processing, inventory, automatic order storage, customer accounts and a protected admin dashboard require additional services or a backend. Verify import rules, phytosanitary requirements, product origin, specifications and export eligibility for each destination market before confirming an order.
