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

// CSS for dark mode (add this in styles.css)
/*
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
*/
