import { Product } from "./Product";

export class DisplayingProducts {
    products: Product[];
    container: HTMLElement;
    constructor(products: Product[], container: HTMLElement) {
        this.products = products;
        this.container = container;
    }

    display() {
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

            // const cardTitle = document.createElement('h5');
            // cardTitle.classList.add('product-title');
            // cardTitle.innerText = `Category: ${product.category}`;
            // cardBody.appendChild(cardTitle);

            const cardText = document.createElement("p");
            cardText.classList.add("product-title");
            cardText.innerText = product.name;
            cardBody.appendChild(cardText);

            const cardPrice = document.createElement("p");
            cardPrice.classList.add("product-title");
            cardPrice.innerText = `${product.price}$`;
            cardBody.appendChild(cardPrice);

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
