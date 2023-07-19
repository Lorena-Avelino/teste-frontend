import './style.css'

const RobotStatus = ({name}) => {
    return (
        <div className='robot-status'>
            <div className={`oval ${name === 0 ? 'stopped' : ''}`}></div>
            <p className='name-status'>{name === 0 ? "Parado" : "Em execução"}</p>
        </div>
    )
}

export default RobotStatus