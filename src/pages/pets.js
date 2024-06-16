import React from "react";
import parrotdata from "./parrotData";
import fishdata from "./fishData";
import blogdata from "./Dogdata";

import "./pet.css";
import { Card } from "antd";
const { Meta } = Card;

function Blogss(props) {
  return (
    <a href={props.link}>
      <Card
        hoverable
        className="custom-card"
        cover={<img src={props.url} alt="" />}
      >
        <Meta title={props.name} description="Cost" />
        <Meta title={props.cost} description="Age" />
        <Meta title={props.lifetime} description="Location" />
        <Meta title={props.phone} />
      </Card>
    </a>
  );
}

function Blogss1(props) {
  return (
    <a href={props.link}>
      <Card
        hoverable
        className="custom-card"
        cover={<img src={props.url1} alt="" />}
      >
        <Meta title={props.name1} description="Cost" />
        <Meta title={props.cost1} description="Age" />
        <Meta title={props.lifetime1} />
      </Card>
    </a>
  );
}

function Blogss2(props) {
  return (
    <a href={props.link}>
      <Card
        hoverable
        className="custom-card"
        cover={<img src={props.url} alt="" />}
      >
        <Meta title={props.name} description="Cost" />
        <Meta title={props.cost} description="Age" />
        <Meta title={props.lifetime} />
      </Card>
    </a>
  );
}

const a = parrotdata.map((b, index) => <Blogss key={index} {...b} />);
const b = fishdata.map((b, index) => <Blogss1 key={index} {...b} />);
const c = blogdata.map((b, index) => <Blogss2 key={index} {...b} />);

function Blog() {
  return (
    <div>
      <h1 className="headb">Information about Pets</h1>
      <div className="display">{a}</div>
      <div className="display">{b}</div>
      <div className="display">{c}</div>
    </div>
  );
}

export default Blog;
