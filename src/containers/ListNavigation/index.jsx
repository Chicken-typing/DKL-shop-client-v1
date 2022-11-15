import React, {useState, useEffect, useRef} from 'react'
import Tab from '../../components/Tab'
import { Avatar, Badge } from 'antd';
import { useLocation} from 'react-router-dom';
import { Affix } from 'antd';
import './style.scss'
import { searchProduct } from '../../action/searchActions';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../action';
import { useNavigate } from 'react-router-dom';

function ListNavigation() {

    const [show, setShow] = useState(false)
    const {pathname} = useLocation()
    const [scroll, setScroll] = useState(false)
    const wrapperRef = useRef(null);
    const [scrollNav, setScrollNav] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0);
    const [keyword, setKeyword] = useState("")
    const [searchResult, setSearchResult] = useState([])
    let navigate = useNavigate();
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) {
 // if scroll down hide the navbar
          if(lastScrollY >= 130)
          {
            setScrollNav(true);
          }
           
        } else { // if scroll up show the navbar
          setShow(false)
          if(window.scrollY > 45)
          {
            setScroll(true)   
          }
          else
          {
            setScroll(false)
          }  
          setScrollNav(false);
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
      console.log(window.scrollY);
    };
       

    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
  
        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);

    // This state is used to hide and show search box when click icon
   const handleShow = () => {
    if(!show)
    {
      setShow(true)
     
  }
    else {
      setShow(false)

    }
   }

   // This function to hide the search box when change the orther tab
   useEffect(() => {
    setShow(false)
 }, [pathname])

// useEffect(() => {
//   let handler = (e) => {
//     if(wrapperRef.current.contains(e.target))
//     {
//       setShow(false)
//     }
//   };

//   document.addEventListener("mousedown", handler)
//   return () => {
//     // Unbind the event listener on clean up
//     document.removeEventListener("mousedown", handler);
//   };
// })
 // This function to hide the search box when click any where on the screen
 useEffect(() => {
  function handleClickOutside(event) {
    if(!show) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            if(searchResult.length > 0)
            {
              setShow(true)
              
            }
            else{
              
            }
           
                  
      }
    }
  }
   // Bind the event listener
   document.addEventListener("mousedown", handleClickOutside);
   return () => {
     // Unbind the event listener on clean up
     document.removeEventListener("mousedown", handleClickOutside);
   };
}, [wrapperRef])

const handle = e => {
  // searchProduct(e.target.value)
  setKeyword(e.target.value)
} 

// Use this function to press Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setKeyword(event.target.value)
      event.target.value = ''
      console.log('do validate')
    }

  }
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchProduct())
  }, [])
  const res = useSelector(state => state.fetchProduct.products)



  const onSearch = (searchTerm) => {
    setKeyword(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
    navigate("/products")
    
  };

  return (
   <Affix>
     <div className="all">
      <header className={`header ${scrollNav && 'hidden'}`} style={{top: scroll ? '0' : '' , position: scroll ? 'fixed': ''}}>       
    <nav className='navbar'>
    <ul className="ul-container"  >
            <Tab label="Home" url="/main-page" />
            <Tab label="Woman" url="/woman" />
            <Tab label="Man" url="/man" />
            <Tab label="Kid" url="/kid" />            
           <Tab label="Brand" url="/brand" /> 
           <li id='search-engine'>
              <Tooltip title="search">
              <Button id='search-icon' shape="circle" icon={<SearchOutlined />} size="large" onClick={handleShow} style={{top: '-5px'}}
               />
              <input ref={wrapperRef} 
              value={keyword} 
              onKeyDown={handleKeyDown}
              onFocus={() => setKeyword("")}
              className={show ? "show-box" : "search-box disable"} 
              onChange={handle}
              type="text"  />
              </Tooltip>
            </li>
            <div className="dropdown">
            {res
            .filter((item) => {
              const searchTerm = keyword.toLowerCase();
              const fullName = item.name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
                
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.name)}
                className={show ?'dropdown-row': 'dropdown_close'}
                key={item.id}
              >
                {item.name}
                <img src={item.imgProduct} alt="" />
              </div>
            ))}        
              </div>
            {/* style = {{ visibility: show ? "" : "hidden" }} */}
        </ul>  
        <div className='indicator'></div>          
    </nav>
        <div className="bag">
        {/* <img id='test' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAV1JREFUSEvtluFRwzAMhfWUAYAJKBNQJqDdoCPABLABjFAmoBvABrQbwAZlgzKA/Tj1DOcmTeL4cpfjiH4lZ1uf9CydBRnIMBBXOoNJnorIpYhMRcS+1wA2XRPoBCa5IPkcgDFrB+AWwGtqAMlg59wjgIcmxwG+SoEngUnOSL4Fh18A7k3i8G9rSxE5sX8AcwA/a7UxJIG99+boWkQMOgWwjT2SnJB8D/C1qs7bsk4F0xyRfCqKwrKtmHNuCeAuZH0GYNd4LW2RxTI3yRgK7yVV7taMO4B/6yDlng/A1qOhiKxH+7Stql7EDsvguHr7BFeqPQX8SXLfmwBuROS8JqLGfWX5U8AbVZ0ZLGqrY+zGfX8K3Mtd52Q8grMUGKVO6eMsacuHRqn/hdRXAGw82ltlEPDe2zxV9wLlFtqHqh688RVwGNgX3vtJLiU+p6o2e63KM1jr6NMH/JiPwcDftpYILoVzxCEAAAAASUVORK5CYII="/>
               */}
          <a href="cart">
            <Badge count={4}>
                <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAV1JREFUSEvtluFRwzAMhfWUAYAJKBNQJqDdoCPABLABjFAmoBvABrQbwAZlgzKA/Tj1DOcmTeL4cpfjiH4lZ1uf9CydBRnIMBBXOoNJnorIpYhMRcS+1wA2XRPoBCa5IPkcgDFrB+AWwGtqAMlg59wjgIcmxwG+SoEngUnOSL4Fh18A7k3i8G9rSxE5sX8AcwA/a7UxJIG99+boWkQMOgWwjT2SnJB8D/C1qs7bsk4F0xyRfCqKwrKtmHNuCeAuZH0GYNd4LW2RxTI3yRgK7yVV7taMO4B/6yDlng/A1qOhiKxH+7Stql7EDsvguHr7BFeqPQX8SXLfmwBuROS8JqLGfWX5U8AbVZ0ZLGqrY+zGfX8K3Mtd52Q8grMUGKVO6eMsacuHRqn/hdRXAGw82ltlEPDe2zxV9wLlFtqHqh688RVwGNgX3vtJLiU+p6o2e63KM1jr6NMH/JiPwcDftpYILoVzxCEAAAAASUVORK5CYII=" />
            </Badge>
          </a>
        </div>  
    </header>
    </div>
   </Affix>
  )
}

export default ListNavigation