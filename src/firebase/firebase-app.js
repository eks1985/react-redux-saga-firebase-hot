/*global localStorage  */
import * as firebase from 'firebase';
import config from './config';
firebase.initializeApp(config.firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
