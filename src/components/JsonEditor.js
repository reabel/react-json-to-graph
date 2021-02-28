import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const JsonEditor = ({ setJsonData, data, defaultJSON, classes }) => {
  if (!data) return <div>No data...</div>;
  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="jsonInput">
              <TextField
                id="outlined-multiline-static"
                label="JSON Input"
                multiline
                fullWidth
                variant="outlined"
                onChange={(e) => {
                  //console.log(e.target.value);
                  setJsonData(JSON.parse(e.target.value));
                }}
                //defaultValue={JSON.stringify(jsonData, null, 4)}
                value={JSON.stringify(data, null, 4)}
              />
              ;
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
                console.log("Current State:", data);
              }}
            >
              Submit JSON
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default JsonEditor;
