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
