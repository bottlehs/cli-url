/**
 * Created by qudgns9@gmail.com on 2021-04-16
 */

let commander = require('commander');
let open = require('open');
let chalk = require('chalk');
let Progress = require('progress'),
    bar = new Progress('running [:bar] :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 10,
        total: 1
    });


exports.browser = function () {
    commander
        .arguments('<browser>')
        .option('-u, --url <url>', 'Address of site you want to go to')
        .action(function(browser){
            bar.tick();
            open(commander.url, browser, function (response) {
                if(bar.complete){
                    console.log(chalk.yellow('\ncomplete\n'));
                }

                if(response instanceof Error){
                    console.log(chalk.red(response.message));
                }
            });
        })
        .parse(process.argv);
};



