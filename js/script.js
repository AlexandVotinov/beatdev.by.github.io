var menuBut = document.getElementsByClassName('main-container__menu__open')[0];
var menuPannel = document.getElementsByClassName('main-container__menu')[0];
var menuStat = 0;

function menu(){
    if(menuStat == 0){
        menuBut.style.right = 0;
        menuPannel.style.left = 0;
        menuStat = 1;
    }else{
        menuBut.style.right = '-50px';
        menuPannel.style.left = '-50px';
        menuStat = 0;
    }
}