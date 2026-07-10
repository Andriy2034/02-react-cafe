import {useState} from 'react'
import './styles/VoteOptions.module.css'

function VoteOptions () {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="vote-options">
            <button onClick={() => setSelectedOption("option1")}>Option 1</button>
            <button onClick={() => setSelectedOption("option2")}>Option 2</button>
            <button onClick={() => setSelectedOption("option3")}>Option 3</button>
        </div>
        
    );

}


export default VoteOptions;