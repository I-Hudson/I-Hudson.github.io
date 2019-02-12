---
layout: project
title:  "Unity Maze Gen + Pathfinding"
date:   2016-12-03 
author: Ian Hudson

summary: Create a maze using the randomized prims algorithm and then apply pathfinding to it with A* and Dijkstra.

categories:
- project, 
skills: 
- A* Pathfinding, 
- Maze Generation,
img: UnityMazeGenPathfinding/UnityMazeGenPathfinding_img.png
thumb: thumb02.jpg
carousel:
- UnityMazeGenPathfinding/postIMG.png
tagged: C#, Unity, Development
---
Unity Maze Gen + Pathfinding

This maze generator and pathfinding project I created was for a university assignment. The project was made by using Unity 5 and the scripting language C#.

The maze was created using the randomized prims algorithm. The algorithm can be seen below generating a maze. All of the white titles are walkable whilst the black titles are unwalkable. 

![alt-text](https://github.com/I-Hudson/Gif/blob/master/MazeGenerator+Pathfinding/Prims.gif?raw=true)

The pathfinding was implemented with 2 algorithms used. These were A* and Dijkstra. Both algorithms allow a path to be found from one node to another. The difference is A* requires both the start and end node to be known. Dijkstra on the other hand only needs the start node to be known as dijkstra's fans out until an end node is found this allows muitiply end nodes to be available. Both algorithms are shown below.

A* - The A* pathfinding uses a ray cast to get both the start and end nodes. These are presented as the start node being magenta and the end node being yellow and the path between them being blue.

![alt-text](https://github.com/I-Hudson/Gif/blob/master/MazeGenerator+Pathfinding/AStar.gif?raw=true)

Dijkstra - Dijkstra's as mentioned above only needs to know the start node. This is great for AI systems as they can find the closest item such as a health pack to it. Both of the available end nodes are shown in yellow. The algorithm will find the node with the shortest distance from the start node and draw a path to it which is shown in green.

![alt-text](https://github.com/I-Hudson/Gif/blob/master/MazeGenerator+Pathfinding/Dijkstra.gif?raw=true)