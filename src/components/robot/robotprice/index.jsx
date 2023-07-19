import './style.css'

const RobotPrice = ({number, name, preco, valor}) => {
    return (
        <div className='robot-price'>
            <span className='number'>{number}</span>
            <div className='name'>{name}<span className='compra'>Compra</span></div>
            <div className='preco'>
                {preco}
                <div className={`rendimento ${valor < 0 ? 'queda' : 'alta'}`}>
                    <div className={`seta ${valor < 0 ? 'queda' : 'alta'}`}></div>
                    <span>{valor < 0 ? `-R$${Math.abs(valor)}` : `R$${valor}`}</span>
                </div>
            </div>
        </div>
    )
}

export default RobotPrice