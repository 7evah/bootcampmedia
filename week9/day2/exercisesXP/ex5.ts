// Base interface
interface User {
    readonly id: number;
    name: string;
    email: string;
  }
  
  // Extended interface with optional property
  interface PremiumUser extends User {
    membershipLevel?: string;
  }
  
  // Function to print user details
  function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    
    if (user.membershipLevel) {
      console.log(`Membership Level: ${user.membershipLevel}`);
    } else {
      console.log("Membership Level: Not specified");
    }
  }
  
  // Example usage
  const user1: PremiumUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    membershipLevel: "Gold",
  };
  
  const user2: PremiumUser = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
  };
  
  printUserDetails(user1);
  console.log("---");
  printUserDetails(user2);
  