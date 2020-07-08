"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;

var _user = _interopRequireDefault(require("./user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var userRouter = express.Router();
exports.userRouter = userRouter;
userRouter.get('/signup', _user["default"].findAll);
userRouter.post('/signup', _user["default"].create);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIucm91dGVyLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwidXNlclJvdXRlciIsIlJvdXRlciIsImdldCIsInVzZXJDb250cm9sbGVyIiwiZmluZEFsbCIsInBvc3QiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQURBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBdkI7O0FBR08sSUFBTUMsVUFBVSxHQUFHRixPQUFPLENBQUNHLE1BQVIsRUFBbkI7O0FBQ1BELFVBQVUsQ0FBQ0UsR0FBWCxDQUFlLFNBQWYsRUFBeUJDLGlCQUFlQyxPQUF4QztBQUNBSixVQUFVLENBQUNLLElBQVgsQ0FBZ0IsU0FBaEIsRUFBMEJGLGlCQUFlRyxNQUF6QyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmltcG9ydCB1c2VyQ29udHJvbGxlciBmcm9tICcuL3VzZXIuY29udHJvbGxlcic7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnVzZXJSb3V0ZXIuZ2V0KCcvc2lnbnVwJyx1c2VyQ29udHJvbGxlci5maW5kQWxsKTtcclxudXNlclJvdXRlci5wb3N0KCcvc2lnbnVwJyx1c2VyQ29udHJvbGxlci5jcmVhdGUpOyJdfQ==