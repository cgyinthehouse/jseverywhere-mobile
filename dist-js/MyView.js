"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MyView = void 0;
var expo_status_bar_1 = require("expo-status-bar");
var react_1 = require("react");
var react_native_1 = require("react-native");
var MyView = /** @class */ (function (_super) {
    __extends(MyView, _super);
    function MyView(person) {
        var _this = _super.call(this, person) || this;
        _this.styles = react_native_1.StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
            }
        });
        _this.person = person;
        return _this;
    }
    MyView.prototype.render = function () {
        return (<react_native_1.View style={this.styles.container}>
            <react_native_1.Text>This is a Person view of {this.person.firstName} {this.person.lastName}.</react_native_1.Text>
            <expo_status_bar_1.StatusBar style="auto"/>
          </react_native_1.View>);
    };
    return MyView;
}(react_1["default"].Component));
exports.MyView = MyView;
