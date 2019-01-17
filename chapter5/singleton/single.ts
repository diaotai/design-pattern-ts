export class SingleInstance {
    static instance: SingleInstance;

    private data: number[];

    private constructor(data = []) {
        this.data = data;
    }

    public addNumber(num: number) {
        this.data.push(num);
    }

    public popNumber(): number {
        return this.data.pop();
    }

    public getAllNumbers(): number[] {
        return this.data;
    }

    public static getSingleInstance(): SingleInstance {
        if(!SingleInstance.instance) {
            SingleInstance.instance = new SingleInstance();
        } 
        return SingleInstance.instance;
    }
}