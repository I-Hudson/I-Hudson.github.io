---
layout: project
title:  "Race Track Generator"
date:   2019-01-03 
author: Ian Hudson

summary: Race Track Generator tool created in the Unity Game Engine.

order: 2

Tags:
- C#
- Unity
- Tool
- University

categories:
- project, 

Platform:
- Unity Game Engine

type: portfolio

EngineLanguage: Unity (C#)

Project:
- Individual project,
- Unity Tool

GithubLink:
- https://github.com/I-Hudson/Race-Track-Generator

thumb: RaceTrackGenerator/Thump_img.avif



TitleImgs:

TitleVideo:
- https://www.youtube.com/embed/MJiOExZTgGI

tagged: C#, Unity, Development
---

# About Race Track Generator

Race Track Generator is a tool for the Unity game engine. Its objective is to aid developers in creating unique race tracks using procedural generation. One advantage of a tool like this could be to cut down on development time on creating race tracks.

To generate the race track there are three main steps which takes place. The first is a Voronoi diagram is generated. 

A Voronoi diagram is a diagram which has been portioned into cellar regions where all the points within each region are closers to its defining point than any other point [1]. 

## Challenges

There were a few noticeable challenges that occurred when creating this tool. One of them was finding the outer edge of all the cells which were selected to form the race track. This was an issue as each cell in the Voronoi diagram stored its own edges in a linked list. This prohibited me from just checking if two cells had the same edge. As the edges where unique to each cell. The solution which I came up with was to loop though all the edges finding any edge that shared the same centre position. If more than one edge shared the same centre position, then that edge was not added to the outer edge list. This removed any edge which was not on the outer edge.

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#howitworks">How it works</button>
<div id="howitworks" class="collapse">
<h2>How it works?</h2>
To generate the race track there are three main steps which take place. The first is a Voronoi diagram is generated. A Voronoi diagram is a diagram which has been partitioned into cellar regions where all the points within each region are closers to its defining point than any other point [1]. 
<center><img src="/assets/img/project/RaceTrackGenerator/VoronoiDiagram_generate.avif"/> <br> <i>Voronoi Diagram</i> </center>

The second is to create a spline which will be the track. To do this the tool selects a random cell from the Voronoi diagram, then selects one of its edges. From the edge selected the neighbouring cell which shares the selected edge is selected. This process continues until a certain number of cells are chosen. After all the cells are chosen the tool gets the outer edge of all the cells. This gives us the spline to build the track from.

<br>

<img src="/assets/img/project/RaceTrackGenerator/spline_generate_raw.avif"  width="50%" height="50%"/><img src="/assets/img/project/RaceTrackGenerator/spline_generate_smooth_1.avif" width="50%" height="50%"/>
<center><i>Spline Generated. Left: No Smoothing Applied. Right: Smoothing Applied</i></center>

<br>

The final step is to generate the actual mesh for the race track. This is done by taking the spline and adding vertices either side of the spline.
<center><img src="/assets/img/project/RaceTrackGenerator/vertices.avif"  width="100%" height="100%"/><i>Blue Line: This is a line which is perpendicular to the spline. Red Dots: The red dots are the vertices which have been made.</i></center>

<br>

Each vertex which is defined is also given its own UV coordinate. This allows the mesh to have a texture applied to it.
After all the vertices have been defined then the tool makes the triangles. The way the triangles are made are shown below.
<center><img src="/assets/img/project/RaceTrackGenerator/triangles.avif"/></center>

The curbs are made in a similar fashion.
</div>

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#GetOuterEdge">Code: Get Outer Edge List</button>
<div id="GetOuterEdge" class="collapse">
<pre class="brush: c-sharp">
/// <summary>
/// Return a list of vEdge for the outer edges 
/// of a list of cells
/// </summary>
/// <param name="a_cells"></param>
/// <returns></returns>
private List&lt;vEdge> GetOuterEdge(List&lt;Cell> a_cells)
{
    //get all the edge centers from all the cells within a_cells (a_cells is the list of out selected cells)
    List&lt;EdgeCenter> center = GetAllEdgeCenters(a_cells);
    //Create a new List of vEdges. This List will store all the valid edges
    List&lt;vEdge> outerEdges = new List&lt;vEdge>();
    for (int i = 0; i &lt; center.Count; i++)
    {
        //get the first edge center 
        EdgeCenter firstEdgeCenter = center[i];
        //Track how many positions are the same
        int sameCount = 0;
        //Loop though all the edge centers
        for (int j = 0; j &lt; center.Count; j++)
        {
            //get another edgecenter
            EdgeCenter secondEdgeCenter = center[j];
            //if i and j are not equal (this makes sure we do not evaluate the same edge center)
            if (i != j)
            {
                //if the positions are the same (edges are overlapping. Edges are not on the out side)
                if (firstEdgeCenter.position == secondEdgeCenter.position)
                {
                    //incerment sameCount
                    sameCount += 1;
                }
            }
        }

        //if there are no other edge's which match our current edge
        //add our current edge to outerEdges
        if (sameCount == 0)
        {
            outerEdges.Add(firstEdgeCenter.edge);
        }
        else
        {
            //Draw the line which is overlapping
            //Debug.DrawLine(firstEdgeCenter.edge.v0.Site.Vector3(), firstEdgeCenter.edge.v1.Site.Vector3(), Color.red, float.MaxValue);
        }
    }

    //Return outerEdges
    return outerEdges;
}
</pre>
</div>

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#improvments">Future / Improvements</button>
<div id="improvments" class="collapse">
    
<h2>Future / Improvements</h2>
For improvements I would like to optimise CPU performance but mainly optimise memory performance. This is because I feel there is a lot of wasted memory which could be cut down. I am also thinking about releasing this tool on the assets store for free and hosting it on GitHub. 
Overall, I have been happy with this project as I produced something that could be used by other developers and even though there are edge case this tool provides a great starting point for anyone creating a racing game.
</div>
<i>If you have any question or suggests about this project or any other project please do not hesitate to contract me<i/>


[1] - Worley, S. (1996). A cellular texture basis function. Proceedings of the 23rd annual conference on Computer graphics and interactive techniques - SIGGRAPH '96. [online]