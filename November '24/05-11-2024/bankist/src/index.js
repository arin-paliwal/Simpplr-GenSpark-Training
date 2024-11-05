const openAccountBtn = document.getElementById("openAccountBtn");
const openAccountBtnCTA = document.getElementById("openAccountBtnCTA");
const accountModal = document.getElementById("accountModal");
const closeModal = document.getElementById("closeModal");
const accountForm = document.getElementById("accountForm");

// Function to open modal
function openModal() {
  accountModal.classList.remove("hidden");
}

// Function to close modal
function closeModalFunc() {
  accountModal.classList.add("hidden");
}

// Event listeners
openAccountBtn.addEventListener("click", openModal);
openAccountBtnCTA.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModalFunc);

// Close modal when clicking outside
accountModal.addEventListener("click", (e) => {
  if (e.target === accountModal) {
    closeModalFunc();
  }
});

// Form submission
accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(accountForm);
  const data = Object.fromEntries(formData);
  console.log("Account creation data:", data);
  // Here you would typically send this data to your server
  alert("Account created successfully!");
  closeModalFunc();
  accountForm.reset();
});




// section tabs
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabNumber = button.getAttribute("data-tab");

      tabContents.forEach((content) => {
        content.classList.add("hidden");
      });

      document
        .getElementById(`content-${tabNumber}`)
        .classList.remove("hidden");

      tabButtons.forEach((btn) => {
        btn.classList.remove("ring-2", "ring-offset-2", "ring-gray-500");
      });

      button.classList.add("ring-2", "ring-offset-2", "ring-gray-500");
    });
  });

  // Activate the first tab by default
  tabButtons[0].click();
});


// testimonial slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dots = document.querySelectorAll(".dot");

  let currentSlide = 0;
  const slideCount = slides.length;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle("bg-emerald-500", index === currentSlide);
      dot.classList.toggle("bg-gray-300", index !== currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlider();
  }

  // Event Listeners
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
  });

  // Optional: Auto-play
  setInterval(nextSlide, 5000);
});