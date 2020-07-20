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
userRouter.post('/signup', _user["default"].signup);
userRouter.post('/login', _user["default"].login);
userRouter.route('/').post(_user["default"].create).get(_user["default"].findAll);
userRouter.route('/:id').get(_user["default"].findOne)["delete"](_user["default"]["delete"]).put(_user["default"].update);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIucm91dGVyLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwidXNlclJvdXRlciIsIlJvdXRlciIsInBvc3QiLCJ1c2VyQ29udHJvbGxlciIsInNpZ251cCIsImxvZ2luIiwicm91dGUiLCJjcmVhdGUiLCJnZXQiLCJmaW5kQWxsIiwiZmluZE9uZSIsInB1dCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7O0FBRkEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF2Qjs7QUFJTyxJQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csTUFBUixFQUFuQjs7QUFFUEQsVUFBVSxDQUFDRSxJQUFYLENBQWdCLFNBQWhCLEVBQTBCQyxpQkFBZUMsTUFBekM7QUFDQUosVUFBVSxDQUFDRSxJQUFYLENBQWdCLFFBQWhCLEVBQXlCQyxpQkFBZUUsS0FBeEM7QUFHQUwsVUFBVSxDQUFDTSxLQUFYLENBQWlCLEdBQWpCLEVBQ0NKLElBREQsQ0FDTUMsaUJBQWVJLE1BRHJCLEVBRUNDLEdBRkQsQ0FFS0wsaUJBQWVNLE9BRnBCO0FBR0FULFVBQVUsQ0FBQ00sS0FBWCxDQUFpQixNQUFqQixFQUNDRSxHQURELENBQ0tMLGlCQUFlTyxPQURwQixZQUVTUCwwQkFGVCxFQUdDUSxHQUhELENBR0tSLGlCQUFlUyxNQUhwQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcblxyXG5pbXBvcnQgdXNlckNvbnRyb2xsZXIgZnJvbSAnLi91c2VyLmNvbnRyb2xsZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxudXNlclJvdXRlci5wb3N0KCcvc2lnbnVwJyx1c2VyQ29udHJvbGxlci5zaWdudXApO1xyXG51c2VyUm91dGVyLnBvc3QoJy9sb2dpbicsdXNlckNvbnRyb2xsZXIubG9naW4pO1xyXG5cclxuXHJcbnVzZXJSb3V0ZXIucm91dGUoJy8nKVxyXG4ucG9zdCh1c2VyQ29udHJvbGxlci5jcmVhdGUpXHJcbi5nZXQodXNlckNvbnRyb2xsZXIuZmluZEFsbCk7XHJcbnVzZXJSb3V0ZXIucm91dGUoJy86aWQnKVxyXG4uZ2V0KHVzZXJDb250cm9sbGVyLmZpbmRPbmUpXHJcbiAuZGVsZXRlKHVzZXJDb250cm9sbGVyLmRlbGV0ZSlcclxuLnB1dCh1c2VyQ29udHJvbGxlci51cGRhdGUpOyJdfQ==