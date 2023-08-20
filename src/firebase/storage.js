import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './config';

export const setAvatarStorage = async (uri, uid) => {
  const storageRef = ref(storage, `avatars/${uid}.jpg`);
  const snapshot = await uploadBytes(storageRef, uri);
  const url = await getDownloadURL(snapshot.ref);
  return url;
};

export const setPostImageStorage = async ({ file, id }) => {
  const storageRef = ref(storage, `posts/${id}.jpg`);
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);
  return url;
};