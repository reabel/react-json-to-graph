import React, { useState } from "react";
//import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const defaultJSON = {
  vertices: [
    {
      id: "n1",
      label: "Node 1",
      type: "node",
    },
    {
      id: "n2",
      label: "Node 2",
      type: "node",
    },
    {
      id: "a1",
      label: "Alarm 1",
      type: "alarm",
    },
  ],
  edges: [
    {
      id: "e1",
      label: "edge n1-n2",
      type: "link",
      source_id: "n1",
      target_id: "n2",
    },
    {
      id: "e2",
      label: "edge n2-a1",
      type: "link",
      source_id: "n2",
      target_id: "a1",
    },
  ],
};
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function App() {
  const classes = useStyles();
  const [jsonData, setJsonData] = useState(defaultJSON);
  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" className={classes.title}>
              JSON to Graph
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div className="jsonInput">
                    <TextField
                      id="outlined-multiline-static"
                      label="JSON Input"
                      multiline
                      variant="outlined"
                      onChange={(e) => {
                        //console.log(e.target.value);
                        setJsonData(JSON.parse(e.target.value));
                      }}
                      //defaultValue={JSON.stringify(jsonData, null, 4)}
                      value={JSON.stringify(jsonData, null, 4)}
                    />
                  </div>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      //re-render based off of value of state
                      setJsonData(defaultJSON);
                    }}
                  >
                    Reset JSON
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      //re-render based off of value of state
                      console.log("Current State:", jsonData);
                    }}
                  >
                    Submit JSON
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className="graph">
                <LineChart
                  width={400}
                  height={400}
                  data={data}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#ff7300"
                    yAxisId={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#387908"
                    yAxisId={1}
                  />
                </LineChart>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
