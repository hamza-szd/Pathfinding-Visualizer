# How I made this

**Table of contents**

- [Data preparation](https://github.com/hamza-szd/Pathfinding-Visualizer#data-preparation)
- [Loading the graph](https://github.com/hamza-szd/Pathfinding-Visualizer#loading-the-graph)
- [Rendering](https://github.com/hamza-szd/Pathfinding-Visualizer#rendering)
- [Async everything](https://github.com/hamza-szd/Pathfinding-Visualizer#async-everything)
- [Hit testing](https://github.com/hamza-szd/Pathfinding-Visualizer#hit-testing)
- [Pathfinding](https://github.com/hamza-szd/Pathfinding-Visualizer#pathfinding)
- [Developing locally](https://github.com/hamza-szd/Pathfinding-Visualizer#developing-locally)

To visualize pathfinding progress, visited nodes needed to be drawn on the screen. However, at the same time, we cannot have a separate SVG element for each node when showing 150k+ elements - that would be impossibly slow. One workaround would be to render everything on a canvas, but there was no built-in library for that. Instead, I built my [own library](https://github.com/hamza-szd/Pathfinding-Visualizer/blob/master/src/lib/react-leaflet-canvas-markers/CanvasMarkersLayer.js) to render a canvas layer for markers.

## Thank you

Thanks for reading this! I hope you enjoyed it as much as I enjoyed working on this project.
