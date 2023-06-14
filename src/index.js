import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCg3g2DQabGOv69IqeRPb5jnUod28fYcxA",
  authDomain: "cart-c58e8.firebaseapp.com",
  projectId: "cart-c58e8",
  storageBucket: "cart-c58e8.appspot.com",
  messagingSenderId: "744549786232",
  appId: "1:744549786232:web:493f44a1794394fca3438d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
