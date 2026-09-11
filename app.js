/**
 * AgroHire.ng — Application Script
 * Interactive Job Board, Operator Directory, Modal Handlers, LocalStorage & WhatsApp Integration
 */

// Configuration
const CONFIG = {
  adminWhatsApp: "2348000000000", // Victoria's WhatsApp Business contact placeholder
  brandName: "AgroHire.ng"
};

// Initial Seed Jobs (High-demand real Nigerian farm roles)
const INITIAL_JOBS = [
  {
    id: "job-1",
    title: "Commercial Poultry Farm Manager",
    farm: "Emerald Agro Estates Ltd",
    category: "management",
    state: "Oyo",
    town: "Ibadan (Iwo Road / Olodo)",
    salary: "₦180,000 - ₦220,000",
    housing: "Yes, Free 2-Bedroom Farm House",
    type: "Full-Time",
    urgent: true,
    postedDays: "1 day ago",
    description: "Seeking an experienced B.Agric/HND holder to manage our 15,000-capacity broiler and layer farm. Must have at least 4 years experience in brooding, biosecurity, feed formulation, and stock loss prevention.",
    skills: ["Broiler Brooding", "Layer Management", "Vaccination", "Feed Formulation", "Staff Supervision"],
    whatsappContact: "2348000000000"
  },
  {
    id: "job-2",
    title: "Senior Tractor Operator (Massey Ferguson 375 / 385)",
    farm: "Savannah Grain Farms",
    category: "machinery",
    state: "Kaduna",
    town: "Zaria / Kaduna Belt",
    salary: "₦130,000 - ₦160,000",
    housing: "Yes, Free On-Site Accommodation",
    type: "Full-Time",
    urgent: true,
    postedDays: "Just now",
    description: "Urgent need for a seasoned tractor operator for 150-hectare commercial maize and soybean land preparation. Must be skilled in disc ploughing, harrowing, ridging, and basic daily engine maintenance.",
    skills: ["Massey Ferguson 375", "Disc Harrow", "GPS Guiding", "Engine Care", "Ridging"],
    whatsappContact: "2348000000000"
  },
  {
    id: "job-3",
    title: "Catfish Hatchery & Grow-out Supervisor",
    farm: "Lagoon Fisheries Ltd",
    category: "aquaculture",
    state: "Lagos",
    town: "Epe (Agro Park)",
    salary: "₦140,000 - ₦180,000",
    housing: "Yes, Free Farm Quarters",
    type: "Full-Time",
    urgent: false,
    postedDays: "2 days ago",
    description: "Supervise our 24-earthen-pond catfish grow-out facility and concrete hatchery tanks. Responsibilities include induced breeding (hormone stripping), water quality testing, sorting, and sales coordination.",
    skills: ["Induced Breeding", "Fingerling Sorting", "Water Quality", "Smoked Fish Handling"],
    whatsappContact: "2348000000000"
  },
  {
    id: "job-4",
    title: "Commercial Cassava & Maize Agronomist",
    farm: "Sunrise Agro Enterprises",
    category: "agronomy",
    state: "Ogun",
    town: "Abeokuta (Obafemi-Owode LGA)",
    salary: "₦150,000 - ₦200,000",
    housing: "Yes, Free Accommodation",
    type: "Full-Time",
    urgent: false,
    postedDays: "3 days ago",
    description: "Coordinate planting calendar, soil nutrition testing, weed management, and mechanized harvesting for an 80-hectare mechanized cassava plantation linked to starch factories.",
    skills: ["Soil pH Testing", "Herbicide Regimes", "Starch Cassava Varieties", "Fertilizer Blending"],
    whatsappContact: "2348000000000"
  },
  {
    id: "job-5",
    title: "Power Tiller & Boom Sprayer Specialist",
    farm: "GreenValley Horticulture",
    category: "machinery",
    state: "Oyo",
    town: "Iseyin (Oke-Ogun)",
    salary: "₦100,000 - ₦130,000",
    housing: "Yes, Included",
    type: "Full-Time",
    urgent: true,
    postedDays: "3 days ago",
    description: "Looking for an energetic machine handler specialized in walking tractors (power tillers) and motorized knapsack sprayers for high-density cucumber and habanero pepper farming.",
    skills: ["Walking Tractors", "Motorized Sprayer", "Drip Irrigation", "Preventive Maintenance"],
    whatsappContact: "2348000000000"
  },
  {
    id: "job-6",
    title: "Veterinary Technician / Animal Health Officer",
    farm: "Apex Livestock & Dairy Hub",
    category: "veterinary",
    state: "Benue",
    town: "Makurdi",
    salary: "₦160,000 - ₦210,000",
    housing: "Yes, Farm Housing Provided",
    type: "Full-Time",
    urgent: false,
    postedDays: "4 days ago",
    description: "Animal health officer required to manage health profiles for 400 cattle and 800 goats. Responsible for routine vaccination schedules, artificial insemination, and quarantine protocols.",
    skills: ["Vaccination Schedules", "Animal Pathology", "Deworming", "Wound Care"],
    whatsappContact: "2348000000000"
  },
  {
    id: "job-7",
    title: "General Farm Supervisor (Integrated Farm)",
    farm: "Ovia Mega Agro Ltd",
    category: "management",
    state: "Edo",
    town: "Benin City (Ovia North East)",
    salary: "₦150,000 - ₦190,000",
    housing: "Yes, 1-Bedroom Flat on Farm",
    type: "Full-Time",
    urgent: false,
    postedDays: "5 days ago",
    description: "Integrated farm (palm oil, plantain, and piggery) requires a proactive supervisor to oversee 25 field workers, harvest tallying, security, and weekly stock audit.",
    skills: ["Oil Palm Processing", "Labor Coordination", "Inventory Audit", "Piggery Management"],
    whatsappContact: "2348000000000"
  },
  {
    id: "job-8",
    title: "Oil Palm Digester & Mill Operator",
    farm: "Heritage Agro Mills",
    category: "machinery",
    state: "Ondo",
    town: "Ondo Town",
    salary: "₦110,000 - ₦140,000",
    housing: "Yes, Free On-site Housing",
    type: "Full-Time",
    urgent: false,
    postedDays: "6 days ago",
    description: "Experienced operator to handle motorized bunch threshers, digesters, and hydraulic presses during peak palm fruit harvest season.",
    skills: ["Hydraulic Press", "Palm Digester", "Boiler Operation", "Safety Compliance"],
    whatsappContact: "2348000000000"
  }
];

