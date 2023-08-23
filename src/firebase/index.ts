import { IFirestoreEntity } from "@typing/interfaces/firestore-entity.interface";
import { DocumentReference, Query, getDoc, getDocs } from "firebase/firestore";

export * from "./firebase";
export * from "./authentication";

export const getCollection = async <T extends IFirestoreEntity>(
  q: Query
): Promise<Array<T>> => {
  const { docs } = await getDocs(q);
  return docs.map((doc) => ({ id: doc.id, ...(doc.data() as T) }));
};

export const getDocument = async <T extends IFirestoreEntity>(
  ref: DocumentReference
) => {
  const doc = await getDoc(ref);

  if (!doc.exists()) throw Error("Document does not exist");

  return { id: doc.id, ...(doc.data() as T) };
};
