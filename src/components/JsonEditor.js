import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const JsonEditor = ({
  setRawData,
  setJsonData,
  data,
  defaultJSON,
  classes,
}) => {
  const [error, setError] = useState(false);

  const updateJson = (value) => {
    try {
      //const parsedValue = JSON.parse(value);
      setJsonData(JSON.parse(value));
      setError(false);
    } catch (err) {
      console.log("err", err);
      setError(err);
      return;
    }
  };
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
                  setRawData(e.target.value);
                }}
                value={data}
                error={error}
                helperText={error ? error.message : "Valid JSON"}
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
                //setJsonData(defaultJSON);
                setRawData(JSON.stringify(defaultJSON, null, 4));
                setJsonData(defaultJSON);
                setError(false);
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
                //setJsonData(JSON.parse(data));
                updateJson(data);
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
