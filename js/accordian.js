/* =========================
   COLLECTION ACCORDION
========================= */
document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    const icon = btn.querySelector(".icon");

    // Close others
    document.querySelectorAll(".accordion").forEach(otherBtn => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove("active");
        otherBtn.nextElementSibling.style.maxHeight = null;
        otherBtn.querySelector(".icon").textContent = "+";
      }
    });

    // Toggle current
    btn.classList.toggle("active");

    if (btn.classList.contains("active")) {
      panel.style.maxHeight = panel.scrollHeight + "px";
      icon.textContent = "−";
    } else {
      panel.style.maxHeight = null;
      icon.textContent = "+";
    }
  });
});
