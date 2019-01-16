export class Brid {
    public flyBehavior: IFlyBehavior
    public barkBehavior: IBarkBehavior
 
    public performFly() {
        this.flyBehavior.fly();
    }
 
    public performBark() {
        this.barkBehavior.bark();
    }
}
 
export interface IFlyBehavior {
    fly();
}
 
export interface IBarkBehavior {
    bark();
}