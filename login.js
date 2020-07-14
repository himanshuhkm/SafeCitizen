firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
        window.location.replace('user_data.html')

    } else {
        // No user is signed in.

        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
function signInWithGoogle() {
    auth.signInWithPopup(provider)
    // if (user) {
    //     window.location.replace('google_logout.html')
    // }
    // else {
    //     alert('Error logging in')
    // }

}

function logout() {
    firebase.auth().signOut();
}