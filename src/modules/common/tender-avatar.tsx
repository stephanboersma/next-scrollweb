import { ITender } from "@typing/interfaces/tender.interface";
import Image from "next/image";
import styles from "./styles/tender-avatar.module.scss";

type Props = {
  tender: ITender;
};

export const TenderAvatar = ({ tender }: Props) => {
  return (
    <div className={styles.tenderAvatar}>
      <span>
        <Image
          src={tender.photoUrl}
          alt={tender.displayName}
          width={100}
          height={100}
          className={styles.tenderImage}
        />
      </span>
      <div />
      <strong>{tender.displayName}</strong>
      {tender?.studyline && (
        <small>{tender.studyline.abbreviation.toUpperCase()}</small>
      )}
    </div>
  );
};
