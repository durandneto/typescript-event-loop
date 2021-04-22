import "./style.css"
import {useEventLoopLowPriority, useCallStack, useEventLoopHighPriority} from "./EventLoopMap"
let clickedTimes1 = 0;
let clickedTimes2 = 0;
let clickedTimes3 = 0;
let clickedTimes4 = 0;
let clickedTimes5 = 0;
let clickedTimes6 = 0;
let clickedTimes7 = 0;

const Array1 = [...new Array(1000)].map((item, index)=> index + 1);
const Array2 = [...new Array(10000)].map((item, index)=> index + 1);
const Array3 = [...new Array(50000)].map((item, index)=> index + 1);
const Array4 = [...new Array(100000)].map((item, index)=> index + 1);
const Array_of_ONE_MILLION_kill_the_browser = [...new Array(1000000)].map((item, index)=> index + 1);

const setStartColor = (id) => {
  document.getElementById(id).style.backgroundColor = "orange";
}
const setIdleColor = (id) => {
  document.getElementById(id).style.backgroundColor = "#458fd4";
}
const setRunningleColor = (id) => {
  document.getElementById(id).style.backgroundColor = "green";
}

const FetchUser = (container_id) => {

  const avatar = document.getElementById(`${container_id}-avatar`);
  const name = document.getElementById(`${container_id}-name`);

  setStartColor(container_id)
    fetch("https://randomuser.me/api/")
    .then((data: any) =>{
      setRunningleColor(container_id)
      return  data.json()
    })
    .then((response: any) => {
      console.log(response.results[0].picture)
      return {
        name: `${response.results[0].name.title}. ${
          response.results[0].name.first
        } ${response.results[0].name.last}`,
        avatar: response.results[0].picture.large
      };
    })
    .then(user => {
      name.innerHTML = user.name;
      avatar.innerHTML = "";
      avatar.style.backgroundImage = `url(${user.avatar})`
      setIdleColor(container_id)
    })
    .catch(err => {
      console.log(err);
    });
  };

// Write Javascript code!
const btCallStack1 = document.getElementById("bt-callstack-1");
const bteventloop1 = document.getElementById("bt-eventloop-1");
const btcounter1 = document.getElementById("bt-counter-1");
const bteventloophigh1 = document.getElementById("bt-eventloop-high-1");

btcounter1.addEventListener("click", () => {
  btcounter1.innerHTML =   `Count (${++clickedTimes1})`;
})

btCallStack1.addEventListener("click", () => {
  btCallStack1.disabled = true;
  setStartColor("bt-callstack-1");
  useCallStack(Array1, ([error, item,,first, last]) => {
    btCallStack1.innerHTML =   `CallStack (${first ? 0 : item})`;
    first && (btcounter1.innerHTML =   `Count (${++clickedTimes1})`)
    last && (btCallStack1.disabled = false)
    first && (setRunningleColor("bt-callstack-1"))
    last && (setIdleColor("bt-callstack-1"))
  })
})

bteventloop1.addEventListener("click", () => {
  setStartColor("bt-eventloop-1");
  bteventloop1.disabled = true;
  useEventLoopLowPriority(Array1, ([error, item,,first, last]) => {
    bteventloop1.innerHTML =   `EventLoop Low Priority (${first ? 0 : item})`;
    first && (btcounter1.innerHTML =   `Count (${++clickedTimes1})`)
    last && (bteventloop1.disabled = false)
    first && (setRunningleColor("bt-eventloop-1"))
    last && (setIdleColor("bt-eventloop-1"))
  })
})

bteventloophigh1.addEventListener("click", () => {
  setStartColor("bt-eventloop-high-1");
  bteventloophigh1.disabled = true;
  useEventLoopHighPriority(Array1, ([error, item,,first, last]) => {
    bteventloophigh1.innerHTML =   `EventLoop High Priority (${first ? 0 : item})`;
    first && (btcounter1.innerHTML = `Count (${++clickedTimes1})`);
    last && (bteventloophigh1.disabled = false)
    first && (setRunningleColor("bt-eventloop-high-1"))
    last && (setIdleColor("bt-eventloop-high-1"))
  })
})

