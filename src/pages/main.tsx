import { useState } from "react";
import {db} from "../config/firebase"
import { useState } from "react";
import {collection, getDocs} from 'firebase/firestore'
export const Main =()=>{
   const [postsList, setPostLists] = useState(null)
        const postRef = collection(db, "posts");
        return(<div>Home page</div>
    )
}