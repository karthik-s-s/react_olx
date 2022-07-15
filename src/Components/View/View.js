// import React,{useEffect,useState,useContext} from 'react';
// import { FirebaseContext } from '../../store/FirebaseContext';
// import { PostContext } from '../../store/PostContext';


// import './View.css';
// function View() {
//   const [userdetails, setuserdetails] = useState()
//   const {postdetails} = useContext(PostContext)
//   const {firebase} = useContext(FirebaseContext)
//   useEffect(() => {
//    const { userId} = postdetails
//     firebase.firestore().collection('users').where('id','==',userId).get().thne((res)=>{
//       res.forEach(doc => {
//         setuserdetails(doc.data())
//       });
//     })
  
//   }, [])
  
//   return (
//     <div className="viewParentDiv">
//       <div className="imageShowDiv">
//         <img
//           src={postdetails.url}
//           alt=""
//         />
//       </div>
//       <div className="rightSection">
//         <div className="productDetails">
//           <p>&#x20B9; {postdetails.price} </p>
//           <span>YAMAHA R15V3</span>
//           <p>Two Wheeler</p>
//           <span>Tue May 04 2021</span>
//         </div>
//        {userdetails &&  <div className="contactDetails">
//           <p>Seller details</p>
//           <p>{userdetails.username}</p>
//           <p>{userdetails.phone}</p>
//         </div> }
//       </div>
//     </div>
//   );
// }
// export default View;
