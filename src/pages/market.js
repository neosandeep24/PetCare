import Selldata from "./Selldata";
import "../App.css";
import { Card } from "antd";
const { Meta } = Card;

function Blogss(props) {
  return (
    <a href={props.url}>
      <Card
        hoverable
        style={{ width: 240, borderBlockColor: "black" }}
        cover={<img src={props.url} alt="" />}
      >
        <Meta  title={props.name} description="Cost"  />
        <Meta title={props.cost} description="Age" />
        <Meta title={props.Age} description="Location"/>
        <Meta title={props.location} description="Phone"/>
        <Meta title={props.phone}/>
        

      </Card>
    </a>
  );
}

const a = Selldata.map((b) => {
  return <Blogss {...b} />;
});

function Blog() {
  return (
    <div>
      <h1 className="headb">PetStore</h1>
      <div className="display">{a}</div>
    </div>
  );
}
export default Blog;
