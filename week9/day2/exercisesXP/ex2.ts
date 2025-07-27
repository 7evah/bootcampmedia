class Product {
    readonly id: number;          
    public name: string;
    public price: number;
  
    constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    getProductInfo(): string {
      return `${this.name} costs $${this.price}`;
    }
  }

  const product1 = new Product(101, "Laptop", 1200);
  
  console.log(product1.getProductInfo()); // : Laptop costs $1200
  
  // product1.id = 202; // Error: Cannot assign to 'id' because it is a read only property.
  
  console.log(`Product ID: ${product1.id}`);
  