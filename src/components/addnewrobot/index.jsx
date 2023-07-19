import './style.css'
import SubTitle from '../common/subtitle'
import Characteristic from './characteristic'
import StrategyGroup from './strategygroup'
import Fechar from '../../assets/Union.svg'
import ReactModal from 'react-modal'
import { getStrategy, postRobot } from '../../services/api'
import { useEffect, useState } from 'react'

const AddNewRobot = ({isOpen, onRequestClose, updateListRobot}) => {
    const [robot, setRobot] = useState({mode: 0, simulation: 0})

    const handleChange = (name, value) => {
        setRobot((prevRobot) => ({...prevRobot, [name]: value}))
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await postRobot(robot)
            setRobot({mode: 0, simulation: 0})
            onRequestClose()
            await updateListRobot()
            console.log(response)
        }catch(error){
            alert("Falha ao criar robô");
        }finally{
            console.log("fez a chamada")
        }
    }

    const [strategies, setStrategies] = useState([])

    const fetchStrategies = async () => {
        try{
            const response = await getStrategy()
            setStrategies(response)
        }catch(error){
            alert("Falha ao buscar estratégias");
        }finally{
            console.log("fez a chamada")
        }
    }

    const updateOverlayHeight = () => {
        const overlayElement = document.querySelector('.background')
        if (overlayElement) {
            overlayElement.computedStyleMap.height = `${window.innerHeight}px`
        }
    }

    useEffect(() => {
        updateOverlayHeight()
        
        fetchStrategies()
        window.addEventListener('resize', updateOverlayHeight)
        return () => {
            window.removeEventListener('resize', updateOverlayHeight)
        }

    }, [])
    const handleChangeValue = ({ target }) => {
        if (target.value) {
          handleChange("initial_capital", Number(target.value.replace(/\D/g, "")) / 100);
        } else {
          handleChange("initial_capital", null);
        }
      };
    
    const showInputValue = (valueToConvert) => {
        if (valueToConvert) {
          const value = Number(valueToConvert);
          const valueString = value.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          });
          return valueString;
        }
    
        return "";
      };
    
    return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false} className='add-new-robot' overlayClassName="background" bodyOpenClassName="overflow">
            <div className='janela'>
                <h1 className='add'>Adicionar novo Robô</h1>
                <img className='fechar-janela' src={Fechar} alt="X" onClick={onRequestClose}/>
            </div>
            <h2 className='criar'>Vamos criar seu robô</h2>
            <SubTitle title='Preencha as informações abaixo:'/>
            <form className='formulario' onSubmit={onSubmit}>
                <Characteristic form='nome' titulolabel='Nome do produto' name={"title"} placeholder='Nome do produto' value={robot.title} onChange={(event) => {handleChange("title", event.target.value)}}/>
                <Characteristic form='capital' titulolabel='Capital inicial do robô' placeholder='R$' value={showInputValue(robot.initial_capital)} onChange={handleChangeValue}/>
                <p className='estrategias'>Selecione uma das estratégias abaixo</p>
                <StrategyGroup strategies={strategies} selectedStrategy={robot.strategy_id} setSelectedStrategy={(value) => {handleChange("strategy_id", value)}}/>
                <div className='submeter'>
                    <button className='cancelar' onClick={onRequestClose}>Cancelar</button>
                    <button className='criar-robo' type='submit'>Criar robô</button>
                </div>
            </form>
        </ReactModal>
    )
}

export default AddNewRobot