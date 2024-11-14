const btn = document.querySelector("#btn");
// console.log(btn);
const container_1 = document.querySelector(".container-fluid-1");
// console.log(container_1);
btn.addEventListener("click", () => {
  console.log("clicked");

  container_1.innerHTML = ` <div
        class="container d-flex flex-column justify-content-center align-items-center"
      >
        <img src="./log.png" alt="img" />
        <h1 class="m-5 text-center">Who wants to be Millionaire?</h1>
        <button type="button" class="btn btn-primary p-3">START</button>
      </div>`;
});
