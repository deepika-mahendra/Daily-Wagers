"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = require("./resources/users/user.router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var restRouter = _express["default"].Router();

exports.restRouter = restRouter;
restRouter.use('/user', _user.userRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJ1c2VyUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDTyxJQUFNQSxVQUFVLEdBQUdDLG9CQUFRQyxNQUFSLEVBQW5COzs7QUFDUEYsVUFBVSxDQUFDRyxHQUFYLENBQWUsT0FBZixFQUF1QkMsZ0JBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IHVzZXJSb3V0ZXIgfSBmcm9tICcuL3Jlc291cmNlcy91c2Vycy91c2VyLnJvdXRlcic7XHJcbmV4cG9ydCBjb25zdCByZXN0Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxucmVzdFJvdXRlci51c2UoJy91c2VyJyx1c2VyUm91dGVyKTsiXX0=