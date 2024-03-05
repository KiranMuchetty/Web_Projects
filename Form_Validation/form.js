let form = document.querySelector('form');
        let username = document.getElementById('username')
        let mail = document.getElementById('mail')
        let password = document.getElementById('password');
        let cPassword = document.getElementById('password2')

        form.addEventListener('submit',(e)=>{
           e.preventDefault();

           checkInputs();
        })

        function checkInputs() {
             const usernameValue = username.value.trim();
             const mailValue = mail.value.trim();
             const passwordValue = password.value.trim();
             const cPasswordValue = cPassword.value.trim();


             if (usernameValue === '') {
                setErrorFor(username, 'Username cannot be blank');
             }
             else setSuccessFor(username);


             if (mailValue === '') {
                setErrorFor(mail, 'Email cannot be blank')
             }
             else if(!isEmail(mailValue))
             {
                setErrorFor(mail, 'Email is not valid')
             }
             else setSuccessFor(mail)


             if (passwordValue === '') {
                setErrorFor(password, 'password cannot be empty')
             }
             else setSuccessFor(password)

             if (cPasswordValue === '') {
                setErrorFor(cPassword, 'password2 cannot be empty')
             }
             else if(cPasswordValue !== passwordValue){
                setErrorFor(cPassword, `password2 doesn't match`)
             }
             else setSuccessFor(cPassword)
             
        }

        function setErrorFor(input,message) {
            
            const formControl = input.parentElement
            const span = formControl.querySelector('span');
            span.innerText = message;
            formControl.className = 'field error';
            // formControl.classList.add('error')
        }

        function setSuccessFor(input) {
            const formControl = input.parentElement
            formControl.className = 'field success';
        }

        function isEmail(mail) {
            return /^[a-zA-Z]+@[a-zA-Z]+\.[a-z]{2,3}$/.test(mail);s
        }