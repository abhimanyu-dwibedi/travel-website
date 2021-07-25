burger=document.querySelector('.burger')
navbar=document.querySelector('.navabar')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    
      navlist.classList.toggle('visiblity-resp')
      rightnav.classList.toggle('visiblity-resp')
      navbar.classList.toggle('hi-nav-resp')
})