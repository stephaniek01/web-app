import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./skelton.module.scss";

export const SkeltonLine = ({ times = 1 }) => {
  return (
    <div>
      <SkeletonTheme>
        {[...Array(times)].map(() => (
          <div className={styles.skeltonPostCard}>
            <Skeleton width="60%" className={styles.cardHeading} />
          </div>
        ))}
      </SkeletonTheme>
    </div>
  );
};
