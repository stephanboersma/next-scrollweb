import { Roles } from "../enums";
import { IStudyline } from "./studyline.interface";

export interface IUser {
  id?: string;
  isAdmin?: boolean;
  active: boolean;
  displayName: string;
  email: string;
  phone: string;
  photoUrl: string;
  roles: Roles[];
  studyline: string | IStudyline;
}
