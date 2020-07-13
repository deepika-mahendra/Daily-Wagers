"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = require("body-parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schema = _mongoose["default"].Schema;
var skillSchema = new schema({
  name: {
    type: String,
    required: true
  },
  isActive: {
    type: String
  },
  created_date: {
    type: Date
  }
}, {
  collection: 'skills'
});

var _default = new _mongoose["default"].model('skills', skillSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3NraWxscy9za2lsbHMubW9kZWxzLmpzIl0sIm5hbWVzIjpbInNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwic2tpbGxTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiaXNBY3RpdmUiLCJjcmVhdGVkX2RhdGUiLCJEYXRlIiwiY29sbGVjdGlvbiIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHFCQUFTQyxNQUF4QjtBQUNBLElBQU1DLFdBQVcsR0FBRyxJQUFJSCxNQUFKLENBQVc7QUFDM0JJLEVBQUFBLElBQUksRUFBQztBQUNEQyxJQUFBQSxJQUFJLEVBQUNDLE1BREo7QUFFREMsSUFBQUEsUUFBUSxFQUFDO0FBRlIsR0FEc0I7QUFLM0JDLEVBQUFBLFFBQVEsRUFBQztBQUNMSCxJQUFBQSxJQUFJLEVBQUNDO0FBREEsR0FMa0I7QUFTM0JHLEVBQUFBLFlBQVksRUFBQztBQUNUSixJQUFBQSxJQUFJLEVBQUNLO0FBREk7QUFUYyxDQUFYLEVBYWxCO0FBQUNDLEVBQUFBLFVBQVUsRUFBQztBQUFaLENBYmtCLENBQXBCOztlQWNlLElBQUlWLHFCQUFTVyxLQUFiLENBQW1CLFFBQW5CLEVBQTRCVCxXQUE1QixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgdXJsZW5jb2RlZCB9IGZyb20gJ2JvZHktcGFyc2VyJztcclxuXHJcbmNvbnN0IHNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuY29uc3Qgc2tpbGxTY2hlbWEgPSBuZXcgc2NoZW1hKHtcclxuICAgIG5hbWU6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBpc0FjdGl2ZTp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZF9kYXRlOntcclxuICAgICAgICB0eXBlOkRhdGUsXHJcbiAgICAgICBcclxuICAgIH0sXHJcbn0se2NvbGxlY3Rpb246J3NraWxscyd9KTtcclxuZXhwb3J0IGRlZmF1bHQgbmV3IG1vbmdvb3NlLm1vZGVsKCdza2lsbHMnLHNraWxsU2NoZW1hKTsiXX0=