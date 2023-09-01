import { Roles } from "../enums";
import { IFirestoreEntity } from "./firestore-entity.interface";
import { IStudyline } from "./studyline.interface";

export interface IUser extends IFirestoreEntity {
  isAdmin?: boolean;
  active: boolean;
  displayName: string;
  email: string;
  phone: string;
  photoUrl: string;
  roles: Roles[];
  studyline: string | IStudyline;
}
