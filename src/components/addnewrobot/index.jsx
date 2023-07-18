import './style.css'
import SubTitle from '../common/subtitle'
import Characteristic from './characteristic'
import StrategyGroup from './strategygroup'
import Fechar from '../../assets/Union.svg'
import ReactModal from 'react-modal'

const strategies = [
    { label: 'Tangram', value: 'Tangram'},
    { label: 'Price Action', value: 'Price Action'}
]

const AddNewRobot = ({isOpen, onRequestClose}) => {
    return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false} className='add-new-robot' overlayClassName="background">
            <div className='janela'>
                <h1 className='add'>Adicionar novo Robô</h1>
                <img className='fechar-janela' src={Fechar} alt="X" onClick={onRequestClose}/>
            </div>
            <h2 className='criar'>Vamos criar seu robô</h2>
            <SubTitle title='Preencha as informações abaixo:'/>
            <form className='formulario'>
                <Characteristic form='nome' titulolabel='Nome do produto' placeholder='Nome do produto'/>
                <Characteristic form='capital' titulolabel='Capital inicial do robô' placeholder='R$'/>
                <p className='estrategias'>Selecione uma das estratégias abaixo</p>
                <StrategyGroup strategies={strategies} />
                <div className='submeter'>
                    <button className='cancelar' onClick={onRequestClose}>Cancelar</button>
                    <button className='criar-robo' type='submit'>Criar robô</button>
                </div>
            </form>
        </ReactModal>
    )
}

export default AddNewRobot