"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employerRouter = void 0;

var _employer = _interopRequireDefault(require("./employer.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var employerRouter = express.Router();
exports.employerRouter = employerRouter;
employerRouter.route('/').get(_employer["default"].findAll);
employerRouter.route('/').post(_employer["default"].create);
employerRouter.route('/:id').put(_employer["default"].update)["delete"](_employer["default"]["delete"]).get(_employer["default"].findOne);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2VtcGxveWVyL2VtcGxveWVyLnJvdXRlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImVtcGxveWVyUm91dGVyIiwiUm91dGVyIiwicm91dGUiLCJnZXQiLCJlbXBsb3llckNvbnRyb2xsZXIiLCJmaW5kQWxsIiwicG9zdCIsImNyZWF0ZSIsInB1dCIsInVwZGF0ZSIsImZpbmRPbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7OztBQUZBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBdkI7O0FBSU8sSUFBTUMsY0FBYyxHQUFHRixPQUFPLENBQUNHLE1BQVIsRUFBdkI7O0FBQ1BELGNBQWMsQ0FBQ0UsS0FBZixDQUFxQixHQUFyQixFQUEwQkMsR0FBMUIsQ0FBOEJDLHFCQUFtQkMsT0FBakQ7QUFDQUwsY0FBYyxDQUFDRSxLQUFmLENBQXFCLEdBQXJCLEVBQTBCSSxJQUExQixDQUErQkYscUJBQW1CRyxNQUFsRDtBQUNBUCxjQUFjLENBQUNFLEtBQWYsQ0FBcUIsTUFBckIsRUFDQ00sR0FERCxDQUNLSixxQkFBbUJLLE1BRHhCLFlBRVFMLDhCQUZSLEVBR0NELEdBSEQsQ0FHS0MscUJBQW1CTSxPQUh4QiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcblxyXG5pbXBvcnQgZW1wbG95ZXJDb250cm9sbGVyIGZyb20gJy4vZW1wbG95ZXIuY29udHJvbGxlcic7XHJcblxyXG5leHBvcnQgY29uc3QgZW1wbG95ZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5lbXBsb3llclJvdXRlci5yb3V0ZSgnLycpLmdldChlbXBsb3llckNvbnRyb2xsZXIuZmluZEFsbCk7XHJcbmVtcGxveWVyUm91dGVyLnJvdXRlKCcvJykucG9zdChlbXBsb3llckNvbnRyb2xsZXIuY3JlYXRlKTtcclxuZW1wbG95ZXJSb3V0ZXIucm91dGUoJy86aWQnKVxyXG4ucHV0KGVtcGxveWVyQ29udHJvbGxlci51cGRhdGUpXHJcbi5kZWxldGUoZW1wbG95ZXJDb250cm9sbGVyLmRlbGV0ZSlcclxuLmdldChlbXBsb3llckNvbnRyb2xsZXIuZmluZE9uZSk7Il19