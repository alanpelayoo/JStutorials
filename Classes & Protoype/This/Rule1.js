function foo() {
  this.a = 2;
}

const obj = {
    foo:foo
};

obj.foo();
console.log(obj.a); // 2