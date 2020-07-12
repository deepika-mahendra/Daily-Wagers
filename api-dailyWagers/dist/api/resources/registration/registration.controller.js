"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _registration = require("./registration.models");

var _registration2 = require("./registration.service");

var _default = {
  findAll: function findAll(req, res) {
    // res.json({msg:"FInd all users!!"})
    _registration.register.find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwicmVnaXN0ZXIiLCJmaW5kIiwidGhlbiIsImRhdGEiLCJqc29uIiwiZXJyIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O2VBQ2M7QUFDVkEsRUFBQUEsT0FEVSxtQkFDRkMsR0FERSxFQUNFQyxHQURGLEVBQ087QUFDYjtBQUNBQywyQkFBU0MsSUFBVCxHQUFnQkMsSUFBaEIsQ0FBcUIsVUFBQUMsSUFBSTtBQUFBLGFBQUlKLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRCxJQUFULENBQUo7QUFBQSxLQUF6QixXQUNPLFVBQUFFLEdBQUc7QUFBQSxhQUFJTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBRFY7QUFFSDtBQUxTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlZ2lzdGVyfSBmcm9tICcuL3JlZ2lzdHJhdGlvbi5tb2RlbHMnO1xyXG5pbXBvcnQge3JlZ2lzdHJhdGlvblNlcnZpY2V9IGZyb20gJy4vcmVnaXN0cmF0aW9uLnNlcnZpY2UnO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGZpbmRBbGwocmVxLHJlcywpe1xyXG4gICAgICAgIC8vIHJlcy5qc29uKHttc2c6XCJGSW5kIGFsbCB1c2VycyEhXCJ9KVxyXG4gICAgICAgIHJlZ2lzdGVyLmZpbmQoKS50aGVuKGRhdGEgPT4gcmVzLmpzb24oZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH1cclxufSJdfQ==