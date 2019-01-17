import { Turkey } from './turkey';
import { Duck } from './duck';

export class TurkeyAdapter implements Duck {
    private turkey:Turkey;

    constructor(turkey: Turkey) {
        this.turkey = turkey;
    }

    public quack() {
        this.turkey.gobble();
    }

    public fly() {
        this.turkey.fly();
    }
}