export class Light {
    private status = 'off';

    public turnOnTheLight() {
        this.status = 'on';
    }

    public turnOffTheLight() {
        this.status = 'off';
    }

    public logLightStatus() {
        console.log('The light is ' + this.status);
    }
}