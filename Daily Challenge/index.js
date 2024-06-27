let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"]
  }
};

// Display groceries using forEach
const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};

displayGroceries(); // Output: pear, apple, banana


const cloneGroceries = () => {
  const user = client; 
  const shopping = groceries; 

  client = "Betty"; 
  shopping.totalPrice = "35$"; 
  shopping.other.paid = false; 
};

cloneGroceries();

console.log("Client:", client); 
console.log("Groceries:", groceries); 
