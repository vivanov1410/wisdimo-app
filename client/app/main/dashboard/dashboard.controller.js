(function () {
  'use strict';

  angular
    .module('wisdimoApp')
    .controller('DashboardCtrl', DashboardCtrl);

  function DashboardCtrl(Utils, Users) {
    var vm = this;

    vm.user = Users.me();

    activate();

    ////////////////////////////////
    
    function activate() {
      vm.hero = getHero();
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

      return images[Utils.random(0, images.length)];
    }
  }  
})();