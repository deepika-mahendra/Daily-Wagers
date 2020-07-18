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
  findOne: function findOne(req, res, next) {
    var id = req.params.id;

    _application["default"].find({
      'req_id': id
    }).then(function (data) {
      res.json(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbi5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXBwbGljYXRpb24iLCJmaW5kIiwidGhlbiIsImRhdGEiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiY3JlYXRlIiwiYXBwbGljYXRpb25TZXJ2aWNlIiwidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIiRzZXQiLCJlbXAiLCJmaW5kQnlJZEFuZFJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztlQUNjO0FBQ1ZBLEVBQUFBLE9BRFUsbUJBQ0ZDLEdBREUsRUFDRUMsR0FERixFQUNNQyxJQUROLEVBQ1c7QUFDakI7QUFDQUMsNEJBQVlDLElBQVosR0FBbUJDLElBQW5CLENBQXdCLFVBQUFDLElBQUk7QUFBQSxhQUFJTCxHQUFHLENBQUNNLElBQUosQ0FBU0QsSUFBVCxDQUFKO0FBQUEsS0FBNUIsV0FDTyxVQUFBRSxHQUFHO0FBQUEsYUFBSVAsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQURWO0FBRUgsR0FMUztBQU1KRSxFQUFBQSxNQU5JLGtCQU1HVixHQU5ILEVBTU9DLEdBTlAsRUFNVztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUVVVSx5QkFBbUJDLGdCQUFuQixDQUFvQ1osR0FBRyxDQUFDYSxJQUF4QyxDQUZWLEVBRUpDLEtBRkkseUJBRUpBLEtBRkksRUFFRUMsS0FGRix5QkFFRUEsS0FGRjs7QUFBQSxvQkFHUkQsS0FBSyxJ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QUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FOVjtBQU9IO0FBL0NTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwbGljYXRpb24gZnJvbSAnLi9hcHBsaWNhdGlvbi5tb2RlbHMnO1xyXG5pbXBvcnQgYXBwbGljYXRpb25TZXJ2aWNlIGZyb20gJy4vYXBwbGljYXRpb24uc2VydmljZSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgZmluZEFsbChyZXEscmVzLG5leHQpe1xyXG4gICAgICAgIC8vIHJlcy5qc29uKHttc2c6XCJGSW5kIGFsbCB1c2VycyEhXCJ9KVxyXG4gICAgICAgIGFwcGxpY2F0aW9uLmZpbmQoKS50aGVuKGRhdGEgPT4gcmVzLmpzb24oZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBjcmVhdGUocmVxLHJlcyl7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX09IGFwcGxpY2F0aW9uU2VydmljZS52YWxpZGF0aW9uU2NoZW1hKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgICBpZihlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy9jcmVhdGUgdXNlclxyXG4gICAgICAgICAgICBhd2FpdCBhcHBsaWNhdGlvbi5jcmVhdGUodmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKGl0ZW0gPT4gcmVzLmpzb24oaXRlbSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnI9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmaW5kT25lKHJlcSxyZXMsbmV4dCl7XHJcbiAgICAgICAgbGV0IHtpZH0gPSByZXEucGFyYW1zO1xyXG4gICAgICAgIGFwcGxpY2F0aW9uLmZpbmQoeydyZXFfaWQnOmlkfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgcmVzLmpzb24oZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKHJlcSxyZXMpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZFxyXG4gICAgICAgIGFwcGxpY2F0aW9uLmZpbmRPbmVBbmRVcGRhdGUoe19pZDppZH0seyRzZXQ6cmVxLmJvZHl9LHtuZXc6dHJ1ZX0pLnRoZW4oZW1wPT57XHJcbiAgICAgICAgICAgIGlmKCFlbXApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwiZW1wIG5vdCBmb3VuZC5cIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBkZWxldGUocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgIGFwcGxpY2F0aW9uLmZpbmRCeUlkQW5kUmVtb3ZlKGlkKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZighZGF0YSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJ1c2VyIG5vdCBmb3VuZC5cIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgXHJcblxyXG59Il19