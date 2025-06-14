// script.js

const isAdmin = true; // Toggle for admin mode

document.addEventListener("DOMContentLoaded", function () {
  // Admin-only sections
  const adminSections = document.querySelectorAll(".admin-only");
  adminSections.forEach(section => {
    section.style.display = isAdmin ? "block" : "none";
  });

  // Registration form
  const regForm = document.getElementById("registration-form") || document.getElementById("reg-form");
  if (regForm) {
    regForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("reg-name")?.value || "User";
      const email = document.getElementById("reg-email")?.value;
      alert(`Thank you, ${name}! Your registration has been received.`);
      regForm.reset();
    });
  }

  // Event creation
  const createEventBtn = document.getElementById("create-event-btn");
  if (createEventBtn) {
    createEventBtn.addEventListener("click", function () {
      const eventName = document.getElementById("event-name").value;
      const eventDesc = document.getElementById("event-desc").value;
      if (eventName && eventDesc) {
        alert(`New event created: ${eventName}`);
      } else {
        alert("Please fill in all event details.");
      }
    });
  }

  // Video upload
  const uploadVideoBtn = document.getElementById("upload-video-btn");
  if (uploadVideoBtn) {
    uploadVideoBtn.addEventListener("click", function () {
      const videoFile = document.getElementById("video-file").value;
      if (videoFile) {
        alert("Video uploaded successfully.");
      } else {
        alert("Please select a video file.");
      }
    });
  }

  // YouTube link redirect
  const ytLink = document.getElementById("youtube-link");
  if (ytLink) {
    ytLink.href = "https://www.youtube.com/@ohfmantra/featured";
    ytLink.target = "_blank";
  }

  // Event details toggle
  const eventCard = document.getElementById("event-card");
  if (eventCard) {
    eventCard.addEventListener("click", toggleEventDetails);
  }
});

function toggleEventDetails() {
  const details = document.getElementById("event-details");
  if (details) {
    details.style.display = details.style.display === "none" ? "block" : "none";
  }
}

function scrollToRegister(e) {
  e.stopPropagation();
  const regSection = document.getElementById("registration");
  if (regSection) {
    regSection.scrollIntoView({ behavior: "smooth" });
  }
}
