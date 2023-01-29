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
