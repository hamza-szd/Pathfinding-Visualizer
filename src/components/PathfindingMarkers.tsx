import React, { useEffect } from "react";
import { getCityData } from "../constants";
import { hasKey } from "../utils";
import { Marker } from "react-leaflet";
import { marker, nodeMarker, visitedNodeMarker } from "../Icons";
import { nodeInfo, qtNode, pair } from "../types";
import CanvasMarkersLayer from "../lib/react-leaflet-canvas-markers/CanvasMarkersLayer";

interface Props {
  city: string;
  nodes: Set<string>;
}

const PathfindingMarkers: React.FC<Props> = ({ city, nodes }) => {
  const nodeData = getCityData(city);
  return (
    <CanvasMarkersLayer>
      {Array.from(nodes).map((node: string) => {
        if (hasKey(nodeData, node)) {
          const val: nodeInfo = nodeData[node];
          return (
            <Marker
              key={node}
              position={[val.lat, val.lon]}
              icon={nodeMarker}
            />
          );
        }
      })}
    </CanvasMarkersLayer>
  );
};

const areEqual = (prevProps: Props, nextProps: Props) => {
  return false;
};

export default React.memo((props) => {
  return PathfindingMarkers(props);
}, areEqual);
