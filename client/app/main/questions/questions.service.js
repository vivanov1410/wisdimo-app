(function () {
  'use strict';

  angular
    .module('wisdimoApp')
    .factory('Questions', Questions);

  function Questions($q, Utils, Users) {
    var database = [
      {
        id: 1,
        answerType: 'multipleChoice',
        text: 'Какая фигура является Кругом?',
        answer: 'circle',
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/1.mp3',
        variants: [
          {
            value: 'square',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/e484c6fa8643d9abdd18690652c6a1984a966825.png'
          },
          {
            value: 'circle',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/5e9675f65f5ea647d4c3fbd53f237fb0d1b4b596.png'
          },
          {
            value: 'rectangle',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/1315f869de3ad1e0b87b649f3e6a01f6cde810ff.png'
          },
        ],
      },
      {
        id: 2,
        answerType: 'multipleChoice',
        text: 'Какая фигура является Квадратом?',
        answer: 'square',
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/2.mp3',
        variants: [
          {
            value: 'square',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/e484c6fa8643d9abdd18690652c6a1984a966825.png'
          },
          {
            value: 'circle',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/5e9675f65f5ea647d4c3fbd53f237fb0d1b4b596.png'
          },
          {
            value: 'rectangle',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/1315f869de3ad1e0b87b649f3e6a01f6cde810ff.png'
          },
        ],
      },
      {
        id: 3,
        answerType: 'multipleChoice',
        text: 'У какой фигуры больше сторон?',
        answer: 'rectangle',
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/3.mp3',
        variants: [
          {
            value: 'triangle',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/c956bcc24d7e1e7304e153649faf8d1bc7bfb862.png'
          },
          {
            value: 'rectangle',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/a5ead53e97148f2a68189f3b29adb3e1242d185a.png'
          },
        ],
      },
      {
        id: 4,
        answerType: 'multipleChoice',
        text: 'У какой фигуры нет углов?',
        answer: 'circle',
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/4.mp3',
        variants: [
          {
            value: 'triangle',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/4e8eddca25dcd1b3ceaa41c9b56e4d80c3c01ed6.png'
          },
          {
            value: 'circle',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/15385158ad150e7fd6dd52e78aa0756e96030525.png'
          },
        ],
      },
      {
        id: 5,
        answerType: 'multipleChoice',
        text: 'Какая фигура является Ромбом?',
        answer: 'rhombus',
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/5.mp3',
        variants: [
          {
            value: 'hexagon1',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/70fe83c1ce9ce9038a35b985d4cdd6d15754ca90.png'
          },
          {
            value: 'hexagon2',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/08b7606e1d63ac1b30a8bc6e18e3aede72f6c870.png'
          },
          {
            value: 'rhombus',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/020c809c7af02f88f53a86bf9ca664c1fb622092.png'
          }
        ],
      },
      {
        id: 6,
        answerType: 'number',
        text: 'Какое число пропущено?',
        answer: 89,
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/6.mp3',
        image: 'https://ka-perseus-graphie.s3.amazonaws.com/5a9c5ae6c585cf20720cac8e216401ffd961a908.png',
        section: 'counting',
        tags: ['count to 100'],
      },
      {
        id: 7,
        answerType: 'multipleChoice',
        text: 'A какое число пропущено здесь?',
        answer: '60',
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/6.mp3',
        image: 'https://ka-perseus-graphie.s3.amazonaws.com/8ee48083c68af5fd473319217c597ef07daa8088.png',
        section: 'counting',
        tags: ['count to 100'],
        variants: [
          { value: '20', text: '20' },
          { value: '60', text: '60' },
          { value: '90', text: '90'}
        ],
      },
      {
        id: 8,
        answerType: 'number',
        text: 'A какое число пропущено здесь?',
        answer: 21,
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/6.mp3',
        image: 'https://ka-perseus-graphie.s3.amazonaws.com/00fd63effffe07372c68bf844b3745e85ad42c1c.png',
        section: 'counting',
        tags: ['count to 100'],
      },
      {
        id: 9,
        answerType: 'number',
        text: 'A какое число пропущено здесь?',
        answer: 93,
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/6.mp3',
        image: 'https://ka-perseus-graphie.s3.amazonaws.com/f8bff3dd0faa3b170f2afc668c889e8542bfd930.png',
        section: 'counting',
        tags: ['count to 100'],
      },
      {
        id: 10,
        answerType: 'multipleChoice',
        text: 'Какое число пропущено здесь?',
        answer: '70',
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/6.mp3',
        image: 'https://ka-perseus-graphie.s3.amazonaws.com/dd2e49bb2be99f0ae0635a4471b11bd548a41686.png',
        section: 'counting',
        tags: ['count to 100'],
        variants: [
          { value: '90', text: '90' },
          { value: '70', text: '70' },
          { value: '50', text: '50'}
        ],
      },
      {
        id: 11,
        answerType: 'dragdrop',
        text: 'Положи 10 бананов в коробку',
        answer: 10,
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/11.mp3',
        image: 'https://ka-perseus-graphie.s3.amazonaws.com/9bb69f238fb7a981c06fb2ce69ca3f9e131add62.png',
        section: 'counting',
        tags: ['counting with small numbers'],
      },
      {
        id: 12,
        answerType: 'dragdrop',
        text: 'Положи 6 мышек в коробку',
        answer: 6,
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/12.mp3',
        image: 'https://ka-perseus-graphie.s3.amazonaws.com/46982eacaaf0a0fd608c4f4fe3c068d0f98b5c30.png',
        section: 'counting',
        tags: ['counting with small numbers'],
      },
      {
        id: 13,
        answerType: 'dragdrop',
        text: 'Положи 6 кусочков сыра в коробку',
        answer: 6,
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/13.mp3',
        image: 'https://ka-perseus-graphie.s3.amazonaws.com/b668589746b8c800c85843a2a994efff8d429786.png',
        section: 'counting',
        tags: ['counting with small numbers'],
      },
      {
        id: 14,
        answerType: 'dragdrop',
        text: 'Положи 3 белочек в коробку',
        answer: 3,
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/14.mp3',
        image: 'https://ka-perseus-graphie.s3.amazonaws.com/84c0236395d42e7cf43f021e6ecb60c2cb73a160.png',
        section: 'counting',
        tags: ['counting with small numbers'],
      },
      {
        id: 15,
        answerType: 'dragdrop',
        text: 'Положи 2 мышек в коробку',
        answer: 2,
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/15.mp3',
        image: 'https://ka-perseus-graphie.s3.amazonaws.com/46982eacaaf0a0fd608c4f4fe3c068d0f98b5c30.png',
        section: 'counting',
        tags: ['counting with small numbers'],
      },
      {
        id: 16,
        answerType: 'number',
        text: 'Сколько здесь лисичек?',
        answer: 4,
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/16.mp3',
        image: 'https://ka-perseus-graphie.s3.amazonaws.com/8988603d2ea01e7da98e0bbb1cc24bf8806e1ca3.png',
        section: 'counting',
        tags: ['how many objects 1'],
      },
      {
        id: 17,
        answerType: 'multipleChoice',
        text: 'В какой из коробок находятся 11 Пони?',
        answer: '11',
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/17.mp3',
        variants: [
          {
            value: '7',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/bcd89da1e87e3b9f8b1144a9b7d9c737eae61af4.png'
          },
          {
            value: '5',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/43eefca01e73d00304ac491cb29721d4285d8037.png'
          },
          {
            value: '11',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/c6541a2d906ce447c7d6c59601e0f11d9d06fd0e.png'
          }
        ],
      },
      {
        id: 18,
        answerType: 'multipleChoice',
        text: 'В какой из коробок находятся 4 Божьи Коровки?',
        answer: '4',
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/18.mp3',
        variants: [
          {
            value: '6',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/9ba8b645fbf10e3f4c70b792cfb6f24e50b08f2a.png'
          },
          {
            value: 'many',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/208e60d6437b43b700914d94e6a541a7df6c601d.png'
          },
          {
            value: '4',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/4debaa4576a79a14309ba3158e3ca094f79535cd.png'
          }
        ],
      },
      {
        id: 19,
        answerType: 'multipleChoice',
        text: 'В какой из коробок находятся 15 Черепашек?',
        answer: '15',
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/19.mp3',
        variants: [
          {
            value: 'low',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/ffda05d31bf3791ae84345ff8922c8517aa6c39c.png'
          },
          {
            value: 'many',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/0d40119b6601f7c77cc461bdac1945e77a23bf0b.png'
          },
          {
            value: '15',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/4462060a4ea02b5d2525a6f66a2bfba478e48a0f.png'
          }
        ],
      },
      {
        id: 20,
        answerType: 'multipleChoice',
        text: 'В какой из коробок находятся 2 Орешка?',
        answer: '2',
        audio: 'https://dl.dropboxusercontent.com/u/30510060/exilium-studio/wisdimo/20.mp3',
        variants: [
          {
            value: '2',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/09ca5602946a60310867510a4df11610a1733c17.png'
          },
          {
            value: '3',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/2a457e7cef8928adaae26e59c72974939ea51a7d.png'
          },
          {
            value: '8',
            image: 'https://ka-perseus-graphie.s3.amazonaws.com/c8248e2f5b4af1f8ebcf816608758057235703ca.png'
          }
        ],
      },
    ];

    var service = {
      find: find,
      random: random,
      count: count
    };

    return service;

    ////////////////////////////////
    
    function find(id) {
      var deferred = $q.defer();
      
      var found = _.find(database, { id: parseInt(id, 10) });
      if(found) {
        deferred.resolve(found);
      } else {
        deferred.reject();
      }

      return deferred.promise;
    }

    function random() {
      var deferred = $q.defer();
      
      var user = Users.me();
      var questions = _.filter(database, function (question) {
        return !_.contains(user.solvedQuestions, question.id); 
      });

      var found = _.sample(questions);
      if(found) {
        deferred.resolve(found);
      } else {
        deferred.reject();
      }

      return deferred.promise;
    }

    function count() {
      return database.length;
    }
  }
})();