const hovA = document.getElementById('add')
    cls = document.getElementsByClassName('showmenu'),
    hovV = document.getElementById('veh'),
    hovE = document.getElementById('enry'),
    hovC = document.getElementById('chrg'),
    hovD = document.getElementById('dcr'),
    hovS = document.getElementById('shp'),
    menu = document.getElementById('menu'),
    btnBox = document.getElementById('drop-down'),
    mainBody = document.getElementById('main-body'),
    Hclose = document.getElementById('close'),
    ScrollDrop = document.getElementById('scroll-drop')
    document.getElementById("add").style.transition = "all .5s";

hovV.addEventListener('mouseover',()=>{
    hovA.classList.add('showmenu')
    hovA.classList.remove('showmen')
    document.getElementById("veh").style.backgroundColor = "rgba(0, 0, 0, 0.03)";
    document.getElementById("enry").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("chrg").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("dcr").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("shp").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("menu").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("veh").style.borderRadius = "5px";
})
hovE.addEventListener('mouseover',()=>{
    hovA.classList.add('showmen'),
    hovA.classList.remove('showmenu')
    document.getElementById("enry").style.backgroundColor = "rgba(0, 0, 0, 0.03)";
    document.getElementById("veh").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("chrg").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("dcr").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("shp").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("menu").style.backgroundColor = "rgba(0, 0, 0, 0)";    
    document.getElementById("enry").style.borderRadius = "5px";
})
hovC.addEventListener('mouseover',()=>{
    hovA.classList.add('showmenu')
    hovA.classList.remove('showmen')
    document.getElementById("chrg").style.backgroundColor = "rgba(0, 0, 0, 0.03)";
    document.getElementById("enry").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("dcr").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("shp").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("menu").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("veh").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("chrg").style.borderRadius = "5px";
})
hovD.addEventListener('mouseover',()=>{
    hovA.classList.add('showmen')
    hovA.classList.remove('showmenu')
    document.getElementById("dcr").style.backgroundColor = "rgba(0, 0, 0, 0.03)";
    document.getElementById("enry").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("chrg").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("veh").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("shp").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("menu").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("dcr").style.borderRadius = "5px";
})
hovS.addEventListener('mouseover',()=>{
    hovA.classList.add('showmenu')
    hovA.classList.remove('showmen')
    document.getElementById("shp").style.backgroundColor = "rgba(0, 0, 0, 0.03)";
    document.getElementById("enry").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("chrg").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("dcr").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("veh").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("menu").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("shp").style.borderRadius = "5px";
})





btnBox.addEventListener('mouseover',()=>{
    hovA.classList.remove('showmenu')
    document.getElementById("veh").style.backgroundColor = "rgba(0, 0, 0, 0)";
})
btnBox.addEventListener('mouseover',()=>{
    hovA.classList.remove('showmen')
    document.getElementById("enry").style.backgroundColor = "rgba(0, 0, 0, 0)";
})
btnBox.addEventListener('mouseover',()=>{
    hovA.classList.remove('showmenu')
    document.getElementById("chrg").style.backgroundColor = "rgba(0, 0, 0, 0)";
})
btnBox.addEventListener('mouseover',()=>{
    hovA.classList.remove('showmenu')
    document.getElementById("dcr").style.backgroundColor = "rgba(0, 0, 0, 0)";
})
btnBox.addEventListener('mouseover',()=>{
    hovA.classList.remove('showmenu')
    document.getElementById("shp").style.backgroundColor = "rgba(0, 0, 0, 0)";
})

menu.addEventListener('click',()=>{
    document.getElementById("drop-down").style.opacity = "1";
    document.getElementById("main-body").style.display = "none";
    document.getElementById('close').style.display = "block";
    document.getElementById('scroll-drop').style.display = "block";
})

Hclose.addEventListener('click',()=>{
    document.getElementById("drop-down").style.opacity = "0";
    document.getElementById("main-body").style.display = "block";
    document.getElementById('close').style.display = "none";
    document.getElementById('scroll-drop').style.display = "none";
})
