'use strict';

angular.module('lovepopPbApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    // init nb of col/rows
    // $scope.isStart=false;

    $scope.rows = [0,1,2,3,4,5,6,7];
    $scope.columns = [0,1,2,3,4,5,6,7];

    $scope.startGame = function () {
      // $scope.startGame = function (player) { tried to get player names but had no time to finish
      //   $scope.player1 = player.p1;
      //   $scope.player2 = player.p2;
    // }

        //set all cases to empty
        $scope.Piece = [[0,1,2,3,4,5,6,7],[0,1,2,3,4,5,6,7],[0,1,2,3,4,5,6,7],[0,1,2,3,4,5,6,7],[0,1,2,3,4,5,6,7],[0,1,2,3,4,5,6,7],[0,1,2,3,4,5,6,7],[0,1,2,3,4,5,6,7]];
        for (var i=0;i<=7;i++){
          for (var j=0;j<=7;j++){
            $scope.Piece[i][j] = 'empty';
          }
        }
        //set the 4 first pieces
        $scope.Piece[3][3] = 'dark';
        $scope.Piece[3][4] = 'light';
        $scope.Piece[4][3] = 'light';
        $scope.Piece[4][4] = 'dark';

        // set score and 1s turn
        $scope.scoreLight = 0;
        $scope.scoreDark = 0;
        $scope.turn = 'light';

    };
    //we start our game first
    $scope.startGame();


    $scope.move = function (r,c) {
      if ( $scope.Piece[r][c] === 'dark' ||  $scope.Piece[r][c] === 'light')
      // do nothing becauseyou can't click on a piece already here.
      {}
      else {
        if ($scope.turn === 'dark'){         // when dark player plays

          $scope.Piece[r][c] = 'dark';
          $scope.turn = 'light';

          //look left and look right
          for (var k=1; k<8; k++){
            var l = 1;
            var m = 1
            if($scope.Piece[r][c+k] === 'dark'){
              while ($scope.Piece[r][c+l] === 'light'){
                $scope.Piece[r][c+l] = 'dark';
                l++;
                $scope.scoreDark++
              }
            }
            if($scope.Piece[r][c-k] === 'dark') {
              while ($scope.Piece[r][c - m] === 'light') {
                $scope.Piece[r][c - m] = 'dark';
                m++;
                $scope.scoreDark++
              }
            }
          }
          //look down
          for (var k=(r); k<(8-r); k++){
            var l = 1;

            if($scope.Piece[r+k][c] === 'dark'){
              while ($scope.Piece[r+l][c] === 'light'){
                $scope.Piece[r+l][c] = 'dark';
                l++;
                $scope.scoreDark++
              }
            }
          }
          //look up
          for (k=r; k>0; k--){
            var l = 1;
            if($scope.Piece[r-k][c] === 'dark'){
              while ($scope.Piece[r-l][c] === 'light'){
                $scope.Piece[r-l][c] = 'dark';
                l++;
                $scope.scoreDark++
              }
            }
          }
          //look left up and right up
          for (var k=1; k<(8-r); k++){
            var l = 1;
            var m = 1;
            if($scope.Piece[r+k][c+k] === 'dark'){
              while ($scope.Piece[r+l][c+l] === 'light'){
                $scope.Piece[r+l][c+l] = 'dark';
                l++;
                $scope.scoreDark++
              }
            }
            if($scope.Piece[r+k][c-k] === 'dark'){
              while ($scope.Piece[r+m][c-m] === 'light'){
                $scope.Piece[r+m][c-m] = 'dark';
                m++;
                $scope.scoreDark++
              }
            }
          }
          //look left down and right down
          for (var k=r; k>0; k--){
            var l = 1;
            var m = 1;
            if($scope.Piece[r-k][c+k] === 'dark'){
              while ($scope.Piece[r-l][c+l] === 'light'){
                $scope.Piece[r-l][c+l] = 'dark';
                l++;
                $scope.scoreDark++
              }
            }
            if($scope.Piece[r-k][c-k] === 'dark'){
              while ($scope.Piece[r-m][c-m] === 'light'){
                $scope.Piece[r-m][c-m] = 'dark';
                m++;
                $scope.scoreDark++
              }
            }
          }

        }
        else{
          $scope.Piece[r][c] = 'light';       // when light player plays, same logic
          $scope.turn = 'dark';

          //look left and look right
          for (var k=1; k<8; k++){
            var l = 1;
            var m = 1
            if($scope.Piece[r][c+k] === 'light'){
              while ($scope.Piece[r][c+l] === 'dark'){
                $scope.Piece[r][c+l] = 'light';
                l++;
                $scope.scoreLight++
              }
            }
            if($scope.Piece[r][c-k] === 'light') {
              while ($scope.Piece[r][c - m] === 'dark') {
                $scope.Piece[r][c - m] = 'light';
                m++;
                $scope.scoreLight++
              }
            }
          }
          // look down
          for (var k=r; k<(8-r); k++){
            var l = 1;

            if($scope.Piece[r+k][c] === 'light'){
              while ($scope.Piece[r+l][c] === 'dark'){
                $scope.Piece[r+l][c] = 'light';
                l++;
                $scope.scoreLight++
              }
            }
          }
          //look up
          for (k=r; k>0; k--){
            var l = 1;
            if($scope.Piece[r-k][c] === 'light'){
              while ($scope.Piece[r-l][c] === 'dark'){
                $scope.Piece[r-l][c] = 'light';
                l++;
                $scope.scoreLight++
              }
            }
          }
          //look left up and right up
          for (var k=1; k<(8-r); k++){
            var l = 1;
            var m = 1;
            if($scope.Piece[r+k][c+k] === 'light'){
              while ($scope.Piece[r+l][c+l] === 'dark'){
                $scope.Piece[r+l][c+l] = 'light';
                l++;
                $scope.scoreLight++
              }
            }
            if($scope.Piece[r+k][c-k] === 'light'){
              while ($scope.Piece[r+m][c-m] === 'dark'){
                $scope.Piece[r+m][c-m] = 'light';
                m++;
                $scope.scoreLight++
              }
            }
          }
          //look left down and right down
          for (var k=r; k>0; k--){
            var l = 1;
            var m = 1;
            if($scope.Piece[r-k][c+k] === 'light'){
              while ($scope.Piece[r-l][c+l] === 'dark'){
                $scope.Piece[r-l][c+l] = 'light';
                l++;
                $scope.scoreLight++
              }
            }
            if($scope.Piece[r-k][c-k] === 'light'){
              while ($scope.Piece[r-m][c-m] === 'dark'){
                $scope.Piece[r-m][c-m] = 'light';
                m++;
                $scope.scoreLight++
              }
            }
          }

        }

      }

    };

  }]);


