let trigger = document.getElementById('trigger')
let img = document.getElementById('img')

trigger.addEventListener('click', () => {
   if (img.src.match('img/off.png')) {
      img.src ='img/on.png'
      img.style.width = '75%'
      trigger.textContent = 'Off'
   }else{
      img.src ='img/off.png'
      img.style.width = '60%'
      trigger.textContent = 'On'
   }
})


