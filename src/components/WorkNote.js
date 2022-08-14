import React from "react";

import styles from "../styles/workNote.module.scss";
import Note from "./Note";

export default function WorkNote({ work }) {
  return (
    <div className={styles.workNotesWrapper}>
      {work.noteContent.map((content, index) => (
        <div key={content.id}>
          <Note work={content} />
          {work.noteContent.length - 1 != index && <div className="line" />}
        </div>
      ))}
    </div>
  );
}