const btCallStack2 = document.getElementById("bt-callstack-2");
const bteventloop2 = document.getElementById("bt-eventloop-2");
const bteventloophigh2 = document.getElementById("bt-eventloop-high-2");
const btcounter2 = document.getElementById("bt-counter-2");

btcounter2.addEventListener("click", () => {
  btcounter2.innerHTML =   `Count (${++clickedTimes2})`;
})

btCallStack2.addEventListener("click", () => {
  setStartColor("bt-callstack-2");
  btCallStack2.disabled = true;
  useCallStack(Array2, ([error, item,,first, last]) => {
    btCallStack2.innerHTML =   `CallStack (${first ? 0 : item})`;
    first && (btcounter2.innerHTML = `Count (${++clickedTimes2})`);
    last && (btCallStack2.disabled = false)
    first && (setRunningleColor("bt-callstack-2"))
    last && (setIdleColor("bt-callstack-2"))
  })
})

bteventloop2.addEventListener("click", () => {
  setStartColor("bt-eventloop-2");
  bteventloop2.disabled = true;
  useEventLoopLowPriority(Array2, ([error, item,,first, last]) => {
    bteventloop2.innerHTML =   `EventLoop Low Priority (${first ? 0 : item})`;
    first && (btcounter2.innerHTML = `Count (${++clickedTimes2})`);
    last && (bteventloop2.disabled = false)
    first && (setRunningleColor("bt-eventloop-2"))
    last && (setIdleColor("bt-eventloop-2"))
  })
})

bteventloophigh2.addEventListener("click", () => {
  setStartColor("bt-eventloop-high-2");
  bteventloophigh2.disabled = true;
  useEventLoopHighPriority(Array2, ([error, item,,first, last]) => {
    bteventloophigh2.innerHTML =   `EventLoop High Priority (${first ? 0 : item})`;
    first && (btcounter2.innerHTML = `Count (${++clickedTimes2})`);
    last && (bteventloophigh2.disabled = false)
    first && (setRunningleColor("bt-eventloop-high-2"))
    last && (setIdleColor("bt-eventloop-high-2"))
  })
})

const btCallStack3 = document.getElementById("bt-callstack-3");
const bteventloop3 = document.getElementById("bt-eventloop-3");
const bteventloophigh3 = document.getElementById("bt-eventloop-high-3");
const btcounter3 = document.getElementById("bt-counter-3");

btcounter3.addEventListener("click", () => {
  btcounter3.innerHTML =   `Count (${++clickedTimes3})`;
})

btCallStack3.addEventListener("click", () => {
  setStartColor("bt-callstack-3");
  btCallStack3.disabled = true;
  useCallStack(Array3, ([error, item,,first, last]) => {
    btCallStack3.innerHTML =   `CallStack (${first ? 0 : item})`;
    first && (btcounter3.innerHTML =   `Count (${++clickedTimes3})`);
    last && (btCallStack3.disabled = false)
    first && (setRunningleColor("bt-callstack-3"))
    last && (setIdleColor("bt-callstack-3"))
  })
})

bteventloop3.addEventListener("click", () => {
  setStartColor("cp-3");
  bteventloop3.disabled = true
  useEventLoopLowPriority(Array3, ([error, item,,first, last]) => {
    bteventloop3.innerHTML =   `EventLoop Low Priority (${first ? 0 : item})`;
    first && (btcounter3.innerHTML =   `Count (${++clickedTimes3})`);
    last && (bteventloop3.disabled = false)
    first && (setRunningleColor("cp-3"))
    last && (setIdleColor("cp-3"))
  })
})

