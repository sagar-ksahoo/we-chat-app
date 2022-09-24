import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import avatarLogo from "../images/avatar-logo.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {

  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(e.target[0].value);

    const dispName = e.target[0].value ;
    const email = e.target[1].value ;
    const password = e.target[2].value ;
    const file = e.target[3].files[0] ;

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password) ;

      const storageRef = ref(storage, dispName);

      const uploadTask = uploadBytesResumable(storageRef, file);


  uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
    }
  }, 
  (error) => {
    setErr(true)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {

        await updateProfile(res.user, {
          dispName,
          photoURL: downloadURL,
        });

        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          dispName,
          email,
          photoURL: downloadURL
        });

        await setDoc(doc(db,"userChats", res.user.uid), {});
        navigate("/");
    });
  }
);


}
catch(err){
      setErr(true) ;
    }

  }



  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">We Chat</span>
            <span className="title">Register</span>

            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input style={{display: "none"}} type="file" id='file'/>

                <label htmlFor="file">
                    <img src = {avatarLogo} alt="" />
                    <span>Add an Avatar</span>
                </label>

                <button>Sign Up</button>
                {err && <span> Something went wrong </span>}
            </form>

            <p>Already have an account? Sign In</p>
        </div>
    </div>
  )
}

export default Register;