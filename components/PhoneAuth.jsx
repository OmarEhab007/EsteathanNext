import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useState } from "react";

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyB8p7IG7YPyNAUWOhw9_FNtabLaviy_AQs",
  authDomain: "school-7cc8e.firebaseapp.com",
  projectId: "school-7cc8e",
  storageBucket: "school-7cc8e.appspot.com",
  messagingSenderId: "205528957965",
  appId: "1:205528957965:web:0b5ec4e0c128ba31ed4144",
  measurementId: "G-XRM4GCBJZS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

function PhoneAuth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleSendCode = () => {
    const appVerifier = new RecaptchaVerifier("recaptcha-container");
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
      })
      .catch((error) => {
        console.error("Error sending code:", error);
      });
  };

  const handleVerifyCode = () => {
    confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log("User:", user);
      })
      .catch((error) => {
        console.error("Error verifying code:", error);
      });
  };

  return (
    <div>
      <div id="recaptcha-container"></div>
      <input
        type="text"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleSendCode}>Send code</button>
      <input
        type="text"
        placeholder="Verification code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleVerifyCode}>Verify code</button>
    </div>
  );
}

export default PhoneAuth;