bteventloophigh3.addEventListener("click", () => {
  setStartColor("cp-3");
  bteventloophigh3.disabled = true;
  useEventLoopHighPriority(Array3, ([error, item,,first, last]) => {
    bteventloophigh3.innerHTML =   `EventLoop High Priority (${first ? 0 : item})`;
    first && (btcounter3.innerHTML = `Count (${++clickedTimes3})`);
    last && (bteventloophigh3.disabled = false)
    first && (setRunningleColor("cp-3"))
    last && (setIdleColor("cp-3"))
  })
})

const btCallStack4 = document.getElementById("bt-callstack-4");
const bteventloop4 = document.getElementById("bt-eventloop-4");
const bteventloophigh4 = document.getElementById("bt-eventloop-high-4");
const btcounter4 = document.getElementById("bt-counter-4");

btcounter4.addEventListener("click", () => {
  btcounter4.innerHTML =   `Count (${++clickedTimes4})`;
})

btCallStack4.addEventListener("click", () => {
  setStartColor("bt-callstack-4");
  btCallStack4.disabled = true;
  useCallStack(Array4, ([error, item,,first, last]) => {
    btCallStack4.innerHTML =   `CallStack (${first ? 0 : item})`;
    first && (btcounter4.innerHTML =   `Count (${++clickedTimes4})`);
    last && (btCallStack4.disabled = false)
    first && (setRunningleColor("bt-callstack-4"))
    last && (setIdleColor("bt-callstack-4"))
  })
})

bteventloop4.addEventListener("click", () => {
  setStartColor("cp-4");
  bteventloop4.disabled = true
  useEventLoopLowPriority(Array4, ([error, item,,first, last]) => {
    bteventloop4.innerHTML =   `EventLoop Low Priority (${first ? 0 : item})`;
    first && (btcounter4.innerHTML =   `Count (${++clickedTimes4})`);
    last && (bteventloop4.disabled = false)
    first && (setRunningleColor("cp-4"))
    last && (setIdleColor("cp-4"))
  })
}) 


bteventloophigh4.addEventListener("click", () => {
  setStartColor("cp-4");
  bteventloophigh4.disabled = true;
  useEventLoopHighPriority(Array4, ([error, item,,first, last]) => {
    bteventloophigh4.innerHTML =   `EventLoop High Priority (${first ? 0 : item})`;
    first && (btcounter4.innerHTML = `Count (${++clickedTimes4})`);
    last && (bteventloophigh4.disabled = false)
    first && (setRunningleColor("cp-4"))
    last && (setIdleColor("cp-4"))
  })
})

const btCallStack5 = document.getElementById("bt-callstack-5");
const bteventloop5 = document.getElementById("bt-eventloop-5");
const btcounter5 = document.getElementById("bt-counter-5");
const elresult5  = document.getElementById("cp-5-eventloop");
const counterresult5  = document.getElementById("cp-5-counter");
const callstackresult5  = document.getElementById("cp-5-callstack");

btcounter5.addEventListener("click", () => {
  counterresult5.innerHTML =  ++clickedTimes5
})

btCallStack5.addEventListener("click", () => {
  btCallStack5.disabled = true;
  useCallStack(Array_of_ONE_MILLION_kill_the_browser, ([error, item,,first, last]) => {
    callstackresult5.innerHTML =   first ? 0 : item;
    first && (counterresult5.innerHTML =  ++clickedTimes5)
    last && (btCallStack5.disabled = false)
  })
})

bteventloop5.addEventListener("click", () => {
  setStartColor("cp-5");
  bteventloop5.disabled = true
  useEventLoopLowPriority(Array_of_ONE_MILLION_kill_the_browser, ([error, item,,first, last]) => {
    elresult5.innerHTML =  first ? 0 : item;

    first && (counterresult5.innerHTML =  ++clickedTimes5)
    first && (setRunningleColor("cp-5"))

    last && (bteventloop5.disabled = false)
    last && (setIdleColor("cp-5"))
  })
}) 
const btcall6 = document.getElementById("bt-call-6");

btcall6.addEventListener("click", () => {
  FetchUser("cp-6");
})

const btcall7 = document.getElementById("bt-call-7");

btcall7.addEventListener("click", () => {
  FetchUser("cp-7");
})