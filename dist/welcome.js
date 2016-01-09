System.register([], function (_export) {
  'use strict';

  var Welcome;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome, Wanderers.';
          this.firstName = 'Mike';
          this.lastName = 'Harder';
        }

        _createClass(Welcome, [{
          key: 'submit',
          value: function submit() {
            alert('Welcome, ' + this.fullName + '!');
          }
        }, {
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);

        return Welcome;
      })();

      _export('Welcome', Welcome);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsT0FBTzs7Ozs7Ozs7O0FBQVAsYUFBTztpQkFBUCxPQUFPO2dDQUFQLE9BQU87O2VBQ2xCLE9BQU8sR0FBRyxxQkFBcUI7ZUFDL0IsU0FBUyxHQUFHLE1BQU07ZUFDbEIsUUFBUSxHQUFHLFFBQVE7OztxQkFIUixPQUFPOztpQkFTWixrQkFBRztBQUNQLGlCQUFLLGVBQWEsSUFBSSxDQUFDLFFBQVEsT0FBSSxDQUFDO1dBQ3JDOzs7ZUFOVyxlQUFHO0FBQ2IsbUJBQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFHO1dBQzdDOzs7ZUFQVSxPQUFPIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV2VsY29tZSB7XG4gIGhlYWRpbmcgPSAnV2VsY29tZSwgV2FuZGVyZXJzLic7XG4gIGZpcnN0TmFtZSA9ICdNaWtlJztcbiAgbGFzdE5hbWUgPSAnSGFyZGVyJztcblxuICBnZXQgZnVsbE5hbWUoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuZmlyc3ROYW1lfSAke3RoaXMubGFzdE5hbWV9YDtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBhbGVydChgV2VsY29tZSwgJHt0aGlzLmZ1bGxOYW1lfSFgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
