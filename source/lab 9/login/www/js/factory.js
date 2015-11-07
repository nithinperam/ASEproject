// A constructor for defining new expenses
function expenses(options) {
  // some defaults
  this.name = options.name;
  this.amount = options.amount;
  this.date = options.date;
}

// A constructor for defining new incomes
function income(options) {
  this.name = options.name || 4;
  this.amount = options.amount;
  this.date = options.date;
}
 

function Factory() {}
// Define the prototypes and utilities for this factory
 
// Our default vehicleClass is Car
Factory.prototype.EntryType = Income;
 
// Our Factory method for creating new entry instances
Factory.prototype.create = function ( options ) {
  switch(options.EntryType){
    case "Expense":
      this.EntryType = Expense;
      break;
    case "Income":
      this.EntryType = Income;
      break;
    //defaults to Factory.prototype.EntryType (Car)
  }
 
  return new this.EntryType( options );
};
 
// Create an instance of our factory that makes cars
var incomeFactory = new Factory();
var Income = incomeFactory.create( {
            EntryType: "Income",
            amount: "$100",
            name: "Mobile" } );
 
// Test to confirm our car was created using the vehicleClass/prototype Car

// Outputs: true
console.log(Income instanceof Income);
 
// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log(Income);