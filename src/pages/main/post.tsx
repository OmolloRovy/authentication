import { addDoc, collection, query, where,getDocs } from "firebase/firestore";
import {Post as IPost} from "./main"
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { log } from "console";
interface Props{
    post: IPost
}

export const Post = (props: Props) =>{
    const { post }  = props;
    const [user] = useAuthState(auth);
    const likesRef = collection(db, 'likes');
const likesDoc = query(likesRef, where("postIid", "==", post.id))
const getLikes = async ()=>{
const data =  await getDocs(likesDoc)
console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
}
    const addLike = async () => {
      try {
        await addDoc(likesRef, { userId:user?.uid , postId: post.id} );
       
      } catch (error) {
        // Handle errors appropriately, e.g., display an error message
        console.error(error);
      }
    };

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
        < button onClick={addLike}> &#128077; </button>
   <p> Likes {}</p>
    </div>
 </div>
 )
}   