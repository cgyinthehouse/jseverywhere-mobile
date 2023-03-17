"use strict";
exports.__esModule = true;
exports.MyView = void 0;
var expo_status_bar_1 = require("expo-status-bar");
var react_1 = require("react");
var react_native_1 = require("react-native");
var MyView = /** @class */ (function () {
    function MyView(person) {
        this.styles = react_native_1.StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
            }
        });
        this.person = person;
    }
    MyView.prototype.render = function () {
        return (<react_native_1.View style={this.styles.container}>
            <react_native_1.Text>This is a Person view of {this.person.firstName} {this.person.lastName}.</react_native_1.Text>
            <expo_status_bar_1.StatusBar style="auto"/>
          </react_native_1.View>);
    };
    return MyView;
}());
exports.MyView = MyView;
