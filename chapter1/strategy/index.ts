import { Brid } from './bird';
import { Duck } from './duck';
import { Eagle } from './eagle';
import { Ostrich } from './ostrich';


function main() {
    console.log('test start');
    let brid: Brid;
    brid = new Duck();
    console.log('the brid is a duck -------------');
    brid.performBark();
    brid.performFly();
    brid = new Eagle();
    console.log('the brid is an eagle -------------');
    brid.performBark();
    brid.performFly();
    brid = new Ostrich();
    console.log('the brid is an ostrich -------------');
    brid.performBark();
    brid.performFly();
    console.log('done');
}

main();