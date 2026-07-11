import { useState } from "react";
import css from "./App.module.css";
import Cafeinfo from "../Cafeinfo/Cafeinfo.tsx";
import type { Votes, VoteType } from "../../types/votes.tsx";
// import Notification from "../Notification/Notification.tsx";
// import VoteOptions from "../VoteOptions/VoteOptions.tsx";
// import VoteStats from "../VoteStats/VoteStats.tsx";

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0
};

export default function App() {
  const [votes, setVotes] = useState<Votes>(initialVotes);

  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1
    }));
  };

  const resetVotes = () => {
    setVotes(initialVotes);
  };

  return (
    <>
      <div className={css.app}>
        <Cafeinfo />
      </div>
    </>
  );

}


