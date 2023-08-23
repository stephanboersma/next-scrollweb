import { initializeAdmin } from "@fire/firebase-admin";
import { getCollection } from "@fire/index";
import { Roles } from "@typing/enums";
import { IStudyline } from "@typing/interfaces/studyline.interface";
import { ITender } from "@typing/interfaces/tender.interface";
import { IUser } from "@typing/interfaces/user.interface";
import {
  collection,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const FALLBACK_AVATAR_URL =
  "https://firebasestorage.googleapis.com/v0/b/scrollweb-cc9b4.appspot.com/o/assets%2FPerson-Avatar_with_bg.png?alt=media&token=21dbe964-5684-424a-bfee-2db65ce16018";

const addStudylineToTender = (
  tender: IUser,
  studylines: IStudyline[]
): ITender => {
  const studyline = studylines.find(
    (studyline) => studyline.id === tender.studyline
  );
  const photoUrl = tender.photoUrl ? tender.photoUrl : FALLBACK_AVATAR_URL;
  const { id, displayName } = tender;
  return {
    id,
    displayName,
    photoUrl,
    studyline,
  };
};

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method !== "GET") return res.status(405);

  try {
    await initializeAdmin();
    const firestore = await getFirestore();
    const q = query(
      collection(firestore, "users"),
      orderBy("displayName", "asc"),
      where("active", "==", true)
    );
    const tenders = await getCollection<IUser>(q);
    const studylines = await getCollection<IStudyline>(
      collection(firestore, "studylines")
    );
    const data = tenders
      .filter(
        (tender) =>
          tender.roles.length !== 0 && !tender.roles.includes(Roles.Passive)
      )
      .map((tender) => addStudylineToTender(tender, studylines));

    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
    return;
  }
};

export default handler;
