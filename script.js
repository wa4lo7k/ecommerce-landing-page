function updateQuantity(change) {
    const quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.innerText) + change;

    // Ensure quantity does not go below zero
    quantityElement.innerText = Math.max(0, quantity);
}

function changeImage(src, element) {
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".thumbnail");

    mainImage.src = src;

    // Reset styles for all thumbnails
    thumbnails.forEach(img => img.classList.remove("border-2", "border-orange-500", "opacity-50"));

    // Add active styles to clicked thumbnail
    element.classList.add("border-2", "border-orange-500", "opacity-50");
}
