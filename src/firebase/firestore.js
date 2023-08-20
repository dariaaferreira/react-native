import {
    arrayUnion,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    getDocs,
    collection,
    deleteDoc,
  } from 'firebase/firestore';
  import { db } from './config';
  
  export const signupUser = async ({ login, email, url, id }) => {
    try {
      const data = { login, email };
      if (url) {
        data.url = url;
      }
      await setDoc(doc(db, 'users', id), data);
    } catch (error) {
      throw error;
    }
  };
  
  export const getUserData = async (id) => {
    try {
      const docRef = doc(db, 'users', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      }
    } catch (error) {
      throw error;
    }
  };
  
  export const updateDBUser = async ({ url, uid }) => {
    try {
      await updateDoc(doc(db, 'users', `${uid}`), { url: url });
    } catch (error) {
      throw error;
    }
  };
  
  export const createPost = async ({
    id,
    url,
    name,
    location,
    geoLocation,
    email,
  }) => {
    try {
      const post = await setDoc(doc(db, 'posts', `${id}`), {
        id,
        url,
        name,
        location,
        geoLocation,
        email,
      });
    } catch (error) {
      throw error;
    }
  };
  
  export const getPosts = async () => {
    try {
      const allPosts = [];
      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach((doc) => {
        allPosts.push(doc.data());
      });
      return allPosts;
    } catch (error) {
      throw error;
    }
  };
  
  export const addComment = async ({ comment, postId }) => {
    try {
      await updateDoc(doc(db, 'posts', `${postId}`), {
        comments: arrayUnion(comment),
      });
    } catch (error) {
      throw error;
    }
  };
  
  export const setLike = async ({ postId, email }) => {
    try {
      await updateDoc(doc(db, 'posts', `${postId}`), {
        likes: arrayUnion(email),
      });
    } catch (error) {
      throw error;
    }
  };