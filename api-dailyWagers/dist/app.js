"use strict";

var _express = _interopRequireDefault(require("express"));

var _api = require("./api");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import '@babel/polyfill';
_mongoose["default"].Promise = global.Promise;

_mongoose["default"].connect('mongodb://localhost/dailyWagers');

var app = (0, _express["default"])();
var PORT = 3000;
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use('/api', _api.restRouter);
app.use(function (req, res, next) {
  var error = new Error("Not Found");
  error.status = 404;
  error.message = "Invalid route.";
  next(error);
});
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
});
app.use(function (res, req, next) {
  console.log("Middleware before Api call");
  next();
});
app.listen(PORT, function () {
  console.log("Server is running at port number ".concat(PORT));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJQcm9taXNlIiwiZ2xvYmFsIiwiY29ubmVjdCIsImFwcCIsIlBPUlQiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInJlc3RSb3V0ZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZXJyb3IiLCJFcnJvciIsInN0YXR1cyIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBTEE7QUFNQUEscUJBQVNDLE9BQVQsR0FBbUJDLE1BQU0sQ0FBQ0QsT0FBMUI7O0FBQ0FELHFCQUFTRyxPQUFULENBQWlCLGlDQUFqQjs7QUFDQSxJQUFNQyxHQUFHLEdBQUcsMEJBQVo7QUFDQSxJQUFNQyxJQUFJLEdBQUcsSUFBYjtBQUNBRCxHQUFHLENBQUNFLEdBQUosQ0FBUSx1QkFBUjtBQUVBRixHQUFHLENBQUNFLEdBQUosQ0FBUUMsdUJBQVdDLElBQVgsRUFBUjtBQUNBSixHQUFHLENBQUNFLEdBQUosQ0FBUUMsdUJBQVdFLFVBQVgsQ0FBc0I7QUFDMUJDLEVBQUFBLFFBQVEsRUFBQztBQURpQixDQUF0QixDQUFSO0FBR0FOLEdBQUcsQ0FBQ0UsR0FBSixDQUFRLE1BQVIsRUFBZUssZUFBZjtBQUlBUCxHQUFHLENBQUNFLEdBQUosQ0FBUSxVQUFDTSxHQUFELEVBQUtDLEdBQUwsRUFBU0MsSUFBVCxFQUFnQjtBQUNwQixNQUFNQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVLFdBQVYsQ0FBZDtBQUNBRCxFQUFBQSxLQUFLLENBQUNFLE1BQU4sR0FBYyxHQUFkO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0csT0FBTixHQUFjLGdCQUFkO0FBQ0FKLEVBQUFBLElBQUksQ0FBQ0MsS0FBRCxDQUFKO0FBQ0gsQ0FMRDtBQU9BWCxHQUFHLENBQUNFLEdBQUosQ0FBUSxVQUFDUyxLQUFELEVBQU9ILEdBQVAsRUFBV0MsR0FBWCxFQUFlQyxJQUFmLEVBQXNCO0FBQzFCRCxFQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBV0YsS0FBSyxDQUFDRSxNQUFOLElBQWdCLEdBQTNCO0FBQ0EsU0FBT0osR0FBRyxDQUFDTCxJQUFKLENBQVM7QUFDWk8sSUFBQUEsS0FBSyxFQUFDO0FBQ0ZHLE1BQUFBLE9BQU8sRUFBRUgsS0FBSyxDQUFDRztBQURiO0FBRE0sR0FBVCxDQUFQO0FBS0gsQ0FQRDtBQVNBZCxHQUFHLENBQUNFLEdBQUosQ0FBUSxVQUFTTyxHQUFULEVBQWFELEdBQWIsRUFBaUJFLElBQWpCLEVBQXNCO0FBQzFCSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWjtBQUNBTixFQUFBQSxJQUFJO0FBQ1AsQ0FIRDtBQUtBVixHQUFHLENBQUNpQixNQUFKLENBQVdoQixJQUFYLEVBQWdCLFlBQUk7QUFDaEJjLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUiw0Q0FBZ0RmLElBQWhEO0FBQ0gsQ0FGRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJztcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgcmVzdFJvdXRlciB9IGZyb20gJy4vYXBpJztcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20nbW9uZ29vc2UnO1xyXG5pbXBvcnQgIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxubW9uZ29vc2UuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xyXG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0L2RhaWx5V2FnZXJzJyk7XHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgUE9SVCA9IDMwMDA7XHJcbmFwcC51c2UoY29ycygpKTtcclxuXHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XHJcbiAgICBleHRlbmRlZDpmYWxzZVxyXG59KSk7XHJcbmFwcC51c2UoJy9hcGknLHJlc3RSb3V0ZXIpO1xyXG5cclxuXHJcblxyXG5hcHAudXNlKChyZXEscmVzLG5leHQpPT57XHJcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcIk5vdCBGb3VuZFwiKTtcclxuICAgIGVycm9yLnN0YXR1cyA9NDA0O1xyXG4gICAgZXJyb3IubWVzc2FnZT1cIkludmFsaWQgcm91dGUuXCI7XHJcbiAgICBuZXh0KGVycm9yKTtcclxufSk7XHJcblxyXG5hcHAudXNlKChlcnJvcixyZXEscmVzLG5leHQpPT57XHJcbiAgICByZXMuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgICAgICBlcnJvcjp7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KTtcclxuXHJcbmFwcC51c2UoZnVuY3Rpb24ocmVzLHJlcSxuZXh0KXtcclxuICAgIGNvbnNvbGUubG9nKFwiTWlkZGxld2FyZSBiZWZvcmUgQXBpIGNhbGxcIik7XHJcbiAgICBuZXh0KCk7XHJcbn0pXHJcblxyXG5hcHAubGlzdGVuKFBPUlQsKCk9PntcclxuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgcnVubmluZyBhdCBwb3J0IG51bWJlciAke1BPUlR9YCk7XHJcbn0pIl19