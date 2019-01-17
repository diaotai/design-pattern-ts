import { Command } from './command';

export class Invoker {
    public sendCommand(command: Command) {
        command.excute();
    }
}