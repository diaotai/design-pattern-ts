export abstract class Beverage {
    description = 'unkown beverage';

    public getDesctiption() {
        return this.description;
    }

    public abstract cost(): number;
}