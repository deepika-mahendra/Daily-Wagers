"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  validationSchema: function validationSchema(body) {
    var schema = _joi["default"].object().keys({
      name: _joi["default"].string().required(),
      dob: _joi["default"].date().required(),
      address: _joi["default"].string().required(),
      city: _joi["default"].string().required(),
      state: _joi["default"].string().required(),
      pin: _joi["default"].number().required(),
      contact: _joi["default"].number().required(),
      email: _joi["default"].string().email().required(),
      adhar: _joi["default"].number().required(),
      expecience: _joi["default"].number().required(),
      skill: _joi["default"].string().required(),
      gender: _joi["default"].string().required(),
      isActive: _joi["default"]["boolean"]().required()
    });

    var _Joi$validate = _joi["default"].validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return {
        error: error
      };
    }

    return {
      value: value
    };
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJuYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJkb2IiLCJkYXRlIiwiYWRkcmVzcyIsImNpdHkiLCJzdGF0ZSIsInBpbiIsIm51bWJlciIsImNvbnRhY3QiLCJlbWFpbCIsImFkaGFyIiwiZXhwZWNpZW5jZSIsInNraWxsIiwiZ2VuZGVyIiwiaXNBY3RpdmUiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7ZUFDYztBQUNWQSxFQUFBQSxnQkFEVSw0QkFDT0MsSUFEUCxFQUNZO0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0MsZ0JBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUM3QkMsTUFBQUEsSUFBSSxFQUFDSCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRHdCO0FBRTdCQyxNQUFBQSxHQUFHLEVBQUNOLGdCQUFJTyxJQUFKLEdBQVdGLFFBQVgsRUFGeUI7QUFHN0JHLE1BQUFBLE9BQU8sRUFBQ1IsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUhxQjtBQUk3QkksTUFBQUEsSUFBSSxFQUFDVCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBSndCO0FBSzdCSyxNQUFBQSxLQUFLLEVBQUNWLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFMdUI7QUFNN0JNLE1BQUFBLEdBQUcsRUFBQ1gsZ0JBQUlZLE1BQUosR0FBYVAsUUFBYixFQU55QjtBQU83QlEsTUFBQUEsT0FBTyxFQUFDYixnQkFBSVksTUFBSixHQUFhUCxRQUFiLEVBUHFCO0FBUTdCUyxNQUFBQSxLQUFLLEVBQUNkLGdCQUFJSSxNQUFKLEdBQWFVLEtBQWIsR0FBcUJULFFBQXJCLEVBUnVCO0FBUzdCVSxNQUFBQSxLQUFLLEVBQUNmLGdCQUFJWSxNQUFKLEdBQWFQLFFBQWIsRUFUdUI7QUFVN0JXLE1BQUFBLFVBQVUsRUFBQ2hCLGdCQUFJWSxNQUFKLEdBQWFQLFFBQWIsRUFWa0I7QUFXN0JZLE1BQUFBLEtBQUssRUFBQ2pCLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFYdUI7QUFZN0JhLE1BQUFBLE1BQU0sRUFBQ2xCLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFac0I7QUFhN0JjLE1BQUFBLFFBQVEsRUFBQ25CLDZCQUFjSyxRQUFkO0FBYm9CLEtBQWxCLENBQWY7O0FBRGtCLHdCQWlCSUwsZ0JBQUlvQixRQUFKLENBQWF0QixJQUFiLEVBQWtCQyxNQUFsQixDQWpCSjtBQUFBLFFBaUJYc0IsS0FqQlcsaUJBaUJYQSxLQWpCVztBQUFBLFFBaUJMQyxLQWpCSyxpQkFpQkxBLEtBakJLOztBQWtCbEIsUUFBR0QsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE9BQWxCLEVBQTBCO0FBQ3RCLGFBQU87QUFBQ0YsUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQVA7QUFDSDs7QUFDRCxXQUFNO0FBQUNDLE1BQUFBLEtBQUssRUFBTEE7QUFBRCxLQUFOO0FBQ0M7QUF2QkssQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hKGJvZHkpe1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgICAgICAgbmFtZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgZG9iOkpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgYWRkcmVzczpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgY2l0eTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgc3RhdGU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHBpbjpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgY29udGFjdDpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgZW1haWw6Sm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgYWRoYXI6Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGV4cGVjaWVuY2U6Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHNraWxsOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBnZW5kZXI6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOkpvaS5ib29sZWFuKCkucmVxdWlyZWQoKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm57dmFsdWV9O1xyXG4gICAgICAgIH1cclxuICAgIH0iXX0=