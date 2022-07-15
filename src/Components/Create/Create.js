import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { FirebaseContext, AuthContext } from "../../store/FirebaseContext";
import {useHistory  } from "react-router-dom";

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const history = useHistory()
  const [name, setname] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState(null);
  const date =new Date()
  const handleSubmit = () => {
    firebase
      .storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId:user.uid,
            createdAt:date.toDateString()  
          })
          history.push('/')
        });
      });
  };
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            id="fname"
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            name="category"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            type="number"
            id="fname"
            name="Price"
          />
          <br />

          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>

          <br />
          <input
            onChange={(e) => {
              setimage(e.target.files[0]);
            }}
            type="file"
          />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">
            upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
