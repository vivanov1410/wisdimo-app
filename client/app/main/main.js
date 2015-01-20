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
        .state('main.question', {
          url: '/questions/:id',
          templateUrl: 'app/main/questions/question/question.html',
          controller: 'QuestionCtrl',
          controllerAs: 'vm',
          resolve: {
            question: ['$stateParams', 'Questions', function ($stateParams, Questions) {
              return Questions.find($stateParams.id);
            }]
          }
        });
    });
})();
