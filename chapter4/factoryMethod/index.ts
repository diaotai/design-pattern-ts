import { CoffeeStore } from './coffeeStore';

function main() {
    const coffeeStore = new CoffeeStore();
    coffeeStore.showProduct('unknown');
    coffeeStore.showProduct('latte');
    coffeeStore.showProduct('Cappuccino');
}

main();