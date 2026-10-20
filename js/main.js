

let btn = document.getElementById('btn-scroll');

onscroll=function(){
    if(scrollY >= 400){
        btn.style.display='block';
    }
    else{
        btn.style.display = 'none';

    }
}

btn.onclick=function(){
    scroll({
        top:0,
        behavior:"smooth"
    })
}