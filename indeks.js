document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animasi-muncul");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("muncul");
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    observer.observe(el);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animasi-muncul1");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("muncul");
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    observer.observe(el);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href]");
  
  links.forEach(link => {
    const href = link.getAttribute("href");

    // Abaikan link eksternal atau anchor
    if (href.startsWith("http") || href.startsWith("#") || href.includes("mailto")) return;

    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = this.getAttribute("href");

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 500); // waktu fade-out sesuai CSS
    });
  });
});