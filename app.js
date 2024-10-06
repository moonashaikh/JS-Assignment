var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function createTask(task) {
    // Logic to create a task
    return {
        data: task,
        message: "Task created successfully!",
        success: true,
    };
}
var Animal = /** @class */ (function () {
    function Animal(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
    Animal.prototype.makeSound = function () {
        return "Some generic sound";
    };
    Animal.prototype.getInfo = function () {
        return "".concat(this.name, " is a ").concat(this.age, "-year-old ").concat(this.species, ".");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, breed) {
        var _this = _super.call(this, name, 'Dog', age) || this; // Call the constructor of the base class
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        return "Woof! Woof!";
    };
    Dog.prototype.getInfo = function () {
        return "".concat(this.name, " is a ").concat(this.age, "-year-old ").concat(this.breed, " dog.");
    };
    return Dog;
}(Animal));
var myDog = new Dog("Buddy", 3, "Golden Retriever");
console.log(myDog.getInfo()); // "Buddy is a 3-year-old Golden Retriever dog."
console.log(myDog.makeSound()); // "Woof! Woof!"
