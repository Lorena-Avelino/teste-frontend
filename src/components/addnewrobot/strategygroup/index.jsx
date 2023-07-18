import { useState } from "react"
import Strategy from "../strategy"

const StrategyGroup = ({strategies}) => {
    const[selectedStrategy, setSelectedStrategy] = useState(null)

    const handleStrategyChange = (value) => {
        setSelectedStrategy(value)
    }
    
    return (
        <div>
            {strategies.map((strategy) => (
                <Strategy key={strategy.value} name={strategy.value} value={strategy.value} checked={selectedStrategy === strategy.value} onChange={() => handleStrategyChange(strategy.value)}/>
            ))}
        </div>
    )
}

export default StrategyGroup