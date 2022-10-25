let str = "RACE A CAR";
let ptr = str.toLowerCase();
//console.log(ptr);
let str2 = ptr.split("");
//console.log(str2);

let rev = str2.reverse();
//console.log(rev);

let final = rev.join("");
if (final == str) {
  console.log(true);
} else {
  console.log(false);
}
