function validation(){
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');
    // let pattern1 = /^[^ ]+@[^ ]+\.[a-z]{2,2}$/;
    let pattern2 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    let pattern3 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    
    // if(email.match(pattern1)){
    //     form.classList.add('valid');
    //     form.classList.remove('invalid');
    //     text.innerHTML = 'Your Email Address is Valid';
    //     text.style.color = '#00ff00'
    // }
    if(pattern2.test(email) || pattern3.test(email)){
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = 'Your Email Address is Valid';
        text.style.color = '#00ff00'
    }
    else{
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = 'Please Enter Valid Email';
        text.style.color = '#ff0000';
    }

    if(email == ""){
        form.classList.remove('valid');
        form.classList.remove('invalid');
        text.innerHTML = '';
        text.style.color = '#00ff00';
    }
}