# AgroHire.ng — Agricultural Workforce & Operations Platform

> **Nigeria's Premier Network for Vetted Farm Managers, Certified Tractor Operators, and Commercial Agricultural Operations.**

Built specifically for Victoria's agribusiness venture, **AgroHire.ng** is designed with a **zero-cash, zero-dependency architecture**. It runs instantly in any web browser, requires no paid monthly server subscriptions, and provides direct WhatsApp lead generation for both farm owners and job seekers.

---

## 🌾 Key Features

1. **Agro Job Board & Real-Time Filter Engine:**
   - Filters jobs by Role (Farm Manager, Tractor/Machinery, Poultry, Aquaculture, Crops/Agronomy) and State/Location (Oyo, Ogun, Kaduna, Benue, Lagos, Edo, Ondo, etc.).
   - Displays salary ranges (in ₦), on-farm housing availability, and urgency tags.
2. **Vetted Machinery & Tractor Operator Showcase:**
   - Highlights certified operators with proven tractor models (Massey Ferguson 375, John Deere, Swaraj, Power Tillers) and acreage track records.
   - Bridges your talent network into the high-ticket **equipment sharing & hire** market.
3. **Interactive Modals:**
   - **Apply for Job:** Captures applicant background, phone/WhatsApp, state, skills, and past farm references.
   - **Post a Vacancy:** Allows farm owners to submit job details, choose service packages (Free Standard vs. ₦25,000 VIP Vetted Shortlist), and immediately publishes to the job board.
   - **Join Talent Pool:** Dedicated intake for agriculture graduates (FUNAAB, UI, FUTA, FCAH&PT) and seasoned operators.
4. **WhatsApp Direct Lead Automation:**
   - Pre-formats application and vacancy details and automatically routes them to your WhatsApp Business number.
5. **Local Storage Persistence:**
   - Vacancies submitted on the site are saved immediately in `localStorage` and displayed on the board.

---

## 🚀 How to Run Locally Right Now

You don't need any complex software installed to view or test AgroHire:

1. Open your File Explorer and navigate to:
   `c:\Users\VICTORIA\Documents\APPSOLUTE\agrohire\`
2. Double-click **`index.html`** to open it directly in Google Chrome, Microsoft Edge, or any web browser.
3. Everything—including search, filters, modals, and responsive layout—works instantly!

---

## ⚙️ How to Set Your WhatsApp Number

To receive applications and job postings directly to your WhatsApp Business number:
1. Open [`app.js`](file:///c:/Users/VICTORIA/Documents/APPSOLUTE/agrohire/app.js).
2. Locate line 7:
   ```javascript
   const CONFIG = {
     adminWhatsApp: "2348000000000", // Replace with your actual WhatsApp number in international format (e.g. 2348012345678)
     brandName: "AgroHire.ng"
   };
   ```
3. Replace `"2348000000000"` with your actual WhatsApp phone number (starting with `234` without the leading `0`).

---

## 🌐 How to Deploy Online for 100% Free (₦0.00)

### Option A: Deploy to GitHub Pages (2 Minutes)
1. Initialize a git repository in the `agrohire` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial AgroHire launch"
   ```
2. Create a free repository on [GitHub.com](https://github.com) named `agrohire`.
3. Push your code and enable **GitHub Pages** under `Settings > Pages`.
4. Your site is live for free at: `https://yourusername.github.io/agrohire`!

### Option B: Deploy to Vercel or Netlify (Drag & Drop)
1. Go to [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com).
2. Drag and drop the `agrohire` folder.
3. Netlify or Vercel instantly gives you a live HTTPS web address (e.g. `agrohire.vercel.app`) with zero configuration!

---

## 💡 Zero-Cash Launch Playbook for Victoria (First 30 Days)

1. **Seed Your First 10 Jobs (Days 1–5):**
   - Search Facebook groups (*"Poultry Farmers Nigeria"*, *"Commercial Agriculture Forum"*) and LinkedIn for active farm vacancies.
   - Message the farm owners: *"I saw your opening for a Farm Manager in Ogun State. I run AgroHire.ng. May I feature your vacancy for free to our agricultural community?"*
   - Add them to the site using the **Post a Vacancy** button.
2. **Attract Talent (Days 5–10):**
   - Share screenshots of the job cards on WhatsApp status, LinkedIn, and student/alumni groups from FUNAAB, UI, FUTA, and Federal Colleges of Agriculture.
   - Candidates click to apply via your site.
3. **Monetize with the ₦25,000 VIP Vetted Shortlist (Days 10–30):**
   - For farm owners needing critical roles filled urgently, offer your **Pre-Screened VIP Shortlist** service:
     *"We will interview and verify 2 past employer references and deliver the top 2 candidates to your WhatsApp within 48 hours for ₦25,000."*
   - Close just 4 farm owners a month = **₦100,000/month in pure profit with zero overhead!**
