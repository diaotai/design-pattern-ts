import { Brid } from './bird';
import { NoFlyBehavior, OstrichBarkBehavior } from './behaviros';

export class Ostrich extends Brid {
    constructor() {
        super();
        this.flyBehavior = new NoFlyBehavior();
        this.barkBehavior = new OstrichBarkBehavior(); 
    }
}