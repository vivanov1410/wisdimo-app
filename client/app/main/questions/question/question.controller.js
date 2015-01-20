(function () {
  'use strict';

  angular
    .module('wisdimoApp')
    .controller('QuestionCtrl', QuestionCtrl);

  function QuestionCtrl($scope, $timeout, $location, Questions, question) {
    var vm = this;
    var audio = new Audio(question.audio);
    var successes = [document.getElementById('audioSuccess1'), document.getElementById('audioSuccess2')];

    vm.answer = '';
    vm.question = question;
    vm.check = check;
    vm.next = next;
    vm.replay = replay;
    vm.onDrop = onDrop;
    vm.refund = refund;
    vm.state = 'guessing';
    vm.items = [{ title: 'popa' }];
    vm.droppedItems = [];

    $scope.$watch('vm.answer', function () {
      if(vm.state !== 'finished') {
        vm.state = 'guessing';
      }
    });

    activate();

    ////////////////////////////////
    
    function activate() {
      playQuestionSound();
    }

    function check(form) {
      vm.state = 'guessing';

      if(form.$valid) {
        switch(vm.question.answerType) {
          case 'number':
            if(parseInt(vm.answer, 10) === vm.question.answer) {
              playSuccessSound();
              vm.state = 'finished';
            } else {
              vm.state = 'errored';
            }
            break;

          case 'multipleChoice':
            if(vm.answer === vm.question.answer) {
              playSuccessSound();
              vm.state = 'finished';
            } else {
              vm.state = 'errored';
            }
            break;

          case 'dragdrop':
            if(vm.droppedItems.length === vm.question.answer) {
              playSuccessSound();
              vm.state = 'finished';
            } else {
              vm.state = 'errored';
            }
            break;
        }
      }
    }

    function next() {
      var nextQuestionId = parseInt(vm.question.id) + 1;
      if(nextQuestionId <= Questions.count()) {
        $location.url('questions/' + nextQuestionId);
      } else {
        $location.url('dashboard');
      }
    }

    function playQuestionSound() {
      audio.currentTime = 0;
      $timeout(function () {
        audio.play();
      }, 1000);
    }

    function playSuccessSound() {
      var index = random(0, successes.length);
      successes[index].currentTime = 0;
      successes[index].play();
    }

    function replay() {
      playQuestionSound();
    }

    function onDrop() {
      vm.droppedItems.push({ title: 'popa' });
      vm.items = [{ title: 'popa' }];
    }

    function refund() {
      vm.items = [{ title: 'popa' }];
    }

    function random(min, max) {
      return Math.floor(Math.random()*max) + min;
    }
  }  
})();