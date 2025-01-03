// Light/Dark Mode Toggle
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

// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get all sections you want to monitor
    const sections = document.querySelectorAll('.workout-section');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the section is in the viewport, add the 'visible' class
                entry.target.classList.add('visible');
            } else {
                // When the section is out of the viewport, remove the 'visible' class
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 // Trigger when at least 50% of the section is in view
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

// CSS for dark mode (add this in styles.css)

body.dark-mode {
    background-color: #333;
    color: #f0f4f8;
}

header.dark-mode, footer.dark-mode {
    background-color: #222;
}

nav.dark-mode {
    background: #444;
}
