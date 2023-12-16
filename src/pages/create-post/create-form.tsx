import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import { addDoc,collection } from 'firebase/firestore'
import {auth, db} from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
interface CreateFormData {
    title: string;
    description: string;
}

export const CreateForm = () =>{

const [user] = useAuthState(auth)

const schema = yup.object().shape({
    title: yup.string().required("You Must add a title.  "),
    description: yup.string().required("You Must add a Description to your post."),
});   

const  {register,
     handleSubmit,
      formState: {errors},} = useForm<CreateFormData>({
resolver: yupResolver(schema),
});

const postsRef = collection (db, "posts")

const onCreatePost = async (data:CreateFormData) => {
await addDoc(postsRef, {
...data,//spread operator
    username:user?.displayName,
    userId: user?.uid,
})
}

return <form onSubmit={handleSubmit(onCreatePost)}>
    <input  placeholder="Title.." {...register("title")}/>
    <p style={{color:"red"}}>{errors.title?.message}</p>
    <textarea placeholder="Description.." {...register("description")} />
    <p style={{color:"red"}}>{errors.description?.message}</p>
    <input type='submit'/>
</form>
}