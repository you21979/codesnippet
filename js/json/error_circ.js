// 循環参照はエラーが出る
var obj1 = {
    ref : null,
};
var obj2 = {
    ref : obj1,
};
obj1.ref = obj2;
console.log(obj1);
JSON.stringify(obj1);
