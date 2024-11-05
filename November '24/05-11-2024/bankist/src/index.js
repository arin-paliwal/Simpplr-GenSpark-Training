var openAccountBtn = document.getElementById("openAccountBtn");
var openAccountBtnCTA = document.getElementById("openAccountBtnCTA");
var accountModal = document.getElementById("accountModal");
var closeModal = document.getElementById("closeModal");
var accountForm = document.getElementById("accountForm");
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
accountModal.addEventListener("click", function (e) {
    if (e.target === accountModal) {
        closeModalFunc();
    }
});
// Form submission
accountForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var formData = new FormData(accountForm);
    var data = Object.fromEntries(formData.entries());
    console.log("Account creation data:", data);
    // Here you would typically send this data to your server
    alert("Account created successfully!");
    closeModalFunc();
    accountForm.reset();
});
// Section tabs
document.addEventListener("DOMContentLoaded", function () {
    var tabButtons = document.querySelectorAll(".tab-button");
    var tabContents = document.querySelectorAll(".tab-content");
    tabButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var _a;
            var tabNumber = button.getAttribute("data-tab");
            tabContents.forEach(function (content) {
                content.classList.add("hidden");
            });
            (_a = document
                .getElementById("content-".concat(tabNumber))) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
            tabButtons.forEach(function (btn) {
                btn.classList.remove("ring-2", "ring-offset-2", "ring-gray-500");
            });
            button.classList.add("ring-2", "ring-offset-2", "ring-gray-500");
        });
    });
    // Activate the first tab by default
    tabButtons[0].click();
});
// Testimonial slider
document.addEventListener("DOMContentLoaded", function () {
    var slider = document.getElementById("slider");
    var slides = document.querySelectorAll(".slide");
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");
    var dots = document.querySelectorAll(".dot");
    var currentSlide = 0;
    var slideCount = slides.length;
    function updateSlider() {
        slider.style.transform = "translateX(-".concat(currentSlide * 100, "%)");
        // Update dots
        dots.forEach(function (dot, index) {
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
    dots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
            currentSlide = index;
            updateSlider();
        });
    });
    // Optional: Auto-play
    setInterval(nextSlide, 5000);
});
