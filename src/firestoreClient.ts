import { db } from "config/firestore";
import {
  collection,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

export type ColorType = {
  code: string;
};

const getConverter = <T>() => ({
  toFirestore: (data: T) => data as DocumentData,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
});

const getCollection = <T>(path: string) => {
  const converter = getConverter<T>();
  return collection(db, path).withConverter(converter);
};

export const getCollectionDocs = async <T>(path: string) => {
  const collection = getCollection<T>(path);
  const docsRef = await getDocs(collection);
  return docsRef.docs.map(doc => ({ ...(doc.data() as T), id: doc.id }));
};

export const getColors = async () =>
  await getCollectionDocs<ColorType>("colors");
