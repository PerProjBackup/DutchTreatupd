// export
class StoreCustomer {

  //constructor(theName: string) {
  //  this.name = theName;
  //}

  constructor(private firstName:string, private lastName:string) {

  }

  public visits: number = 0;
  private ourName: string;

  //public showName(name: string): boolean {
  //  alert(name);
  //  return true;
  //}
  public showName() {
   // alert(this.name);
    alert(this.firstName + " " + this.lastName);
  }

  set name(val) {
    this.ourName = val;
  }

  get name() {
    return this.ourName;
  }
}



//let cust = new StoreCustomer();
////cust.visits = "dsdfdsaff";
//cust.visits = 10;