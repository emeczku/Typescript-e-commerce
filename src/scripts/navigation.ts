window.addEventListener("load", () => {
    const navContainer: HTMLElement = document.querySelector(".nav-container");
    const animation: HTMLElement = document.querySelector(".animation");
    const hamburger: HTMLElement = document.querySelector(".hamburger");

    const handleClickHamburger = () => {
        if (navContainer.classList.contains("hidden")) {
            document.querySelector(".nav-container").classList.toggle("hidden");
            animation.style.animation = `1s slideIn`;
        } else if (
            !document
                .querySelector(".nav-container")
                .classList.contains("hidden")
        ) {
            animation.style.animation = `1s slideOut`;
            window.setTimeout(() => {
                navContainer.classList.toggle("hidden");
            }, 1000);
        } else {
            throw new Error("Navigation not working properly");
        }
    };

    hamburger.addEventListener("click", handleClickHamburger);
});
