'use strict'

document.addEventListener('DOMContentLoaded', () => {
   const signInForm = document.querySelector('form');

   if (signInForm) {
      const username = signInForm.querySelector('#username');
      const password = signInForm.querySelector('#password');

      signInForm.addEventListener('submit', (e) => {
         e.preventDefault();

         username.classList.remove('shake-animate', 'alert');
         password.classList.remove('shake-animate', 'alert');

         const formData = Object.fromEntries(new FormData(signInForm).entries());

         fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(({ admins, registeredUsers }) => {
               admins.forEach(admin => {
                  if (admin.login === formData.username && admin.password === formData.password) {
                     window.location.replace('http://localhost:3001/');
                  } else {
                     username.classList.add('shake-animate', 'alert');
                     password.classList.add('shake-animate', 'alert');
                  }
               });
            })
            .finally(() => {
               signInForm.reset();
            });
      });
   }

});