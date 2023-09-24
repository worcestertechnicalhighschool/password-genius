document
  .querySelectorAll(".stylesheet")
  .forEach((el) => el.addEventListener("click", selectStylesheet));

function selectStylesheet(e) {
  let className = e.target;
  document.querySelector('body').classList = e.target.dataset.stylesheet;
//   console.log(e.target.dataset.stylesheet);
}
