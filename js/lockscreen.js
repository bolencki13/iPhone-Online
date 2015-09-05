window.onload = power;

function power() {
  var allViews = document.getElementsByClassName("screen");

  if (allViews[0].style.opacity == 0.0) {
    for (var i = 0; i < allViews.length; i++) {
        allViews[i].style.opacity = 1.0;
    }
    createLockscreen();
  } else {
    for (var i = 0; i < allViews.length; i++) {
        if (folderOnScreen == true) {
            closeFolder();
        }
        allViews[i].style.opacity = 0.0;
    }
    removeLockscreen();
  }
}

function removeLockscreen() {
  document.getElementsByClassName("statusbar")[0].style.position = "relative";

  var div = document.getElementsByClassName("lockscreen");
  div[0].parentNode.removeChild(div[0]);

  addFakeIcons();
}
function createLockscreen() {
  document.getElementsByClassName("statusbar")[0].style.position = "absolute";

  var divLockscreen = document.createElement("div");
  divLockscreen.style.backgroundImage = document.getElementsByClassName("screen")[0].style.backgroundImage;
  divLockscreen.className = "lockscreen";
  divLockscreen.style.position = "absolute";

  var divClock = document.createElement("div");
  divClock.className = "clock";
  divLockscreen.appendChild(divClock);

  var divTime = document.createElement("div");
  divTime.className = "lockTime";
  divTime.innerHTML = "10:58";
  divClock.appendChild(divTime);

  var divDate = document.createElement("div");
  divDate.className = "lockDate";
  divDate.innerHTML = "Thursday September 26";
  divClock.appendChild(divDate);

  var divCamera = document.createElement("div");
  divCamera.className = "lockCamera";
  divLockscreen.appendChild(divCamera);

  var divSlideToUnclock = document.createElement("div");
  divSlideToUnclock.className = "slideToUnlock";
  divSlideToUnclock.innerHTML = "Slide To Unclock";
  divLockscreen.appendChild(divSlideToUnclock);

  var divOverlay = document.createElement("div");
  divOverlay.onmousedown = "_drag_init(this)";
  divOverlay.className = "slideOverlay";
  divOverlay.onclick = function(){removeLockscreen()};
  divLockscreen.appendChild(divOverlay);

  document.getElementsByClassName("screen")[0].appendChild(divLockscreen);
}

/*
var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved

    if (elem == null) {
      return;
    }

    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        if ((x_pos - x_elem) >= 0) {
          selected.style.left = (x_pos - x_elem) + 'px';
          //selected.style.top = (y_pos - y_elem) + 'px';
        }
    }
}

// Destroy the object when we are done
function _destroy() {
    console.log(selected.offsetLeft);
    if (selected.offsetLeft >= 150) {
      console.log("Unlocked");
      document.getElementsByClassName("lockscreen")[0].style.opacity = 0.0;
    } else {
      selected.style.left = 0;
    }
    selected = null;
}

// Bind the functions...
document.onmousemove = _move_elem;
document.onmouseup = _destroy;
*/
