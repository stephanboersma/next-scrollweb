import { IFirestoreEntity } from "./firestore-entity.interface";

export interface ISettings extends IFirestoreEntity {
  constitution: string;
  hero: string;
  joinScrollBarLink: string;
  joinScrollBarText: string;
  joinScrollBarTitle: string;
  minutes: string;
  openForSignups: boolean;
}
