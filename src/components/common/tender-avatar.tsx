import { ITender } from "@typing/interfaces/tender.interface";
import Image from "next/image";
import styles from "@styles/tender-avatar.module.scss";

type Props = {
  tender: ITender;
};

export const TenderAvatar = ({ tender }: Props) => {
  return (
    <div className={styles.sbTenderAvatar}>
      <span>
        <Image
          src={tender.photoUrl}
          alt={tender.displayName}
          width={100}
          height={100}
          className={styles.sbTenderImage}
        />
      </span>
      <div />
      <strong>{tender.displayName}</strong>
      <small>{tender.studyline.abbreviation.toUpperCase()}</small>
    </div>
  );
};
