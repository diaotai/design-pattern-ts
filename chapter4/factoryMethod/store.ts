import { Product } from './product';

export abstract class Store {
    public showProduct(type: string) {
        const product = this.createProduct(type);
        console.log(`this product name is ${product.name} and price is ${product.price}`);
    }

    protected abstract createProduct(type): Product;
}