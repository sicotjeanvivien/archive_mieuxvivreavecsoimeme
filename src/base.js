import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyACdSwP75nxBF1Tp8_sXztHwYm6NdMUA2E",
    authDomain: "mieuxvivreavecsoimeme.firebaseapp.com",
    databaseURL: "https://mieuxvivreavecsoimeme.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

export {firebaseApp};
export default base; 