import './style.css'
import combinedShape from '../../assets/CombinedShape.svg'

const BreadCrumbs = () => {
    return (
        <div className='breadCrumbs'>
            <img src={combinedShape} className="combinedShape" alt="Combined Shape" />
            <div className='retangle'></div>
            <h2 className='menu'>Análise Geral <div className='barra'>/</div> <div className='principal'>Principal</div></h2>
        </div>
    )
}

export default BreadCrumbs