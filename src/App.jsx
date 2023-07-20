// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import BreadCrumbs from './components/breadcrumbs'
import NewRobot from './components/newrobot'
import Report from './components/report'
import Robot from './components/robot'
import { useEffect, useState } from 'react'
import { getRobots } from './services/api'

function App() {
  const [robots, setRobots] = useState([])

    const fetchRobots = async () => {
        try{
            const response = await getRobots()
            setRobots(response)
        }catch(error){
            alert("Falha ao buscar robos");
        }finally{
            console.log("fez a chamada")
        }
    }

    useEffect(() => {
        fetchRobots()
    }, [])
  return (
    <>
      <div className='container'>
        <BreadCrumbs />
        <Report />
        <NewRobot disponiveis={robots.length} updateListRobot={fetchRobots}/>
        <Robot robots={robots}/>
      </div>
    </>
  )
}

export default App
