"use strict";

// ドロワーの実装
const drawerIcon = document.querySelector('.drawer-icon');
const drawerContent = document.querySelector('.drawer-content');
const drawerItem = document.querySelectorAll('.drawer-content__item');
const drawerBg = document.querySelector('.drawer-background');


// drawerIconをクリックした際、drawerClickを実行
drawerIcon.onclick = drawerClick;

// drawerClick関数
function drawerClick() {
    drawerIcon.classList.toggle('clicked');
    drawerContent.classList.toggle('clicked');
    drawerBg.classList.toggle('clicked');
    
    return false;
}

for(let i = 0; i < drawerItem.length; i++) {
    drawerItem[i].addEventListener('click', () => {
        drawerClick();
    });
}