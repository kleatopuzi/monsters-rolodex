import React from "react";
import { Card } from "../card/card_cmp";
import "./cardList_style.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
// console.log(props);
