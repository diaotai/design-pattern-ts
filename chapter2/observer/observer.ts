import { IObserver, ISubject } from './interface';

export class Observer implements IObserver {
    data: any;

    constructor(subject: ISubject) {
        subject.regisiterObserver(this);
    }

    public update(data: any) {
        this.data = data;
        this.log();
    }

    private log() {
        console.log(`I got a new data: ${this.data}`);
    }
}