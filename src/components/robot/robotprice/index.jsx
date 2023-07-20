import './style.css'

const RobotPrice = ({number, name, preco, valor, type_paper}) => {
    return (
        <div className='robot-price'>
            <span className='number'>{number}</span>
            <div className='name'>{name}<span className='compra'>{type_paper === 0 ? "Compra" : (type_paper=== 1 ? "Venda" : null)}</span></div>
            <div className='preco'>
                {preco}
                <div className={`rendimento ${valor < 0 ? 'queda' : 'alta'}`}>
                    <div className={valor === undefined ? "" : (`seta ${valor < 0 ? 'queda' : 'alta'}`)}></div>
                    <span>{valor < 0 ? `-R$${Math.abs(valor)}` : (valor === undefined ? "" : `R$${valor}`)}</span>
                </div>
            </div>
        </div>
    )
}

export default RobotPrice