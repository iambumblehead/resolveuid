resolveuid
==========
**(c)[Bumblehead][0], 2015** [MIT-license](#license)

Given the full path of a file, it constructs an id specific to the file and its npm package. If the same package exists in multiple locations, the same package file in each location results in the same resolveuid.

```javascript
console.log(resolveuid('./src/resolveuid.js'));  // resolveuid-0.0.1/src/resolveuid.js
console.log(resolveuid('../src/resolveuid.js')); // /home/bumblehead/src/resolveuid.js
```

If an npm package.json is found, id is returned in the form _:packagename-:packageversion/rel/path/file.js_, otherwise a full file path relative to the process is returned instead.

Because relative paths will associate with the process using a full path is recommended.


[0]: http://www.bumblehead.com                            "bumblehead"

---------------------------------------------------------
#### <a id="license">License:

 ![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2015 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
