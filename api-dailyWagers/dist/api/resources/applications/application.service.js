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
      employee_id: _joi["default"].string().required(),
      req_id: _joi["default"].string().required(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbi5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJib2R5Iiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsImVtcGxveWVlX2lkIiwic3RyaW5nIiwicmVxdWlyZWQiLCJyZXFfaWQiLCJpc0FjdGl2ZSIsImNyZWF0ZWRfZHQiLCJkYXRlIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsZ0JBRFUsNEJBQ09DLElBRFAsRUFDWTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLFdBQVcsRUFBQ0gsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQURpQjtBQUU3QkMsTUFBQUEsTUFBTSxFQUFDTixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRnNCO0FBRzdCRSxNQUFBQSxRQUFRLEVBQUNQLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFIb0I7QUFJN0JHLE1BQUFBLFVBQVUsRUFBQ1IsZ0JBQUlTLElBQUosR0FBV0osUUFBWDtBQUprQixLQUFsQixDQUFmOztBQURrQix3QkFRSUwsZ0JBQUlVLFFBQUosQ0FBYVosSUFBYixFQUFrQkMsTUFBbEIsQ0FSSjtBQUFBLFFBUVhZLEtBUlcsaUJBUVhBLEtBUlc7QUFBQSxRQVFMQyxLQVJLLGlCQVFMQSxLQVJLOztBQVNsQixRQUFHRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FBbEIsRUFBMEI7QUFDdEIsYUFBTztBQUFDRixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBUDtBQUNIOztBQUNELFdBQU07QUFBQ0MsTUFBQUEsS0FBSyxFQUFMQTtBQUFELEtBQU47QUFDQztBQWRLLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgdmFsaWRhdGlvblNjaGVtYShib2R5KXtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICAgIGVtcGxveWVlX2lkOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICByZXFfaWQ6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2R0OkpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX0gPSBKb2kudmFsaWRhdGUoYm9keSxzY2hlbWEpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJue3ZhbHVlfTtcclxuICAgICAgICB9LFxyXG4gICAgICBcclxuICAgIH0iXX0=