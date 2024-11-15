const btn = document.querySelector("#btn");
// console.log(btn);
const container_1 = document.querySelector(".container-fluid-1");
const main_page = document.querySelector(".main-page");
console.log(main_page);

// console.log(container_1);
// const back_button = document.querySelector("#back");

const start = () => {
  console.log("clicked");

  main_page.innerHTML = `  <div class="fixed-top mt-5 back">
      <button type="button" class="btn btn-primary btn-sm" onclick = "back()">
        <i class="fa-regular fa-circle-left" id="back"></i>
      </button>
    </div>
    <div class="container container-fluid-1 d-flex flex-column justify-content-center align-items-center">
        <img src="./log.png" alt="img" />
        <h1 class="m-5 text-center">Who wants to be Millionaire?</h1>
        <button type="button" class="btn btn-primary p-3">START</button>
      </div>`;

};

const back = () => {
  console.log("clicked");
  main_page.innerHTML = `<div class="container-fluid container-fluid-1 d-flex flex-column justify-content-center align-items-center">
      <button type="button" class="btn btn-primary btn-lg" id="btn" onclick = "start()">
        ENTER
      </button>

    </div>`
}