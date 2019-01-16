
import { Product } from './Product';
import { Store } from './store';
import { Cappuccino } from './cappuccino';
import { Latte } from './latte';

export class CoffeeStore extends Store {
    constructor() {
        super();
    }

    protected createProduct(type: string): Product {
        if (type === 'latte') {
            return new Latte();
        } else if (type === 'Cappuccino') {
            return new Cappuccino();
        } else {
            return new Product();
        }
    }
}