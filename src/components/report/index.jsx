import Saldo from '../common/saldo'
import SubTitle from '../common/subtitle'
import PapelNegociado from './papelnegociado'
import './style.css'
const papeis = [
    {
        id: 1,
        nome: "papel1",
        quantidade: 123
    },
    {
        id: 2,
        nome: "papel2",
        quantidade: 123
    },
    {
        id: 3,
        nome: "papel3",
        quantidade: 123
    },
    {
        id: 4,
        nome: "papel4",
        quantidade: 123
    },
    {
        id: 5,
        nome: "papel5",
        quantidade: 123
    },
    {
        id: 6,
        nome: "papel6",
        quantidade: 123
    },
    {
        id: 7,
        nome: "papel7",
        quantidade: 123
    }
]
const Report = () => {
    return (
        <div className="report">
            <h2 className='title'>Resumo geral operações</h2>
            <div className='resume-total'>
                <div className='resume'>
                    <SubTitle title='Resumo de movimentação'/>
                    <Saldo title='-R$220,00'/>
                </div>
                <div className='total'>
                    <SubTitle title='Total de transações realizadas'/>
                    <span className='total-transacao'>443</span>
                </div>
            </div>
            <div className='retangle'></div>
            <SubTitle title='Papéis negociados'/>
            <div className='papeis-negociados'>
                {papeis.map((item)=>(
                    <div key={item.id} className='papel-negociado'>
                        <PapelNegociado title={item.nome}/>
                        <div className='linha-pontilhada'></div>
                        <span className='quantidade-transacoes'>{item.quantidade}</span>
                        <SubTitle title='transaçoes'/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Report