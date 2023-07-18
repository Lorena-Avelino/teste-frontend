import './style.css'
import addRobot from '../../assets/AddRobot.svg'
import {useState} from "react"
import AddNewRobot from '../addnewrobot'

const NewRobot = () => {
    const[isAddNewRobotOpen, setIsAddNewRobotOpen] = useState(false)

    const handleOpenAddNewRobot = () => {
        setIsAddNewRobotOpen(true)
    }

    const handleCloseAddNewRobot = () => {
        setIsAddNewRobotOpen(false)
    }

    return (
    <div className='new-robot'>
        <button className='btn' onClick={handleOpenAddNewRobot}><img src={addRobot} alt='AddRobot'/></button>
        <div>
            <h2 className='new'>Adicionar novo Robô</h2>
            <p className='quantity-robot'>Você possui <strong>2 Robôs</strong> disponíveis</p>
        </div>
        <AddNewRobot isOpen={isAddNewRobotOpen} onRequestClose={handleCloseAddNewRobot} ariaHideApp={false} shouldCloseOnOverlayClick={true}/>
    </div>
    )
}

export default NewRobot