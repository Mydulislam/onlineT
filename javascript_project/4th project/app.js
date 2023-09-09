document.addEventListener('mousemove',function(e){
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    let size = Math.random() * 100;
    heart.style.width = (size-50) + 'px';
    heart.style.height = (size-50) + 'px';
    body.appendChild(heart);
    setTimeout(function(){
        heart.remove()
    },2000)
})