import "../../styles/products.scss";
import { getData } from "./firebase";
import { Product } from "../classes/Product";
import { RenderProducts } from "../classes/RenderProducts";

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
            })
            .catch((err) => {
                throw new Error(err);
            });
    }
}

const productsList = new ProductsList();
productsList.returnPromise();
