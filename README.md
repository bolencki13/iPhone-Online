# iPhone-Online

This is an HTML/CSS and Javascript based iPhone mock up. This is fully customizable. There are working folders and lockscreen. Preview can be found [here](http://bolencki13.com/projects).

To create an application on the screen use this format:

<div class="appFrame">
<div class="appIcon" style="background-image: url('http://url.com/to/image.png')" id="Application Name" name="this is a test" onclick="app(this)"></div>
<div class="appText">Application Name</div>
</div>

To create a folder on the screen use this format:

<div class="folderFrame" id="Folder Name">
<div class="appText">Folder Name</div>
<div class="folderIcon" id="Folder Name" onclick="folder(this)">
<div class="folderAppFrame">
<div class="folderAppIcon" style="background-image: url('http://url.com/to/image.png')" id="App Preview Name"></div>
</div>
</div>
</div>

This funciton, located in homescreen.js, is called when an application is clicked

function launchedApp(item) {

//item.id is the app name

}

All apps and folders can be placed in the dock too. The same format is used.
Both the lock button and the home button are fuctional too.