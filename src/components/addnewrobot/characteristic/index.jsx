import './style.css'

const Characteristic = ({form, titulolabel, name, placeholder, value, onChange}) => {
    return (
        <div className="characteristic">
            <label htmlFor={form}>{titulolabel}</label>
            <input className='input' id={form} type="text" name={name} placeholder={placeholder} value={value} onChange={onChange} required/>
        </div>
    )
}

export default Characteristic