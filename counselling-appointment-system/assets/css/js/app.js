// ===== Simple Auth (Front-end demo) =====
function requireLogin() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "menu.html";
}

// ===== Counsellor Profiles (5+) =====
const counsellors = [
  {
    id: 1,
    name: "Dr. Aina Sofea",
    specialization: "Academic Stress & Time Management",
    availability: "Mon - Thu (9AM - 4PM)",
    email: "aina.counsellor@gmail.com",
    phone: "012-3456789",
    office: "Room B-203",
    bio: "Supports students dealing with academic pressure and burnout. Helps with planning and coping strategies."
  },
  {
    id: 2,
    name: "Mr. Daniel Lim",
    specialization: "Career Guidance & Internship Prep",
    availability: "Tue - Fri (10AM - 5PM)",
    email: "daniel.lim@gmail.com",
    phone: "013-9876543",
    office: "Room B-205",
    bio: "Helps students explore career pathways, build resumes, and prepare for interviews."
  },
  {
    id: 3,
    name: "Ms. Nur Izzah",
    specialization: "Anxiety & Emotional Support",
    availability: "Mon - Fri (9AM - 3PM)",
    email: "izzah.support@gmail.com",
    phone: "011-22334455",
    office: "Room B-208",
    bio: "Provides emotional support and counselling for anxiety, personal challenges, and wellbeing."
  },
  {
    id: 4,
    name: "Mr. Kumar Raj",
    specialization: "Relationship & Communication",
    availability: "Wed - Sat (11AM - 6PM)",
    email: "kumar.raj@gmail.com",
    phone: "019-1112223",
    office: "Room B-210",
    bio: "Supports students in improving communication and handling relationship difficulties (friends/family)."
  },
  {
    id: 5,
    name: "Ms. Siti Hani",
    specialization: "Self-Confidence & Personal Growth",
    availability: "Mon - Thu (12PM - 6PM)",
    email: "hani.growth@gmail.com",
    phone: "016-7766554",
    office: "Room B-212",
    bio: "Helps students build confidence, motivation, and develop positive self-care habits."
  }
];

function getCounsellorById(id) {
  return counsellors.find(c => c.id === Number(id));
}

function loadCounsellorProfile() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const counsellor = getCounsellorById(id);

  if (!counsellor) return;

  document.getElementById("cName").textContent = counsellor.name;
  document.getElementById("cSpec").textContent = counsellor.specialization;
  document.getElementById("cAvail").textContent = counsellor.availability;
  document.getElementById("cEmail").textContent = counsellor.email;
  document.getElementById("cPhone").textContent = counsellor.phone;
  document.getElementById("cOffice").textContent = counsellor.office;
  document.getElementById("cBio").textContent = counsellor.bio;
}


// Sidebar Toggle
document.getElementById("toggleSidebar")?.addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("d-none");
});

// Chart.js (Appointments)
const ctx = document.getElementById("appointmentsChart");

if (ctx && typeof Chart !== "undefined") {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Appointments",
          data: [15, 14, 18, 22, 30, 34, 40, 45, 52, 60, 66, 72],
          borderWidth: 3,
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } },
    },
  });
}

