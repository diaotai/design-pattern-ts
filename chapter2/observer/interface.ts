export interface IObserver {
    update (obj: any)
}

export interface ISubject {
    regisiterObserver(observer: IObserver);
    removeObserver(observer: IObserver);
    notifyObservers();
}