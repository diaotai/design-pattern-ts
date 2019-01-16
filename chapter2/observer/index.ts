import { Subject } from './subject';
import { Observer } from './observer';

function main() {
    const subject = new Subject();
    const observer0 = new Observer(subject);
    const observer1 = new Observer(subject);
    subject.addNumber(5);
    subject.addNumber(10);
    subject.deleteNumber(5);
}

main();