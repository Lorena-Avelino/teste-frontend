import RobotPrice from './robotprice'
import RobotProperty from './robotproperty'
import RobotStatus from './robotstatus'
import SubTitle from '../common/subtitle'
import Saldo from '../common/saldo'
import Seta from '../../assets/Shape.svg'
import './style.css'

const robots = [
    {
        id: 1792301,
        nome: "Título do Robô",
        status: "Em execução",
        propriedade:[
            "Pessimista",
            "WIN%",
            "Price action"
        ],
        number: 30,
        name: "wing20",
        preco: "114.093.33",
        valor: 32.33,
        saldo: 120.00,
        trades: 4
    },
    {
        id: 1792302,
        nome: "Título do Robô",
        status: "Parado",
        propriedade:[
            "Pessimista",
            "WIN%",
            "Price action"
        ],
        number: 63,
        name: "wing20",
        preco: "114.093.33",
        valor: 90.33,
        saldo: 150.00,
        trades: 4
    },
    {
        id: 1792302,
        nome: "Título do Robô",
        status: "Parado",
        propriedade:[
            "Pessimista",
            "WIN%",
            "Price action"
        ],
        number: 63,
        name: "wing20",
        preco: "114.093.33",
        valor: 90.33,
        saldo: 150.00,
        trades: 4
    },
    {
        id: 1792302,
        nome: "Título do Robô",
        status: "Parado",
        propriedade:[
            "Pessimista",
            "WIN%",
            "Price action"
        ],
        number: 63,
        name: "wing20",
        preco: "114.093.33",
        valor: 90.33,
        saldo: 150.00,
        trades: 4
    },
    {
        id: 1792302,
        nome: "Título do Robô",
        status: "Parado",
        propriedade:[
            "Pessimista",
            "WIN%",
            "Price action"
        ],
        number: 63,
        name: "wing20",
        preco: "114.093.33",
        valor: 90.33,
        saldo: 150.00,
        trades: 4
    }
]

const Robot = () => {
    return (
        <div className='robots'>
            {robots.map((item)=>(
                <div key={item.id} className='robot'>
                    <div className='robot-status'>
                        <h1 className='name'>{item.nome}</h1>
                        <RobotStatus name={item.status}/>
                    </div>
                    <p className='robot-id'>#{item.id}</p>
                    {item.propriedade.map((element)=>(<RobotProperty key={element} title={element}/>))}
                    <RobotPrice number={item.number} name={item.name} preco={item.preco} valor={item.valor}/>
                    <div className='dia'>
                        <div className='saldo'>
                            <div className='saldo-diario'>
                                <SubTitle title='Saldo diário'/>
                                <img src={Seta} alt="" />
                            </div>
                            <Saldo title={item.saldo}/>
                        </div>
                        <div className='trades'>
                            <SubTitle title='Trades no dia'/>
                            <span className='trade'>{item.trades}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Robot