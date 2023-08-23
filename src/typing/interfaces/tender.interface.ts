import { IStudyline } from "./studyline.interface";

export interface ITender {
  id: string;
  displayName: string;
  photoUrl: string;
  studyline: IStudyline;
}
