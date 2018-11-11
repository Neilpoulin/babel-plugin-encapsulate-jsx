"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeClassNameFromPath = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeClassNameFromPath = function makeClassNameFromPath(path) {
  return path.split(_path.default.sep).reverse().find(function (x) {
    return x !== "index.js";
  }).replace(/(^.*)\.\w+$/, '$1').replace(/\W+/g, '_');
};

exports.makeClassNameFromPath = makeClassNameFromPath;