import './style.css'

const RobotPrice = ({number, name, preco, valor}) => {
    return (
        <div className='robot-price'>
            <span className='number'>{number}</span>
            <div className='name'>{name}<span className='compra'>Compra</span></div>
            <div className='preco'>
                {preco}
                <div className='rendimento'>
                    <div className='seta alta'></div>
                    <span>R${valor}</span>
                </div>
            </div>
        </div>
    )
}

export default RobotPrice