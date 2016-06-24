'use strict';

System.register(['aurelia-binding'], function (_export, _context) {
  "use strict";

  var BindingEngine;
  return {
    setters: [function (_aureliaBinding) {
      BindingEngine = _aureliaBinding.BindingEngine;
    }],
    execute: function () {
      function configure(aurelia) {
        console.log('monterey-scaffold:', aurelia);
        console.log('monterey-scaffold:', BindingEngine);
      }

      _export('configure', configure);
    }
  };
});