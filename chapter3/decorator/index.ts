import { Beverage } from './beverage';
import { Coffee } from './coffee';
import { MilkDecorator } from './milkDecorator';

function main() {
    let beverage: Beverage;
    beverage = new Coffee();
    console.log(`${beverage.getDesctiption()}, ${beverage.cost()}`);
    beverage =  new MilkDecorator(beverage);
    console.log(`${beverage.getDesctiption()}, ${beverage.cost()}`);
    beverage =  new MilkDecorator(beverage);
    console.log(`${beverage.getDesctiption()}, ${beverage.cost()}`);
}

main();