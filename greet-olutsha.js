import chalk from 'chalk';
//import the greet module that is in the current folder

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)
import figlet from 'figlet';
import greet from './greet.js';

figlet(greet('Lee'), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
