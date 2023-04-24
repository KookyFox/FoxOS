import './app.css'
import App from './App.svelte'
import Taskbar from './app/taskbar.svelte'
import Header from './Header.svelte'
import Welcome from './app/welcome.svelte'
import Videos from './app/reel.svelte'


/*const header = new Header({
  target: document.getElementById('windowheader')
})


const header2 = new Header({
  target: document.getElementById('window2header')
})*/

const windowVideosContent = new Videos({
  target: document.getElementById('windowVideosContent'),
})


const window1content = new Welcome({
  target: document.getElementById('window1content'),
})

const taskbar = new Taskbar({
  target: document.getElementById('taskbar'),
})

export default taskbar;

/*const taskbar = new Taskbar({
  target: document.getElementById('taskbar'),
})

export default taskbar; */

// Make the DIV element draggable:
dragElement(document.getElementById("window1"));
dragElement(document.getElementById("window2"));
dragElement(document.getElementById("window3"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

