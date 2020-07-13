"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _application = _interopRequireDefault(require("./application.models"));

var _application2 = _interopRequireDefault(require("./application.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res, next) {
    // res.json({msg:"FInd all users!!"})
    _application["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _applicationService$v, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _applicationService$v = _application2["default"].validationSchema(req.body), error = _applicationService$v.error, value = _applicationService$v.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _application["default"].create(value).then(function (item) {
                return res.json(item);
              })["catch"](function (err) {
                return res.status(500).json(err);
              });

            case 6:
              console.log(value);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }))();
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _application["default"].findById(id).then(function (data) {
      if (!data) {
        return res.status(400).json({
          err: "emp not found."
        });
      }

      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    _application["default"].findOneAndUpdate({
      _id: id
    }, {
      $set: req.body
    }, {
      "new": true
    }).then(function (emp) {
      if (!emp) {
        return res.status(400).json({
          err: "emp not found."
        });
      }

      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  "delete": function _delete(req, res) {
    var id = req.params.id;

    _application["default"].findByIdAndRemove(id).then(function (data) {
      if (!data) {
        return res.status(400).json({
          err: "user not found."
        });
      }

      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbi5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXBwbGljYXRpb24iLCJmaW5kIiwidGhlbiIsImRhdGEiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiY3JlYXRlIiwiYXBwbGljYXRpb25TZXJ2aWNlIiwidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJ1cGRhdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwiJHNldCIsImVtcCIsImZpbmRCeUlkQW5kUmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBQ2M7QUFDVkEsRUFBQUEsT0FEVSxtQkFDRkMsR0FERSxFQUNFQyxHQURGLEVBQ01DLElBRE4sRUFDVztBQUNqQjtBQUNBQyw0QkFBWUMsSUFBWixHQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQUMsSUFBSTtBQUFBLGFBQUlMLEdBQUcsQ0FBQ00sSUFBSixDQUFTRCxJQUFULENBQUo7QUFBQSxLQUE1QixXQUNPLFVBQUFFLEdBQUc7QUFBQSxhQUFJUCxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBRFY7QUFFSCxHQUxTO0FBTUpFLEVBQUFBLE1BTkksa0JBTUdWLEdBTkgsRUFNT0MsR0FOUCxFQU1XO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBRVVVLHlCQUFtQkMsZ0JBQW5CLENBQW9DWixHQUFHLENBQUNhLElBQXhDLENBRlYsRUFFSkMsS0FGSSx5QkFFSkEsS0FGSSxFQUVFQyxLQUZGLHlCQUVFQSxLQUZGOztBQUFBLG9C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QUFyQixDQUFQO0FBQ0g7O0FBQ0QsYUFBT1AsR0FBRyxDQUFDTSxJQUFKLENBQVNELElBQVQsQ0FBUDtBQUNILEtBTEQsV0FNTyxVQUFBRSxHQUFHO0FBQUEsYUFBSVAsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQU5WO0FBT0g7QUFsRFMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHBsaWNhdGlvbiBmcm9tICcuL2FwcGxpY2F0aW9uLm1vZGVscyc7XHJcbmltcG9ydCBhcHBsaWNhdGlvblNlcnZpY2UgZnJvbSAnLi9hcHBsaWNhdGlvbi5zZXJ2aWNlJztcclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBmaW5kQWxsKHJlcSxyZXMsbmV4dCl7XHJcbiAgICAgICAgLy8gcmVzLmpzb24oe21zZzpcIkZJbmQgYWxsIHVzZXJzISFcIn0pXHJcbiAgICAgICAgYXBwbGljYXRpb24uZmluZCgpLnRoZW4oZGF0YSA9PiByZXMuanNvbihkYXRhKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGNyZWF0ZShyZXEscmVzKXtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfT0gYXBwbGljYXRpb25TZXJ2aWNlLnZhbGlkYXRpb25TY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvL2NyZWF0ZSB1c2VyXHJcbiAgICAgICAgICAgIGF3YWl0IGFwcGxpY2F0aW9uLmNyZWF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4oaXRlbSA9PiByZXMuanNvbihpdGVtKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycj0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZpbmRPbmUocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgIGFwcGxpY2F0aW9uLmZpbmRCeUlkKGlkKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZighZGF0YSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJlbXAgbm90IGZvdW5kLlwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkXHJcbiAgICAgICAgYXBwbGljYXRpb24uZmluZE9uZUFuZFVwZGF0ZSh7X2lkOmlkfSx7JHNldDpyZXEuYm9keX0se25ldzp0cnVlfSkudGhlbihlbXA9PntcclxuICAgICAgICAgICAgaWYoIWVtcCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJlbXAgbm90IGZvdW5kLlwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGVtcCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZShyZXEscmVzKXtcclxuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgYXBwbGljYXRpb24uZmluZEJ5SWRBbmRSZW1vdmUoaWQpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFkYXRhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiBcInVzZXIgbm90IGZvdW5kLlwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcblxyXG59Il19