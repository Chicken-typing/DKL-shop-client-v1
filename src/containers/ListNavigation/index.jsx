import React, {useState, useEffect} from 'react'
import Tab from '../../components/Tab'
import { useLocation} from 'react-router-dom';
import './style.scss'

function ListNavigation() {

  

    const [show, setShow] = useState(false)
    const {pathname} = useLocation()
   const handleShow = () => {
    if(!show)
    {
      setShow(true)
    }
    else {
      setShow(false)
    }
   }
   useEffect(() => {
    setShow(false)
 }, [pathname])
  return (
    <div className="all">
      <header className="header">       
    <nav className='navbar'>
    <ul className="ul-container"  >
            <Tab label="Home" url="/" />
            <Tab label="Woman" url="/Woman" />
            <Tab label="Man" url="/Man" />
            <Tab label="Kid" url="/Kid" />            
            <Tab label="Brand" url="/Brand" />
            <li id='search-engine'>
              <img id='search-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAhNJREFUSEvlluF100AQhGdOBYQOCBWQVECogKQCQgWECkIHhAqIK8AdkFQQUwFJBYQCbpc3fiu/k2PpJOM8/+B+2qv9Zle7cyL2dLgnLqpgd38B4DWAkxB5D+AnycW/iO4Fu/uhmV2SPO8B3JP8THK2jYCNYHc/dfdvAFRt7cxJfiD5WAss/38CDuj3NsjdZyklJZ/rN3UCgIRdAHgZcYuU0vHWYCV197uo9I/a3ALXk+rdu/s1gHch6GvTNBIz6nQqzjlfk3yvJ0me9UHLzGamIdPw6ZlXJDV81bMCRwW/Q/2saZq+oeokjS79mlp1CT5x9x9Tqm0VFFXfppTatRusegXOOWs1LhWdUqrud5l1m2f3D3b389jdSUOiyouhnN5qdz+KVRL4E8mr6mhGgJnJPA7cffRKdd6lmWkVZAqyw+MxbiQjcfcvU4eyAy7bDWCeUjobqrrsEoDRbV6KXE9sZrLGpRsBWISRPDGFstKp5rERHEZy07pRIWDp1WZ2SPJ0/QKRfaaUZiT1bPX07mvO+Yrkx0qGB4kws4vWagHcxHAO3teDRhF3spIeAXgTIh7iFejG0iWhG2vlehHzSPLt0MfCJIcaqt7M1OJWnEIH4TsDx4QLflAI7IXvDBwtlwmNgu8UXIHrrl59Hu0cvAke32TLQWzPs4BLOEltRQe60UCqmz8hQGbU5/fPVnFN3/8H/gtPUCouyo1owQAAAABJRU5ErkJggg==" 
            alt='search-icon' onClick={handleShow}/> 
            <input   className={show ? "show-box" : "search-box disable"}   type="text" /></li>
            {/* style = {{ visibility: show ? "" : "hidden" }} */}
        </ul>  
        <div className='indicator'></div>          
    </nav>
        <div className="bag">
        <img id='test' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAV1JREFUSEvtluFRwzAMhfWUAYAJKBNQJqDdoCPABLABjFAmoBvABrQbwAZlgzKA/Tj1DOcmTeL4cpfjiH4lZ1uf9CydBRnIMBBXOoNJnorIpYhMRcS+1wA2XRPoBCa5IPkcgDFrB+AWwGtqAMlg59wjgIcmxwG+SoEngUnOSL4Fh18A7k3i8G9rSxE5sX8AcwA/a7UxJIG99+boWkQMOgWwjT2SnJB8D/C1qs7bsk4F0xyRfCqKwrKtmHNuCeAuZH0GYNd4LW2RxTI3yRgK7yVV7taMO4B/6yDlng/A1qOhiKxH+7Stql7EDsvguHr7BFeqPQX8SXLfmwBuROS8JqLGfWX5U8AbVZ0ZLGqrY+zGfX8K3Mtd52Q8grMUGKVO6eMsacuHRqn/hdRXAGw82ltlEPDe2zxV9wLlFtqHqh688RVwGNgX3vtJLiU+p6o2e63KM1jr6NMH/JiPwcDftpYILoVzxCEAAAAASUVORK5CYII="/>      
        </div>  
    </header>
    {/* <Routes>
    <Route path='/' element = {MainPage}/>
    </Routes> */}
    </div>
  )
}

export default ListNavigation