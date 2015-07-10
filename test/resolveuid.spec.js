// Filename: resolveuid.spec.js  
// Timestamp: 2015.07.09-17:01:01 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

var resolveuid = require('../src/resolveuid');

describe("resolveuid", function () {
  it("should return a uid for a path that associates with a package.json", function () {
    expect(
      resolveuid('./src/resolveuid')
    ).toBe(
      'resolveuid-0.0.1/src/resolveuid'
    );
  });

  it("should return a fullpath uid for a path that does not associate with a package.json", function () {
    expect(
      resolveuid('../src/resolveuid')
    ).toBe(
      resolveuid.getasfullpath('../src/resolveuid')
    );
  });
});
