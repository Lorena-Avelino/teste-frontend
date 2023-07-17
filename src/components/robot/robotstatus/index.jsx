import './style.css'

const RobotStatus = ({name}) => {
    return (
        <div className='robot-status'>
            <div className="oval"></div>
            <p className='name-status'>{name}</p>
        </div>
    )
}

export default RobotStatus