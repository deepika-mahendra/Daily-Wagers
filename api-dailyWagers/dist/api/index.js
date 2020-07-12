"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = require("./resources/users/user.router");

var _registration = require("./resources/registration/registration.router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var restRouter = _express["default"].Router();

exports.restRouter = restRouter;
restRouter.use('/user', _user.userRouter);
restRouter.use('/emp', _registration.registrationRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJ1c2VyUm91dGVyIiwicmVnaXN0cmF0aW9uUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDTyxJQUFNQSxVQUFVLEdBQUdDLG9CQUFRQyxNQUFSLEVBQW5COzs7QUFDUEYsVUFBVSxDQUFDRyxHQUFYLENBQWUsT0FBZixFQUF1QkMsZ0JBQXZCO0FBQ0FKLFVBQVUsQ0FBQ0csR0FBWCxDQUFlLE1BQWYsRUFBc0JFLGdDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyB1c2VyUm91dGVyIH0gZnJvbSAnLi9yZXNvdXJjZXMvdXNlcnMvdXNlci5yb3V0ZXInO1xyXG5pbXBvcnQgeyByZWdpc3RyYXRpb25Sb3V0ZXIgfSBmcm9tICcuL3Jlc291cmNlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLnJvdXRlcic7XHJcbmV4cG9ydCBjb25zdCByZXN0Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxucmVzdFJvdXRlci51c2UoJy91c2VyJyx1c2VyUm91dGVyKTtcclxucmVzdFJvdXRlci51c2UoJy9lbXAnLHJlZ2lzdHJhdGlvblJvdXRlcik7Il19