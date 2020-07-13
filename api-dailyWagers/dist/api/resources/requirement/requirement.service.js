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
      description: _joi["default"].string().required(),
      employee_id: _joi["default"].number().required(),
      location: _joi["default"].string().required(),
      skill_req: _joi["default"].string().required(),
      req_workers: _joi["default"].number().required(),
      duration: _joi["default"].number().required(),
      start_date: _joi["default"].date().required(),
      end_date: _joi["default"].date().required(),
      payment: _joi["default"].number().required(),
      benifits: _joi["default"].string().required(),
      url: _joi["default"].string().required(),
      isActive: _joi["default"].string().required(),
      created_date: _joi["default"].date().required()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3JlcXVpcmVtZW50L3JlcXVpcmVtZW50LnNlcnZpY2UuanMiXSwibmFtZXMiOlsidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJrZXlzIiwiZGVzY3JpcHRpb24iLCJzdHJpbmciLCJyZXF1aXJlZCIsImVtcGxveWVlX2lkIiwibnVtYmVyIiwibG9jYXRpb24iLCJza2lsbF9yZXEiLCJyZXFfd29ya2VycyIsImR1cmF0aW9uIiwic3RhcnRfZGF0ZSIsImRhdGUiLCJlbmRfZGF0ZSIsInBheW1lbnQiLCJiZW5pZml0cyIsInVybCIsImlzQWN0aXZlIiwiY3JlYXRlZF9kYXRlIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsZ0JBRFUsNEJBQ09DLElBRFAsRUFDWTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLFdBQVcsRUFBQ0gsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQURpQjtBQUU3QkMsTUFBQUEsV0FBVyxFQUFDTixnQkFBSU8sTUFBSixHQUFhRixRQUFiLEVBRmlCO0FBRzdCRyxNQUFBQSxRQUFRLEVBQUNSLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFIb0I7QUFJN0JJLE1BQUFBLFNBQVMsRUFBQ1QsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUptQjtBQUs3QkssTUFBQUEsV0FBVyxFQUFDVixnQkFBSU8sTUFBSixHQUFhRixRQUFiLEVBTGlCO0FBTTdCTSxNQUFBQSxRQUFRLEVBQUNYLGdCQUFJTyxNQUFKLEdBQWFGLFFBQWIsRUFOb0I7QUFPN0JPLE1BQUFBLFVBQVUsRUFBQ1osZ0JBQUlhLElBQUosR0FBV1IsUUFBWCxFQVBrQjtBQVE3QlMsTUFBQUEsUUFBUSxFQUFDZCxnQkFBSWEsSUFBSixHQUFXUixRQUFYLEVBUm9CO0FBUzdCVSxNQUFBQSxPQUFPLEVBQUNmLGdCQUFJTyxNQUFKLEdBQWFGLFFBQWIsRUFUcUI7QUFVN0JXLE1BQUFBLFFBQVEsRUFBQ2hCLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFWb0I7QUFXN0JZLE1BQUFBLEdBQUcsRUFBQ2pCLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFYeUI7QUFZN0JhLE1BQUFBLFFBQVEsRUFBQ2xCLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFab0I7QUFhN0JjLE1BQUFBLFlBQVksRUFBQ25CLGdCQUFJYSxJQUFKLEdBQVdSLFFBQVg7QUFiZ0IsS0FBbEIsQ0FBZjs7QUFEa0Isd0JBaUJJTCxnQkFBSW9CLFFBQUosQ0FBYXRCLElBQWIsRUFBa0JDLE1BQWxCLENBakJKO0FBQUEsUUFpQlhzQixLQWpCVyxpQkFpQlhBLEtBakJXO0FBQUEsUUFpQkxDLEtBakJLLGlCQWlCTEEsS0FqQks7O0FBa0JsQixRQUFHRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FBbEIsRUFBMEI7QUFDdEIsYUFBTztBQUFDRixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBUDtBQUNIOztBQUNELFdBQU07QUFBQ0MsTUFBQUEsS0FBSyxFQUFMQTtBQUFELEtBQU47QUFDQztBQXZCSyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIHZhbGlkYXRpb25TY2hlbWEoYm9keSl7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgZW1wbG95ZWVfaWQ6Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBza2lsbF9yZXE6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHJlcV93b3JrZXJzOkpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgc3RhcnRfZGF0ZTpKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGVuZF9kYXRlOkpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgcGF5bWVudDpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgYmVuaWZpdHM6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHVybDpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgaXNBY3RpdmU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGNyZWF0ZWRfZGF0ZTpKb2kuZGF0ZSgpLnJlcXVpcmVkKClcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX0gPSBKb2kudmFsaWRhdGUoYm9keSxzY2hlbWEpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJue3ZhbHVlfTtcclxuICAgICAgICB9LFxyXG4gICAgICBcclxuICAgIH0iXX0=