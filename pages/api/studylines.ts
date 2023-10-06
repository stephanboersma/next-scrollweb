import { initializeAdmin } from "@fire/firebase-admin";
import { getCollection } from "@fire/index";
import { IStudyline } from "@typing/interfaces/studyline.interface";
import { collection, getFirestore, query, where } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    await initializeAdmin();
    const firestore = getFirestore();
    const q = query(
      collection(firestore, "studylines"),
      where("active", "==", true)
    );
    const studylines = await getCollection<IStudyline>(q);
    res.status(200).json({ data: studylines });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
    return;
  }
};
