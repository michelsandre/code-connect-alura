"use client";

import { useEffect, useState } from "react";
import styles from "./replies.module.css";
import { Comment } from "../Comment";
import { ModalReply } from "../ModalReply";

export const Replies = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(`/api/comment/${comment.id}/replies`);

      if (!response.ok) throw new Error("Error on fetching data");
      const data = await response.json();

      setReplies(data);
    } catch (error) {
      console.log("Error on fetch data", error);
    }
  }
  useEffect(() => {
    if (showReplies) {
      fetchData();
    }
  }, [showReplies]);

  return (
    <div className={styles.container}>
      <div className={styles.replies}>
        <button
          className={styles.btn}
          onClick={() => setShowReplies(!showReplies)}
        >
          {showReplies ? "Ocultar" : "Ver"} respostas
        </button>
        {showReplies && (
          <ul>
            {replies.map((reply) => (
              <li key={reply.id}>
                <Comment comment={reply} />
                <ModalReply comment={reply} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
