class Hello {
 constructor(public message: string) {}
 hello() {
  return this.message;
 }
};
                        
var h = new Hello("Hello, world!");
var str = h.hello();
console.log(str);
