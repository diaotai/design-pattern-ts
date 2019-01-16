
import { IBarkBehavior, IFlyBehavior } from './bird';

export class NoFlyBehavior implements IFlyBehavior {
    public fly() {
        console.log('I can not fly');
    }
}

export class FlyBehavior implements IFlyBehavior {
    public fly() {
        console.log('I can fly');
    }
}

export class DarkBarkBehavior implements IBarkBehavior {
    public bark() {
        console.log('bark from duck');
    }
}

export class EagleBarkBehavior implements IBarkBehavior {
    public bark() {
        console.log('bark from eagle');
    }
}

export class OstrichBarkBehavior implements IBarkBehavior {
    public bark() {
        console.log('bark from ostrich');
    }
}