class Calculator {
    static add(a: number, b: number): number {
      return a + b;
    }
  
    static subtract(a: number, b: number): number {
      return a - b;
    }
  }
  
  // Calling static methods without creating an instance
  console.log(Calculator.add(10, 5));      // Output: 15
  console.log(Calculator.subtract(10, 5)); // Output: 5
  