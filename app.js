var correct, incorrect, attempted;
correct = 0;
incorrect = 0;
attempted = 0;


function resetScore() {
  document.getElementById('correct').textContent = 'Correct: ' + 0;
  document.getElementById('incorrect').textContent = 'Incorrect: ' + 0;
  document.getElementById('attempted').textContent = 'Attempted: ' + 0;
  correct = 0;
  incorrect = 0;
}

function showNextQuestion(index) {
  if (index < questions.length) {
    document.querySelector('.next').addEventListener('click', function() {
      document.getElementById('question-stem').textContent = questions[index].stem;
      document.getElementById('choice-1').textContent = questions[index].choice1;
      document.getElementById('choice-2').textContent = questions[index].choice2;
      document.getElementById('choice-3').textContent = questions[index].choice3;
      document.getElementById('choice-4').textContent = questions[index].choice4;
      document.getElementById('message').textContent = '';
    });
  }
}

function getAnswer() {
  var choice;
  document.querySelector('.choice-1').addEventListener('click', function() {
    choice = 1;
    console.log(1);
    checkAnswer(choice);
  });
  document.querySelector('.choice-2').addEventListener('click', function() {
    choice = 2;
    console.log(2);
    checkAnswer(choice);
  });
  document.querySelector('.choice-3').addEventListener('click', function() {
    choice = 3;
    console.log(3);
    checkAnswer(choice);
  });
  document.querySelector('.choice-4').addEventListener('click', function() {
    choice = 4;
    console.log(4);
    checkAnswer(choice);
  });
}

function checkAnswer(choice) {
    if (attempted === 0) {
      correct += 1;
      attempted = correct + incorrect;
    }
    else if (choice === questions[attempted-1].correctChoice) {
      correct += 1;
      attempted = correct + incorrect;
    } else {
      incorrect += 1;
      attempted = correct + incorrect;
    }
    questionAttempted = false;
    updateCounts();
}

function updateCounts() {
  document.getElementById('correct').textContent = 'Correct: ' + correct;
  document.getElementById('incorrect').textContent = 'Incorrect: ' + incorrect;
  document.getElementById('attempted').textContent = 'Attempted: ' + attempted;
}

var questions = [
	{
		stem: 'What is 1 + 2?',
    choice1: 1,
    choice2: 2,
    choice3: 3,
    choice4: 4,
    correctChoice: 3
	},
  {
    stem: 'What is 1 + 3?',
    choice1: 1,
    choice2: 2,
    choice3: 3,
    choice4: 4,
    correctChoice: 4
  },
  {
    stem: 'What is 2 + 2?',
    choice1: 1,
    choice2: 2,
    choice3: 3,
    choice4: 4,
    correctChoice: 4
  },
  {
    stem: 'What is 1 + 1?',
    choice1: 1,
    choice2: 2,
    choice3: 3,
    choice4: 4,
    correctChoice: 2
  },
  {
    stem: 'What is 1 + 0?',
    choice1: 1,
    choice2: 2,
    choice3: 3,
    choice4: 4,
    correctChoice: 1
  },
  {
    stem: 'What is 2 - 1?',
    choice1: 1,
    choice2: 2,
    choice3: 3,
    choice4: 4,
    correctChoice: 1
  }
];

function start() {
  resetScore();
  getAnswer();
}

start()
