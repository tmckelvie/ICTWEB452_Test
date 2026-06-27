const toggleBtn = document.getElementById("theme-toggle");

// 1. Determine the initial theme
const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    // Check system preference if no localStorage exists
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return userPrefersDark ? "dark" : "light";
};

// 2. Apply theme to the document root element
const currentTheme = getInitialTheme();
document.documentElement.setAttribute("data-theme", currentTheme);

// 3. Handle theme click events
toggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";

    // Update the attribute and persist preference
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});
