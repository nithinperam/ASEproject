function augment( receivingClass, givingClass ) {
    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {
            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
            
            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            //      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}
 
var Mixin  = function() {}
Mixin.prototype = {
  login: function(){
    console.log( "User Logged In To Expense Tracker" );
  },
  delete: function(){
    console.log( "Income Page Loaded" );
  },
  register: function(){
    console.log( "User Registered Successfully" );
  },
  update: function(){
    console.log( "User Password Updated" );
  }
};

// A skeleton carAnimator constructor
function User() {
  this.login = function(){
    console.log( "Logged In" );
  };
}
 
// A skeleton personAnimator constructor
function ADU(){
  this.delete = function(){
    console.log("User Deleted");
    this.register = function(){
    console.log("User Registered");    
  };
}
}

augment(User, Mixin);
augment(ADU, Mixin);


// Create a new instance of 
var myAnimator = new User();
myAnimator.login();
//myAnimator.moveDown();
//myAnimator.stop();


var pAnimation = new ADU();
pAnimation.register();
pAnimation.delete();
pAnimation.update();