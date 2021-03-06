"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applicationRouter = void 0;

var _application = _interopRequireDefault(require("./application.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var applicationRouter = express.Router();
exports.applicationRouter = applicationRouter;
applicationRouter.route('/').get(_application["default"].findAll);
applicationRouter.route('/').post(_application["default"].create);
applicationRouter.route('/:id').put(_application["default"].update)["delete"](_application["default"]["delete"]).get(_application["default"].findOne);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbi5yb3V0ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJhcHBsaWNhdGlvblJvdXRlciIsIlJvdXRlciIsInJvdXRlIiwiZ2V0IiwiYXBwbGljYXRpb25Db250cm9sbGVyIiwiZmluZEFsbCIsInBvc3QiLCJjcmVhdGUiLCJwdXQiLCJ1cGRhdGUiLCJmaW5kT25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7QUFGQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXZCOztBQUlPLElBQU1DLGlCQUFpQixHQUFHRixPQUFPLENBQUNHLE1BQVIsRUFBMUI7O0FBQ1BELGlCQUFpQixDQUFDRSxLQUFsQixDQUF3QixHQUF4QixFQUE2QkMsR0FBN0IsQ0FBaUNDLHdCQUFzQkMsT0FBdkQ7QUFDQUwsaUJBQWlCLENBQUNFLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCSSxJQUE3QixDQUFrQ0Ysd0JBQXNCRyxNQUF4RDtBQUNBUCxpQkFBaUIsQ0FBQ0UsS0FBbEIsQ0FBd0IsTUFBeEIsRUFDQ00sR0FERCxDQUNLSix3QkFBc0JLLE1BRDNCLFlBRVFMLGlDQUZSLEVBR0NELEdBSEQsQ0FHS0Msd0JBQXNCTSxPQUgzQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcblxyXG5pbXBvcnQgYXBwbGljYXRpb25Db250cm9sbGVyIGZyb20gJy4vYXBwbGljYXRpb24uY29udHJvbGxlcic7XHJcblxyXG5leHBvcnQgY29uc3QgYXBwbGljYXRpb25Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5hcHBsaWNhdGlvblJvdXRlci5yb3V0ZSgnLycpLmdldChhcHBsaWNhdGlvbkNvbnRyb2xsZXIuZmluZEFsbCk7XHJcbmFwcGxpY2F0aW9uUm91dGVyLnJvdXRlKCcvJykucG9zdChhcHBsaWNhdGlvbkNvbnRyb2xsZXIuY3JlYXRlKTtcclxuYXBwbGljYXRpb25Sb3V0ZXIucm91dGUoJy86aWQnKVxyXG4ucHV0KGFwcGxpY2F0aW9uQ29udHJvbGxlci51cGRhdGUpXHJcbi5kZWxldGUoYXBwbGljYXRpb25Db250cm9sbGVyLmRlbGV0ZSlcclxuLmdldChhcHBsaWNhdGlvbkNvbnRyb2xsZXIuZmluZE9uZSk7Il19