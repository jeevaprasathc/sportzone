// Welcome Message
window.addEventListener("load", () => {
    console.log("🏆 Welcome to SportZone");

    setTimeout(() => {
        alert("🎉 Welcome to SportZone - Your Sports Kits Store!");
    }, 1000);
});

// Add To Cart Buttons
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        button.innerHTML = "✓ Added";

        button.style.backgroundColor = "green";

        alert("🛒 Product Added To Cart Successfully!");

        setTimeout(() => {
            button.innerHTML = "Add To Cart";
            button.style.backgroundColor = "#2563eb";
        }, 2000);
    });
});

// Product Card Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });

});

// Dynamic Date & Time
const footer = document.createElement("div");

footer.innerHTML =
`<p style="text-align:center; margin-top:30px;">
© ${new Date().getFullYear()} SportZone | All Rights Reserved
</p>`;

document.body.appendChild(footer);

// Search Feature (works if search box exists)
const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        cards.forEach((card) => {

            const productName =
                card.querySelector("h2").textContent.toLowerCase();

            if (productName.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

console.log("✅ SportZone Loaded Successfully");
