
import '../App.css'
import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

function Login(){
    const[data,Setdata]=React.useState({
        money:"",
        name:"",
})
function Handlechange(event){
 const{name,type,value,checked}=event.target
 Setdata(prev=>{
    return{
        ...prev,
        [name]:type=== "checkbox"?checked:value
    }
 })
}

function Alerto()
{
  alert(`Thank you for donating ${data.name}`)
}
console.log(data)
    return(
        <div>
       
        <div className="login">
            <form onSubmit={Alerto}>
                <br/>
           
           <div className="donate">
            
            <img src="https://wl-brightside.cf.tsp.li/resize/728x/webp/eed/915/fce72c5a6c88e2ab4e70cd8f01.jpg.webp"
             
               height={240} 
               
               className="petimg"  />
            
            <img src="https://wl-brightside.cf.tsp.li/resize/728x/webp/334/7b2/63c23d56338d5504f235987f21.jpg.webp" 
               
               height={240} 
               
               className="petimg2"/>
          
            <img src= "https://wl-brightside.cf.tsp.li/resize/728x/webp/64e/86a/89e05153bbb38fe0a977169f55.jpg.webp"
              
               height={240} 
               
               className="petimg3"/>

            <img src= "https://wl-brightside.cf.tsp.li/resize/728x/webp/a7b/94d/9eb73e5ebab85ef16d9d54e83a.jpg.webp"
              
              height={260} 
              
              className="petimg4"/>
           
            {/* <Card
             hoverable
            style={{ width: 240}}
            cover={<img src="https://wl-brightside.cf.tsp.li/resize/728x/webp/64e/86a/89e05153bbb38fe0a977169f55.jpg.webp" alt="" />} >
            </Card> */}

           </div>

             <br/>
             <div>
            <h1 className="justi">Help Homeless</h1>
            <h1 className="justi">animals to find a home</h1>
        </div> 
        <br/>
        <div className="donato">
            <label className='label'>Name :             </label>
            <input 
                   name="name"
                   type="text"
                   placeholder="Name"
                   value={data.name}
                   onChange={Handlechange}
                   className="inputo"/>
            <br/>
            <br/>
            <label className="label">Money :           </label>
            <input 
                   name="money"
                   type="number"
                   placeholder="Enter Money"
                   value={data.money}
                   onChange={Handlechange}
                   className="inputo"/>
            <br/>
            <br/>
                    <button className="submit">Donate</button>
            </div>
           </form>
        </div>
        <br/>
        </div>
        
    )
}
export default Login;