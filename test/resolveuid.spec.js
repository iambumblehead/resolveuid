// Filename: resolveuid.spec.js  
// Timestamp: 2015.12.15-08:19:38 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

var resolveuid = require('../src/resolveuid');

describe("resolveuid", function () {
  it("should return a uid for a path that associates with a package.json", function () {
    expect(
      resolveuid('./src/resolveuid')
    ).toMatch(
      /resolveuid-.\..\..:~\/src\/resolveuid/
    );
  });

  it("should return a uid for a path that associates with a bower.json", function () {
    expect(
      resolveuid('./test/test_bowermodule/build/test_bowermodule.js')
    ).toMatch(
        /test_bowermodule-.\..\..:~\/build\/test_bowermodule\.js/
    );
  });

  /* full path does not match resolveuid path when this module embedded in a parent module
  it("should return a fullpath uid for a path that does not associate with a package.json", function () {
    expect(
      resolveuid('../src/resolveuid')
    ).toBe(
      resolveuid.getasfullpath('../src/resolveuid')
    );
  });
   */

  it("should return a uid for a host path that associates with a package.json", function () {    
    expect(
      resolveuid('path')
    ).toMatch(
        /resolveuid-.\..\..:~\/path/      
    );
  });
});
