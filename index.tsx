import "./style.css"
import {useEventLoopLowPriority, useCallStack, useEventLoopHighPriority} from "./EventLoopMap"
let clickedTimes1 = 0;
let clickedTimes2 = 0;
let clickedTimes3 = 0;
let clickedTimes4 = 0;

const Array1 = [...new Array(1000)].map((item, index)=> index + 1);
const Array2 = [...new Array(10000)].map((item, index)=> index + 1);
const Array3 = [...new Array(50000)].map((item, index)=> index + 1);
const Array4 = [...new Array(1000000)].map((item, index)=> index + 1);

const setStartColor = (id) => {
  document.getElementById(id).style.backgroundColor = "orange";
}
const setIdleColor = (id) => {
  document.getElementById(id).style.backgroundColor = "white";
}
const setRunningleColor = (id) => {
  document.getElementById(id).style.backgroundColor = "green";
}

// Write Javascript code!
const btCallStack1 = document.getElementById("bt-callstack-1");
const bteventloop1 = document.getElementById("bt-eventloop-1");
const btcounter1 = document.getElementById("bt-counter-1");

btcounter1.addEventListener("click", () => {
  btcounter1.innerHTML =   `Count (${++clickedTimes1})`;
})

btCallStack1.addEventListener("click", () => {
  btCallStack1.disabled = true;
  useCallStack(Array1, ([error, item,,first, last]) => {
    btCallStack1.innerHTML =   `CallStack (${first ? 0 : item})`;
    first && (btcounter1.innerHTML =   `Count (${++clickedTimes1})`)
    last && (btCallStack1.disabled = false)
  })
})

bteventloop1.addEventListener("click", () => {
  setStartColor("cp-1");
  bteventloop1.disabled = true;
  useEventLoopLowPriority(Array1, ([error, item,,first, last]) => {
    bteventloop1.innerHTML =   `EventLoop (${first ? 0 : item})`;
    first && (btcounter1.innerHTML =   `Count (${++clickedTimes1})`)
    last && (bteventloop1.disabled = false)
    first && (setRunningleColor("cp-1"))
    last && (setIdleColor("cp-1"))
  })
})

const btCallStack2 = document.getElementById("bt-callstack-2");
const bteventloop2 = document.getElementById("bt-eventloop-2");
const btcounter2 = document.getElementById("bt-counter-2");

btcounter2.addEventListener("click", () => {
  btcounter2.innerHTML =   `Count (${++clickedTimes2})`;
})

btCallStack2.addEventListener("click", () => {
  btCallStack2.disabled = true;
  useCallStack(Array2, ([error, item,,first, last]) => {
    btCallStack2.innerHTML =   `CallStack (${first ? 0 : item})`;
    first && (btcounter2.innerHTML = `Count (${++clickedTimes2})`);
    last && (btCallStack2.disabled = false)
  })
})

bteventloop2.addEventListener("click", () => {
  setStartColor("cp-2");
  bteventloop2.disabled = true;
  useEventLoopHighPriority(Array2, ([error, item,,first, last]) => {
    bteventloop2.innerHTML =   `EventLoop (${first ? 0 : item})`;
    first && (btcounter2.innerHTML = `Count (${++clickedTimes2})`);
    last && (bteventloop2.disabled = false)
    first && (setRunningleColor("cp-2"))
    last && (setIdleColor("cp-2"))
  })
})

const btCallStack3 = document.getElementById("bt-callstack-3");
const bteventloop3 = document.getElementById("bt-eventloop-3");
const btcounter3 = document.getElementById("bt-counter-3");

btcounter3.addEventListener("click", () => {
  btcounter3.innerHTML =   `Count (${++clickedTimes3})`;
})

btCallStack3.addEventListener("click", () => {
  btCallStack3.disabled = true;
  useCallStack(Array3, ([error, item,,first, last]) => {
    btCallStack3.innerHTML =   `CallStack (${first ? 0 : item})`;
    first && (btcounter3.innerHTML =   `Count (${++clickedTimes3})`);
    last && (btCallStack3.disabled = false)
  })
})

bteventloop3.addEventListener("click", () => {
  setStartColor("cp-3");
  bteventloop3.disabled = true
  useEventLoopLowPriority(Array3, ([error, item,,first, last]) => {
    bteventloop3.innerHTML =   `EventLoop (${first ? 0 : item})`;
    first && (btcounter3.innerHTML =   `Count (${++clickedTimes3})`);
    last && (bteventloop3.disabled = false)
    first && (setRunningleColor("cp-3"))
    last && (setIdleColor("cp-3"))
  })
})

const btCallStack4 = document.getElementById("bt-callstack-4");
const bteventloop4 = document.getElementById("bt-eventloop-4");
const btcounter4 = document.getElementById("bt-counter-4");

btcounter4.addEventListener("click", () => {
  btcounter4.innerHTML =   `Count (${++clickedTimes4})`;
})

btCallStack4.addEventListener("click", () => {
  btCallStack4.disabled = true;
  useCallStack(Array4, ([error, item,,first, last]) => {
    btCallStack4.innerHTML =   `CallStack (${first ? 0 : item})`;
    first && (btcounter4.innerHTML =   `Count (${++clickedTimes4})`);
    last && (btCallStack4.disabled = false)
  })
})

bteventloop4.addEventListener("click", () => {
  setStartColor("cp-4");
  bteventloop4.disabled = true
  useEventLoopLowPriority(Array4, ([error, item,,first, last]) => {
    bteventloop4.innerHTML =   `EventLoop (${first ? 0 : item})`;
    first && (btcounter4.innerHTML =   `Count (${++clickedTimes4})`);
    last && (bteventloop4.disabled = false)
    first && (setRunningleColor("cp-4"))
    last && (setIdleColor("cp-4"))
  })
})

