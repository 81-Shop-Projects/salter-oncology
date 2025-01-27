(function () {
    console.log("salter-bakery.js is loaded!");
  
    document.addEventListener("DOMContentLoaded", function () {
      // 1. Add your CSS to the page
      const cssLink = document.createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.href = "https://8x7lt2.csb.app/bakery.css"; // URL to your hosted CSS file
      document.head.appendChild(cssLink);
  
      // 2. Add Google Tag Manager script in the <head>
      const gtmScript = document.createElement("script");
      gtmScript.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-57MP55N');
        `;
      document.head.appendChild(gtmScript);
  
      // 3. Add Google Tag Manager <noscript> in the <body>
      const gtmNoscript = document.createElement("noscript");
      gtmNoscript.innerHTML = `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57MP55N"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `;
      document.body.insertAdjacentElement("afterbegin", gtmNoscript);
  
      // 4. Add your custom HTML content (e.g., cookie consent banner)
      const cookieConsentHTML = `
      <div class="cookie-consent">
    <!-- Banner -->
    <div bk-cc="banner" class="bk-cc-banner_component A2O4W8X6IK" style="display: block;">
      <div class="bk-cc-banner_container">
        <div class="bk-cc-banner_block">
          <div class="bk-cc-banner_text">Cookie Consent</div>
          <p class="bk-cc-banner_paragraph">
            By clicking <strong>"Accept"</strong>, you agree to the storing of cookies on your device
            to enhance site navigation, analyze site usage, and assist in our marketing efforts. View
            our <a href="/privacy-policy" class="bk-cc-banner_text-link">Privacy Policy</a> for more
            information.
          </p>
        </div>
        <div class="bk-cc-banner_buttons-wrapper">
          <a bk-cc="deny" href="#" class="bk-cc-banner_button bk-cc-button-alt">
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/671d5798d57508981d9cb745/6794243c0d9b117864fc28e3_deny-icon3.svg"
              alt="deny icon"
              class="bk-cc-banner_button-icon invert"
            />
            <div class="bk-cc-banner_button-text">Deny</div>
          </a>
          <a bk-cc="allow" href="#" class="bk-cc-banner_button">
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/671d5798d57508981d9cb745/6794243c0d9b117864fc28e2_allow-icon3.svg"
              alt="allow icon"
              class="bk-cc-banner_button-icon"
            />
            <div class="bk-cc-banner_button-text">Accept</div>
          </a>
        </div>
      </div>
    </div>
  
    <!-- Manager link -->
    <div bk-cc="manager" class="bk-cc-manager_component">
      <a bk-cc="open-preferences" href="#" class="bk-cc-manager-link">
        <div class="bk-cc-manager_text">Privacy Preferences</div>
      </a>
    </div>
  
    <!-- Preferences Modal -->
    <div bk-cc-scroll="disable" bk-cc="preferences" class="bk-cc-prefs_component" style="display: none; opacity: 0;">
      <div bk-cc="close" class="bk-cc-prefs_close">
        <div class="bk-cc-preferences_close-icon">
          <svg fill="currentColor" aria-hidden="true" focusable="false" viewBox="0 0 16 16">
            <path d="M9.414 8l4.293-4.293-1.414-1.414L8 6.586 3.707 2.293 2.293 3.707 6.586 8l-4.293 4.293 1.414 1.414L8 9.414l4.293 4.293 1.414-1.414L9.414 8z"></path>
          </svg>
        </div>
      </div>
  
      <div class="bk-cc-prefs_form-wrapper">
        <!-- Form with Webflow-specific bits removed -->
        <form id="cookie-preferences" class="bk-cc-prefs_form" style="display: block;">
          <div class="bk-cc-prefs_header">
            <div class="bk-cc-prefs_title">Privacy Preferences</div>
          </div>
  
          <div class="bk-cc-prefs_content">
            <div class="bk-cc-prefs_option">
              <div class="bk-cc-prefs_toggle-wrapper">
                <div class="bk-cc-prefs_label">Essential cookies</div>
                <div class="bk-cc-prefs_line"></div>
                <div>Required</div>
              </div>
            </div>
  
            <div class="bk-cc-prefs_option">
              <div class="bk-cc-prefs_toggle-wrapper">
                <div class="bk-cc-prefs_label">Marketing cookies</div>
                <div class="bk-cc-prefs_line"></div>
                <label class="custom-checkbox">
                  <input
                    type="checkbox"
                    name="marketing-2"
                    id="marketing-2"
                    bk-cc-checkbox="marketing"
                  />
                  <span class="checkbox-indicator"></span>
                </label>
              </div>
            </div>
  
            <div class="bk-cc-prefs_option">
              <div class="bk-cc-prefs_toggle-wrapper">
                <div class="bk-cc-prefs_label">Personalization cookies</div>
                <div class="bk-cc-prefs_line"></div>
                <label class="custom-checkbox">
                  <input
                    type="checkbox"
                    name="personalization-2"
                    id="personalization-2"
                    bk-cc-checkbox="personalization"
                  />
                  <span class="checkbox-indicator"></span>
                </label>
              </div>
            </div>
  
            <div class="bk-cc-prefs_option">
              <div class="bk-cc-prefs_toggle-wrapper">
                <div class="bk-cc-prefs_label">Analytics cookies</div>
                <div class="bk-cc-prefs_line"></div>
                <label class="custom-checkbox">
                  <input
                    type="checkbox"
                    name="analytics-2"
                    id="analytics-2"
                    bk-cc-checkbox="analytics"
                  />
                  <span class="checkbox-indicator"></span>
                </label>
              </div>
            </div>
          </div>
  
          <div class="bk-cc-prefs_buttons-wrapper">
            <div class="bk-cc-prefs_buttons-block">
              <a bk-cc="deny" href="#" class="bk-cc-prefs_button bk-cc-button-alt">Reject all cookies</a>
              <a bk-cc="allow" href="#" class="bk-cc-prefs_button">Allow all cookies</a>
            </div>
            <input
              type="submit"
              class="bk-cc-prefs_submit"
              value="Save preferences"
            />
          </div>
        </form>
  
        <!-- Overlay to close when clicking outside modal (optional) -->
        <div bk-cc="close" class="bk-cc-prefs_overlay"></div>
      </div>
    </div>
  </div>
  
        `;
      document.body.insertAdjacentHTML("afterbegin", cookieConsentHTML);
  
      // 5. Add custom JavaScript logic
      const dataLayer = window.dataLayer || [];
  
      // Show banner on first visit
      function showBannerIfFirstVisit() {
        const savedConsent = localStorage.getItem("consentMode");
        const banner = document.querySelector('[bk-cc="banner"]');
  
        // Only show the banner if no consent has been saved
        if (!savedConsent && banner) {
          banner.style.display = "block"; // Ensure the banner is visible
          console.log("Banner shown");
        } else if (banner) {
          banner.style.display = "none"; // Hide the banner
          console.log("Banner not shown");
        }
      }
  
      // Initialize consent mode
      function initializeConsentMode() {
        const savedConsent = localStorage.getItem("consentMode");
        const defaultConsent = {
          analytics_storage: "denied",
          ad_storage: "denied",
          functionality_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        };
  
        // Use existing consent if available, otherwise only set default after user interaction
        const consentMode = savedConsent
          ? JSON.parse(savedConsent)
          : defaultConsent;
  
        gtag("consent", "default", consentMode);
        dataLayer.push({ event: "consent_update", consentMode: consentMode });
      }
  
      // Push consent state to GTM
      function gtag() {
        dataLayer.push(arguments);
      }
  
      // Hide banner
      function closeBanner() {
        const banner = document.querySelector('[bk-cc="banner"]');
        if (banner) {
          banner.style.display = "none"; // Hide the banner
        }
      }
  
      // Update consent and push to GTM
      function updateConsent(consentMode) {
        const hasConsent =
          consentMode.analytics_storage === "granted" &&
          consentMode.ad_storage === "granted" &&
          consentMode.functionality_storage === "granted";
  
        localStorage.setItem("consentMode", JSON.stringify(consentMode));
        gtag("consent", "update", consentMode);
        dataLayer.push({
          event: "consent_update",
          consentMode: consentMode,
          hasConsent: hasConsent,
        });
      }
  
      // Handle Allow All Cookies
      function allowAllCookies() {
        const consentMode = {
          analytics_storage: "granted",
          ad_storage: "granted",
          functionality_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
        };
        updateConsent(consentMode);
        closeBanner();
      }
  
      // Handle Deny All Cookies
      function denyAllCookies() {
        const consentMode = {
          analytics_storage: "denied",
          ad_storage: "denied",
          functionality_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        };
        updateConsent(consentMode);
        closeBanner();
      }
  
      // Add event listeners
      function addEventListeners() {
        // Accept All from Banner
        document
          .querySelector('[bk-cc="allow"]')
          ?.addEventListener("click", function (e) {
            e.preventDefault();
            allowAllCookies();
          });
  
        // Deny All from Banner
        document
          .querySelector('[bk-cc="deny"]')
          ?.addEventListener("click", function (e) {
            e.preventDefault();
            denyAllCookies();
          });
  
        // Open Preferences Modal
        document
          .querySelector('[bk-cc="open-preferences"]')
          .addEventListener("click", function (e) {
            e.preventDefault();
            const modal = document.querySelector('[bk-cc="preferences"]');
            if (modal) {
              modal.style.display = "flex"; // Use flex for proper layout
              modal.style.opacity = "1";
            }
          });
  
        // Close Preferences Modal
        document
          .querySelector('[bk-cc="preferences"] [bk-cc="close"]')
          ?.addEventListener("click", function (e) {
            e.preventDefault();
            closePreferences();
          });
  
        // Close Preferences Modal
        function closePreferences() {
          const modal = document.querySelector('[bk-cc="preferences"]');
          if (modal) {
            modal.style.display = "none";
            modal.style.opacity = "0";
          }
        }
        // Reject All Cookies inside Preferences
        document
          .querySelector('[bk-cc="preferences"] [bk-cc="deny"]')
          .addEventListener("click", function (e) {
            e.preventDefault();
            denyAllCookies();
            closePreferences();
          });
  
        // Allow All Cookies inside Preferences
        document
          .querySelector('[bk-cc="preferences"] [bk-cc="allow"]')
          .addEventListener("click", function (e) {
            e.preventDefault();
            allowAllCookies();
            closePreferences();
          });
  
        // Save Preferences
        document
          .querySelector("#cookie-preferences")
          ?.addEventListener("submit", function (e) {
            e.preventDefault();
            const consentMode = {
              analytics_storage: getCheckboxState("analytics-2"),
              ad_storage: getCheckboxState("marketing-2"),
              functionality_storage: getCheckboxState("personalization-2"),
              ad_user_data: getCheckboxState("personalization-2"),
              ad_personalization: getCheckboxState("personalization-2"),
            };
            updateConsent(consentMode);
            closePreferences();
          });
  
        // Close Preferences Modal on Close Button
        document
          .querySelector('[bk-cc="preferences"] [bk-cc="close"]')
          .addEventListener("click", function (e) {
            e.preventDefault();
            closePreferences();
          });
      }
  
      // Helper to Get Checkbox State
      function getCheckboxState(id) {
        const checkbox = document.getElementById(id);
        return checkbox && checkbox.checked ? "granted" : "denied";
      }
  
      // Initialize everything
      showBannerIfFirstVisit(); // Show banner on first visit
      initializeConsentMode(); // Initialize consent mode
      addEventListeners(); // Attach event listeners
    });
  })();
  