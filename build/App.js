"use strict";
exports.__esModule = true;
var MyView_1 = require("./MyView");
var Person_1 = require("./Person");
function App() {
    return new MyView_1.MyView(new Person_1.Person("Melissa", "Buhr")).render();
}
exports["default"] = App;
