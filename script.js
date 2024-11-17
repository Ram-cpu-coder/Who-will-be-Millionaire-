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
                    ${i+1}
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
}
// ============================start Game================================
// ============================home Game================================
const home = () =>{
  displayModule("enter-module");
}
// ============================home Game================================
