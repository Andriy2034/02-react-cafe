import {useState} from 'react'
import './styles/VoteStats.module.css'

function VoteStats () {
    const [voteStats, setVoteStats] = useState({
        option1: 0,
        option2: 0,
        option3: 0
    });

    return (
        <div className="vote-stats">
            <p>Option 1: {voteStats.option1}</p>
            <p>Option 2: {voteStats.option2}</p>
            <p>Option 3: {voteStats.option3}</p>
        </div>
    );
}

export default VoteStats;