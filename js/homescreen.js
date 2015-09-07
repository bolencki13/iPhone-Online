//View iPad fork here: http://codepen.io/charlie-volpe/pen/yvAwm

//View GalaxyS3 fork here: http://codepen.io/charlie-volpe/pen/knwpE/
var debug = false;
var folderOnScreen = false;

function addFakeIcons() {
  var allFolders = document.getElementsByClassName("folderIcon");
  for (var i = 0; i < allFolders.length; i++) {
    var numberOfApps = allFolders[i].getElementsByClassName("folderAppFrame");
    for (var x = numberOfApps.length; x < 9 ; x++) {
        var fakeIcon = document.createElement("div");
        fakeIcon.className = "folderAppFrame";
        fakeIcon.id = "fake";
        allFolders[i].appendChild(fakeIcon);
    }
  }
}

function app(item) {
    if (debug == true) {
      var apps = document.getElementsByClassName("appIcon");
      for (var i = 0; i < apps.length; i++) {
          apps[i].style.outline = "0px solid red";
      }

      item.style.outline = "2px solid red";
    }
    launchedApp(item);
};
function getAppName(item) {
  return item.id;
}
function launchedApp(item) {

  if (item.id == "GitHub") {
    window.open("https://github.com/bolencki13/iPhone-Online/");
  } else {
    alert("Launched: "+getAppName(item));
  }
  /*

  Do what you want when an application is clicked

  */
}

function folder(item) {
  folderOnScreen = true;

  var folderFrame = document.createElement("div");
  folderFrame.className = "folderViewFrame";
  document.getElementsByClassName("screen")[0].appendChild(folderFrame);

  var folderViewText = document.createElement("div");
  folderViewText.innerHTML = item.id;
  folderViewText.className ="folderViewText";
  folderFrame.appendChild(folderViewText);

  var folderView = document.createElement("div");
  folderView.className = "folderView";
  folderFrame.appendChild(folderView);

  var folderApps = item.getElementsByClassName("folderAppFrame");
  for (var i = 0; i < folderApps.length; i++) {
    var divFrame = document.createElement("div");
    divFrame.className = "fAppFrame";

    if (folderApps[i].id !== "fake") {
      var folderAppIcons = folderApps[i].getElementsByClassName("folderAppIcon");
      var divIcon = document.createElement("div");
      divIcon.className = "appIcon";
      divIcon.id = folderAppIcons[0].id;
      divIcon.style.backgroundImage = folderAppIcons[0].style.backgroundImage;
      divIcon.onclick = function(){app(this)};

      var divText = document.createElement("div");
      divText.className = "fAppText";
      divText.innerHTML = folderAppIcons[0].id;

      divFrame.appendChild(divIcon);
      divFrame.appendChild(divText);
    }
    document.getElementsByClassName("folderView")[0].appendChild(divFrame);

  }

  var apps = document.getElementsByClassName("appFrame");
  for (var i = 0; i < apps.length; i++) {
    apps[i].style.opacity = 0.0;
  }
  var folders = document.getElementsByClassName("folderFrame");
  for (var i = 0; i < folders.length; i++) {
    folders[i].style.opacity = 0.0;
  }
  document.getElementsByClassName("dock")[0].style.opacity = 0.0;

  folderFrame.onclick = function(){closeFolder(this)};
}
function closeFolder(item) {
  folderOnScreen = false;

  var allViews = document.getElementsByClassName("screen");
  for (var i = 0; i < allViews.length; i++) {
      allViews[i].style.opacity = 1.0;
  }

  var div = document.getElementsByClassName("folderViewFrame");
  div[0].parentNode.removeChild(div[0]);

  var apps = document.getElementsByClassName("appFrame");
  for (var i = 0; i < apps.length; i++) {
    apps[i].style.opacity = 1.0;
  }
  var folders = document.getElementsByClassName("folderFrame");
  for (var i = 0; i < folders.length; i++) {
    folders[i].style.opacity = 1.0;
  }
  document.getElementsByClassName("dock")[0].style.opacity = 1.0;
}
function home() {
  location.reload();
};
