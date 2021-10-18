#!/usr/bin/env node

const englishToMoorse = {
  a: "moo mooo ♥",
  b: "mooo moo moo moo ♥",
  c: "mooo moo mooo moo ♥",
  d: "mooo moo moo ♥",
  e: "moo ♥",
  f: "moo moo mooo moo ♥",
  g: "mooo mooo moo ♥",
  h: "moo moo moo moo ♥",
  i: "moo moo ♥",
  j: "moo mooo mooo mooo ♥",
  k: "mooo moo mooo ♥",
  l: "moo mooo moo moo ♥",
  m: "mooo mooo ♥",
  n: "mooo moo ♥",
  o: "mooo mooo mooo ♥",
  p: "moo mooo mooo moo ♥",
  q: "mooo mooo moo mooo ♥",
  r: "moo mooo moo ♥",
  s: "moo moo moo ♥",
  t: "mooo ♥",
  u: "moo moo mooo ♥",
  v: "moo moo moo mooo ♥",
  w: "moo mooo mooo ♥",
  x: "mooo moo moo mooo ♥",
  y: "mooo moo mooo mooo ♥",
  z: "mooo mooo moo moo ♥",
  1: "moo mooo mooo mooo mooo ♥",
  2: "moo moo mooo mooo mooo ♥",
  3: "moo moo moo mooo mooo ♥",
  4: "moo moo moo moo mooo ♥",
  5: "moo moo moo moo moo ♥",
  6: "mooo moo moo moo moo ♥",
  7: "mooo mooo moo moo moo ♥",
  8: "mooo mooo mooo moo moo ♥",
  9: "mooo mooo mooo mooo moo ♥",
  0: "mooo mooo mooo mooo mooo ♥",
};

const moorseToEnglish = {
  "moo mooo": "a",
  "mooo moo moo moo": "b",
  "mooo moo mooo moo": "c",
  "mooo moo moo": "d",
  "moo": "e",
  "moo moo mooo moo": "f",
  "mooo mooo moo": "g",
  "moo moo moo moo": "h",
  "moo moo": "i",
  "moo mooo mooo mooo": "j",
  "mooo moo mooo": "k",
  "moo mooo moo moo": "l",
  "mooo mooo": "m",
  "mooo moo": "n",
  "mooo mooo mooo": "o",
  "moo mooo mooo moo": "p",
  "mooo mooo moo mooo": "q",
  "moo mooo moo": "r",
  "moo moo moo": "s",
  "mooo": "t",
  "moo moo mooo": "u",
  "moo moo moo mooo": "v",
  "moo mooo mooo": "w",
  "mooo moo moo mooo": "x",
  "mooo moo mooo mooo": "y",
  "mooo mooo moo moo": "z",
  "moo mooo mooo mooo mooo": "1",
  "moo moo mooo mooo mooo": "2",
  "moo moo moo mooo mooo": "3",
  "moo moo moo moo mooo": "4",
  "moo moo moo moo moo": "5",
  "mooo moo moo moo moo": "6",
  "mooo mooo moo moo moo": "7",
  "mooo mooo mooo moo moo": "8",
  "mooo mooo mooo mooo moo": "9",
  "mooo mooo mooo mooo mooo": "0",
};

function decodeMoorse(morseCode) {
  return morseCode
    .map((a) =>
      a
        .split("   ")
        .map((c) =>
          c
            .split("♥")
            .map((b) => moorseToEnglish[b.trim()])
            .join("")
        )
        .join(" ")
    )
    .join(" ");
}

function encodeMoorse(englishStr) {
  return englishStr
    .map((word) =>
      word
        .split("")
        .map((l) => englishToMoorse[l])
        .join(" ")
    )
    .join("   ");
}

/* ------------ Get arguments  ------------------------------ */

const [, , ...args] = process.argv;

if (args[0] === "dec") {
  console.log(decodeMoorse(args.splice(1)));
} else if(args[0] === "help") {
    console.log("♥ To encode morse, input your English string as argument. \n♥ To decode morse, input \"dec\" as the first argument, and the moorse string surrounded by quotes as the second argument.")
}
else {
  console.log(encodeMoorse(args));
}
