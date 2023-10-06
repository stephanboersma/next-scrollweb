import { initializeAdmin } from "@fire/firebase-admin";
import { IInvite } from "@typing/interfaces/invite.interface";
import {
  Firestore,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const isUserInvited = async (
  firestore: Firestore,
  email: string
): Promise<boolean> => {
  const invite = await getDoc(doc(firestore, "invites", email));
  if (!invite.exists()) {
    return false;
  }
  const inviteData = invite.data() as IInvite;
  return !inviteData.registered;
};

/**
 * Check if a user is invited
 */
export const GET = async (_req: NextApiRequest, res: NextApiResponse) => {
  const email: string = _req.query.email as string;
  try {
    await initializeAdmin();
    const firestore = await getFirestore();
    const isInvited = await isUserInvited(firestore, email);
    if (!isInvited) {
      res.status(403).json({
        error:
          "This e-mail has not been invited or an account is already registered to that email",
      });
      return;
    }
    res.status(200).json({ error: null });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
    return;
  }
};

export const POST = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { email } = _req.body as { email: string };
  try {
    await initializeAdmin();
    const firestore = await getFirestore();
    await setDoc(doc(firestore, "invites", email), { registered: true });
    res.status(200).json({ error: null });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
    return;
  }
};
