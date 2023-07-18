import './style.css'

const Strategy = ({name, value, checked, onChange}) => {
    return (
        <div className={`strategy ${checked ? 'selected' : ''}`} onClick={onChange}>
            <label htmlFor={name}>{value}</label>
            <input type="radio" id={name} value={value} checked={checked} onChange={onChange}/>
        </div>
    )
}

export default Strategy