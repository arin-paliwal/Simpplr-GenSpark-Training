const openAccountBtn = document.getElementById("openAccountBtn") as HTMLButtonElement;
const openAccountBtnCTA = document.getElementById("openAccountBtnCTA") as HTMLButtonElement;
const accountModal = document.getElementById("accountModal") as HTMLDivElement;
const closeModal = document.getElementById("closeModal") as HTMLButtonElement;
const accountForm = document.getElementById("accountForm") as HTMLFormElement;
const loginBTN = document.getElementById("login_btn") as HTMLButtonElement;

// Function to open modal
function openModal(): void {
  accountModal.classList.remove("hidden");
}

// Function to close modal
function closeModalFunc(): void {
  accountModal.classList.add("hidden");
}

// Event listeners
openAccountBtn.addEventListener("click", openModal);
openAccountBtnCTA.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModalFunc);
loginBTN.addEventListener("click", () => {
  window.location.href = "/November%20'24/05-11-2024/transactions/index.html";
});

// Close modal when clicking outside
accountModal.addEventListener("click", (e: MouseEvent) => {
  if (e.target === accountModal) {
    closeModalFunc();
  }
});

// Form submission
accountForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const formData = new FormData(accountForm);
  const data = Object.fromEntries(formData.entries());
  let accounts = JSON.parse(localStorage.getItem("accounts") || "[]");
  accounts.push(data);
  localStorage.setItem("accounts", JSON.stringify(accounts));
  closeModalFunc();
  accountForm.reset();
  window.location.href = "/November%20'24/05-11-2024/transactions/index.html";
});

// Section tabs
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll<HTMLButtonElement>(".tab-button");
  const tabContents = document.querySelectorAll<HTMLDivElement>(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabNumber = button.getAttribute("data-tab");

      tabContents.forEach((content) => {
        content.classList.add("hidden");
      });

      document
        .getElementById(`content-${tabNumber}`)
        ?.classList.remove("hidden");

      tabButtons.forEach((btn) => {
        btn.classList.remove("ring-2", "ring-offset-2", "ring-gray-500");
      });

      button.classList.add("ring-2", "ring-offset-2", "ring-gray-500");
    });
  });

  tabButtons[0].click();
});

// Testimonial slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider") as HTMLDivElement;
  const slides = document.querySelectorAll<HTMLDivElement>(".slide");
  const prevBtn = document.getElementById("prevBtn") as HTMLButtonElement;
  const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;
  const dots = document.querySelectorAll<HTMLButtonElement>(".dot");

  let currentSlide = 0;
  const slideCount = slides.length;

  function updateSlider(): void {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("bg-emerald-500", index === currentSlide);
      dot.classList.toggle("bg-gray-300", index !== currentSlide);
    });
  }

  function nextSlide(): void {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
  }

  function prevSlide(): void {
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

  setInterval(nextSlide, 5000);
});
