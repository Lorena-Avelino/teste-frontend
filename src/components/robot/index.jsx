import RobotPrice from './robotprice'
import RobotProperty from './robotproperty'
import RobotStatus from './robotstatus'
import SubTitle from '../common/subtitle'
import Saldo from '../common/saldo'
import Seta from '../../assets/Shape.svg'
import './style.css'

const Robot = ({robots}) => {
    return (
        <div className='robots'>
            {robots.map((item)=>(
                <div key={item.id} className='robot'>
                    <div className='robot-status'>
                        <h1 className='name'>{item.title}</h1>
                        <RobotStatus name={item.running}/>
                    </div>
                    <p className='robot-id'>#{item.id}</p>
                    <RobotProperty title={item.simulation === 0 ? "Otimista" : (item.simulation === 1 ? "Pessimista" : null)}/>
                    <RobotProperty title={item.stock_codes}/>
                    <RobotProperty title={item.strategy}/>
                    <RobotPrice number={item.last_paper?.position} name={item.last_paper?.paper} preco={item.last_paper?.paper_value} valor={item.last_paper?.profit} type_paper={item.last_paper?.type}/>
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