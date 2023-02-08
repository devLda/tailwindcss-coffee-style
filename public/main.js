$(document).ready(function(){
  $('#root').scroll(function(){
    if ($('#root').scrollTop()) {
      $('#backtop').removeClass('hidden');
      $('#backtop').addClass('block');
    }else{
      $('#backtop').removeClass('block');
      $('#backtop').addClass('hidden');
    }
  }); 

  $('#backtop').click(function(){
    $('#root').animate({
      scrollTop:0
    },1500);
  });
});

const topMenu = document.getElementById('lda-top-menu')
const toggleTopMenuIcon = document.getElementById('lda-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // Click to Toggle top menu icon
    topMenu.classList.toggle('lda-topmenu-expanded')
    topMenu.classList.toggle('hidden')
  } else {
    // Click Outside from Toggle top menu icon
    if (topMenu.classList.contains('lda-topmenu-expanded')) {
      topMenu.classList.remove('lda-topmenu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})

const btn_login = document.getElementById('login');
const btn_signup = document.getElementById('signup');
const box_login = document.getElementById('box-login');
const box_signup = document.getElementById('box-signup');
const btn_close = document.getElementById('btn-close');
const modal_login = document.getElementById('modal-box-login');
const modal_signup = document.getElementById('modal-box-signup');

btn_login.addEventListener('click', () => {
  box_login.classList.add('show');
})

btn_close.addEventListener('click', () => {
  box_login.classList.remove('show');
  box_signup.classList.remove('show');
})

box_login.addEventListener('click', (e) => {
  console.log(e.target)
  if(!modal_login.contains(e.target))
    {
      btn_close.click();
    } 
})

btn_signup.addEventListener('click', () => {
  box_signup.classList.add('show');
})

box_signup.addEventListener('click', (e) => {
  console.log(e.target)
  if(!modal_signup.contains(e.target))
    {
      btn_close.click();
    } 
})