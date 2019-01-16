import { Brid } from './bird';
import { FlyBehavior, EagleBarkBehavior } from './behaviros';

export class Eagle extends Brid {
    constructor() {
        super();
        this.barkBehavior = new EagleBarkBehavior();
        this.flyBehavior = new FlyBehavior();
    }
}