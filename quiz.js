const quizQuestions = [
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["A) Gold", "B) Oxygen", "C) Osmium", "D) Zinc"],
    
    answer: "b"
  },
  {
    
    question: "What is the capital of Japan?",
    options: ["A) Tokyo", "B) Beijing", "C) Seoul", "D) Bangkok"],
    answer: "a"},
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["A) Charles Dickens", "B) William Shakespeare", "C) Mark Twain", "D) Jane Austen"],
    answer: "b"
  },
  {
    question: "What is the largest planet in our Solar System?",
    options: ["A) Earth", "B) Saturn", "C) Jupiter", "D) Mars"],
    answer: "c"
  },
  {
    question: "What does HTTP stand for?",
    options: [
      "A) HyperText Transfer Protocol",
      "B) Hyperlink Transfer Protocol",
      "C) HyperText Transmission Process",
      "D) Hyperlink Text Transfer Protocol"
    ],
    answer: "a"
  },
  {
    question: "Which country is known as the Land of the Rising Sun ?",
    options: ["A) China", "B) South Korea", "C) Japan", "D) Thailand"],
    answer: "c"
  },
  {
    question: "What is the boiling point of water at sea level (in Celsius) ?",
    options: ["A) 50", "B) 75", "C) 100", "D) 125"],
    answer: "c" },
  {
    question: "Which gas do plants absorb from the atmosphere ?",
    options: ["A) Oxygen", "B) Carbon Dioxide", "C) Nitrogen", "D) Hydrogen"],
    answer: "b"
  },
  {
    question: "In computing, what does 'CPU' stand for?",
    options: ["A) Computer Processing Unit", "B) Central Process Unit", "C) Central Processing Unit", "D) Computer Performance Unit"],
    answer: "c"
  },
  {
    question: "Which year did the first man land on the moon ?",
    options: ["A) 1965", "B) 1969", "C) 1971", "D) 1959"],
    answer: "b"
  }
];
function runQuiz() 
{
  let score = 0;

  for (let i = 0;
       
    i < quizQuestions.length; i++) {
    let q = quizQuestions[i];



    let promptText =

      `${q.question}\n\n` +
      `${q.options[0]}\n${q.options[1]}\n${q.options[2]}\n${q.options[3]}\n\n` +
      "Enter your answer (A, B, C, or D):";


    let userAnswer = prompt(promptText);

    if (!userAnswer)
         {
      alert("No input entered. Moving to next question.");
      continue;
    }

    userAnswer 
            = userAnswer.toLowerCase().trim();

    if (userAnswer === q.answer) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! Correct answer is: ${q.answer.toUpperCase()}`);
    }
  }

  alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

runQuiz();
