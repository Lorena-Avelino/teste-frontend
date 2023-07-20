import './style.css'

const Saldo = ({title}) => {
    return (
        <span className={`saldo ${title < 0 ? 'negativo' : ''}`}>{title < 0 ? `-R$${Math.abs(title)}` : `R$${title}`}</span>
    )
}

export default Saldo