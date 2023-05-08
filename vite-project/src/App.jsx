import { useState } from 'react'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import ironhack from './assets/ironhack-logo-xs.png'
import menu from './assets/menu-top-xs.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>

 {/* Nav*/} 
<div className='NavBar'>
   {/* Left Nav*/} 
<div className='LeftNav'>
<img src={ironhack} alt="logo"/>
</div>

 {/* Right Nav*/} 
<div className='RightNav'>
<img src={menu} alt="menu"/>
</div>
</div>

{/* banner*/} 
<div className='Banner'>

</div>

{/* cards*/} 
<div className='Cards'>

<div>
<img src={icon1} alt="Declarative image"/>
</div>

<div>
<img src={icon2} alt="Components"/>
</div>

<div>
<img src={icon3} alt="Single-Way"/>
</div>

<div>
<img src={icon4} alt="JSX IMAGE"/>
</div>

<div>

</div>



</div>
    </div>
  )
}

export default App
