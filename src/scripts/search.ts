const clickForResults: HTMLButtonElement =
    document.querySelector(".search-button");
const searchInput: HTMLInputElement = document.querySelector(".search-input");

clickForResults.addEventListener("click", (event: Event) => {
    const productsList = Array.from(document.querySelectorAll(".product")) as
        | Element
        | any;
    event.preventDefault();
    console.log(productsList);
    const searchError: HTMLElement = document.querySelector(".search-error");
    for (let product of productsList) {
        let productName = product.innerText.toUpperCase();
        let searchingProducts = searchInput.value.toUpperCase();
        if (productName.includes(searchingProducts)) {
            product.style.display = "grid";
            searchError.style.display = "none";
        } else {
            product.style.display = "none";
            searchError.style.display = "grid";
            window.setTimeout(() => {
                searchError.style.display = "none";
                product.style.display = "grid";
            }, 2500);
        }
    }
});
