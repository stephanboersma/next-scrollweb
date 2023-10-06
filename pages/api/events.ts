import { initializeAdmin } from "@fire/firebase-admin";
import { getCollection } from "@fire/index";
import { IEvent } from "@typing/interfaces/event.interface";
import {
  and,
  collection,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method !== "GET") return res.status(405);

  try {
    await initializeAdmin();
    const firestore = getFirestore();
    const today = new Date();
    const q = query(
      collection(firestore, "env", process.env.NEXT_PUBLIC_ENV, "events"),
      and(where("end", ">=", today), where("published", "==", true)),
      orderBy("end", "asc")
    );
    const data = (await getCollection<IEvent>(q)).map((event) => ({
      ...event,
      startDate: event.start.toDate(),
      endDate: event.end.toDate(),
    }));
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
    return;
  }
};

export default handler;
