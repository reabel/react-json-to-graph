import React, { useState } from "react";
//import ReactDOM from "react-dom";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

import JsonEditor from "./components/JsonEditor";
import CanvasDisplay from "./components/CanvasDisplay";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "95%",
  },
  paper: {
    margin: theme.spacing(2),
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
  const [jsonData, setJsonData] = useState(defaultJSON);
  const [rawData, setRawData] = useState(JSON.stringify(defaultJSON, null, 4));
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            JSON to Graph
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <JsonEditor
            setRawData={setRawData}
            setJsonData={setJsonData}
            data={rawData}
            classes={classes}
            defaultJSON={defaultJSON}
          />
          {/* <GraphDisplay classes={classes} /> */}
          <CanvasDisplay classes={classes} data={jsonData} />
        </Grid>
      </div>
    </div>
  );
}

export default App;
