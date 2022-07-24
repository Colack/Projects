
/*
  MIT License

  Copyright (c) 2022 Jack Spencer

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

/*
  INSTRUCTIONS AND DETAILS
  
  This software [codeOS], and all tools included, use the &C toolkit.
  The &C toolkit can be found included in the code, and can be used in your
  own projects for later use.
  
  The &C can handle all tasks given, and included inside of the OS. This includes;
  INPUT AND OUTPUT
  REGISTERING AND DELIVERING
  NUMBER SYSTEMS
  TRAVELING
  LOGGING
  SAVING
  TABLES
  SWEEP
*/

/*
  DOCUMENATION
 
  The actual code [For codeOS] includes little to none documentation for the tools it uses.
  Documentation can be found on the source code page, and with any official release,
  included inside of the *./DOCS* folder. [May also be called *./Documentation*]
  Please make sure that you read all of the contents of the *./DOCS/BASICS* folder,
  before using [codeOs] the operating system.
*/

/*
  VERSION DETAILS AND UPDATING
  
  codeOS is built on a version of the JS coding language.
  As long as you have all of the code in a folder, [Or you are using our code page.]
  your code should work fine. You will also need a browser.
  
  Version:
    Alpha Build 1
*/
var tables = [
  {
    val: undefined
  },
  {
    val: undefined
  },
  {
    val: undefined
  },
  {
    val: undefined
  },
  {
    val: undefined
  },
  {
    val: undefined
  },
  {
    val: undefined
  },
  {
    val: undefined
  },
];
function start() {
  
}

function INPUT(input) {
  return input;
}
function OUTPUT(input) {
  console.log(input);
}
function SWEEP() {
  // USE THIS AT YOUR OWN RISK
  for (var i = 0; i < tables.length; i++) {
    console.log(tables[i].val);
    tables[i].val = undefined;
  }
}
SWEEP();
