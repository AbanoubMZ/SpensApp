import firebase from "firebase";
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCRzTyugCArdth4S2M1bSyGFH9UuywhKDY",
    authDomain: "spensapp.firebaseapp.com",
    databaseURL: "https://spensapp.firebaseio.com",
    projectId: "spensapp",
    storageBucket: "spensapp.appspot.com",
    messagingSenderId: "1011542491202",
    appId: "1:1011542491202:web:e6e787b1771418458eeddb"
  };

class FirebaseConfig {
    constructor(){
        firebase.initializeApp(firebaseConfig);
    }

    uploadPhotoAsync = (uri, filename) => {
        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebase
                .storage()
                .ref(filename)
                .put(file);

            upload.on(
                "state_changed",
                snapshot => {},
                err => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            );
        });
    };

    createUser = async user => {
        let remoteUri = null;

        try {
            firebase.auth().createUserWithEmailAndPassword(user.email,user.password).then(userCredentials=>{
                return userCredentials.user.updateProfile({
                    displayName:user.name
                });
            });
            var db = this.firestore.collection("/users").doc(this.uid);

            db.set({
                name: user.name,
                email: user.email,
                avatar: null
            });

            if (user.avatar) {
                remoteUri = await this.uploadPhotoAsync(user.avatar, `avatars/${this.uid}`);

                db.set({ avatar: remoteUri }, { merge: true });
            }
        } catch (error) {
            console.log(error);
            alert("Error: ", error);
        }
    };
    signOut = () => {
        firebase.auth().signOut();
    };

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
    Cuser=()=>{
        return firebase.auth().currentUser;   
    }

}

FirebaseConfig.shared = new FirebaseConfig();
export default FirebaseConfig;
