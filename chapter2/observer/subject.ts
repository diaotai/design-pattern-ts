import { Observer } from './observer';
import { ISubject } from './interface';

export class Subject implements ISubject {
    private observers: Observer[] = [];
    private data = [3];

    public regisiterObserver(observer: Observer) {
        this.observers.push(observer);
    }

    public removeObserver(removeObserver: Observer) {
        this.observers = this.observers.filter((observer) => {
            return removeObserver !== observer;
        })
    }

    public notifyObservers() {
        console.log('notify observers');
        this.observers.forEach((observer) => {
            observer.update(this.data);
        })
    }

    public addNumber(number: number) {
        this.data.push(number);
        this.notifyObservers();
    }

    public deleteNumber(deleteNumer : number) {
        this.data = this.data.filter((number) => {
            return number !== deleteNumer;
        })
        this.notifyObservers();
    }
}