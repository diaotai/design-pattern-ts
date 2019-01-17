import { Light } from './light';
import { Invoker } from './invoker';
import { TurnOnCommand } from './turnOnCommand';
import { TurnOffCommand } from './turnOffCommand';

function main() {
    const light = new Light();
    const invoker = new Invoker();
    light.logLightStatus();

    const turnOnCommand = new TurnOnCommand(light);
    const turnOffCommand = new TurnOffCommand(light);
    
    invoker.sendCommand(turnOnCommand);
    light.logLightStatus();
    invoker.sendCommand(turnOffCommand);
    light.logLightStatus();
}

main();