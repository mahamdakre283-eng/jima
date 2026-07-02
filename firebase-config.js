// ڕێکخستنا فایربەیس ب لینکا داتابەیسا تە یا ئەوروپا
window.firebaseConfig = {
  apiKey: "AIzaSyCt3rFvw56WtB9h_u2xGqoPFfgn4PCQrD0",
  authDomain: "jima-198b2.firebaseapp.com",
  databaseURL: "https://jima-198b2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jima-198b2",
  storageBucket: "jima-198b2.firebasestorage.app",
  messagingSenderId: "651382577141",
  appId: "1:651382577141:web:74e792863fe44b9e9872bc"
};

// ئەکتیڤکرن
if (!firebase.apps.length) {
  firebase.initializeApp(window.firebaseConfig);
}