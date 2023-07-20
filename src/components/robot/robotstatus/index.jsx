import './style.css'

const RobotStatus = ({name}) => {
    return (
        <div className='robot-status'>
            <div className={`oval ${name === 0 ? 'stopped' : (name === 1 ? '' : '')}`}></div>
            <p className='name-status'>{name === 0 ? "Parado" : (name === 1 ? "Em execução" : "")}</p>
        </div>
    )
}

export default RobotStatus