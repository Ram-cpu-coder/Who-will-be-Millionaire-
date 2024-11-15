const btn = document.querySelector("#btn");
const container_1 = document.querySelector(".container-fluid-1");
const main_page = document.querySelector(".main-page");



const start = () => {
  console.log("clicked");

  main_page.innerHTML = `  
  <div class="fixed-top back">
      <button type="button" class="btn btn-primary btn-sm button-back" onclick = "back()">
        <i class="fa-regular fa-circle-left" id="back"></i>
      </button>
    </div>
    <div class="container-fluid container-fluid-1 d-flex flex-column justify-content-center align-items-center">
    <div class="d-flex flex-column justify-content-center align-items-center" id = "main-page-bg" style = "height: 100vh">
        <img src="./log.png" alt="img" />
        <h1 class="m-5 text-center">Who wants to be Millionaire?</h1>
        <button type="button" class="btn btn-primary p-3">START</button>
      </div>
      </div>`;

};

const back = () => {
  console.log("clicked");
  main_page.innerHTML = `
  <div class="container-fluid container-fluid-1 d-flex flex-column justify-content-center align-items-center">
  
      <input type="text" class="width p-1 mb-5 border border-0 rounded-5 fs-1 text-center" placeholder = "Enter Your Nickname">
      <button type="button" class="btn btn-primary btn-lg" id="btn" onclick = "start()">
        ENTER
      </button>

    </div>`
}