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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL1dvcmtNYXBwaW5nL3dvcmsuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbXBsb3llZV9pZCIsInN0cmluZyIsInJlcXVpcmVkIiwicmVxX2lkIiwiaXNBY3RpdmUiLCJjcmVhdGVkX2R0IiwiZGF0ZSIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUNjO0FBQ1ZBLEVBQUFBLGdCQURVLDRCQUNPQyxJQURQLEVBQ1k7QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxNQUFBQSxXQUFXLEVBQUNILGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFEaUI7QUFFN0JDLE1BQUFBLE1BQU0sRUFBQ04sZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUZzQjtBQUc3QkUsTUFBQUEsUUFBUSxFQUFDUCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBSG9CO0FBSTdCRyxNQUFBQSxVQUFVLEVBQUNSLGdCQUFJUyxJQUFKLEdBQVdKLFFBQVg7QUFKa0IsS0FBbEIsQ0FBZjs7QUFEa0Isd0JBUUlMLGdCQUFJVSxRQUFKLENBQWFaLElBQWIsRUFBa0JDLE1BQWxCLENBUko7QUFBQSxRQVFYWSxLQVJXLGlCQVFYQSxLQVJXO0FBQUEsUUFRTEMsS0FSSyxpQkFRTEEsS0FSSzs7QUFTbEIsUUFBR0QsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE9BQWxCLEVBQTBCO0FBQ3RCLGFBQU87QUFBQ0YsUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQVA7QUFDSDs7QUFDRCxXQUFNO0FBQUNDLE1BQUFBLEtBQUssRUFBTEE7QUFBRCxLQUFOO0FBQ0M7QUFkSyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIHZhbGlkYXRpb25TY2hlbWEoYm9keSl7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICAgICAgICBlbXBsb3llZV9pZDpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgcmVxX2lkOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgY3JlYXRlZF9kdDpKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7ZXJyb3IsdmFsdWV9ID0gSm9pLnZhbGlkYXRlKGJvZHksc2NoZW1hKTtcclxuICAgICAgICBpZihlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtlcnJvcn07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybnt2YWx1ZX07XHJcbiAgICAgICAgfSxcclxuICAgICAgXHJcbiAgICB9Il19