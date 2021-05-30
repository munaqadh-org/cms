"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var React = require("react");
var react_native_1 = require("react-native");
exports.App = function () {
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.Text, { style: styles.welcome }, "Welcome to React Native!"),
        React.createElement(react_native_1.Text, { style: styles.instructions }, "To get started, edit App.tsx")));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
