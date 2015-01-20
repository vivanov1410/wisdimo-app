'use strict';

angular
  .module('wisdimoApp')
  .factory('Users', function (localStorageService) {
    var service = {
      me: me,
      finished: finished,
      reset: reset,
      save: save
    };

    return service;

    ////////////////////////////////
    
    function me() {
      var defaultUser = {
        state: 'new',
        solvedQuestions: []
      };
      var user = localStorageService.get('user');
      user = user || defaultUser;

      return user;
    }

    function finished(user) {
      return user.solvedQuestions.length === 20;
    }

    function reset() {
      localStorageService.remove('user');
    }

    function save(user) {
      localStorageService.set('user', user);
    }
  });
