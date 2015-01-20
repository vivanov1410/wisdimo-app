'use strict';

angular
  .module('wisdimoApp')
  .factory('Utils', function () {
    var service = {
      random: random
    };

    return service;

    ////////////////////////////////
    
    function random(min, max) {
      return Math.floor(Math.random()*max) + min;
    }
  });
