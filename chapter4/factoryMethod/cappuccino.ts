import { Product } from './Product';

export class Cappuccino extends Product {
    constructor() {
        super();
        this.name = 'Cappuccino';
        this.price = 15;
    }
}