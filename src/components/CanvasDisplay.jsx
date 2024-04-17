import React, { useRef, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//import find from "lodash"; 
import * as _ from "lodash";

/**
 * https://stackoverflow.com/questions/45305272/is-there-a-performance-difference-between-import-as-from-lodash-and-import/45305804#45305804
*/

const CanvasDisplay = (props) => {
  /**
   * TODO: refactor to prevent issue where icons don't display
   * on Initial page load
   */
  const canvasRef = useRef(null);
  const [maxX, maxY] = [400, 400];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    //TODO: add checks either here or on data submission
    if (!props.data) return;

    const vertices = props.data.vertices;
    const edges = props.data.edges;

    const nodePositions = [];

    const renderVertices = (ctx) => {
      //render icons
      vertices.forEach( (vertex, key) => {
        //create object for various properties (ypos, icon, colour)
        ctx.font = "24px Material Icons";
        let curType =
          vertex.type === "node"
            ? "adjust_outlined_icon"
            : "error_outline_icon";

        let yPos = vertex.type === "node" ? 200 : 155;
        let relX = (key + 1) / vertices.length;
        let xPos = maxX * relX - 50;
        if (vertex.type !== "node") {
          ctx.fillStyle = "#FF0000";
        }

        ctx.fillText(curType, xPos, yPos);
        ctx.fillStyle = "#331133";
        // TODO: refactor this to possible update the current vertex instead of
        // requiring a new array
        nodePositions.push({ id: vertex.id, xPos, yPos, type: vertex.type });
        renderLabel(ctx, [xPos - 10, yPos + 10], vertex.label);
      });
    };

    const renderEdges = (ctx) => {
      edges.forEach((edge) => {
        const source = _.find(nodePositions, (node) => {
          return node.id === edge.source_id;
        });
        const target = _.find(nodePositions, (node) => {
          return node.id === edge.target_id;
        });
        //accounting for typos on edges
        if (!source || !target) return;

        //if (target.type === "alarm") ctx.strokeStyle = "red";
        ctx.moveTo(source.xPos + 10, source.yPos - 10);
        ctx.lineTo(target.xPos + 10, target.yPos - 10);
        ctx.stroke();
        renderLabel(ctx, [source.xPos + 40, source.yPos + 40], edge.label);
      });
    };

    const renderLabel = (ctx, coord, label) => {
      ctx.font = "10pt arial";
      ctx.fillText(label, coord[0], coord[1]);
      //ctx.fillText("test", 200, 200);
    };

    const draw = (ctx) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      context.beginPath(); //resolves issue where canvas wouldn't clear
      ctx.fillStyle = "#331133";

      renderVertices(ctx);
      renderEdges(ctx);
    };
    draw(context);

    return;
  });

  return (
    <Grid item xs={6}>
      <Paper className={props.classes?.paper || 'paper'}>
        <div className="graph">
          <canvas ref={canvasRef} {...props} width={maxX} height={maxY} />
        </div>
      </Paper>
    </Grid>
  );
};

export default CanvasDisplay;
