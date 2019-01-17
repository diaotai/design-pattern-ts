import { SingleInstance } from './single';

function main() {
    let instance: SingleInstance;
    instance = SingleInstance.getSingleInstance();
    instance.addNumber(3);
    instance.addNumber(5);
    console.log(instance.getAllNumbers());
    console.log(instance.popNumber());

    const anotherInstance = SingleInstance.getSingleInstance();
    console.log(anotherInstance.getAllNumbers().length === 1);

}

main();