// Seed Vetted Operators
const VETTED_OPERATORS = [
  {
    name: "Ibrahim Garba",
    state: "Kaduna / North Central",
    experience: "8 Years Commercial Driving",
    rating: "4.9 ★ (34 reviews)",
    acres: "1,200+ Hectares Ploughed",
    machines: "Massey Ferguson (290, 375, 385), John Deere 5075E",
    avatar: "🚜",
    badge: "Master Operator"
  },
  {
    name: "Kayode Adeyemi",
    state: "Oyo (Iseyin / Saki / Ogbomoso)",
    experience: "6 Years Tractor & Implements",
    rating: "4.8 ★ (28 reviews)",
    acres: "850+ Hectares Ploughed",
    machines: "Swaraj 855, MF 375, Disc Harrows & Ridgers",
    avatar: "🌾",
    badge: "Vetted & Certified"
  },
  {
    name: "Sunday Ochoche",
    state: "Benue / Middle Belt",
    experience: "5 Years Heavy Mechanization",
    rating: "5.0 ★ (19 reviews)",
    acres: "620+ Hectares Prepared",
    machines: "Combine Harvesters, Boom Sprayers, Heavy Tractors",
    avatar: "⚙️",
    badge: "Harvester Specialist"
  },
  {
    name: "Chukwuma Nwosu",
    state: "Edo / Ogun / South-West",
    experience: "7 Years Walking Tractors & Processing",
    rating: "4.9 ★ (22 reviews)",
    acres: "400+ Hectares (Power Tillers)",
    machines: "Power Tillers, Irrigation Pumps, Palm Presses",
    avatar: "🌱",
    badge: "Tiller & Irrigation Pro"
  }
];

// State Management
let allJobs = [];
let currentCategoryFilter = "all";
let currentSearchKeyword = "";
let currentLocationFilter = "all";

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  loadJobs();
  renderOperators();
  setupEventListeners();
  updateCategoryCounts();
});

// Load Jobs from LocalStorage or Seed Data
function loadJobs() {
  const storedJobs = localStorage.getItem("agrohire_custom_jobs");
  if (storedJobs) {
    try {
      const parsedCustomJobs = JSON.parse(storedJobs);
      allJobs = [...parsedCustomJobs, ...INITIAL_JOBS];
    } catch (e) {
      allJobs = [...INITIAL_JOBS];
    }
  } else {
    allJobs = [...INITIAL_JOBS];
  }
  renderJobs();
}

