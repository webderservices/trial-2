document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 200 * index);
  });
});
