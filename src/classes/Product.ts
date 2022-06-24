export class Product {
    image: string;
    name: string;
    colorVersion: string;
    price: string;
    size: string;

    constructor(
        image: string,
        name: string,
        colorVersion: string,
        price: string,
        size: string
    ) {
        this.image = image;
        this.name = name;
        this.colorVersion = colorVersion;
        this.price = price;
        this.size = size;
    }
}
