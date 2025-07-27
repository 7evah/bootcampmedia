// Base class
class Animal {
    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    makeSound(): string {
      return `${this.name} makes a sound.`;
    }
  }
  
  // Subclass extending Animal
  class Dog extends Animal {
    constructor(name: string) {
      super(name); // Call the parent constructor
    }
  
    // Override makeSound method
    makeSound(): string {
      return `${this.name} says: bark!`;
    }
  }
  
  // Create an instance of Dog
  const myDog = new Dog("Rex");
  
  console.log(myDog.makeSound()); // Output: Rex says: bark!
  