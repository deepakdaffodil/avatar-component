"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Avatar',
  component: _Avatar.default,
  argTypes: {}
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Avatar.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  title: 'Divyaansh Jaiswal'
};