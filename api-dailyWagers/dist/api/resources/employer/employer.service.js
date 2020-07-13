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
      location: _joi["default"].string().required(),
      contact: _joi["default"].number().required(),
      alternate: _joi["default"].number().required(),
      Office_email: _joi["default"].string().email().required(),
      point_of_contact: _joi["default"].string().required(),
      type: _joi["default"].string().required(),
      isActive: _joi["default"].string().required(),
      created_dt: _joi["default"].date().required()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2VtcGxveWVyL2VtcGxveWVyLnNlcnZpY2UuanMiXSwibmFtZXMiOlsidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJrZXlzIiwibmFtZSIsInN0cmluZyIsInJlcXVpcmVkIiwibG9jYXRpb24iLCJjb250YWN0IiwibnVtYmVyIiwiYWx0ZXJuYXRlIiwiT2ZmaWNlX2VtYWlsIiwiZW1haWwiLCJwb2ludF9vZl9jb250YWN0IiwidHlwZSIsImlzQWN0aXZlIiwiY3JlYXRlZF9kdCIsImRhdGUiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7ZUFDYztBQUNWQSxFQUFBQSxnQkFEVSw0QkFDT0MsSUFEUCxFQUNZO0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0MsZ0JBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUM3QkMsTUFBQUEsSUFBSSxFQUFDSCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRHdCO0FBRTdCQyxNQUFBQSxRQUFRLEVBQUNOLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFGb0I7QUFHN0JFLE1BQUFBLE9BQU8sRUFBQ1AsZ0JBQUlRLE1BQUosR0FBYUgsUUFBYixFQUhxQjtBQUk3QkksTUFBQUEsU0FBUyxFQUFDVCxnQkFBSVEsTUFBSixHQUFhSCxRQUFiLEVBSm1CO0FBSzdCSyxNQUFBQSxZQUFZLEVBQUNWLGdCQUFJSSxNQUFKLEdBQWFPLEtBQWIsR0FBcUJOLFFBQXJCLEVBTGdCO0FBTTdCTyxNQUFBQSxnQkFBZ0IsRUFBQ1osZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQU5ZO0FBTzdCUSxNQUFBQSxJQUFJLEVBQUNiLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFQd0I7QUFTN0JTLE1BQUFBLFFBQVEsRUFBQ2QsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQVRvQjtBQVU3QlUsTUFBQUEsVUFBVSxFQUFDZixnQkFBSWdCLElBQUosR0FBV1gsUUFBWDtBQVZrQixLQUFsQixDQUFmOztBQURrQix3QkFjSUwsZ0JBQUlpQixRQUFKLENBQWFuQixJQUFiLEVBQWtCQyxNQUFsQixDQWRKO0FBQUEsUUFjWG1CLEtBZFcsaUJBY1hBLEtBZFc7QUFBQSxRQWNMQyxLQWRLLGlCQWNMQSxLQWRLOztBQWVsQixRQUFHRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FBbEIsRUFBMEI7QUFDdEIsYUFBTztBQUFDRixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBUDtBQUNIOztBQUNELFdBQU07QUFBQ0MsTUFBQUEsS0FBSyxFQUFMQTtBQUFELEtBQU47QUFDQztBQXBCSyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIHZhbGlkYXRpb25TY2hlbWEoYm9keSl7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICAgICAgICBuYW1lOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgY29udGFjdDpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgYWx0ZXJuYXRlOkpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBPZmZpY2VfZW1haWw6Sm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgcG9pbnRfb2ZfY29udGFjdDpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgdHlwZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICBcclxuICAgICAgICAgICAgaXNBY3RpdmU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGNyZWF0ZWRfZHQ6Sm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm57dmFsdWV9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgfSJdfQ==