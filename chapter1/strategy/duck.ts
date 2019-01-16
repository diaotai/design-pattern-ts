import { NoFlyBehavior, DarkBarkBehavior } from './behaviros';
import { Brid } from './bird';

export class Duck extends Brid {
    public constructor() {
        super();
        this.barkBehavior = new DarkBarkBehavior();
        this.flyBehavior = new NoFlyBehavior();
    }
}