const btn = document.querySelector("#btn");
const container_1 = document.querySelector(".container-fluid-1");
const main_page = document.querySelector(".main-page");


const enter = () => {
  // console.log("clicked");

  main_page.innerHTML = `  
  `;

};

const back = () => {
  // console.log("clicked");
  main_page.innerHTML = `

    <div class="container-fluid container-fluid-1 d-flex flex-column justify-content-center align-items-center"
      style="height: 100vh;">

      <input type="text" class="width px-4 mb-5 border border-0 rounded-5 fs-2 text-center"
        placeholder="ENTER YOUR NICKNAME">

      <button type="button" class="btn btn-primary btn-lg" id="btn" onclick="enter()">
        ENTER
      </button>

    
  </div>`
}

const start = () => {
  console.log("clicked");
  main_page.innerHTML = `
  
  `;
}