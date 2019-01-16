import { CondimentDecorator } from './condimentDecorator';
import { Beverage } from './beverage';

export class MilkDecorator extends CondimentDecorator {

    public beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public cost() {
        return this.beverage.cost() + 0.7;
    }

    public getDesctiption() {
        return this.beverage.getDesctiption() + ', milk';
    }
}