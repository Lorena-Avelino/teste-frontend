import './style.css'
import addRobot from '../../assets/AddRobot.svg'

const NewRobot = () => {
    return (
    <div className='new-robot'>
        <button className='btn'><img src={addRobot} alt='AddRobot'/></button>
        <div>
            <h2 className='new'>Adicionar novo Robô</h2>
            <p className='quantity-robot'>Você possui <strong>2 Robôs</strong> disponíveis</p>
        </div>
    </div>
    )
}

export default NewRobot