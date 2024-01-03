import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Post } from "./post";
import { useState, useEffect } from "react";

export interface Post {
  id: string;
  userId: string;
  title: string; // Corrected typo: "tittle" -> "title"
  username: string;
  description: string;
}

export const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null); // Corrected typo: "PostLists" -> "postsList"

  useEffect(() => {
    const getPosts = async () => {
      const postsRef = collection(db, "posts");
      const data = await getDocs(postsRef);
      setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]);
    };

    getPosts();
  }, []); // Empty dependency array to fetch posts only once

  return (
    <div>
      {postsList?.map((post) => (
        <Post key={post.id} post={post} /> // Added key for React efficiency
      ))}
    </div>
  );
};
