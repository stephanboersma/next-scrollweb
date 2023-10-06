import { initializeAdmin } from "@fire/firebase-admin";
import { getDocument } from "@fire/index";
import { ISettings } from "@typing/interfaces/settings.interface";
import { doc, getFirestore } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { remark } from "remark";
import html from "remark-html";

const processMarkdown = async (markdownText: string): Promise<string> => {
  const processedContent = await remark().use(html).process(markdownText);
  return processedContent.toString();
};

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method !== "GET") return res.status(405);

  try {
    await initializeAdmin();
    const firestore = getFirestore();

    const settings = await getDocument<ISettings>(
      doc(firestore, "settings", "settings")
    );

    const data: ISettings = {
      ...settings,
      joinScrollBarText: await processMarkdown(settings.joinScrollBarText),
    };

    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
    return;
  }
};

export default handler;
