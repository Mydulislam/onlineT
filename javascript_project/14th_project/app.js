let list = document.querySelectorAll('li');
let bodySelect = document.querySelector('body'); 
let colorArray = ['#f53b57','#3c40c6','#05c46b','#283335'];

for(let i=0; i<list.length; i++){
    list[i].onmouseover = function(){
        let j=0;
        while(j < list.length){
            list[j++].className = 'list';
        }
        list[i].className = 'list active';

        bodySelect.style.backgroundColor = colorArray[i];
    }
}