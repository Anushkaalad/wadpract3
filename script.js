document.addEventListener('DOMContentLoaded', function () {
    // Get all thumbnail images
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Loop through each thumbnail
    thumbnails.forEach(thumbnail => {
        // Add click event listener to each thumbnail
        thumbnail.addEventListener('click', function () {
            // Get the larger image source from data attribute
            const largerImageUrl = thumbnail.dataset.largeImage;

            // Display the larger image in a modal or lightbox
            displayImageModal(largerImageUrl);
        });
    });

    // Function to display the larger image in a modal or lightbox
    function displayImageModal(imageUrl) {
        // You can implement your own modal or lightbox functionality here
        // For simplicity, I'll just display an alert with the image URL
        alert('Displaying larger image: ' + imageUrl);
    }
});
