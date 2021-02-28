import React, { useRef, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import {
//   ErrorOutlineIcon,
//   AdjustOutlinedIcon,
// } from "@material-ui/icons/ErrorOutline";

const CanvasDisplay = (props) => {
  const canvasRef = useRef(null);
  const [maxX, maxY] = [400, 400];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const draw = (ctx) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "#000000";
      ctx.moveTo(0, 200);
      ctx.lineTo(200, 100);
      ctx.stroke();
      //ctx.fillText("Alert", 200, 100);
      ctx.font = "24px Material Icons";
      ctx.fillText("adjust_outlined_icon", 190, 110);
      ctx.moveTo(200, 100);
      ctx.fillText("error_outline_icon", 240, 110);
      //ctx.drawImage();
    };

    const render = () => {
      console.log("drawing");
      draw(context);
    };
    render();

    return;
  });

  return (
    <Grid item xs={6}>
      <Paper className={props.classes.paper}>
        <div className="graph">
          <canvas
            ref={canvasRef}
            {...props}
            width={maxX}
            height={maxY}
            style={{ border: "1px solid #000000" }}
          />
        </div>
      </Paper>
    </Grid>
  );

  //const c = document.getElementById("canvasGraph");

  //console.log("CD data", data);

  // const Canvas = () => {
  //   <canvas
  //     id="canvasGraph"
  //     width={maxX}
  //     height={maxY}
  //     style={{ border: "1px solid #000000" }}
  //   ></canvas>;
  // };
};

export default CanvasDisplay;
