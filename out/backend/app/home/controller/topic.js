'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  /**
   * index action
   * @return {Promise} []
   */
  _class.prototype.saveorupdateAction = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var topicEntity, id, affectedRows, insertId;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              topicEntity = this.post();
              id = topicEntity.id;

              if (!id) {
                _context.next = 10;
                break;
              }

              _context.next = 6;
              return this.model('topic').where({ id: id }).update(topicEntity);

            case 6:
              affectedRows = _context.sent;

              this.json({
                code: 200,
                affectedRows: affectedRows
              });
              _context.next = 14;
              break;

            case 10:
              _context.next = 12;
              return this.model('topic').add(topicEntity);

            case 12:
              insertId = _context.sent;

              this.json({
                code: 200,
                insertId: insertId
              });

            case 14:
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context['catch'](0);

              this.json({
                code: 500,
                error: _context.t0
              });

            case 19:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 16]]);
    }));

    function saveorupdateAction() {
      return _ref.apply(this, arguments);
    }

    return saveorupdateAction;
  }();

  _class.prototype.listAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var where, order, data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              where = {};

              if (this.get('type') !== '-1') {
                where.type = this.get('type');
              }
              if (this.get('level') !== '-1') {
                where.level = this.get('level');
              }
              order = { id: 'desc' };

              if (this.get('order')) {
                order = JSON.parse(this.get('order'));
              }
              _context2.next = 8;
              return this.model('topic').where(where).page(this.get('current'), this.get('pageSize')).order(order).countSelect();

            case 8:
              data = _context2.sent;

              this.json({
                code: 200,
                data: data
              });
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2['catch'](0);

              this.json({
                code: 500,
                error: _context2.t0
              });

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 12]]);
    }));

    function listAction() {
      return _ref2.apply(this, arguments);
    }

    return listAction;
  }();

  _class.prototype.getAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var data;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return this.model('topic').where({ id: this.get('id') }).find();

            case 3:
              data = _context3.sent;

              this.json({
                code: 200,
                data: data
              });
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](0);

              this.json({
                code: 500,
                error: _context3.t0
              });

            case 10:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 7]]);
    }));

    function getAction() {
      return _ref3.apply(this, arguments);
    }

    return getAction;
  }();

  _class.prototype.deleteAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var affectedRows;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return this.model('topic').where({ id: this.post('id') }).delete();

            case 3:
              affectedRows = _context4.sent;

              this.json({
                code: 200,
                affectedRows: affectedRows
              });
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4['catch'](0);

              this.json({
                code: 500,
                error: _context4.t0
              });

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 7]]);
    }));

    function deleteAction() {
      return _ref4.apply(this, arguments);
    }

    return deleteAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;