README: Salter-Bakery.js
Overview
This script is designed to embed Google Tag Manager (GTM) and a customizable cookie consent banner into any client’s website without requiring direct website access. This is particularly useful for scenarios where clients prefer not to provide back-end access. By simply adding this single script, you can manage tracking codes and cookie consent preferences in a centralized, efficient manner.

What Does It Do?
Injects a linked CSS file (bakery.css) into the page head.
Adds Google Tag Manager (GTM) code:
A <script> tag in the <head> that loads GTM.
A <noscript> fallback in the <body> for browsers that do not support scripts.
Displays a cookie consent banner on the site. The banner:
Allows visitors to Accept or Deny all cookies immediately.
Provides a link to Privacy Preferences so users can select which types of cookies they allow (Marketing, Personalization, Analytics).
Manages cookie consent state by storing preferences in localStorage, and updates GTM’s dataLayer accordingly.
File Structure & Key Sections
Below is a breakdown of what you’ll find in the script:

Loading External CSS

js
Copy
Edit
const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "https://8x7lt2.csb.app/bakery.css";
document.head.appendChild(cssLink);
Replace the cssLink.href if you need to host or use a different stylesheet.
Google Tag Manager Injection

js
Copy
Edit
const gtmScript = document.createElement("script");
gtmScript.innerHTML = `
  (function(w,d,s,l,i){ ... })(window,document,'script','dataLayer','GTM-57MP55N');
`;
document.head.appendChild(gtmScript);

const gtmNoscript = document.createElement("noscript");
gtmNoscript.innerHTML = `
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57MP55N"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>
`;
document.body.insertAdjacentElement("afterbegin", gtmNoscript);
Here is where the GTM container ID (GTM-57MP55N) is injected. If you need to replace it with another container ID, change it in both the <script> and <noscript> sections.
Cookie Consent Banner & Modal

html
Copy
Edit
<div class="cookie-consent"> 
  <!-- Banner markup -->
  <!-- Manager link markup -->
  <!-- Preferences Modal markup -->
</div>
This block contains the HTML for the cookie consent banner, the privacy preferences link, and the modal dialog for more granular cookie settings.
The banner appears on the first visit (or whenever consent has not been saved in localStorage), then hides after a user either accepts or denies.
Consent Logic & GTM DataLayer Updates

js
Copy
Edit
// Manages localStorage for "consentMode"
// Defines 'allowAllCookies', 'denyAllCookies', and 'updateConsent' functions
// Pushes user choices to dataLayer
gtag("consent", "update", { ... }) updates GTM’s consent mode.
The script also sets localStorage to remember the user’s preference.
How to Use / Deploy
Host This File (salter-bakery.js)

Ensure salter-bakery.js is hosted at a publicly accessible URL (e.g., on your server or a CDN).
Insert <script> Tag Into the Client’s Website

html
Copy
Edit
<script src="https://your-cdn-or-host.com/salter-bakery.js" async></script>
The script runs on DOMContentLoaded to safely inject all GTM and banner components.
Configure Google Tag Manager ID (if needed)

Search for all instances of GTM-57MP55N in the file.
Replace them with the new GTM container ID (e.g., GTM-XXXXX).
Test

After placing the script on the client’s site, verify:
Banner Display: The cookie banner should appear on first visit or if you clear site data.
GTM Load: Check the network tab or the site’s source to confirm the GTM script is included.
Consent Storage: Accept or deny cookies and ensure localStorage is set. You can check your browser’s developer tools to see the saved consentMode.
DataLayer Events: If you have GTM debugging on, confirm the consent_update event fires with the correct parameters.
Swapping GTM Code for a New Client
Clone or Copy salter-bakery.js to a new location.
Search and Replace:
Find any occurrence of GTM-57MP55N.
Replace it with the new container ID, for example GTM-ABC123.
Update the CSS URL (optional) if you prefer a custom style:
Find the line where "https://8x7lt2.csb.app/bakery.css" is referenced.
Replace with the new CSS file URL if needed.
Host the new JS file or rename it and host it for the new client.
Embed the <script> tag on the new client’s site with the updated URL.
Customizing the Banner & Preferences
Banner Text & Styling: Edit the HTML string in cookieConsentHTML.
Consent Categories: Adjust the logic in the event listeners (e.g., rename “marketing” to “advertising” if needed).
Default States: If you want to change the default from denied to granted or vice versa, modify the defaultConsent object in initializeConsentMode().
Contact
If you have any questions, run into issues, or need further customization, please contact: ellis@abitslanted

Note: Always confirm you have the correct GTM container ID for each client. Using the wrong ID could send data to the wrong container. Also ensure you comply with local and international privacy laws (e.g., GDPR, CCPA) when deploying this or any cookie consent mechanism.