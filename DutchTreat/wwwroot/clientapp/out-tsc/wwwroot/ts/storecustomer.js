// export
var StoreCustomer = /** @class */ (function () {
    //constructor(theName: string) {
    //  this.name = theName;
    //}
    function StoreCustomer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.visits = 0;
    }
    //public showName(name: string): boolean {
    //  alert(name);
    //  return true;
    //}
    StoreCustomer.prototype.showName = function () {
        // alert(this.name);
        alert(this.firstName + " " + this.lastName);
    };
    Object.defineProperty(StoreCustomer.prototype, "name", {
        get: function () {
            return this.ourName;
        },
        set: function (val) {
            this.ourName = val;
        },
        enumerable: true,
        configurable: true
    });
    return StoreCustomer;
}());
//let cust = new StoreCustomer();
////cust.visits = "dsdfdsaff";
//cust.visits = 10;
//# sourceMappingURL=storecustomer.js.map