import { Product } from "./Product";

class Cart {
    cart: Product[];
    constructor(cart: Product[] = []) {
        this.cart = cart;
    }

    checkLocalstorage() {
        if (localStorage.getItem("cart")) {
            this.cart = JSON.parse(localStorage.getItem("cart"));
        }
    }

    pushProductToCart(product: Product) {
        this.cart.push(product);
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }

    addToCart(event: Event) {
        // getting parent element on clicking button to save data clicked product
        const target = event.target as HTMLElement;
        const parent = target.parentElement;
        const name = parent.querySelector(".name") as HTMLElement;
        const colorVersion = parent.querySelector(
            ".color-version"
        ) as HTMLElement;
        const price = parent.querySelector(".price") as HTMLElement;
        const size = parent.querySelector(".size") as HTMLElement;

        this.pushProductToCart({
            image: "not available",
            name: name.innerText,
            colorVersion: colorVersion.innerText,
            price: price.innerText,
            size: size.innerText,
        });
    }
}

export default Cart;
