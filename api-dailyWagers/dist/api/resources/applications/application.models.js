"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = require("body-parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schema = _mongoose["default"].Schema;
var applicationSchema = new schema({
  req_id: {
    type: String,
    required: true
  },
  employee_id: {
    type: String,
    required: true
  },
  isActive: {
    type: String
  },
  created_dt: {
    type: Date
  }
}, {
  collection: 'application'
});

var _default = new _mongoose["default"].model('application', applicationSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbi5tb2RlbHMuanMiXSwibmFtZXMiOlsic2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJhcHBsaWNhdGlvblNjaGVtYSIsInJlcV9pZCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtcGxveWVlX2lkIiwiaXNBY3RpdmUiLCJjcmVhdGVkX2R0IiwiRGF0ZSIsImNvbGxlY3Rpb24iLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBR0EsSUFBTUEsTUFBTSxHQUFHQyxxQkFBU0MsTUFBeEI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxJQUFJSCxNQUFKLENBQVc7QUFDakNJLEVBQUFBLE1BQU0sRUFBQztBQUNIQyxJQUFBQSxJQUFJLEVBQUNDLE1BREY7QUFFSEMsSUFBQUEsUUFBUSxFQUFDO0FBRk4sR0FEMEI7QUFLakNDLEVBQUFBLFdBQVcsRUFBQztBQUNSSCxJQUFBQSxJQUFJLEVBQUNDLE1BREc7QUFFUkMsSUFBQUEsUUFBUSxFQUFDO0FBRkQsR0FMcUI7QUFVakNFLEVBQUFBLFFBQVEsRUFBQztBQUNMSixJQUFBQSxJQUFJLEVBQUNDO0FBREEsR0FWd0I7QUFhakNJLEVBQUFBLFVBQVUsRUFBQztBQUNQTCxJQUFBQSxJQUFJLEVBQUNNO0FBREU7QUFic0IsQ0FBWCxFQWlCeEI7QUFBQ0MsRUFBQUEsVUFBVSxFQUFDO0FBQVosQ0FqQndCLENBQTFCOztlQWtCZSxJQUFJWCxxQkFBU1ksS0FBYixDQUFtQixhQUFuQixFQUFpQ1YsaUJBQWpDLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyB1cmxlbmNvZGVkIH0gZnJvbSAnYm9keS1wYXJzZXInO1xyXG5cclxuXHJcbmNvbnN0IHNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuY29uc3QgYXBwbGljYXRpb25TY2hlbWEgPSBuZXcgc2NoZW1hKHtcclxuICAgIHJlcV9pZDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGVtcGxveWVlX2lkOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgaXNBY3RpdmU6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZF9kdDp7XHJcbiAgICAgICAgdHlwZTpEYXRlLFxyXG4gICAgICAgXHJcbiAgICB9LFxyXG59LHtjb2xsZWN0aW9uOidhcHBsaWNhdGlvbid9KTtcclxuZXhwb3J0IGRlZmF1bHQgbmV3IG1vbmdvb3NlLm1vZGVsKCdhcHBsaWNhdGlvbicsYXBwbGljYXRpb25TY2hlbWEpOyJdfQ==