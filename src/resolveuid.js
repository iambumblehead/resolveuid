// Filename: resolveuid.js  
// Timestamp: 2015.07.09-16:41:18 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

var fs = require('fs'),
    path = require('path');

var resolveuid = module.exports = (function (o) {

  o = function (filepath) {
    if (typeof filepath !== 'string') {
      throw new Error('filepath must be a string');
    }

    var pkg,
        uidpath = o.getasfullpath(filepath),
        pkgpath = o.getpackagepath(path.dirname(uidpath));

    if (pkgpath) {
      pkg = o.dirgetpackage(pkgpath);
      uidpath = pkg.name + '-' + pkg.version + ':~' + uidpath.replace(pkgpath, '');
    }

    return uidpath;
  };

  o.dirgetpackagepath = function (dirpath) {
    return path.join(dirpath, 'package.json');
  };

  o.dirgetpackage = function (dirpath) {
    return require(o.dirgetpackagepath(dirpath));
  };
  
  o.dirispackage = function (dirpath) {
    return fs.existsSync(o.dirgetpackagepath(dirpath));
  };
  
  o.getpackagepath = function (dirpath) {
    var packagepath = null;

    if (dirpath) {
      if (o.dirispackage(dirpath)) {
        packagepath = dirpath;
      } else if (path.dirname(dirpath) !== dirpath) {
        packagepath = o.getpackagepath(path.dirname(dirpath));
      }
    }

    return packagepath;
  };
  
  o.getasfullpath = function (p) {
    return path.normalize(path.resolve(p))
      .replace(/^~(?=\/)/, process.env.HOME)
      .replace(/^.(?=\/)/, process.cwd());    
  };

  return o;
  
}());
