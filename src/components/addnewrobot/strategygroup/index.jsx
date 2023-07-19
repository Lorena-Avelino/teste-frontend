import Strategy from "../strategy"

const StrategyGroup = ({strategies, selectedStrategy, setSelectedStrategy}) => {
    const handleStrategyChange = (value) => {
        setSelectedStrategy(value)
    }
    
    return (
        <div>
            {strategies.map((strategy) => (
                <Strategy key={strategy.id} name={strategy.name} value={strategy.id} checked={selectedStrategy === strategy.id} onChange={() => handleStrategyChange(strategy.id)}/>
            ))}
        </div>
    )
}

export default StrategyGroup