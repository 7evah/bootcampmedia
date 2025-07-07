type Person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): Person {
  return {
    name,
    age,
  };
}

const person1 = createPerson("Alice", 30);
console.log(person1); // Output: { name: 'Alice', age: 30 }
