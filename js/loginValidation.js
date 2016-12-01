function(){

const txtUser = document.getElementById('txtUser');
const txtPassword = document.getElementById('txtPassword');
const btnSubmit = document.getElementById('submit');
const btnLogout = document.getElementById('logout');
console.log('lol')

// Add login event
btnSubmit.addEventListener('click', e => {
    console.log('Authenticating User...')
    //  Get username and password
    const user = txtUser.value + "@visions.com";
    console.log(user)
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign In
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

};
