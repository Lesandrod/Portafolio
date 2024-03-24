import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBh0KuEJIQNUS6YXGSYG3jF6X9o7DxBai8",
  authDomain: "portafolio-2d58b.firebaseapp.com",
  projectId: "portafolio-2d58b",
  storageBucket: "portafolio-2d58b.appspot.com",
  messagingSenderId: "682540646922",
  appId: "1:682540646922:web:ee850a504bc835b85155f3",
  measurementId: "G-E69DGVEZEF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ChakraProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ChakraProvider>
 

)
