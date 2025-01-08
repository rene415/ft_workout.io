// menu cliking on mobile
document.querySelectorAll('#menu > ul > li > a').forEach(menuItem => {
    menuItem.addEventListener('click', function(event) {
        // Check if the clicked menu item has a submenu
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            event.preventDefault(); // Prevent navigation
            submenu.classList.toggle('active'); // Toggle the submenu visibility
        }
    });
});

// Add the styles for the "active" class
const style = document.createElement('style');
style.innerHTML = `
    .submenu.active {
        display: block !important;
    }
`;
document.head.appendChild(style);

// JS for workout collapsable section
document.addEventListener("DOMContentLoaded", () => {
    // Select all headings with the collapsible class
    const headings = document.querySelectorAll(".collapsible-heading");

    // Loop through each heading and attach the toggle functionality
    headings.forEach((heading) => {
        const workoutSection = heading.nextElementSibling; // The section that follows the heading

        if (!workoutSection) {
            console.error("Workout section not found for heading:", heading);
            return;
        }

        // Initially collapse all sections
        workoutSection.classList.remove("active");
        heading.classList.add("collapsed");

        // Add click event listener to toggle the corresponding section
        heading.addEventListener("click", () => {
            workoutSection.classList.toggle("active");
            heading.classList.toggle("collapsed");

            // Update icon
            const toggleIcon = heading.querySelector(".toggle-icon");
            toggleIcon.innerHTML = workoutSection.classList.contains("active") ? "&#9650;" : "&#9660;";
        });
    });
});

// video image placeholder for the videos
document.addEventListener("DOMContentLoaded", () => {
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');

    videoPlaceholders.forEach(placeholder => {
        const videoUrl = placeholder.getAttribute('data-video');
        const thumbnail = placeholder.querySelector('img');
        const playButton = placeholder.querySelector('.play-button');

        // Add click event listener to load the iframe
        placeholder.addEventListener('click', () => {
            const iframe = document.createElement('iframe');
            iframe.src = videoUrl;
            iframe.width = "560";
            iframe.height = "315";
            iframe.title = "YouTube video player";
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;

            // Replace the placeholder with the iframe
            placeholder.innerHTML = ''; // Clear the existing content
            placeholder.appendChild(iframe);
        });
    });
});

//Light/Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = "Toggle Light/Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px 15px";
    toggleButton.style.background = "#005f73";
    toggleButton.style.color = "#fff";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";

    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

// Darkmode section
// body.dark-mode {
//     background-color: #333;
//     color: #f0f4f8;
// }

// header.dark-mode, footer.dark-mode {
//     background-color: #222;
// }

// nav.dark-mode {
//     background: #444;
// }
