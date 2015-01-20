(function () {
  'use strict';

  angular
    .module('wisdimoApp')
    .controller('QuestionsCtrl', QuestionsCtrl);

  function QuestionsCtrl($scope, $timeout, $location, $state, Questions, Users, question) {
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
    vm.user = Users.me();

    $scope.$watch('vm.answer', function () {
      if(vm.state !== 'finished') {
        vm.state = 'guessing';
      }
    });

    $scope.$watch('vm.state', function (current) {
      if(current && current === 'finished') {
        vm.user.solvedQuestions.push(question.id);
        vm.user.state = 'playing';
        Users.save(vm.user);
      }
    });

    activate();

    ////////////////////////////////
    
    function activate() {
      vm.hero = getHero();
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
      if(Users.finished(vm.user)) {
        Users.reset();
        $location.url('dashboard');
      } else {
        $state.reload();
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

    function getHero() {
      var images = [
        'https://www.khanacademy.org/images/avatars/svg/aqualine-ultimate.svg',
        'https://www.khanacademy.org/images/avatars/svg/aqualine-seed.svg',
        'https://www.khanacademy.org/images/avatars/svg/aqualine-seedling.svg',
        'https://www.khanacademy.org/images/avatars/svg/aqualine-sapling.svg',
        'https://www.khanacademy.org/images/avatars/svg/aqualine-tree.svg',
        'https://www.khanacademy.org/images/avatars/svg/piceratops-seed.svg',
        'https://www.khanacademy.org/images/avatars/svg/piceratops-seedling.svg',
        'https://www.khanacademy.org/images/avatars/svg/piceratops-sapling.svg',
        'https://www.khanacademy.org/images/avatars/svg/leafers-seed.svg',
        'https://www.khanacademy.org/images/avatars/svg/leafers-seedling.svg',
        'https://www.khanacademy.org/images/avatars/svg/leafers-sapling.svg',
        'https://www.khanacademy.org/images/avatars/svg/spunky-sam.svg',
        'https://www.khanacademy.org/images/avatars/svg/marcimus.svg',
        'https://www.khanacademy.org/images/avatars/svg/mr-pink.svg',
        'https://www.khanacademy.org/images/avatars/svg/orange-juice-squid.svg',
        'https://www.khanacademy.org/images/avatars/svg/purple-pi.svg',
        'https://www.khanacademy.org/images/avatars/svg/mr-pants.svg',
        'https://www.khanacademy.org/images/avatars/svg/old-spice-man.svg'
      ];

      return images[random(0, images.length)];
    }

    function random(min, max) {
      return Math.floor(Math.random()*max) + min;
    }
  }  
})();