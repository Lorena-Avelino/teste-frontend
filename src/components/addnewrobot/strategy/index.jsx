import './style.css'

const Strategy = ({name, value, checked, onChange}) => {
    return (
        <div className={`strategy ${checked ? 'selected' : ''}`} onClick={onChange}>
            <label htmlFor={value}>{name}</label>
            <input type="radio" id={value} value={value} checked={checked} onChange={onChange} name={name}/>
        </div>
    )
}

export default Strategy