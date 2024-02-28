 // Import the functions you need from the SDKs you need
   // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
  //  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDqziKeJ_hLpcDCtbs25YleQ3fr7U3nTxU",
        authDomain: "runny-b8d5d.firebaseapp.com",
        databaseURL: "https://runny-b8d5d.firebaseio.com",
        projectId: "runny-b8d5d",
        storageBucket: "runny-b8d5d.appspot.com",
        messagingSenderId: "164368434186",
        appId: "1:164368434186:web:19e86a7a413d3d45ea0bf3",
        measurementId: "G-T4XH67GRCD"
      };
    
      // Initialize Firebase
      const app = firebase.initializeApp(firebaseConfig);
      const analytics = firebase.getAnalytics(app);

      // 12:20:16 - first login