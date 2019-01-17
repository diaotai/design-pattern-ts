import { Light } from './light';
import { Command } from './command';

export class TurnOnCommand extends Command {
    private light: Light;

    constructor(light: Light) {
        super();
        this.light = light;
    }

    public excute() {
        this.light.turnOnTheLight();
    }
}