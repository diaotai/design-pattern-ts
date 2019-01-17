import { Duck } from './duck';
import { MallardDuck } from './mallardDuck';
import { Turkey } from './turkey';
import { TurkeyAdapter } from './turkeyAdapter';

function main() {
    let duck: Duck;

    duck = new MallardDuck();
    console.log('mallard duck----');
    duck.fly();
    duck.quack();
    
    const turkey = new Turkey();
    duck = new TurkeyAdapter(turkey);
   
    console.log('A turkey adapter');
    duck.fly();
    duck.quack();
}

main();