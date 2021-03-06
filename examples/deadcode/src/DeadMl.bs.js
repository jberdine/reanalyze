// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function thisSpansSeveralLines(x, y) {
  return x + y | 0;
}

var QQ = {
  thisSpansSeveralLines: thisSpansSeveralLines
};

function thisIsInInterface(x) {
  return x;
}

var AA = {
  thisIsInInterface: thisIsInInterface
};

var Bs_version = {
  version: "7.2.0-dev.4",
  header: "// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE",
  package_name: "bs-platform"
};

function map_split_opt(xs, f) {
  if (!xs) {
    return /* tuple */[
            /* [] */0,
            /* [] */0
          ];
  }
  var match = Curry._1(f, xs[0]);
  var d = match[1];
  var c = match[0];
  var match$1 = map_split_opt(xs[1], f);
  var ds = match$1[1];
  var cs = match$1[0];
  return /* tuple */[
          c !== undefined ? /* :: */[
              Caml_option.valFromOption(c),
              cs
            ] : cs,
          d !== undefined ? /* :: */[
              Caml_option.valFromOption(d),
              ds
            ] : ds
        ];
}

var inline_threshold = 10 / 8;

var thisHasSemicolons = 3;

export {
  QQ ,
  AA ,
  thisHasSemicolons ,
  Bs_version ,
  map_split_opt ,
  inline_threshold ,
  
}
/* No side effect */
