const btn = document.querySelector("#btn");
const container_1 = document.querySelector(".container-fluid-1");
const main_page = document.querySelector(".main-page");
let questionList = [];

const enter = () => {
  // console.log("clicked");

  main_page.innerHTML = `  
  `;

};

const back = () => {
  // console.log("clicked");
  main_page.innerHTML = `
`
}

const start = () => {
  console.log("clicked");
  main_page.innerHTML = `
  
  `;
}

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
displayModule("start-module");


// =======================display-prize-table-module==========================
const displayPrizeTable = () => {
  const prizeTableElement = document.getElementById("prizeTable");

  let prizeTableContent = "";
  let prizeLength = prizeTable.length;
  const tempPrizeTable = [...prizeTable];

  const questionLength = questionList.length < prizeLength ? questionList.length : prizeTable.length;
}

// =======================display-prize-table-module==========================



