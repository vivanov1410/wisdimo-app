(function () {
  'use strict';

  angular
    .module('wisdimoApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main', {
          abstract: true,
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl',
          controllerAs: 'vm'
        })
        .state('main.dashboard', {
          url: '/dashboard',
          templateUrl: 'app/main/dashboard/dashboard.html',
          controller: 'DashboardCtrl',
          controllerAs: 'vm'
        })
        .state('main.questions', {
          url: '/questions',
          templateUrl: 'app/main/questions/questions.html',
          controller: 'QuestionsCtrl',
          controllerAs: 'vm',
          resolve: {
            question: ['Questions', function (Questions) {
              return Questions.random();
            }]
          }
        });
    });
})();
