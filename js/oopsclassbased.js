class Shape{

  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  calculateArea(){return 0.0}
}
class Rectangle extends Shape{
  constructor(position, radius){
    super(position, radius);
  }
  calculateArea(){return this.width*this.height}
}
class Triangle extends Shape{
  constructor(position, radius){
    super(position, radius);
  }
  calculateArea(){return this.width*this.height}
}
