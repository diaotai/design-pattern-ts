import { Beverage } from './beverage';

export class Coffee extends Beverage {
    public cost(): number {
        return 10;
    }

    public getDesctiption(): string {
        return 'This is a cup of coffee';
    }
}