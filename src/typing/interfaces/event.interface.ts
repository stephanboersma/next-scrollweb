import { Timestamp } from "firebase/firestore";
import { IFirestoreEntity } from "./firestore-entity.interface";

export interface IEvent extends IFirestoreEntity {
  description: string;
  displayName: string;
  published: boolean;
  start: Timestamp;
  end: Timestamp;
  startDate?: string;
  endDate?: string;
  where: string;
}
