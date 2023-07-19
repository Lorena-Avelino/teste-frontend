import Saldo from '../common/saldo'
import SubTitle from '../common/subtitle'
import PapelNegociado from './papelnegociado'
import './style.css'
import { useEffect, useState } from 'react'
import { getRobotOverview } from '../../services/api'

const Report = () => {
    const [robotsOverview, setRobotsOverview] = useState(null)

    const fetchRobots = async () => {
        try{
            const response = await getRobotOverview()
            setRobotsOverview(response)
        }catch(error){
            alert("Falha ao buscar");
        }finally{
            console.log("fez a chamada")
        }
    }

    useEffect(() => {
        fetchRobots()
    }, [])

    return (
        <div className="report">
            <h2 className='title'>Resumo geral operações</h2>
            <div className='resume-total'>
                <div className='resume'>
                    <SubTitle title='Resumo de movimentação'/>
                    <Saldo title={robotsOverview?.moviment_summary}/>
                </div>
                <div className='total'>
                    <SubTitle title='Total de transações realizadas'/>
                    <span className='total-transacao'>{robotsOverview?.transactions}</span>
                </div>
            </div>
            <div className='retangle'></div>
            <SubTitle title='Papéis negociados'/>
            <div className='papeis-negociados'>
                {robotsOverview?.papers.map((item)=>(
                    <div key={item.nome} className='papel-negociado'>
                        <PapelNegociado title={item.name}/>
                        <div className='linha-pontilhada'></div>
                        <span className='quantidade-transacoes'>{item.trasactions}</span>
                        <SubTitle title='transaçoes'/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Report