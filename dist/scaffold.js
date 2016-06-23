'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Scaffold;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Scaffold', Scaffold = function () {
        function Scaffold() {
          _classCallCheck(this, Scaffold);
        }

        Scaffold.prototype.attached = function attached() {
          alert('scaffold');
        };

        return Scaffold;
      }());

      _export('Scaffold', Scaffold);
    }
  };
});
//# sourceMappingURL=scaffold.js.map
