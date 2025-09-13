const dot = document.createElement('div');
  dot.classList.add('cursor-dot');

  const border = document.createElement('div');
  border.classList.add('cursor-border');

  document.body.appendChild(dot);
  document.body.appendChild(border);

  document.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';

    border.style.left = e.clientX + 'px';
    border.style.top = e.clientY + 'px';
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    border.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    border.style.opacity = '1';
  });




// Filter functionality

filterSelection("all")
function filterSelection(c) {
  console.log("Filter function called with category:", c);
  var x, i;
  x = document.getElementsByClassName("content");
  if (c == "all") c = "";
  // Add the "show" class 
  for (i = 0; i < x.length; i++) {
    filterRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) filterAddClass(x[i], "show");
  }
}

// Show filtered elements
function filterAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function filterRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filterBtnContainer");
var btns = btnContainer.getElementsByClassName("filterBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // Remove active from all buttons
    for (let j = 0; j < btns.length; j++) {
      btns[j].classList.remove("active");
    }
    // Add active to the clicked one
    this.classList.add("active");
  });
}