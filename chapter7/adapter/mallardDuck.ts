import { Duck } from './duck';

export class MallardDuck implements Duck {
    public quack() {
        console.log('Mallard duck is quacking');
    }

    public fly() {
        console.log('Mallard duck is flying');
    }
}