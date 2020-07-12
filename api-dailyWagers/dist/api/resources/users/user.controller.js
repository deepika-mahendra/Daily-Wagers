"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user.models"));

var _user2 = _interopRequireDefault(require("./user.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res, next) {
    _user["default"].find().then(function (user) {
      return res.json(user);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        role = _req$body.role,
        contact = _req$body.contact,
        email = _req$body.email,
        password = _req$body.password;

    if (!name) {
      return res.status(400).json({
        err: "name is required"
      });
    } else if (!role) {
      return res.status(400).json({
        err: "role is required"
      });
    } else if (!contact) {
      return res.status(400).json({
        err: "contact is required"
      });
    } else if (!email) {
      return res.status(400).json({
        err: "email is required"
      });
    } else if (!password) {
      return res.status(400).json({
        err: "password is required"
      });
    }

    _user["default"].create({
      name: name,
      role: role,
      contact: contact,
      email: email,
      password: password
    }).then(function (user) {
      return res.json(user);
    })["catch"](function (err) {
      return res.status(500).json({
        err: 'user cannot be created'
      });
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _user["default"].findById(id).then(function (user) {
      if (!user) {
        return res.status(400).json({
          err: "user not found."
        });
      }

      return res.json(user);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  DeleteElement: function DeleteElement(req, res) {
    var id = req.params.id;

    _user["default"].findByIdAndRemove(id).then(function (user) {
      if (!user) {
        return res.status(400).json({
          err: "user not found."
        });
      }

      return res.json(user);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    _user["default"].findOneAndUpdate({
      _id: id
    }, {
      $set: req.body
    }, {
      "new": true
    }).then(function (user) {
      if (!user) {
        return res.status(400).json({
          err: "user not found."
        });
      }

      return res.json(user);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  signup: function signup(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _userService$validati, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _userService$validati = _user2["default"].validationSchema(req.body), error = _userService$validati.error, value = _userService$validati.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return User.create(value).then(function (item) {
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
  login: function login(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _userService$validate, error, value, _User;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _userService$validate = _user2["default"].validateLoginSchema(req.body), error = _userService$validate.error, value = _userService$validate.value;

              if (!(error && error.details)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(500).json(error));

            case 4:
              _context2.next = 6;
              return _user["default"].findOne({
                email: value.email
              });

            case 6:
              _User = _context2.sent;

              if (_User) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                err: 'Invalid email'
              }));

            case 11:
              if (!(_User.password != value.password)) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                err: 'Invalid password'
              }));

            case 15:
              return _context2.abrupt("return", res.json(_User));

            case 16:
              _context2.next = 21;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 18]]);
    }))();
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsInVzZXIiLCJmaW5kIiwidGhlbiIsImpzb24iLCJlcnIiLCJzdGF0dXMiLCJjcmVhdGUiLCJib2R5IiwibmFtZSIsInJvbGUiLCJjb250YWN0IiwiZW1haWwiLCJwYXNzd29yZCIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwiRGVsZXRlRWxlbWVudCIsImZpbmRCeUlkQW5kUmVtb3ZlIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIiRzZXQiLCJzaWdudXAiLCJ1c2VyU2VydmljZSIsInZhbGlkYXRpb25TY2hlbWEiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsIlVzZXIiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImxvZ2luIiwidmFsaWRhdGVMb2dpblNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztlQUNjO0FBQ2RBLEVBQUFBLE9BRGMsbUJBQ05DLEdBRE0sRUFDRkMsR0FERSxFQUNFQyxJQURGLEVBQ087QUFDakJDLHFCQUFLQyxJQUFMLEdBQVlDLElBQVosQ0FBaUIsVUFBQUYsSUFBSTtBQUFBLGFBQUlGLEdBQUcsQ0FBQ0ssSUFBSixDQUFTSCxJQUFULENBQUo7QUFBQSxLQUFyQixXQUNPLFVBQUFJLEdBQUc7QUFBQSxhQUFJTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBRFY7QUFFSCxHQUphO0FBS2RFLEVBQUFBLE1BTGMsa0JBS1BULEdBTE8sRUFLSEMsR0FMRyxFQUtDO0FBQUEsb0JBQ21DRCxHQUFHLENBQUNVLElBRHZDO0FBQUEsUUFDTkMsSUFETSxhQUNOQSxJQURNO0FBQUEsUUFDQUMsSUFEQSxhQUNBQSxJQURBO0FBQUEsUUFDTUMsT0FETixhQUNNQSxPQUROO0FBQUEsUUFDZUMsS0FEZixhQUNlQSxLQURmO0FBQUEsUUFDc0JDLFFBRHRCLGFBQ3NCQSxRQUR0Qjs7QUFFWCxRQUFHLENBQUNKLElBQUosRUFBUztBQUNMLGFBQU9WLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLFFBQUFBLEdBQUcsRUFBRTtBQUFOLE9BQXJCLENBQVA7QUFDSCxLQUZELE1BR0ssSUFBSSxDQUFDSyxJQUFMLEVBQVU7QUFDWCxhQUFPWCxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFDQyxRQUFBQSxHQUFHLEVBQUM7QUFBTCxPQUFyQixDQUFQO0FBQ0gsS0FGSSxNQUdBLElBQUcsQ0FBQ00sT0FBSixFQUFZO0FBQ2IsYUFBT1osR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsUUFBQUEsR0FBRyxFQUFFO0FBQU4sT0FBckIsQ0FBUDtBQUNILEtBRkksTUFHQSxJQUFHLENBQUNPLEtBQUosRUFBVTtBQUNYLGFBQU9iLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLFFBQUFBLEdBQUcsRUFBRTtBQUFOLE9BQXJCLENBQVA7QUFDSCxLQUZJLE1BR0EsSUFBRyxDQUFDUSxRQUFKLEVBQWE7QUFDZCxhQUFPZCxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFDQyxRQUFBQSxHQUFHLEVBQUU7QUFBTixPQUFyQixDQUFQO0FBQ0g7O0FBRUZKLHFCQUFLTSxNQUFMLENBQVk7QUFBQ0UsTUFBQUEsSUFBSSxFQUFKQSxJQUFEO0FBQU9DLE1BQUFBLElBQUksRUFBSkEsSUFBUDtBQUFhQyxNQUFBQSxPQUFPLEVBQVBBLE9BQWI7QUFBc0JDLE1BQUFBLEtBQUssRUFBTEEsS0FBdEI7QUFBNkJDLE1BQUFBLFFBQVEsRUFBUkE7QUFBN0IsS0FBWixFQUNDVixJQURELENBQ00sVUFBQUYsSUFBSTtBQUFBLGFBQUlGLEdBQUcsQ0FBQ0ssSUFBSixDQUFTSCxJQUFULENBQUo7QUFBQSxLQURWLFdBRVEsVUFBQUksR0FBRztBQUFBLGFBQUVOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLFFBQUFBLEdBQUcsRUFBQztBQUFMLE9BQXJCLENBQUY7QUFBQSxLQUZYO0FBR0YsR0ExQmE7QUEyQmRTLEVBQUFBLE9BM0JjLG1CQTJCTmhCLEdBM0JNLEVBMkJGQyxHQTNCRSxFQTJCRTtBQUNaLFFBQU1nQixFQUFFLEdBQUdqQixHQUFHLENBQUNrQixNQUFKLENBQVdELEVBQXRCOztBQUNBZCxxQkFBS2dCLFFBQUwsQ0FBY0YsRUFBZCxFQUFrQlosSUFBbEIsQ0FBdUIsVUFBQUYsSUFBSSxFQUFJO0FBQzNCLFVBQUcsQ0FBQ0EsSUFBSixFQUFTO0FBQ0wsZUFBT0YsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsVUFBQUEsR0FBRyxFQUFFO0FBQU4sU0FBckIsQ0FBUDtBQUNIOztBQUNELGFBQU9OLEdBQUcsQ0FBQ0ssSUFBSixDQUFTSCxJQUFULENBQVA7QUFDSCxLQUxELFdBTU8sVUFBQUksR0FBRztBQUFBLGFBQUlOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FOVjtBQU9ILEdBcENhO0FBc0NkYSxFQUFBQSxhQXRDYyx5QkFzQ0FwQixHQXRDQSxFQXNDSUMsR0F0Q0osRUFzQ1E7QUFDbEIsUUFBTWdCLEVBQUUsR0FBR2pCLEdBQUcsQ0FBQ2tCLE1BQUosQ0FBV0QsRUFBdEI7O0FBQ0FkLHFCQUFLa0IsaUJBQUwsQ0FBdUJKLEVBQXZCLEVBQTJCWixJQUEzQixDQUFnQyxVQUFBRixJQUFJLEVBQUk7QUFDcEMsVUFBRyxDQUFDQSxJQUFKLEVBQVM7QUFDTCxlQUFPRixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFDQyxVQUFBQSxHQUFHLEVBQUU7QUFBTixTQUFyQixDQUFQO0FBQ0g7O0FBQ0QsYUFBT04sR0FBRyxDQUFDSyxJQUFKLENBQVNILElBQVQsQ0FBUDtBQUNILEtBTEQsV0FNTyxVQUFBSSxHQUFHO0FBQUEsYUFBSU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQU5WO0FBT0gsR0EvQ2E7QUFnRGRlLEVBQUFBLE1BaERjLGtCQWdEUHRCLEdBaERPLEVBZ0RIQyxHQWhERyxFQWdEQztBQUNYLFFBQU1nQixFQUFFLEdBQUdqQixHQUFHLENBQUNrQixNQUFKLENBQVdELEVBQXRCOztBQUNBZCxxQkFBS29CLGdCQUFMLENBQXNCO0FBQUNDLE1BQUFBLEdBQUcsRUFBQ1A7QUFBTCxLQUF0QixFQUErQjtBQUFDUSxNQUFBQSxJQUFJLEVBQUN6QixHQUFHLENBQUNVO0FBQVYsS0FBL0IsRUFBK0M7QUFBQyxhQUFJO0FBQUwsS0FBL0MsRUFBMkRMLElBQTNELENBQWdFLFVBQUFGLElBQUksRUFBRTtBQUNsRSxVQUFHLENBQUNBLElBQUosRUFBUztBQUNMLGVBQU9GLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLFVBQUFBLEdBQUcsRUFBRTtBQUFOLFNBQXJCLENBQVA7QUFDSDs7QUFDRCxhQUFPTixHQUFHLENBQUNLLElBQUosQ0FBU0gsSUFBVCxDQUFQO0FBQ0gsS0FMRCxXQU1PLFVBQUFJLEdBQUc7QUFBQSxhQUFJTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBTlY7QUFPSCxHQXpEYTtBQTBEUm1CLEVBQUFBLE1BMURRLGtCQTBERDFCLEdBMURDLEVBMERHQyxHQTFESCxFQTBETztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUVRMEIsa0JBQVlDLGdCQUFaLENBQTZCNUIsR0FBRyxDQUFDVSxJQUFqQyxDQUZSLEVBRU5tQixLQUZNLHlCQUVOQSxLQUZNLEVBRUFDLEtBRkEseUJBRUFBLEtBRkE7O0FBQUEsb0JBR1ZELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxPQUhMO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUlGOUIsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJ1QixLQUFyQixDQUpFOztBQUFBO0FBQUE7QUFBQSxxQkFPVEcsSUFBSSxDQUFDdkIsTUFBTCxDQUFZcUIsS0FBWixFQUNMekIsSUFESyxDQUNBLFVBQUE0QixJQUFJO0FBQUEsdUJBQUloQyxHQUFHLENBQUNLLElBQUosQ0FBUzJCLElBQVQsQ0FBSjtBQUFBLGVBREosV0FFQyxVQUFBMUIsR0FBRztBQUFBLHVCQUFHTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSDtBQUFBLGVBRkosQ0FQUzs7QUFBQTtBQVViMkIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVo7QUFWYTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVliSSxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBWmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjcEIsR0F4RWE7QUF5RVJDLEVBQUFBLEtBekVRLGlCQXlFRnBDLEdBekVFLEVBeUVFQyxHQXpFRixFQXlFTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUVTMEIsa0JBQVlVLG1CQUFaLENBQWdDckMsR0FBRyxDQUFDVSxJQUFwQyxDQUZULEVBRUxtQixLQUZLLHlCQUVMQSxLQUZLLEVBRUNDLEtBRkQseUJBRUNBLEtBRkQ7O0FBQUEsb0JBR1RELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxPQUhOO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQUlEOUIsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJ1QixLQUFyQixDQUpDOztBQUFBO0FBQUE7QUFBQSxxQkFNTzFCLGlCQUFLYSxPQUFMLENBQWE7QUFBQ0YsZ0JBQUFBLEtBQUssRUFBQ2dCLEtBQUssQ0FBQ2hCO0FBQWIsZUFBYixDQU5QOztBQUFBO0FBTU5rQixjQUFBQSxLQU5NOztBQUFBLGtCQU9SQSxLQVBRO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQVFEL0IsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsZ0JBQUFBLEdBQUcsRUFBQztBQUFMLGVBQXJCLENBUkM7O0FBQUE7QUFBQSxvQkFVSnlCLEtBQUksQ0FBQ2pCLFFBQUwsSUFBaUJlLEtBQUssQ0FBQ2YsUUFWbkI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0RBV0RkLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLGdCQUFBQSxHQUFHLEVBQUM7QUFBTCxlQUFyQixDQVhDOztBQUFBO0FBQUEsZ0RBY0ROLEdBQUcsQ0FBQ0ssSUFBSixDQUFTMEIsS0FBVCxDQWRDOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFrQlJFLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFsQlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQm5CO0FBOUZhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlciBmcm9tICcuL3VzZXIubW9kZWxzJ1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuZmluZEFsbChyZXEscmVzLG5leHQpe1xyXG4gICAgdXNlci5maW5kKCkudGhlbih1c2VyID0+IHJlcy5qc29uKHVzZXIpKVxyXG4gICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxufSxcclxuY3JlYXRlKHJlcSxyZXMpe1xyXG4gICAgbGV0IHtuYW1lLCByb2xlLCBjb250YWN0LCBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gICAgaWYoIW5hbWUpe1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiBcIm5hbWUgaXMgcmVxdWlyZWRcIn0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXJvbGUpe1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwicm9sZSBpcyByZXF1aXJlZFwifSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFjb250YWN0KXtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJjb250YWN0IGlzIHJlcXVpcmVkXCJ9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIWVtYWlsKXtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJlbWFpbCBpcyByZXF1aXJlZFwifSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFwYXNzd29yZCl7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwicGFzc3dvcmQgaXMgcmVxdWlyZWRcIn0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICB1c2VyLmNyZWF0ZSh7bmFtZSwgcm9sZSwgY29udGFjdCwgZW1haWwsIHBhc3N3b3JkfSlcclxuICAgLnRoZW4odXNlciA9PiByZXMuanNvbih1c2VyKSlcclxuICAgIC5jYXRjaChlcnI9PnJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnI6J3VzZXIgY2Fubm90IGJlIGNyZWF0ZWQnfSkpO1xyXG59LFxyXG5maW5kT25lKHJlcSxyZXMpe1xyXG4gICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgdXNlci5maW5kQnlJZChpZCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICBpZighdXNlcil7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiBcInVzZXIgbm90IGZvdW5kLlwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbih1c2VyKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG59LFxyXG5cclxuRGVsZXRlRWxlbWVudChyZXEscmVzKXtcclxuICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuICAgIHVzZXIuZmluZEJ5SWRBbmRSZW1vdmUoaWQpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJ1c2VyIG5vdCBmb3VuZC5cIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24odXNlcik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxufSxcclxudXBkYXRlKHJlcSxyZXMpe1xyXG4gICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkXHJcbiAgICB1c2VyLmZpbmRPbmVBbmRVcGRhdGUoe19pZDppZH0seyRzZXQ6cmVxLmJvZHl9LHtuZXc6dHJ1ZX0pLnRoZW4odXNlcj0+e1xyXG4gICAgICAgIGlmKCF1c2VyKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwidXNlciBub3QgZm91bmQuXCJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHVzZXIpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbn0sXHJcbmFzeW5jIHNpZ251cChyZXEscmVzKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfT0gdXNlclNlcnZpY2UudmFsaWRhdGlvblNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY3JlYXRlIHVzZXJcclxuICAgICAgYXdhaXQgVXNlci5jcmVhdGUodmFsdWUpXHJcbiAgICAgIC50aGVuKGl0ZW0gPT4gcmVzLmpzb24oaXRlbSkpXHJcbiAgICAgIC5jYXRjaChlcnI9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG59LFxyXG5hc3luYyBsb2dpbihyZXEscmVzKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfT0gdXNlclNlcnZpY2UudmFsaWRhdGVMb2dpblNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFVzZXIgPSBhd2FpdCB1c2VyLmZpbmRPbmUoe2VtYWlsOnZhbHVlLmVtYWlsfSk7XHJcbiAgICAgICAgaWYoIVVzZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjonSW52YWxpZCBlbWFpbCd9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihVc2VyLnBhc3N3b3JkICE9IHZhbHVlLnBhc3N3b3JkKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6J0ludmFsaWQgcGFzc3dvcmQnfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oVXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG5cclxufVxyXG5cclxufTsiXX0=