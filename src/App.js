import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { LineChart, data, XAxis, Tooltip, CartesianGrid, Line } from "recharts";

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

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <header className="App-header">Graph Generator</header>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <div className="jsonInput">
                <TextField
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  defaultValue={JSON.stringify(defaultJSON)}
                  variant="outlined"
                />
              </div>
            </Paper>
            <Button variant="contained" color="primary">
              Submit JSON
            </Button>
          </Grid>
          <Grid item xs={8}>
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
