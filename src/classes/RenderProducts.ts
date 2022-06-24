import { Product } from "./Product";

export class RenderProducts {
    products: Product[];
    container: HTMLElement;
    constructor(products: Product[], container: HTMLElement) {
        this.products = products;
        this.container = container;
    }

    render() {
        this.products.forEach((product) => {
            const productContainer = document.createElement("div");
            productContainer.classList.add("product");
            this.container.appendChild(productContainer);

            const imgContainer = document.createElement("div");
            productContainer.appendChild(imgContainer);

            const img = document.createElement("img");
            img.setAttribute("src", product.image);
            img.setAttribute("alt", "Product image");
            imgContainer.appendChild(img);

            const cardBody = document.createElement("div");
            cardBody.classList.add("text-body");
            productContainer.appendChild(cardBody);

            const name = document.createElement("p");
            name.classList.add("name");
            name.innerText = product.name;
            cardBody.appendChild(name);

            const colorVersion = document.createElement("p");
            colorVersion.classList.add("color-version");
            colorVersion.innerText = product.colorVersion;
            cardBody.appendChild(colorVersion);

            const cardPrice = document.createElement("p");
            cardPrice.classList.add("price");
            cardPrice.innerText = `${product.price}$`;
            cardBody.appendChild(cardPrice);

            const availableSizes = document.createElement("p");
            cardPrice.classList.add("size");
            cardPrice.innerText = `${product.size}$`;
            cardBody.appendChild(availableSizes);

            const cardButton = document.createElement("button");
            cardButton.classList.add("add-to-cart");
            cardButton.innerText = "Add to cart";
            cardBody.appendChild(cardButton);

            const infoAdded = document.createElement("p");
            infoAdded.classList.add("info-added", "invisible");
            infoAdded.innerText = `Added to cart`;
            cardBody.appendChild(infoAdded);
        });
    }
}
