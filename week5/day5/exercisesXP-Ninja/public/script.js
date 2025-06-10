let questions = [];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const submitBtn = document.getElementById('submit-btn');

fetch('/api/questions')
  .then(res => res.json())
  .then(data => {
    questions = data;
    showQuestion();
  });

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  feedbackEl.textContent = '';

  q.options.forEach(option => {
    const label = document.createElement('label');
    label.innerHTML = `
      <input type="radio" name="option" value="${option}"> ${option}
    `;
    optionsEl.appendChild(label);
    optionsEl.appendChild(document.createElement('br'));
  });
}

submitBtn.addEventListener('click', () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert('Please select an option!');
    return;
  }

  const answer = selected.value;
  const correct = questions[currentQuestion].answer;

  if (answer === correct) {
    feedbackEl.textContent = "Correct!";
    score++;
  } else {
    feedbackEl.textContent = `Wrong! Correct answer: ${correct}`;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    setTimeout(showQuestion, 1000);
  } else {
    setTimeout(() => {
      questionEl.textContent = "Quiz Complete!";
      optionsEl.innerHTML = '';
      submitBtn.style.display = 'none';
      feedbackEl.textContent = '';
      scoreEl.textContent = `Your final score: ${score} / ${questions.length}`;
    }, 1000);
  }
});
