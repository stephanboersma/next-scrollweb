import { IFirebaseAdminConfig } from "@typing/interfaces/firebase-admin-config.interface";
import admin from "firebase-admin";

export const initializeAdmin = async () => {
  const config = {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  };

  return createFirebaseAdminApp(config);
};

const formatFirebasePrivateKey = (key: string) => {
  return key.replace(/\\n/g, "\n");
};

export function createFirebaseAdminApp(params: IFirebaseAdminConfig) {
  const privateKey = formatFirebasePrivateKey(params.privateKey);

  // if already created, return the same instance
  if (admin.apps.length > 0) {
    return admin.app();
  }

  // create certificate
  const cert = admin.credential.cert({
    projectId: params.projectId,
    clientEmail: params.clientEmail,
    privateKey,
  });

  // initialize admin app
  return admin.initializeApp({
    credential: cert,
    projectId: params.projectId,
    storageBucket: params.storageBucket,
  });
}
