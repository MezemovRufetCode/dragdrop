let dzones = Array.from(document.querySelectorAll(".dropzone"));
let circles = Array.from(document.querySelectorAll(".circle"));

circles.forEach((circle) => {
  // let firstcol = circle.getAttribute("data-red");
  // let secondcol = circle.getAttribute("data-green");
  // let thirdcol = circle.getAttribute("data-blue");
  // let mycol = "rgb(" + firstcol + "," + secondcol + "," + thirdcol + ")";
  // console.log(mycol);

  circle.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
    console.log("drag started");
  });
});

dzones.forEach((dzone) => {
  dzone.addEventListener("dragenter", () => {});
  dzone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  dzone.addEventListener("drop", (e) => {
    let droppedColorId = e.dataTransfer.getData("text");
    console.log(droppedColorId);
    dzone.style.backgroundColor = droppedColorId;
    console.log("item dropped");
  });
});
