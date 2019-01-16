import { Product } from './Product';

export class Latte extends Product {
    constructor() {
        super();
        this.name = 'Latte';
        this.price = 10;
    }
}