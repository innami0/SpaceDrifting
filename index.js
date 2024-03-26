document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('title').animate({
        letterSpacing:["140px","20px"],
    },{
        fill: "forwards",
        duration: 1500,
        easing:"ease"
    });
    setTimeout(() =>{
    document.getElementById('menu').animate({
        opacity:["0","1"],
    },{
        fill: "forwards",
        duration: 1500,
        easing:"ease"
    });
        document.getElementById('title').animate({
        paddingTop:["70px","0px"],
    },{
        fill: "forwards",
        duration: 1500,
        easing:"ease"
    });
    
    },1500)
})

let setM = document.getElementById('setting')
let setSW = false
let Menu = document.getElementById("settingMenu")
setM.addEventListener('click',() =>{
    setSW = !setSW
    if(setSW){
        setM.animate({
            transform:['rotate(0turn)','rotate(0.25turn)']
        },{
            fill: "forwards",
            duration: 500,
            easing:"ease"
        })
        Menu.animate({
            opacity:['0','1']
        },{
            fill: "forwards",
            duration: 500,
            easing:"ease"
        })
            Menu.style.display = "block"
    }else{
        setM.animate({
            transform:['rotate(0.25turn)','rotate(0turn)']
        },{
            fill: "forwards",
            duration: 500,
            easing:"ease"
        })
        Menu.animate({
            opacity:['1','0']
        },{
            fill: "forwards",
            duration: 500,
            easing:"ease"
        })
        setTimeout(() =>{
            Menu.style.display = "none"
        },500)
    }
})

