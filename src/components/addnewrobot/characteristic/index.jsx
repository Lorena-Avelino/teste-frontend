import './style.css'

const Characteristic = ({form, titulolabel, placeholder}) => {
    return (
        <div className="characteristic">
            <label htmlFor={form}>{titulolabel}</label>
            <input className='input' id={form} type="text" placeholder={placeholder} />
        </div>
    )
}

export default Characteristic