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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3NraWxscy9za2lsbHMuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJuYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJpc0FjdGl2ZSIsImNyZWF0ZWRfZHQiLCJkYXRlIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsZ0JBRFUsNEJBQ09DLElBRFAsRUFDWTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLElBQUksRUFBQ0gsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUR3QjtBQUU3QkMsTUFBQUEsUUFBUSxFQUFDTixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRm9CO0FBRzdCRSxNQUFBQSxVQUFVLEVBQUNQLGdCQUFJUSxJQUFKLEdBQVdILFFBQVg7QUFIa0IsS0FBbEIsQ0FBZjs7QUFEa0Isd0JBT0lMLGdCQUFJUyxRQUFKLENBQWFYLElBQWIsRUFBa0JDLE1BQWxCLENBUEo7QUFBQSxRQU9YVyxLQVBXLGlCQU9YQSxLQVBXO0FBQUEsUUFPTEMsS0FQSyxpQkFPTEEsS0FQSzs7QUFRbEIsUUFBR0QsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE9BQWxCLEVBQTBCO0FBQ3RCLGFBQU87QUFBQ0YsUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQVA7QUFDSDs7QUFDRCxXQUFNO0FBQUNDLE1BQUFBLEtBQUssRUFBTEE7QUFBRCxLQUFOO0FBQ0M7QUFiSyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIHZhbGlkYXRpb25TY2hlbWEoYm9keSl7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICAgICAgICBuYW1lOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgY3JlYXRlZF9kdDpKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7ZXJyb3IsdmFsdWV9ID0gSm9pLnZhbGlkYXRlKGJvZHksc2NoZW1hKTtcclxuICAgICAgICBpZihlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtlcnJvcn07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybnt2YWx1ZX07XHJcbiAgICAgICAgfSxcclxuICAgICAgXHJcbiAgICB9Il19