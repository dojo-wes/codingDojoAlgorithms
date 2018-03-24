# Coding Dojo Algorithms

#### Prerequisites
* node and npm must be installed
  * To check installation, open your terminal and type ```node -v```. If you see your node version number, you're good to go!
  * Same thing with npm! Check using ```npm -v```.

#### Usage
* Add your own functions in the chapter specific folder under students/ using the ```firstname-lastname.js``` naming convention.
* Add your own unit tests (Jest/Jasmine) in the chapter specific spec/ folder, or use the prebuilt unit tests.
  * Make sure they have the .spec.js extension.
* Export your function using ```module.exports = functionName;``` at the end of your function's file.
* Use ```const functionName = require('../student/firstname-lastname');``` at the top of your unit test file to import your function.
* Use ```npm test``` to run unit tests.