// Render Jobs into Grid
function renderJobs() {
  const grid = document.getElementById("jobsGrid");
  const emptyState = document.getElementById("emptySearchState");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = allJobs.filter(job => {
    // Category match
    const categoryMatch = (currentCategoryFilter === "all") || (job.category === currentCategoryFilter);

    // Location match
    const locationMatch = (currentLocationFilter === "all") || (job.state.toLowerCase() === currentLocationFilter.toLowerCase());

    // Search Keyword match
    const searchMatch = !currentSearchKeyword || 
      job.title.toLowerCase().includes(currentSearchKeyword.toLowerCase()) ||
      job.description.toLowerCase().includes(currentSearchKeyword.toLowerCase()) ||
      job.skills.some(s => s.toLowerCase().includes(currentSearchKeyword.toLowerCase())) ||
      job.state.toLowerCase().includes(currentSearchKeyword.toLowerCase()) ||
      job.town.toLowerCase().includes(currentSearchKeyword.toLowerCase());

    return categoryMatch && locationMatch && searchMatch;
  });

  if (filtered.length === 0) {
    emptyState.style.display = "block";
    grid.style.display = "none";
  } else {
    emptyState.style.display = "none";
    grid.style.display = "grid";

    filtered.forEach(job => {
      const card = document.createElement("div");
      card.className = "job-card";

      const isUrgent = job.urgent ? '<span class="job-type-badge urgent">Urgent Hiring</span>' : `<span class="job-type-badge">${job.type}</span>`;
      
      const skillsHtml = job.skills.slice(0, 4).map(skill => 
        `<span class="job-skill-tag">${skill}</span>`
      ).join("");

      card.innerHTML = `
        <div>
          <div class="job-card-top">
            <div class="job-farm-badge">
              <div class="farm-avatar">🌾</div>
              <div class="farm-info">
                <h4>${escapeHtml(job.farm)}</h4>
                <span>📍 ${escapeHtml(job.town)}</span>
              </div>
            </div>
            ${isUrgent}
          </div>

          <h3 class="job-title">${escapeHtml(job.title)}</h3>

          <div class="job-salary-row">
            <span class="job-salary">${escapeHtml(job.salary)}</span>
            <span class="job-housing-tag">🏡 ${escapeHtml(job.housing)}</span>
          </div>

          <p class="job-snippet">${escapeHtml(job.description)}</p>

          <div class="job-tags-list">
            ${skillsHtml}
          </div>
        </div>

        <div class="job-card-footer">
          <span class="job-posted-time">🕒 ${escapeHtml(job.postedDays)}</span>
          <div class="job-actions">
            <button class="btn-icon" onclick="shareJobWhatsApp('${job.id}')" title="Share via WhatsApp">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 0.743.966 1.202.664.591 1.224.774 1.397.86.173.086.274.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z"/>
              </svg>
            </button>
            <button class="btn btn-primary btn-sm" onclick="openApplyModal('${job.id}')">
              Quick Apply &rarr;
            </button>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  }
}

// Render Vetted Operators
function renderOperators() {
  const container = document.getElementById("operatorsGrid");
  if (!container) return;

  container.innerHTML = "";
  VETTED_OPERATORS.forEach(op => {
    const card = document.createElement("div");
    card.className = "operator-card";
    card.innerHTML = `
      <div class="operator-header">
        <div class="operator-avatar">${op.avatar}</div>
        <div class="operator-name">
          <h4>${escapeHtml(op.name)}</h4>
          <span class="operator-badge">✓ ${escapeHtml(op.badge)}</span>
        </div>
      </div>

      <div class="operator-meta">
        <div>📍 Base: <strong>${escapeHtml(op.state)}</strong></div>
        <div>⏱ Experience: <strong>${escapeHtml(op.experience)}</strong></div>
        <div>🌾 Verified Work: <strong>${escapeHtml(op.acres)}</strong></div>
        <div>⭐ Performance: <strong>${escapeHtml(op.rating)}</strong></div>
      </div>

      <div class="operator-machines">
        <span>Machines Certified For:</span>
        <p>${escapeHtml(op.machines)}</p>
      </div>

      <button class="btn btn-outline-primary full-width btn-sm" onclick="requestSpecificOperator('${escapeHtml(op.name)}')">
        Hire This Operator &rarr;
      </button>
    `;
    container.appendChild(card);
  });
}

// Event Listeners Setup
function setupEventListeners() {
  // Mobile Nav Toggle
  const toggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Category Filter Pills
  const filterContainer = document.getElementById("categoryFilters");
  if (filterContainer) {
    filterContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-pill");
      if (!btn) return;

      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");

      currentCategoryFilter = btn.dataset.filter;
      renderJobs();
    });
  }
}

// Update Counts
function updateCategoryCounts() {
  const countAll = document.getElementById("countAll");
  if (countAll) countAll.textContent = allJobs.length;
}

// Search Handler
function handleSearch(e) {
  if (e) e.preventDefault();
  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");
  const locationSelect = document.getElementById("locationSelect");

  currentSearchKeyword = searchInput ? searchInput.value.trim() : "";
  currentCategoryFilter = categorySelect ? categorySelect.value : "all";
  currentLocationFilter = locationSelect ? locationSelect.value : "all";

  // Sync category pill
  document.querySelectorAll(".filter-pill").forEach(p => {
    if (p.dataset.filter === currentCategoryFilter) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });

  renderJobs();

  // Scroll smoothly to jobs grid
  const jobsSection = document.getElementById("jobs");
  if (jobsSection) {
    jobsSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Filter By Tag Shortcut
function filterByTag(tag) {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.value = tag;
  }
  currentSearchKeyword = tag;
  currentCategoryFilter = "all";
  currentLocationFilter = "all";

  document.querySelectorAll(".filter-pill").forEach(p => {
    if (p.dataset.filter === "all") p.classList.add("active");
    else p.classList.remove("active");
  });

  renderJobs();

  const jobsSection = document.getElementById("jobs");
  if (jobsSection) {
    jobsSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Reset Filters
function resetFilters() {
  currentSearchKeyword = "";
  currentCategoryFilter = "all";
  currentLocationFilter = "all";

  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");
  const locationSelect = document.getElementById("locationSelect");

  if (searchInput) searchInput.value = "";
  if (categorySelect) categorySelect.value = "all";
  if (locationSelect) locationSelect.value = "all";

  document.querySelectorAll(".filter-pill").forEach(p => {
    if (p.dataset.filter === "all") p.classList.add("active");
    else p.classList.remove("active");
  });

  renderJobs();
}

// Modal Controllers
function openApplyModal(jobId) {
  const job = allJobs.find(j => j.id === jobId);
  if (!job) return;

  document.getElementById("applyJobId").value = job.id;
  document.getElementById("applyJobName").value = `${job.title} at ${job.farm}`;
  document.getElementById("modalJobTitle").textContent = `Apply for: ${job.title}`;
  document.getElementById("modalJobSub").textContent = `${job.farm} • ${job.town} • ${job.salary}`;

  document.getElementById("applyModal").classList.add("active");
}

function openPostJobModal(packageName = "Free Standard") {
  const packageSelect = document.getElementById("postPackage");
  if (packageSelect && packageName) {
    for (let opt of packageSelect.options) {
      if (opt.value.includes(packageName)) {
        opt.selected = true;
        break;
      }
    }
  }
  document.getElementById("postModal").classList.add("active");
}

function openTalentModal() {
  document.getElementById("talentModal").classList.add("active");
}

function openOperatorRequestModal() {
  openWhatsApp("Hello AgroHire! I would like to request a dedicated certified tractor / equipment operator for my farm.");
}

function requestSpecificOperator(operatorName) {
  openWhatsApp(`Hello AgroHire! I am interested in hiring vetted operator ${operatorName} for upcoming land preparation on my farm.`);
}

function closeModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
}

// Close modal on click outside
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    closeModals();
  }
});

// Handle Job Application Submission
function handleJobApplication(e) {
  e.preventDefault();

  const jobId = document.getElementById("applyJobId").value;
  const jobTitle = document.getElementById("applyJobName").value;
  const name = document.getElementById("applicantName").value.trim();
  const phone = document.getElementById("applicantPhone").value.trim();
  const state = document.getElementById("applicantState").value;
  const exp = document.getElementById("applicantExp").value;
  const skills = document.getElementById("applicantSkills").value.trim();
  const pastFarm = document.getElementById("applicantPastFarm").value.trim();
  const note = document.getElementById("applicantNote").value.trim();

  // Create WhatsApp pre-filled message for instant lead delivery
  const msg = `*NEW AGROHIRE APPLICATION*\n` +
    `---------------------------\n` +
    `*Role:* ${jobTitle}\n` +
    `*Applicant Name:* ${name}\n` +
    `*Phone/WhatsApp:* ${phone}\n` +
    `*State:* ${state}\n` +
    `*Experience:* ${exp}\n` +
    `*Skills & Implements:* ${skills || "None specified"}\n` +
    `*Past Reference Farm:* ${pastFarm || "None"}\n` +
    `*Note to Farm:* ${note || "None"}\n` +
    `---------------------------\n` +
    `Submitted via AgroHire.ng`;

  closeModals();
  document.getElementById("jobApplyForm").reset();

  showToast(`Application submitted! Redirecting to WhatsApp to send your application details...`);
  
  setTimeout(() => {
    openWhatsApp(msg);
  }, 1200);
}

// Handle Employer Post Job Submission
function handlePostJob(e) {
  e.preventDefault();

  const farm = document.getElementById("farmName").value.trim();
  const title = document.getElementById("postRoleTitle").value.trim();
  const category = document.getElementById("postCategory").value;
  const stateLoc = document.getElementById("postState").value.trim();
  const salary = document.getElementById("postSalary").value.trim();
  const housing = document.getElementById("postHousing").value;
  const pkg = document.getElementById("postPackage").value;
  const contact = document.getElementById("contactPerson").value.trim();
  const phone = document.getElementById("contactPhone").value.trim();
  const desc = document.getElementById("postDescription").value.trim();

  // Create new job object
  const newJob = {
    id: "custom-" + Date.now(),
    title: title,
    farm: farm,
    category: category,
    state: stateLoc.split("(")[0].trim() || "Nigeria",
    town: stateLoc,
    salary: salary,
    housing: housing,
    type: "Full-Time",
    urgent: true,
    postedDays: "Just now",
    description: desc || `Full-time agricultural role at ${farm} in ${stateLoc}. Accommodation: ${housing}.`,
    skills: ["Verified Vacancy", "Direct Farm Owner"],
    whatsappContact: phone
  };

  // Save to LocalStorage
  let customJobs = [];
  try {
    const stored = localStorage.getItem("agrohire_custom_jobs");
    if (stored) customJobs = JSON.parse(stored);
  } catch (err) {}

  customJobs.unshift(newJob);
  localStorage.setItem("agrohire_custom_jobs", JSON.stringify(customJobs));

  // Reload jobs
  loadJobs();
  updateCategoryCounts();

  closeModals();
  document.getElementById("postJobForm").reset();

  // Create WhatsApp notification for Victoria/Admin
  const adminMsg = `*NEW VACANCY POSTED ON AGROHIRE*\n` +
    `---------------------------\n` +
    `*Farm Name:* ${farm}\n` +
    `*Role:* ${title}\n` +
    `*Location:* ${stateLoc}\n` +
    `*Salary:* ${salary}\n` +
    `*Housing:* ${housing}\n` +
    `*Package Selected:* ${pkg}\n` +
    `*Contact Person:* ${contact} (${phone})\n` +
    `*Details:* ${desc}\n` +
    `---------------------------\n` +
    `Submitted on AgroHire.ng`;

  showToast(`Success! Your vacancy is live on AgroHire.ng.`);

  setTimeout(() => {
    openWhatsApp(adminMsg);
  }, 1500);
}

// Handle Candidate Registration
function handleTalentRegister(e) {
  e.preventDefault();

  const name = document.getElementById("talentName").value.trim();
  const phone = document.getElementById("talentPhone").value.trim();
  const specialty = document.getElementById("talentSpecialty").value;
  const edu = document.getElementById("talentEducation").value;
  const relocate = document.getElementById("talentRelocate").value;
  const summary = document.getElementById("talentSummary").value.trim();

  const msg = `*NEW AGRO-TALENT REGISTRATION*\n` +
    `---------------------------\n` +
    `*Candidate:* ${name}\n` +
    `*WhatsApp:* ${phone}\n` +
    `*Specialization:* ${specialty}\n` +
    `*Education:* ${edu}\n` +
    `*Farm Living Preference:* ${relocate}\n` +
    `*Profile Summary:* ${summary || "None"}\n` +
    `---------------------------\n` +
    `Submitted on AgroHire.ng`;

  closeModals();
  document.getElementById("talentRegisterForm").reset();

  showToast(`Profile received! Adding you to the AgroHire Vetted Talent Network...`);

  setTimeout(() => {
    openWhatsApp(msg);
  }, 1200);
}

// WhatsApp Helper
function openWhatsApp(customText) {
  const phone = CONFIG.adminWhatsApp;
  const encodedText = encodeURIComponent(customText);
  const url = `https://wa.me/${phone}?text=${encodedText}`;
  window.open(url, "_blank");
}

// Share Job on WhatsApp
function shareJobWhatsApp(jobId) {
  const job = allJobs.find(j => j.id === jobId);
  if (!job) return;

  const shareText = `🌾 *Agro Job Alert: ${job.title}*\n` +
    `🏢 *Farm:* ${job.farm}\n` +
    `📍 *Location:* ${job.town}\n` +
    `💰 *Salary:* ${job.salary}\n` +
    `🏡 *Housing:* ${job.housing}\n\n` +
    `Apply directly on AgroHire Nigeria: ${window.location.href}`;

  const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  window.open(url, "_blank");
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// Escape HTML utility for security
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
