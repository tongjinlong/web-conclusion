var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = {
            date: new Date(),
            times: 0
        };
        return _this;
    }

    // 组件加载之后


    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.time = setInterval(function () {
                return _this2.tick();
            }, 1000);
        }

        // 组件加载之前

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.time);
        }
    }, {
        key: 'tick',
        value: function tick() {
            this.setState({
                date: new Date()
            });
        }
    }, {
        key: 'addOne',
        value: function addOne() {
            var _this3 = this;

            // this.setState({times: this.state.times+1});
            this.setState(function (state, props) {
                return {
                    times: state.times + 1
                };
            }, function () {
                console.log(_this3.state.times);
            });
            console.log(this.state.times);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Hello World'
                ),
                React.createElement(
                    'h2',
                    null,
                    'It is ',
                    this.state.date.toLocaleTimeString()
                ),
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this4.addOne();
                        } },
                    '\u70B9\u6211+1'
                )
            );
        }
    }]);

    return Clock;
}(React.Component);

ReactDOM.render(React.createElement(Clock, null), document.getElementById('app'));