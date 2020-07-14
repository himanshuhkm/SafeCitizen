firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        window.location.replace('../../google_logout.html')

    } else {
        // No user is signed in.

        alert('Error logging in')
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