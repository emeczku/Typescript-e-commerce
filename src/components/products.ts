import "../styles/products.scss";
import { getData } from "../firebase";
import { Product } from "./classes/Product";
import { DisplayingProducts } from "./classes/DisplayingProducts";

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
            .catch((err) => {
                throw new Error(err);
            });
    }

    render() {
        this.returnPromise();
        window.setTimeout(() => {
            const displaying = new DisplayingProducts(
                this.products,
                this.container
            );
            displaying.display();
        }, 3000);
    }
}

const productsList = new ProductsList();
productsList.render();
