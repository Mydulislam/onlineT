let iconBox = document.querySelectorAll('.iconBox');
let contentBx = document.querySelectorAll('.contentBox');

for(let i=0; i<iconBox.length; i++){
    iconBox[i].addEventListener('mouseover',function(){
        for(let j=0; j<contentBx.length; j++){
            contentBx[j].className = 'contentBox';
        }
        document.getElementById(this.dataset.id).className = "contentBox active";

        for(let k=0; k<iconBox.length; k++){
            iconBox[k].className = 'iconBox';
        }
        this.className = 'iconBox active';
    })
}