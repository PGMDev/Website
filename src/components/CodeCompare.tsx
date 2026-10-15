import type { ReactNode } from "react";
import styles from "./CodeCompare.module.css";

interface CodeCompareProps {
    /** The code blocks to show side by side */
    children: ReactNode;
}

export default function CodeCompare({ children }: CodeCompareProps) {
    return (
        <div className={styles.CodeCompare}>
            <div className={styles.CodeCompare__grid}>{children}</div>
        </div>
    );
}
