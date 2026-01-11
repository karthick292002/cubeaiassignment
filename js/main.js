/* =========================
   SUBSCRIPTION TOGGLE
========================= */
document.querySelectorAll(".subscription-option").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".subscription-option").forEach(c => {
      c.classList.remove("active");
      const input = c.querySelector("input[type='radio']");
      if (input) input.checked = false;
    });

    card.classList.add("active");
    const input = card.querySelector("input[type='radio']");
    if (input) input.checked = true;
  });
});

/* =========================
   FRAGRANCE SELECTION
========================= */
document.querySelectorAll(".fragrance-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".fragrance-card").forEach(c => {
      c.classList.remove("active");
      c.querySelector("input").checked = false;
    });

    card.classList.add("active");
    card.querySelector("input").checked = true;
  });
});

/* =========================
   IMAGE GALLERY
========================= */
const mainImage = document.getElementById("mainProductImage");
const thumbnails = document.querySelectorAll("#thumbnails img");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentIndex = 0;
const images = [...thumbnails].map(img => img.src);

// Thumbnail click
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    updateGallery();
  });
});

// Arrow controls
if (leftArrow && rightArrow) {
  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
  });
}

function updateGallery() {
  if (!mainImage) return;
  mainImage.src = images[currentIndex];

  thumbnails.forEach(t => t.classList.remove("active"));
  thumbnails[currentIndex].classList.add("active");
}
