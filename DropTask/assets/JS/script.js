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
  dzone.addEventListener("dragenter", () => {
    dzone.style.backgroundColor = "red";
    // dzone.style.backgroundColor = mycol;
  });
  dzone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  dzone.addEventListener("drop", (e) => {
    let droppedItemId = e.dataTransfer.getData("text");
    let dropedItem = document.getElementById(droppedItemId);
    dzone.append(dropedItem);
    console.log("item dropped");
  });
});
