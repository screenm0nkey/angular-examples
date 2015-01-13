This repo didn't come configured with protractor. I added it.

Install protractor and selenium (http://www.ng-newsletter.com/posts/practical-protractor.html)
*******************************
$ npm install protractor
$ ./node_modules/protractor/bin/webdriver-manager update
$ ./node_modules/protractor/bin/webdriver-manager start



Make sure the app is running on port 8000;
*******************************************
scripts/web-server.js (configure webstorm)



Configure webstorm to run the protractor tests (you can debug them)
**********************************************

node interpreter
/home/nick/nvm/v0.10.26/bin/node

working directory
/home/nick/Sites/angular-examples/requirejs-angular-seed-master/test/protractor/

javascript file
/home/nick/Sites/angular-examples/requirejs-angular-seed-master/node_modules/protractor/lib/cli.js

application parameters
/home/nick/Sites/angular-examples/requirejs-angular-seed-master/test/protractor/protractor.conf.js