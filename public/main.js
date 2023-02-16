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
const userLogin = document.getElementById('user');
const signup_login = document.querySelector('.links .signup-login')
const close_login = document.getElementById('btn-close');
const close_signup = document.getElementById('btn-close-signup');
const modal_login = document.getElementById('modal-box-login');
const modal_signup = document.getElementById('modal-box-signup');

btn_login.addEventListener('click', () => {
  box_login.classList.add('show');
})

close_login.addEventListener('click', () => {
  box_login.classList.remove('show');
});

close_signup.addEventListener('click', () => {
  box_signup.classList.remove('show');
})

box_login.addEventListener('click', (e) => {
  if(!modal_login.contains(e.target))
    {
      close_login.click();
    } 
})

btn_signup.addEventListener('click', () => {
  box_signup.classList.add('show');
})

box_signup.addEventListener('click', (e) => {
  console.log(e.target)
  if(!modal_signup.contains(e.target))
    {
      close_signup.click();
    } 
})

signup_login.addEventListener('click', () => {
  close_login.click();
  btn_signup.click();
})

const signupUser = document.querySelector('.signup-user');
const signupPassword = document.querySelector('.signup-password');
const signupSubmit = document.querySelector('.signup-submit');

signupSubmit.addEventListener('click',(e) => {
  e.preventDefault();
  if(signupUser.value === "" || signupPassword.value === "")
    alert('Vui lòng không để trống');
  else
  {
    const user = {
      user: signupUser.value,
      password: signupPassword.value
    }
    let json = JSON.stringify(user);
    localStorage.setItem(signupUser.value,json);
    alert('Đăng ký thành công');
    close_signup.click();
    btn_login.click();
  }
})

const loginUser = document.querySelector('.login-user');
const loginPassword = document.querySelector('.login-password');
const loginSubmit = document.querySelector('.login-submit');

loginSubmit.addEventListener('click',(e) => {
  e.preventDefault();
  if(loginUser.value === "" || loginPassword.value === "")
    alert('Vui lòng không để trống');
  else
  {
    const user = JSON.parse(localStorage.getItem(loginUser.value));
    if(user === null)
    {
      alert('Tên tài khoản hoặc mật khẩu không chính xác')
      loginUser.value = '';
      loginPassword.value = '';
    }
    else
    {
      if (loginUser.value === user.user && loginPassword.value === user.password)
      {
        alert('Đăng nhập thành công');
        btn_login.classList.add('hidden');
        btn_signup.classList.add('hidden');
        userLogin.classList.remove('hidden');
        userLogin.innerHTML = `Hello  ${user.user}`;
        close_login.click();
      }  
      else
        alert('Đăng nhập thất bại')
    }
    
  }
})