const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')
const logoElement = document.getElementById('logo');

if(hasDarkmode == null) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        enableDarkMode()
    }   else {
        disableDarkMode()
    }
}   else if(hasDarkmode === 'on') {
    enableDarkMode()
}   else if(hasDarkmode === 'off') {
    disableDarkMode()
}



darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked) {
        enableDarkMode()
        localStorage.setItem('darkmode', 'on')
    }   else{
        disableDarkMode()
        localStorage.setItem('darkmode', 'off')
    }
})


function enableDarkMode () {
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')

}
function disableDarkMode () {
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')
}


document.addEventListener('DOMContentLoaded', function() {
  // Select all item wrappers (the new parent container)
  const itemWrappers = document.querySelectorAll('.accordion-container .accordion-item-wrapper');

  itemWrappers.forEach(wrapper => {
    // Get the clickable header (your styled .accordion-item)
    const header = wrapper.querySelector('.accordion-header');
    
    header.addEventListener('click', function() {
      const content = wrapper.querySelector('.accordion-content');
      const arrowDiv = wrapper.querySelector('.accordion-arrow');

      // Check if the current item is already active
      const isAlreadyActive = wrapper.classList.contains('active');

      // 1. Close all other open items
      itemWrappers.forEach(otherWrapper => {
        if (otherWrapper !== wrapper && otherWrapper.classList.contains('active')) {
          // Close the other item
          otherWrapper.classList.remove('active');
          otherWrapper.querySelector('.accordion-content').style.maxHeight = 0;
          otherWrapper.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
          otherWrapper.querySelector('.accordion-arrow').classList.remove('arrow-active');
        }
      });

      // 2. Toggle the clicked item
      if (isAlreadyActive) {
        // Close it
        wrapper.classList.remove('active');
        content.style.maxHeight = 0;
        this.setAttribute('aria-expanded', 'false');
        arrowDiv.classList.remove('arrow-active');
      } else {
        // Open it
        wrapper.classList.add('active');
        // Calculate the height of the content for a smooth transition
        content.style.maxHeight = content.scrollHeight + "px"; 
        this.setAttribute('aria-expanded', 'true');
        arrowDiv.classList.add('arrow-active'); 
      }
    });
  });
});