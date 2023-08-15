"use strict";
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3, 4];
let user = [30, 'Ardalan'];
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
let mySize = Size.Medium;
function calculatingTax(income, taxYear) {
    if (taxYear < 5000) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculatingTax(10000, 2022));
let employee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
employee.name = 'mohammad';
//# sourceMappingURL=index.js.map