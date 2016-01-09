System.register([], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'The Wandering Itinerant';
            config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' }, { route: 'sample1', name: 'sample1', moduleId: './sample1', nav: true, title: 'sample1' }, { route: 'sample2', name: 'sample2', moduleId: './sample2', nav: true, title: 'sample2' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcseUJBQXlCLENBQUM7QUFDekMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxTQUFTLENBQUMsRUFBRyxJQUFJLEVBQUUsU0FBUyxFQUFHLFFBQVEsRUFBRSxXQUFXLEVBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFDLEVBQy9GLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBVSxJQUFJLEVBQUUsU0FBUyxFQUFLLFFBQVEsRUFBRSxXQUFXLEVBQUssR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFFLEVBQ3BHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBVSxJQUFJLEVBQUUsU0FBUyxFQUFLLFFBQVEsRUFBRSxXQUFXLEVBQUssR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFFLENBQ3pHLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztlQVZVLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcil7XG4gICAgY29uZmlnLnRpdGxlID0gJ1RoZSBXYW5kZXJpbmcgSXRpbmVyYW50JztcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6IFsnJywnd2VsY29tZSddLCAgbmFtZTogJ3dlbGNvbWUnLCAgbW9kdWxlSWQ6ICcuL3dlbGNvbWUnLCAgbmF2OiB0cnVlLCB0aXRsZTonV2VsY29tZSd9LFxuICAgICAgeyByb3V0ZTogJ3NhbXBsZTEnLCAgICAgICAgIG5hbWU6ICdzYW1wbGUxJywgICAgbW9kdWxlSWQ6ICcuL3NhbXBsZTEnLCAgICBuYXY6IHRydWUsIHRpdGxlOidzYW1wbGUxJyB9LFxuICAgICAgICB7IHJvdXRlOiAnc2FtcGxlMicsICAgICAgICAgbmFtZTogJ3NhbXBsZTInLCAgICBtb2R1bGVJZDogJy4vc2FtcGxlMicsICAgIG5hdjogdHJ1ZSwgdGl0bGU6J3NhbXBsZTInIH1cbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
