import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { LineChart } from "../chart/LineChart";
import { useSelector } from "react-redux";

export const BasicCard = () => {
  const { user } = useSelector((store) => store.userInfo);
  const { orders } = useSelector((store) => store.orderData);
  const data = [
    {
      p: "New orders",
      number: orders.length,
      percent: "3%",
      days: "20day",
    },
    {
      p: "Total Sales",
      number: 292920,
      percent: "3%",
      days: "20day",
    },
  ];
  return (
    <>
      {data.map((info) => (
        <Card sx={{ minWidth: 275 }} key={info.p}>
          <CardContent>
            <Infos info={info} />
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
const Infos = ({ info }) => (
  <>
    <div className="d-flex justify-content-between p-2">
      <span>
        <p>{info.p}</p>
        <h2>{info.number}</h2>
        <p>
          {info.percent}({info.days})
        </p>
      </span>
      <span>logo</span>
    </div>
    <div className="mt-2 border" style={{ height: "150px" }}>
      {info?.chart && info.chart}
    </div>
  </>
);
