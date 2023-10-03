const workBtn = document.getElementById("workBtn")
const outPutBtn = document.getElementById("outPutBtn")



// code running on main thread


workBtn.addEventListener("click", () =>{

    console.log("worker started");
    const tik = performance.now()

    let sum = 0; 
    for (let i = 0; i < 2000000000; i++){
        sum += i;
    }
    outPutBtn.textContent = sum;

    const tok = performance.now()

    console.log(`${tok - tik}`);
    console.log("worker ended");
})



// using worker

// workBtn.addEventListener("click", ()=>{

//     const myWorker = new Worker ("worker.js");
//     console.log("worker started");
//     const tik = performance.now()
//     myWorker.postMessage("start")

//     myWorker.onmessage = (e)=>{

//     outPutBtn.textContent = e.data;

//     const tok = performance.now()

//     console.log(`${tok - tik}`);
//     console.log("worker ended");


//     }
// })


const ChangeBg = document.getElementById("ChangeBg")

ChangeBg.addEventListener("click", ()=>{

    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = `#${randomColor}`
})


// ! web worker basic info

// it is a way to run your code in a background script.

// Web workers can do complex operations without interfering the ui.

//Workers give you the ability to run some tasks in a different thread,
// so you can start the task, then continue with other processing (such as handling user actions).

//Web workers cannot directly access the DOM.