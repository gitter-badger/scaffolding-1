import {BindingEngine} from 'aurelia-binding';
var cli = System._nodeRequire('aurelia-cli');
var fs = System._nodeRequire('fs');

export function configure(aurelia) {
  fs.readFile('node_modules/aurelia-cli/lib/commands/new/new-application.json', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(JSON.parse(data));
  });

  console.log(cli);
  console.log('monterey-scaffold:', aurelia);
  console.log('monterey-scaffold:', BindingEngine);
}
