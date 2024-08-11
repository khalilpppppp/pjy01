let search = document.getElementById('shop')
let show = document.getElementById('show666')
search.onmouseover = function(){
    show.style.display = 'block'
    search.style.borderColor = '#FF6700'
}
search.onmouseleave = function(){
    show.style.display = 'none'
    search.style.borderColor = ''
}


let tab = document.getElementsByClassName('tab-list');
let ul2 = document.getElementsByClassName('min-ul2');
    for(let i = 0;i<tab.length;i++){
        tab[i].index = i;
        
        tab[i].onmouseenter = function(){
            
            for(let j = 0;j<ul2.length;j++){
                ul2[j].style.display = 'none'
            }
            ul2[this.index].style.display = 'block'
        }
    }

let sli = document.getElementsByClassName('slide-loader')
