const questionObj = 
    {
      correctAnswer: 'Three ',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };
    // Destructuring the object
    const{correctAnswer, options, question}=questionObj;

    let score=0;

    //Accessing all the elements:
    const questionEl = document.getElementById("question");
    const optionEl = document.getElementById("options");
    const scoreEl = document.getElementById("score");

    //Manipulating the DOM:
    //Setting question text content
    questionEl.textContent = question; // directly accessing 'question' due to destructuring.

    const shuffledOptions = shuffleOptions(options);

    //Populating the Options div with the buttons.
    shuffledOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        optionEl.appendChild(btn);

    // Event handling on the button:
    btn.addEventListener("click", () => {
        if(opt === correctAnswer){
            score++;
        }
        else{
            score=score-0.25;
        }
    console.log(score);
    scoreEl.textContent = `Score: ${score}`;
    questionEl.textContent = 'Quiz Completed!!';
    optionEl.textContent = '';
        });
    });

//Shuffling the Options
function shuffleOptions(options) {
    for (let i = options.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * i + 1);
      [options[i], options[j]] = [
        options[j],
        options[i],
      ];
    }
    return options;
  }
  
//   shuffleOptions([1, 2, 3, 4, 5]);