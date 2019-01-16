export class Product {
    public name = 'unknown';
    public price = 0;


    public getProductName(): string {
        return this.name;
    }

    public getProductPrice(): number {
        return this.price;
    }
}