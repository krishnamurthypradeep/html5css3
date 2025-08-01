// constructor function
function Employee(_name,_age,_designation) {
  this.name = _name;
  this.age = _age;
  this.designation = _designation;

  this.setAge = newAge => this.age = newAge;


}

const employee1 = new Employee('Maryland', 22,'Manager');


// prototype based (object literal or function constructor style)
// class based
