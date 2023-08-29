
import blogdata from "./blogdata";
import '../App.css'
import { Card } from 'antd';
const { Meta } = Card;

function Blogss(props){
  return(
    <a href={props.link}>
      <Card
    hoverable
    style={{ width: 240 ,
             borderBlockColor:"black"}}
    cover={<img src={props.url} alt="" />} >
    <Meta title={props.name} description="www.instagram.com" />
  </Card>
  </a>
  )
}

  


const a=blogdata.map(b=>{
  return(
    <Blogss
    {...b}
    />
  )
})

function Blog()
{
  return(
    <div>
      <h1 className="headb">BLOGS</h1>
    <div className="display">
      {a}
    </div>
    </div>
  )
}
  export default Blog;