"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _application = _interopRequireDefault(require("./application.models"));

var _application2 = _interopRequireDefault(require("./application.service"));

var _mongoose = _interopRequireDefault(require("mongoose"));

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
  //   findOne(req,res,next){
  //     let {id} = req.params.id;
  //     application.find({'req_id':id})
  //     .populate('employee_id')
  //     .then(data => {
  //         res.json(data)
  //     })
  //     .catch(err => res.status(500).json(err));
  // },
  findOne: function findOne(req, res) {
    var id = req.params.id;
    var options = {
      populate: 'req_id employee_id'
    };

    _application["default"].paginate({
      'req_id': id
    }, options).then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });

    console.log(id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbi5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXBwbGljYXRpb24iLCJmaW5kIiwidGhlbiIsImRhdGEiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiY3JlYXRlIiwiYXBwbGljYXRpb25TZXJ2aWNlIiwidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwib3B0aW9ucyIsInBvcHVsYXRlIiwicGFnaW5hdGUiLCJ1cGRhdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwiJHNldCIsImVtcCIsImZpbmRCeUlkQW5kUmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O2VBRWM7QUFDVkEsRUFBQUEsT0FEVSxtQkFDRkMsR0FERSxFQUNFQyxHQURGLEVBQ01DLElBRE4sRUFDVztBQUNqQjtBQUNBQyw0QkFBWUMsSUFBWixHQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQUMsSUFBSTtBQUFBLGFBQUlMLEdBQUcsQ0FBQ00sSUFBSixDQUFTRCxJQUFULENBQUo7QUFBQSxLQUE1QixXQUNPLFVBQUFFLEdBQUc7QUFBQSxhQUFJUCxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBRFY7QUFFSCxHQUxTO0FBTUpFLEVBQUFBLE1BTkksa0JBTUdWLEdBTkgsRUFNT0MsR0FOUCxFQU1XO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBRVVVLHlCQUFtQkMsZ0JBQW5CLENBQW9DWixHQUFHLENBQUNhLElBQXhDLENBRlYsRUFFSkMsS0FGSSx5QkFFSkEsS0FGSSxFQUVF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TUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLFVBQUFBLEdBQUcsRUFBRTtBQUFOLFNBQXJCLENBQVA7QUFDSDs7QUFDRCxhQUFPUCxHQUFHLENBQUNNLElBQUosQ0FBU0QsSUFBVCxDQUFQO0FBQ0gsS0FMRCxXQU1PLFVBQUFFLEdBQUc7QUFBQSxhQUFJUCxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBTlY7QUFPSDtBQTNEUyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcGxpY2F0aW9uIGZyb20gJy4vYXBwbGljYXRpb24ubW9kZWxzJztcclxuaW1wb3J0IGFwcGxpY2F0aW9uU2VydmljZSBmcm9tICcuL2FwcGxpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBmaW5kQWxsKHJlcSxyZXMsbmV4dCl7XHJcbiAgICAgICAgLy8gcmVzLmpzb24oe21zZzpcIkZJbmQgYWxsIHVzZXJzISFcIn0pXHJcbiAgICAgICAgYXBwbGljYXRpb24uZmluZCgpLnRoZW4oZGF0YSA9PiByZXMuanNvbihkYXRhKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGNyZWF0ZShyZXEscmVzKXtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfT0gYXBwbGljYXRpb25TZXJ2aWNlLnZhbGlkYXRpb25TY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvL2NyZWF0ZSB1c2VyXHJcbiAgICAgICAgICAgIGF3YWl0IGFwcGxpY2F0aW9uLmNyZWF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4oaXRlbSA9PiByZXMuanNvbihpdGVtKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycj0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAvLyAgIGZpbmRPbmUocmVxLHJlcyxuZXh0KXtcclxuICAgIC8vICAgICBsZXQge2lkfSA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAvLyAgICAgYXBwbGljYXRpb24uZmluZCh7J3JlcV9pZCc6aWR9KVxyXG4gICAgLy8gICAgIC5wb3B1bGF0ZSgnZW1wbG95ZWVfaWQnKVxyXG4gICAgLy8gICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgLy8gICAgICAgICByZXMuanNvbihkYXRhKVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgZmluZE9uZShyZXEscmVzKXtcclxuICAgICAgICBsZXQge2lkfSA9IHJlcS5wYXJhbXM7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgcG9wdWxhdGU6J3JlcV9pZCBlbXBsb3llZV9pZCdcclxuICAgICAgICAgIH1cclxuICAgICAgICBhcHBsaWNhdGlvbi5wYWdpbmF0ZSh7J3JlcV9pZCc6aWR9LG9wdGlvbnMpLnRoZW4oZGF0YT0+IHJlcy5qc29uKGRhdGEpKVxyXG4gICAgICAgIC5jYXRjaChlcnI9PnJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpXHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKHJlcSxyZXMpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZFxyXG4gICAgICAgIGFwcGxpY2F0aW9uLmZpbmRPbmVBbmRVcGRhdGUoe19pZDppZH0seyRzZXQ6cmVxLmJvZHl9LHtuZXc6dHJ1ZX0pLnRoZW4oZW1wPT57XHJcbiAgICAgICAgICAgIGlmKCFlbXApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwiZW1wIG5vdCBmb3VuZC5cIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBkZWxldGUocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgIGFwcGxpY2F0aW9uLmZpbmRCeUlkQW5kUmVtb3ZlKGlkKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZighZGF0YSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJ1c2VyIG5vdCBmb3VuZC5cIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgXHJcblxyXG59Il19