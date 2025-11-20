
        const checkboxes = document.querySelectorAll('.filter');
        const cards = document.querySelectorAll('.device-card');
        const sidebar = document.getElementById("sidebar");
        const menuToggle = document.getElementById("menu-toggle");
        const closeSidebar = document.getElementById("close-sidebar");
        

        menuToggle.addEventListener("click", () => {
            sidebar.classList.add("active");
        });

        closeSidebar.addEventListener("click", () => {
            sidebar.classList.remove("active");
        });
       checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selected = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        cards.forEach(card => {
            const categories = card.dataset.category.split(" "); 
            const visible = selected.some(s => categories.includes(s));
            card.style.display = visible ? "block" : "none";
        });
    });
});

// document.querySelectorAll(".device-card").forEach(card => {
//   card.addEventListener("click", () => {
//     const nama = card.querySelector("h3").textContent;
//     window.location.href = `detail.html?device=${encodeURIComponent(nama)}`;
//   });
// });

document.querySelectorAll(".device-card").forEach(card => {
  card.addEventListener("click", () => {
    
    const nama = card.querySelector("h3").textContent;
    const targetUrl = `detail.html?device=${encodeURIComponent(nama)}`;

    // Tambahkan fade-out animation
    document.querySelector(".page").classList.add("fade-out");

    // Tunggu animasi selesai lalu pindah
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 400); // sama dengan transition 0.4s
    
  });
});

document.getElementById("back-btn").addEventListener("click", () => {
    
    document.querySelector(".page").classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 400);

});
