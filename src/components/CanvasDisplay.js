import React, { useRef, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const _ = require("lodash");

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
    //TODO: add checks either here or on data submission
    const vertices = props.data.vertices;
    const edges = props.data.edges;

    //TODO: breakdown into separate functions
    const draw = (ctx) => {
      let nodePositions = [];
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "#0000FF";
      // ctx.moveTo(0, 200);
      // ctx.lineTo(200, 100);
      // ctx.stroke();
      // //ctx.fillText("Alert", 200, 100);
      ctx.font = "24px Material Icons";
      // ctx.fillText("adjust_outlined_icon", 190, 110);
      // ctx.moveTo(200, 100);
      // ctx.fillText("error_outline_icon", 240, 110);
      //ctx.drawImage();
      //maybe loop differently, or map or something
      console.log("length", vertices.length);

      //render icons
      _.forEach(vertices, (vertex, key) => {
        //create object for various properties (ypos, icon, colour)
        let curType =
          vertex.type === "node"
            ? "adjust_outlined_icon"
            : "error_outline_icon";

        let yPos = vertex.type === "node" ? 200 : 155;
        console.log("vertex", vertex);
        console.log("key", key + 1);
        let relX = (key + 1) / vertices.length;
        let xPos = maxX * relX - 50;
        ctx.fillText(curType, xPos, yPos);
        nodePositions.push({ id: vertex.id, xPos, yPos });
      });
      //render edges
      _.forEach(edges, (edge) => {
        const source = _.find(nodePositions, (node) => {
          return node.id === edge.source_id;
        });
        const target = _.find(nodePositions, (node) => {
          return node.id === edge.target_id;
        });
        ctx.moveTo(source.xPos + 10, source.yPos - 10);
        ctx.lineTo(target.xPos + 10, target.yPos - 10);
        ctx.stroke();
      });
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
          <canvas ref={canvasRef} {...props} width={maxX} height={maxY} />
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
