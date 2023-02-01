// nav-btn
const navButton=document.getElementById('nav-btn');
navButton.addEventListener('click',()=>{
    const menuMobile=document.getElementById('menu_mobile');
    menuMobile.style.display='flex'
    const closenav=document.getElementById('menu_nav_btn')
    closenav.addEventListener('click',function(){
        menuMobile.style.display='none'
    })
})

// section1 slider//
let slideIndex=1;
const setDlnone=()=>{
    const slide=document.getElementsByClassName("slide")
        for (const sld of slide) {
            sld.style.display='none'
        }
}
setInterval(()=>{
    if(slideIndex<4){
        slideIndex++;
    }
    else{
        slideIndex=1;
    }
    setDlnone();
    document.getElementById(`slide${slideIndex}`).style.display='block';
},4000)
const btnslides=document.getElementsByClassName("btnslide")
for (const btn of btnslides) {
    btn.addEventListener('click',()=>{
        console.log(btn.value);
        slideIndex=btn.value
        setDlnone();
        document.getElementById(`slide${slideIndex}`).style.display='block';
    }
    )
}
