app.controller('MainController', function ($scope, FlashCardFactory) {
    FlashCardFactory.getFlashCards().then(function(data) {
      console.log(data);
      $scope.flashCards = data;
    });
    
    $scope.answerQuestion = function (answer, flashCard) {
      if (!flashCard.answered) {
        flashCard.answered = true;
        flashCard.answeredCorrectly = answer.correct;
      }
    }
  });
  