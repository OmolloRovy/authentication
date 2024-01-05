import { addDoc, collection, query, where,getDocs } from "firebase/firestore";
import {Post as IPost} from "./main"
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
interface Props{
    post: IPost
}

export const Post = (props: Props) =>{
    const { post }  = props;
    const [user] = useAuthState(auth);
    const likesRef = collection(db, 'likes');
    // Change the property name from postIid to postId
    const likesDoc = query(likesRef, where("postId", "==", post.id))
    const getLikes = async ()=>{
        const data =  await getDocs(likesDoc)
        console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    const addLike = async () => {
        await addDoc(likesRef, { userId:user?.uid , postId: post.id} );
      
     };

     useEffect (()=>{
        getLikes ();
     
     }, []);

 return(
 <div>
    <div className="title">

        <h1> {post.title}</h1>
    </div>
    <div className="body">
        <p>{post.description}</p>
    </div>

    <div className="footer">
        <p> @{post.username}</p>
        < button onClick={addLike}> 👍 </button>
   <p> Likes {}</p>
    </div>
 </div>
 )
}
