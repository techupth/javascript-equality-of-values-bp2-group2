// Exercise #3 Checking Plain Object Function
// Start coding here
function isPlainObject(value) {
  if (value === null) {
    return false;
  } else if (Array.isArray(value)) {
    return false;
  } else if (typeof value === "object") {
    return true;
  } else {
    return "this is not an object";
  }
}

let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);

// ผลลัพธ์ที่ควรได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false
