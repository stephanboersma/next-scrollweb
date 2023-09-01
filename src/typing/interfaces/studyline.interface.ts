import { IFirestoreEntity } from "./firestore-entity.interface";

export interface IStudyline extends IFirestoreEntity {
  abbreviation: string;
  name: string;
  prefix: string;
}
