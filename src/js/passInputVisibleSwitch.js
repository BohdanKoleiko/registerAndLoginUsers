'use strict'

function visibleSwither() {
   document.addEventListener("DOMContentLoaded", () => {
      const passInput = document.querySelectorAll('.form__password');
      const visibleSign = document.createElement('div');
      visibleSign.classList.add('form__visible-pass-switcher', 'hide');


      passInput.forEach(item => {
         const input = item.querySelector('input[type="password"]');

         item.style.position = 'relative';
         item.append(visibleSign);

         item.addEventListener("click", (e) => {
            const target = e.target;


            if (target && target.classList.contains("form__visible-pass-switcher")) {
               if (target.classList.contains('hide')) {
                  target.classList.add('show');
                  target.classList.remove('hide');
                  input.type = 'text';
               } else {
                  target.classList.add('hide');
                  target.classList.remove('show');
                  input.type = 'password';
               }
            }
         })
      });
   });
}

export default visibleSwither;