// Variables

const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor() {
    bgColor.classList.add("online")
} 

async function connectionStatus(){
    try {
        const fetchResult = await fetch ('https://www.sausagedogworld.com/wp-content/uploads/2021/05/fluffy-wire-haired-dachshund.jpg' + (new Date()).getTime());
        image.src = "./images/online.png";
        setColor();
        return fetchResult.status >= 200 && fetchResult.status >= 300; 
    } catch(err) {
        // console.log(err);
        statusDisplay.textContent = "OOPS, There's no connection!"
        image.src = "./images/offline.png";
        bgColor.classList.remove("online")
    }
}

// MONITOR THE CONNECTION
setInterval(async () => {
    const result = await connectionStatus();
    if (result) {
        statusDisplay.textContent = "You're Online!";
        setColor();
    }
}, 5000);

// CHECK COLLECTION WHEN THE PAGE LOADS
window.addEventListener("load", async (event) => {
    if (connectionStatus()){
        statusDisplay.textContent = "You're online"
    } else {
        statusDisplay.textContent = "You're offline"
    }

})

// After completeing the code along, my application still didn't work. I'll be going through the code line by line to find my error. 02/20/23