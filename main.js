//an array containing all the bg images
var Array1 = [
    "imgs/background1.jpg",
    "imgs/talking1.jpg",
    "imgs/talking2.jpg"
];
    
//we randomly set an image to the bg
var randomItem = Array1[Math.floor(Math.random()*Array1.length)];
document.querySelector('.ll').src = randomItem;



// checking the state of the forms [sign in or sign up] after refreshing
// to show the last form before refresh
if(localStorage.getItem('signin_or_signup')==null){
    var signin_or_signup=0;
}else{
    var signin_or_signup= localStorage.getItem('signin_or_signup');

}

//show the last form
if(signin_or_signup==0){
    show_signin()
}else{
    show_signup()
}




//when clicking on Don't have an account? Sign up
document.getElementById('signup-form-show').addEventListener('click',()=>{
   
    show_signup()
    signin_or_signup = 1;
    localStorage.setItem('signin_or_signup', 1);
    
})

//when clicking on Have an account? Log in
document.getElementById('signin-form-show').addEventListener('click',()=>{
   
   show_signin()
   signin_or_signup = 0;
   localStorage.setItem('signin_or_signup', 0);
})


function show_signin(){
    document.querySelector('.signup').style.left = 350+'px';
   document.querySelector('.signup').style.borderRadius = `${0} ${30}px ${30}px ${0}`;
   document.querySelector('.signup').style.opacity = 0;
   document.querySelector('.signin').style.right = 14+'px';
   document.querySelector('.signin').style.borderRadius = `${0} ${30}px ${30}px ${0}`;
   document.querySelector('.signin').style.opacity = 0.95;
   document.querySelector('.signin').style.pointerEvents = 'all';
   document.querySelector('.signup').style.pointerEvents = 'none';
   document.querySelector('.img1').style.opacity = 1;
}

function show_signup(){
    document.querySelector('.signin').style.right = 53+'%';
    document.querySelector('.img1').style.opacity = 0;
    document.querySelector('.signin').style.borderRadius = `${30}px ${0} ${0} ${30}px`;
    document.querySelector('.signin').style.opacity = 0;
    document.querySelector('.signup').style.left = 28+'px';
    document.querySelector('.signup').style.borderRadius = `${30}px ${0} ${0} ${30}px`;
    document.querySelector('.signup').style.opacity = 0.95;
    document.querySelector('.signup').style.pointerEvents = 'all';
    document.querySelector('.signin').style.pointerEvents = 'none';
}