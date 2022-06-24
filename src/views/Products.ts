import "../styles/products.scss";
import { getData } from "../scripts/firebase";
import { Product } from "../classes/Product";
import { RenderProducts } from "../classes/RenderProducts";
import Cart from "../classes/Cart";

class ProductsList {
    private promise = getData();
    products: Product[] = [];
    container: HTMLElement = document.querySelector(".products-container");

    returnPromise() {
        this.promise
            .then((result) => {
                result.forEach((el: Product) => {
                    this.products.push(
                        new Product(
                            el.image,
                            el.name,
                            el.colorVersion,
                            el.price,
                            el.size
                        )
                    );
                });
            })
            .then(() => {
                const renderProducts = new RenderProducts(
                    this.products,
                    this.container
                );
                renderProducts.render();
                // disable loader
                const loader: HTMLElement =
                    document.querySelector(".loader-container");
                loader.style.display = "none";

                const cart = new Cart();
                cart.checkLocalstorage();
                document.querySelectorAll(".add-to-cart").forEach((el) => {
                    el.addEventListener("click", (event: Event) => {
                        cart.addToCart(event);
                    });
                });
            })
            .catch((err) => {
                throw new Error(err);
            });
    }
}

const productsList = new ProductsList();
productsList.returnPromise();
