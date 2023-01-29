// Author: https://trungquandev.com

// document.onreadystatechange = () => {
//   if (document.readyState == 'complete') {
//     alert('Quick note: This website is a learning project in the field of programming. All information in this website are sample data, they are not real. Thanks for reading this note!')
//   }
// }

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
