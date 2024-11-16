const btn = document.querySelector("#btn");
const container_1 = document.querySelector(".container-fluid-1");
const main_page = document.querySelector(".main-page");


const enter = () => {
  // console.log("clicked");

  main_page.innerHTML = `  
  <div class="fixed-top back">
      <button type="button" class="btn btn-primary btn-sm button-back" onclick = "back()">
        <i class="fa-solid fa-house"></i>
      </button>
    </div>
    <div class="container-fluid container-fluid-1 d-flex flex-column justify-content-center align-items-center">
    <div class="d-flex flex-column justify-content-center align-items-center" id = "main-page-bg" style = "height: 100vh; margin: 0">
        <img src="./log.png" alt="img" />
        <h1 class="m-5 text-center">Who wants to be Millionaire?</h1>
        <button type="button" class="btn btn-primary p-3" onclick = "start()">START</button>
      </div>
      </div>`;

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
  <div class="fixed-top back">
      <button type="button" class="btn btn-primary btn-sm button-back" onclick = "back()">
        <i class="fa-solid fa-house"></i>
      </button>
    </div>
 <div class="container-fluid container-fluid-1 d-flex flex-column justify-content-center align-items-center mt-3">
    <div class="d-flex flex-column justify-content-center align-items-center p-5" id="main-page-bg">
      <div class="qs-container" style="width: 100%;">
        <div class="col-8 d-flex flex-column justify-content-center align-items-center">
          <div class="row"><img src="./log.png"></div>
          <div class="row">
            <p class="m-2 polygon">Which of the following rivers is the longest in Nepal?</p>
          </div>
          <div class="row d-flex flex-column">
            <div class="d-grid gap-2 d-md-block">
              <button type="button" class="btn btn-primary active m-2 polygon" data-bs-toggle="button">Toggle</button>
              <button type="button" class="btn btn-primary active m-2 polygon" data-bs-toggle="button">Toggle</button>
            </div>
            <div class="d-grid gap-2 d-md-block">
              <button type="button" class="btn btn-primary active m-2 polygon" data-bs-toggle="button">Toggle</button>
              <button type="button" class="btn btn-primary active m-2 polygon" data-bs-toggle="button">Toggle</button>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="d-flex justify-content-center gap-5">
           <a href=""><img src="./icons/50-percent.png" style="width: 30px; height: 30px;"></a>
            <a href=""><img src="./icons/overpopulation.png" style="width: 30px; height: 30px;"> </a>
            <a href=""><img src="./icons/search.png" style="width: 30px; height: 30px;"> </a>
          </div>
          <div class="row mt-5 text-center">
            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>15</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 1 000 000</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>14</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 500 000</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>13</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 250 000</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>12</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 125 000</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>11</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 64 000</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>10</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 32 000</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>9</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 16 000</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>8</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 8 000</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>7</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 4 000</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>6</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 2 000</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>5</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 1 000</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>4</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 500</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>3</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 300</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>2</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 200</p>
              </div>
            </div>

            <div class="d-flex flex-row gap-5 justify-content-center">
              <div class="d-flex flex-row gap-2 justify-content-end">
                <p>1</p>
                <img src="./icons/circle.png" style="height: 20px; width: 20px;">
              </div>
              <div class="amount">
                <p>$ 100</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}