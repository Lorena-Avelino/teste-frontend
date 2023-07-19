import RobotPrice from './robotprice'
import RobotProperty from './robotproperty'
import RobotStatus from './robotstatus'
import SubTitle from '../common/subtitle'
import Saldo from '../common/saldo'
import Seta from '../../assets/Shape.svg'
import './style.css'
import { useEffect, useState } from 'react'
import { getRobots } from '../../services/api'

// const robots = [
//     {
//         id: 1792301,
//         nome: "Título do Robô",
//         status: "Em execução",
//         propriedade:[
//             "Pessimista",
//             "WIN%",
//             "Price action"
//         ],
//         number: 30,
//         name: "wing20",
//         preco: "114.093.33",
//         valor: 32.33,
//         saldo: 120.00,
//         trades: 4
//     },
//     {
//         id: 1792302,
//         nome: "Título do Robô",
//         status: "Parado",
//         propriedade:[
//             "Pessimista",
//             "WIN%",
//             "Price action"
//         ],
//         number: 63,
//         name: "wing20",
//         preco: "114.093.33",
//         valor: 90.33,
//         saldo: 150.00,
//         trades: 4
//     },
//     {
//         id: 1792302,
//         nome: "Título do Robô",
//         status: "Parado",
//         propriedade:[
//             "Pessimista",
//             "WIN%",
//             "Price action"
//         ],
//         number: 63,
//         name: "wing20",
//         preco: "114.093.33",
//         valor: 90.33,
//         saldo: 150.00,
//         trades: 4
//     },
//     {
//         id: 1792302,
//         nome: "Título do Robô",
//         status: "Parado",
//         propriedade:[
//             "Pessimista",
//             "WIN%",
//             "Price action"
//         ],
//         number: 63,
//         name: "wing20",
//         preco: "114.093.33",
//         valor: 90.33,
//         saldo: 150.00,
//         trades: 4
//     },
//     {
//         id: 1792302,
//         nome: "Título do Robô",
//         status: "Parado",
//         propriedade:[
//             "Pessimista",
//             "WIN%",
//             "Price action"
//         ],
//         number: 63,
//         name: "wing20",
//         preco: "114.093.33",
//         valor: 90.33,
//         saldo: 150.00,
//         trades: 4
//     }
// ]

const Robot = () => {
    // const [loading, setLoading] = useState(false)
    const [robots, setRobots] = useState([])

    const fetchRobots = async () => {
        try{
            // setLoading(true);
            const response = await getRobots()
            setRobots(response)
        }catch(error){
            alert("Falha ao buscar robos");
        }finally{
            console.log("fez a chamada")
            // setLoading(false);
        }
    }

    useEffect(() => {
        fetchRobots()
    }, [])

    return (
        <div className='robots'>
            {/* {loading ? "loading..." : null} */}
            {robots.map((item)=>(
                <div key={item.id} className='robot'>
                    <div className='robot-status'>
                        <h1 className='name'>{item.title}</h1>
                        <RobotStatus name={item.running}/>
                    </div>
                    <p className='robot-id'>#{item.id}</p>
                    <RobotProperty title={item.simulation === 0 ? "Otimista" : "Pessimista"}/>
                    <RobotProperty title={item.stock_codes}/>
                    <RobotProperty title={item.strategy}/>
                    <RobotPrice number={item.last_paper?.position} name={item.last_paper?.paper} preco={item.last_paper?.paper_value} valor={item.last_paper?.profit}/>
                    <div className='dia'>
                        <div className='saldo'>
                            <div className='saldo-diario'>
                                <SubTitle title='Saldo diário'/>
                                <img src={Seta} alt="" />
                            </div>
                            <Saldo title={item.daily_balance}/>
                        </div>
                        <div className='trades'>
                            <SubTitle title='Trades no dia'/>
                            <span className='trade'>{item.number_trades}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Robot