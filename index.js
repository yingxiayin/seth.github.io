function move(e) {
  let x = e.clientX;
  let y = e.clientY;
  console.log(x, y);
  var containerDiv = document.getElementById("container");
  if (x <= 600) {
    console.log(1000);
    containerDiv.style.left =  600 - x + "px";
  } else if(x > 600) {
    containerDiv.style.left = 0 + "px";
  }
  var work01Div = document.getElementById("work01");
  if (x <= 450) {
    work01Div.style.left = 450 - x + "px";
  } else if(x > 450) {
    work01Div.style.left = 0 + "px";
  }
  var work02Div = document.getElementById("work02");
  if (x <= 300) {
    work02Div.style.left = 300 - x + "px";
  } else if(x > 300) {
    work02Div.style.left = 0 + "px";
  }
  var work03Div = document.getElementById("work03");
  if (x <= 150) {
    work03Div.style.left = 150 - x + "px";
  } else if(x > 150) {
    work03Div.style.left = 0 + "px";
  }
  // var work04Div = document.getElementById("work04");
  // if (x <= 200) {
  //   work04Div.style.left =  200 - x + "px";
  // } else if(x > 200) {
  //   work04Div.style.left = 0 + "px";
  // }
}




