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
      employee_id: _joi["default"].number().required(),
      name: _joi["default"].string().required(),
      dob: _joi["default"].date().required(),
      address: _joi["default"].string().required(),
      city: _joi["default"].string().required(),
      State: _joi["default"].string().required(),
      Pin: _joi["default"].number().required(),
      contact: _joi["default"].number().required(),
      email: _joi["default"].string().email().required(),
      Adhar_no: _joi["default"].number().required(),
      experience: _joi["default"].number().required(),
      skills: _joi["default"].string().required(),
      status: _joi["default"].string().required(),
      gender: _joi["default"].string().required(),
      isActive: _joi["default"].number().required(),
      created_date: _joi["default"].string().required()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbXBsb3llZV9pZCIsIm51bWJlciIsInJlcXVpcmVkIiwibmFtZSIsInN0cmluZyIsImRvYiIsImRhdGUiLCJhZGRyZXNzIiwiY2l0eSIsIlN0YXRlIiwiUGluIiwiY29udGFjdCIsImVtYWlsIiwiQWRoYXJfbm8iLCJleHBlcmllbmNlIiwic2tpbGxzIiwic3RhdHVzIiwiZ2VuZGVyIiwiaXNBY3RpdmUiLCJjcmVhdGVkX2RhdGUiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7ZUFDYztBQUNWQSxFQUFBQSxnQkFEVSw0QkFDT0MsSUFEUCxFQUNZO0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0MsZ0JBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUM3QkMsTUFBQUEsV0FBVyxFQUFDSCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRGlCO0FBRTdCQyxNQUFBQSxJQUFJLEVBQUNOLGdCQUFJTyxNQUFKLEdBQWFGLFFBQWIsRUFGd0I7QUFHN0JHLE1BQUFBLEdBQUcsRUFBQ1IsZ0JBQUlTLElBQUosR0FBV0osUUFBWCxFQUh5QjtBQUk3QkssTUFBQUEsT0FBTyxFQUFDVixnQkFBSU8sTUFBSixHQUFhRixRQUFiLEVBSnFCO0FBSzdCTSxNQUFBQSxJQUFJLEVBQUNYLGdCQUFJTyxNQUFKLEdBQWFGLFFBQWIsRUFMd0I7QUFNN0JPLE1BQUFBLEtBQUssRUFBQ1osZ0JBQUlPLE1BQUosR0FBYUYsUUFBYixFQU51QjtBQU83QlEsTUFBQUEsR0FBRyxFQUFDYixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBUHlCO0FBUTdCUyxNQUFBQSxPQUFPLEVBQUNkLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFScUI7QUFTN0JVLE1BQUFBLEtBQUssRUFBQ2YsZ0JBQUlPLE1BQUosR0FBYVEsS0FBYixHQUFxQlYsUUFBckIsRUFUdUI7QUFVN0JXLE1BQUFBLFFBQVEsRUFBQ2hCLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFWb0I7QUFXN0JZLE1BQUFBLFVBQVUsRUFBQ2pCLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFYa0I7QUFZN0JhLE1BQUFBLE1BQU0sRUFBQ2xCLGdCQUFJTyxNQUFKLEdBQWFGLFFBQWIsRUFac0I7QUFhN0JjLE1BQUFBLE1BQU0sRUFBQ25CLGdCQUFJTyxNQUFKLEdBQWFGLFFBQWIsRUFic0I7QUFjN0JlLE1BQUFBLE1BQU0sRUFBQ3BCLGdCQUFJTyxNQUFKLEdBQWFGLFFBQWIsRUFkc0I7QUFlN0JnQixNQUFBQSxRQUFRLEVBQUNyQixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBZm9CO0FBZ0I3QmlCLE1BQUFBLFlBQVksRUFBQ3RCLGdCQUFJTyxNQUFKLEdBQWFGLFFBQWI7QUFoQmdCLEtBQWxCLENBQWY7O0FBRGtCLHdCQW9CSUwsZ0JBQUl1QixRQUFKLENBQWF6QixJQUFiLEVBQWtCQyxNQUFsQixDQXBCSjtBQUFBLFFBb0JYeUIsS0FwQlcsaUJBb0JYQSxLQXBCVztBQUFBLFFBb0JMQyxLQXBCSyxpQkFvQkxBLEtBcEJLOztBQXFCbEIsUUFBR0QsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE9BQWxCLEVBQTBCO0FBQ3RCLGFBQU87QUFBQ0YsUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQVA7QUFDSDs7QUFDRCxXQUFNO0FBQUNDLE1BQUFBLEtBQUssRUFBTEE7QUFBRCxLQUFOO0FBQ0M7QUExQkssQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hKGJvZHkpe1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgICAgICAgZW1wbG95ZWVfaWQ6Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIG5hbWU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGRvYjpKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGFkZHJlc3M6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGNpdHk6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIFN0YXRlOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBQaW46Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGNvbnRhY3Q6Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGVtYWlsOkpvaS5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIEFkaGFyX25vOkpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBleHBlcmllbmNlOkpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBza2lsbHM6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHN0YXR1czpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgZ2VuZGVyOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgY3JlYXRlZF9kYXRlOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm57dmFsdWV9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgfSJdfQ==