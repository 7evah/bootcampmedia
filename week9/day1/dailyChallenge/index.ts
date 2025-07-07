function validateUnionType(value: any, allowedTypes: string[]): boolean {
  for (const type of allowedTypes) {
    if (typeof value === type) {
      return true;
    }
  }
  return false;
}

const value1 = 42;
const value2 = "hello";
const value3 = true;
const value4 = { name: "Alice" };

console.log(validateUnionType(value1, ["string", "number"])); // true (number)
console.log(validateUnionType(value2, ["boolean", "object"])); // false (string not allowed)
console.log(validateUnionType(value3, ["boolean", "string"])); // true (boolean)
console.log(validateUnionType(value4, ["object"]));           // true (object)
console.log(validateUnionType(value4, ["string", "number"])); // false (object not allowed)
