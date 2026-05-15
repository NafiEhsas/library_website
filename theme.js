const modeBtn = document.querySelector("#modeBtn");


window.onload = () => {
    const savedMode = localStorage.getItem("theme");

    if(savedMode === "light"){
        enableLightMode();
    }else{
        enableDarkMode();
    }
};

function changeMode(){

    const currentTheme = localStorage.getItem("theme");

    if(currentTheme === "dark"){
        enableLightMode();
    }else{
        enableDarkMode();
    }

}
modeBtn.addEventListener("click", changeMode);

function enableLightMode(){
    document.documentElement.style.setProperty("--bg-color","white");
    document.documentElement.style.setProperty("--text-color","black");
    document.documentElement.style.setProperty("--card-bg-color","#f5f5f5");
    document.querySelectorAll(".navbar a").forEach((a)=>{
        a.style.color = "black"
    })
    localStorage.setItem("theme","light");
}

function enableDarkMode(){
    document.documentElement.style.setProperty("--bg-color","#00272b");
    document.documentElement.style.setProperty("--text-color","white");
    document.documentElement.style.setProperty("--card-bg-color","#FFFCEF");
    document.querySelectorAll(".navbar a").forEach((a)=>{
        a.style.color = "white"
    })
    localStorage.setItem("theme","dark");
}


document.addEventListener("keydown",(e)=>{
    if(e.altKey && e.ctrlKey && e.key == "z"){
        changeMode()
    }
})

