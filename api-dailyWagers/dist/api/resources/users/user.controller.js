"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user.models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsInVzZXIiLCJmaW5kIiwidGhlbiIsImpzb24iLCJlcnIiLCJzdGF0dXMiLCJjcmVhdGUiLCJib2R5IiwibmFtZSIsInJvbGUiLCJjb250YWN0IiwiZW1haWwiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDZEEsRUFBQUEsT0FEYyxtQkFDTkMsR0FETSxFQUNGQyxHQURFLEVBQ0VDLElBREYsRUFDTztBQUNqQkMscUJBQUtDLElBQUwsR0FBWUMsSUFBWixDQUFpQixVQUFBRixJQUFJO0FBQUEsYUFBSUYsR0FBRyxDQUFDSyxJQUFKLENBQVNILElBQVQsQ0FBSjtBQUFBLEtBQXJCLFdBQ08sVUFBQUksR0FBRztBQUFBLGFBQUlOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FEVjtBQUVILEdBSmE7QUFLZEUsRUFBQUEsTUFMYyxrQkFLUFQsR0FMTyxFQUtIQyxHQUxHLEVBS0M7QUFBQSxvQkFDbUNELEdBQUcsQ0FBQ1UsSUFEdkM7QUFBQSxRQUNOQyxJQURNLGFBQ05BLElBRE07QUFBQSxRQUNBQyxJQURBLGFBQ0FBLElBREE7QUFBQSxRQUNNQyxPQUROLGFBQ01BLE9BRE47QUFBQSxRQUNlQyxLQURmLGFBQ2VBLEtBRGY7QUFBQSxRQUNzQkMsUUFEdEIsYUFDc0JBLFFBRHRCOztBQUVYLFFBQUcsQ0FBQ0osSUFBSixFQUFTO0FBQ0wsYUFBT1YsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsUUFBQUEsR0FBRyxFQUFFO0FBQU4sT0FBckIsQ0FBUDtBQUNILEtBRkQsTUFHSyxJQUFJLENBQUNLLElBQUwsRUFBVTtBQUNYLGFBQU9YLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLFFBQUFBLEdBQUcsRUFBQztBQUFMLE9BQXJCLENBQVA7QUFDSCxLQUZJLE1BR0EsSUFBRyxDQUFDTSxPQUFKLEVBQVk7QUFDYixhQUFPWixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFDQyxRQUFBQSxHQUFHLEVBQUU7QUFBTixPQUFyQixDQUFQO0FBQ0gsS0FGSSxNQUdBLElBQUcsQ0FBQ08sS0FBSixFQUFVO0FBQ1gsYUFBT2IsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsUUFBQUEsR0FBRyxFQUFFO0FBQU4sT0FBckIsQ0FBUDtBQUNILEtBRkksTUFHQSxJQUFHLENBQUNRLFFBQUosRUFBYTtBQUNkLGFBQU9kLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLFFBQUFBLEdBQUcsRUFBRTtBQUFOLE9BQXJCLENBQVA7QUFDSDs7QUFFRkoscUJBQUtNLE1BQUwsQ0FBWTtBQUFDRSxNQUFBQSxJQUFJLEVBQUpBLElBQUQ7QUFBT0MsTUFBQUEsSUFBSSxFQUFKQSxJQUFQO0FBQWFDLE1BQUFBLE9BQU8sRUFBUEEsT0FBYjtBQUFzQkMsTUFBQUEsS0FBSyxFQUFMQSxLQUF0QjtBQUE2QkMsTUFBQUEsUUFBUSxFQUFSQTtBQUE3QixLQUFaLEVBQ0NWLElBREQsQ0FDTSxVQUFBRixJQUFJO0FBQUEsYUFBSUYsR0FBRyxDQUFDSyxJQUFKLENBQVNILElBQVQsQ0FBSjtBQUFBLEtBRFYsV0FFUSxVQUFBSSxHQUFHO0FBQUEsYUFBRU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsUUFBQUEsR0FBRyxFQUFDO0FBQUwsT0FBckIsQ0FBRjtBQUFBLEtBRlg7QUFHRjtBQTFCYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyLm1vZGVscydcclxuZXhwb3J0IGRlZmF1bHR7XHJcbmZpbmRBbGwocmVxLHJlcyxuZXh0KXtcclxuICAgIHVzZXIuZmluZCgpLnRoZW4odXNlciA9PiByZXMuanNvbih1c2VyKSlcclxuICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbn0sXHJcbmNyZWF0ZShyZXEscmVzKXtcclxuICAgIGxldCB7bmFtZSwgcm9sZSwgY29udGFjdCwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuICAgIGlmKCFuYW1lKXtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJuYW1lIGlzIHJlcXVpcmVkXCJ9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFyb2xlKXtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcInJvbGUgaXMgcmVxdWlyZWRcIn0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighY29udGFjdCl7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwiY29udGFjdCBpcyByZXF1aXJlZFwifSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFlbWFpbCl7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwiZW1haWwgaXMgcmVxdWlyZWRcIn0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighcGFzc3dvcmQpe1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiBcInBhc3N3b3JkIGlzIHJlcXVpcmVkXCJ9KTtcclxuICAgIH1cclxuICBcclxuICAgdXNlci5jcmVhdGUoe25hbWUsIHJvbGUsIGNvbnRhY3QsIGVtYWlsLCBwYXNzd29yZH0pXHJcbiAgIC50aGVuKHVzZXIgPT4gcmVzLmpzb24odXNlcikpXHJcbiAgICAuY2F0Y2goZXJyPT5yZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOid1c2VyIGNhbm5vdCBiZSBjcmVhdGVkJ30pKTtcclxufSxcclxuXHJcbn07Il19