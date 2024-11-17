
const ANSWER_NO = 4;
const QUESTIONS_REQUIRED = 3;

const btn = document.querySelector("#btn");
const container_1 = document.querySelector(".container-fluid-1");
const main_page = document.querySelector(".main-page");
let questionList = [];
let currQuestion = 0;

// ==========================prizeTable=========================
let prizeTable = [
  {
    value: 100,
    isGuarantee: true,
    hasWon: false,
  },
  {
    value: 200,
    isGuarantee: false,
    hasWon: false,
  },
  {
    value: 300,
    isGuarantee: false,
    hasWon: false,
  },
  {
    value: 500,
    isGuarantee: false,
    hasWon: false,
  },
  {
    value: 1000,
    isGuarantee: true,
    hasWon: false,
  },
  {
    value: 2000,
    isGuarantee: false,
    hasWon: false,
  },
  {
    value: 4000,
    isGuarantee: false,
    hasWon: false,
  },
  {
    value: 8000,
    isGuarantee: false,
    hasWon: false,
  },
  {
    value: 16000,
    isGuarantee: false,
    hasWon: false,
  },
  {
    value: 32000,
    isGuarantee: true,
    hasWon: false,
  },
  {
    value: 64000,
    isGuarantee: false,
    hasWon: false,
  },
  {
    value: 125000,
    isGuarantee: false,
    hasWon: false,
  },
  {
    value: 250000,
    isGuarantee: false,
    hasWon: false,
  },
  {
    value: 500000,
    isGuarantee: false,
    hasWon: false,
  },
  {
    value: 1000000,
    isGuarantee: true,
    hasWon: false,
  },

]

// ==========================prizeTable=========================
let isLoading = false;
// =======================display-module==========================
const displayModule = (moduleName) => {
  const sectionList = document.querySelectorAll("section");
  sectionList.forEach((item) => {
    if (item.id != moduleName) {
      item.classList.add("hidden");
    } else {
      item.classList.remove("hidden");
    }
  });

}

// =======================display-module==========================
//============================display-question========================
const displayQuestion = (questionIndex) =>{

  currQuestion = questionIndex;

  const questionSpan = document.getElementById("questionSpan");
  const answerSpan = document.getElementById("answerSpan");
  let optionsContent = "";

  //loop to create the options
  for(i = 0; i < ANSWER_NO; i++ ){
    optionsContent += `
                <div class="col-6 btn btn-primary polygon" onclick = "submitAnswer(${i})" id="answer-${i}">
                  ${questionList[currQuestion].options[i]}
                </div>
    `;
  }
  //display the options and questions
  answerSpan.innerHTML = optionsContent;
  questionSpan.innerHTML = `${questionIndex+1}.${questionList[questionIndex].question}`
  isLoading = false;

  //display the prize table after the question
displayPrizeTable();
  
}
//=============================display quesiton=======================


// =======================display-prize-table-module==========================
const displayPrizeTable = () => {
  const prizeTableElement = document.getElementById("prizeTable");

  let prizeTableContent = "";
  let prizeLength = prizeTable.length;
  const tempPrizeTable = [...prizeTable];

  const questionLength = questionList.length < prizeLength ? questionList.length : prizeTable.length;

  for (i = questionLength - 1; i >= 0; i--) {
    prizeTableContent += `
                  <tr class = '${i == currQuestion - 1
        ? "currentWin"
        : prizeTable[i].isGuarantee
          ? "guaranteed"

          : ""
      }'>

                    <td style = "text-align:right !important;">
                    ${i + 1}
                    </td>
                    <td ${prizeTable[i].hasWon ? 'class = "guaranteed"' : ""}>
                    </td>
                    <td>
                    $ ${prizeTable[i].value}
                    </td>
                  </tr>
  `;
  }

  prizeTableElement.innerHTML = prizeTableContent;
}

// =======================display-prize-table-module==========================


// ============================enter Game================================
const enterGame = () => {
  displayModule("start-module");
}
// ============================enter Game================================



// ============================start Game================================
const startGame = () => {
  displayModule("quiz-module")
  displayQuestion(0);
}
// ============================start Game================================
// ============================home Game================================
const home = () => {
  displayModule("enter-module");
}
// ============================home Game================================
// ====================================fetching the json file==========================

const fetchQuestion = async () => {
  const response = await fetch("questions.json");
  const data = await response.json();

  let randomQuestions = data.sort(() => Math.random() - 0.5);

  randomQuestions = randomQuestions.map((q) => {
      q.options.sort(() => Math.random() - 0.5);

      return q;
  });
  questionList = randomQuestions.slice(0, QUESTIONS_REQUIRED);
};