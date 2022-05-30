angular
  .module('app', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/home.html',
      })
      .when('/about', {
        templateUrl: '/views/about.html'
      })
      .when('/locomotor', {
        templateUrl: '/views/locomotor.html'
      })
      .when('/bones/locomotor', {
        templateUrl: '/views/bones.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('controller', ($scope) => {
    $scope.title = "Anatomy";
    $scope.bones = bones;
  })
  .controller('homeCtrl', ($scope) => {
    $scope.title = "Anatomy Cards";
    $scope.bones = bones;

    setTimeout(() => {
      document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.transition = 'background-color 1s';
    }, 0);

    setInterval(() => {
      document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.transition = 'background-color 1s';
    }, 5000);
  })
  .controller("gameCtrl", ($scope) => {
    setTimeout(() => {
      const gamesDivs = document.querySelectorAll(".game");

      gamesDivs.forEach((gameDiv) => {
        // mudar o background-color
        gameDiv.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      });

      document.body.querySelectorAll('.disabled').forEach(el => {
        el.removeAttribute("href");
      });
    }, 10);
  })
  .controller("boneCtrl", ($scope, $timeout, $interval) => {
    const opt = Number(location.hash.split("?")[1].replace(/[a-zA-Z=]/g, " "));

    if (opt === undefined) {
      $scope.bone = bones[0];
    } else if (opt === 0) {
      console.log("kk")
    } else if (opt === 1) {
      console.log("kk")
    } else {
      $scope.bone = bones[0].content[0].bones[opt - 2];
    }

    $scope.accidents = $scope.bone.accidents.length;
    $scope.plays = 0;
    $scope.wins = 0;
    $scope.losses = 0;
    $scope.started = false;

    $scope.image = false;

    $scope.indexs = [];

    $scope.rotate = "0deg";
    $scope.degs = ["deg-0", "deg-90", "deg-180", "deg-270"];

    $scope.play = () => {
      $scope.rotate = $scope.degs[Math.floor(Math.random() * 4)];
      if (document.querySelector("#times-mark")) document.querySelector("#times-mark").remove();

      $scope.timer = 20;
      $scope.started = true;

      const index = Math.floor(Math.random() * $scope.bone.accidents.length);

      if ($scope.indexs.indexOf(index) === -1) {
        $scope.plays++;
        $scope.indexs.push(index);
        $scope.accident = $scope.bone.accidents[index];

        // Tempo para o bone ser alterado
        $scope.gaming = $timeout(() => {
          $scope.play();
        }, 20000);

        $scope.t = $interval(() => {
          $scope.timer--;

          if ($scope.timer === 0) {
            $scope.image = true;
            $scope.next();
          }
        }, 1000);

      } else if ($scope.plays <= $scope.bone.accidents.length) {
        $scope.play();
      }

      if ($scope.plays === $scope.bone.accidents.length) $interval.cancel($scope.t)
    }

    $scope.win = () => {
      if (($scope.wins + $scope.losses) < $scope.accidents) $scope.wins++;
      $scope.image = false;
      $scope.next();
    }

    $scope.lose = () => {
      if (($scope.wins + $scope.losses) < $scope.accidents) $scope.losses++;
      $scope.image = false;
      $scope.next();
    }

    $scope.reset = () => {
      $scope.plays = 0;
      $scope.wins = 0;
      $scope.losses = 0;
      $scope.timer = 20;
      $scope.indexs = [];
      $scope.started = false;
    }

    $scope.see = () => {
      $scope.image = true;
    }

    $scope.next = () => {
      $interval.cancel($scope.t);
      $timeout.cancel($scope.gaming);
      $scope.image = false;
      $scope.play();
      document.querySelector("#times-mark").remove();
    }

    $scope.next2 = () => {
      $interval.cancel($scope.t);
      $timeout.cancel($scope.gaming);
      $scope.image = false;
      $scope.losses++;
      $scope.play();
    }

    $scope.reset();

    document.querySelector(".game-icon").addEventListener("click", (event) => {
      if (document.querySelector("#times-mark")) document.querySelector("#times-mark").remove();
      let times = document.createElement("div");
      times.innerHTML = "<i class='fas fa-times'></i>";
      times.classList.add("times");
      times.id = "times-mark";

      times.style.position = "absolute";
      // posição do mause
      times.style.top = (event.clientY - 10) + "px";
      times.style.left = (event.clientX - 10) + "px";

      document.body.appendChild(times);
    });
  })