---
layout: project
title:  "Perception Mobile Game"
date:   2019-01-28 
author: Ian Hudson

summary: Perception. An addictive puzzle mobile game which requires you to change how you look at things.

categories:
- project, 
Platform:
- Android
EngineLanguage: Unity (C#)
Project:
- Individual project,
- Developing mobile game
thumb: Perception/Thump_img.png
TitleImgs:
TitleVideo:
- https://www.youtube.com/embed/LKAm8dyQWWA
tagged: C#, Unity, Development
---

# About Perception
Perception is a mobile game developed in the Unity game engine using C#. Perception is a puzzle game which utilise the idea of having to change how to look at thing to find the solution.
The objective of Perception is to build a shape using blocks on a 5x5x5 grid so when all the walls on the outside move inwards the shape pass thought them. 
<center><img src="/assets/img/project/Perception/gif_1.gif" alt="" width="50%" height="50%"/></center><br>
This is the core concept of the game as it needs the player to not think in one dimension.


## Challenges
One of the challenges that I encountered was how to create each level. There were a few ways I could have gone with this. The first and most obvious being to create all the wall elements at compile time. This is great for prototyping as I could quickly build new levels. However, there was two reasons I didn’t like the idea of hand placing all the object within the scene. The first being the large number of objects which would be present within the hierarchy and the second being scalability. I wanted an easy way to add new levels without needing to change anything within the editor hierarchy or gameplay systems in fear of introducing new bugs. 
The solution which I went with was to have .json files act as levels. Each .json file would contain all the data need for each level, then when a level was selected from the main menu that level's .json file would be selected then parsed into a LevelData class which could be used by the LevelManager to generate the level selected.

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#jsonFile">Level .json file</button>
<div id="jsonFile" class="collapse">
<pre class="brush: jscript">
{   
  //The title for this level. (Normally a hint for the level)
  "title": "Tap to place a cube",
  //The speed of which the was will move for this level. (Default is 2)
  "wallSpeed": 2,
  //The life span of each wall. (How many seconds should the wall exist before 
  //disappearing. Default is 4)
  "wallLifeSpan": 4,
  //What is the recomeneded number of cubes for this level
  "recomendedCubeCount": 1,
  //Define the 3 goals for this level.
  //Time limit. (Number of seconds this level must be completed in to 
  //accomplish this goal).
  //Score. (The level score must be equal to or higher to accomplish this goal).
  //Moves. (The plaer must make less or equal number of moves to accomplish this goal)
  "goals": 
  [
    [ "Time", 20 ],
    [ "Score", 2 ],
    [ "Moves", 1 ]
  ],
  //
  "wallMap": [
    [ "X", "X", "X", "X", "X" ],
    [ "X", "X", "X", "X", "X" ],
    [ "X", "X", "X", "X", "X" ],
    [ "X", "X", "X", "X", "X" ],
    [ "X", "X", " ", "X", "X" ],
    
    [ "X", "X", "X", "X", "X" ],
    [ "X", "X", "X", "X", "X" ],
    [ "X", "X", "X", "X", "X" ],
    [ "X", "X", "X", "X", "X" ],
    [ "X", "X", " ", "X", "X" ]
  ]
}
</pre>
</div>

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#levelData">Level Data class</button>
<div id="levelData" class="collapse">
Level 1 .json file

<pre class="brush: c-sharp">
/// <summary>
/// Level Data class to store all data for a level
/// </summary>
[System.Serializable]
public class LevelData
{
    public string Title;
    public float WallSpeed;
    public float WallLifeSpan;
    public int RecomendedCubeCount;
    public LevelGoal[] Goals;
    public string[][] wallMap; 
}
</pre>

With this setup I can quickly create new levels by adding a new .json file to the levels folder. This also would allow other developers who might not understand the systems in place within the game to add new levels which is important for larger teams. 
</div>

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#gameStyle">Game Style</button>
<div id="gameStyle" class="collapse">
<h2>Style</h2>

The style I wanted for Perception was minimalistic. This was because puzzle games to me shouldn’t have anything that takes away from the puzzles on screen. I didn’t want players attention wondering from the main mechanic; the puzzle. Originally the wall tiles were going to be 2D images however after some playtesting and reflection having the tiles be 3D adds depth and to me makes the game feel more complete.

Another style consideration was the colours. I again wanted colours that didn’t distract the player but were easy to look at and gave a calm atmosphere. 
<center><img src="/assets/img/project/Perception/style_1.png" alt="" width="100%" height="100%"/></center><br>
</div>

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#improvments">Future / Improvements</button>
<div id="improvments" class="collapse">
<h2>Future / Improvements</h2>

Looking back on this project I can see some improvements which could be made. Two main ones being, having the blocks be affected by external inputs like physics and having and not having to build the .APK when a new level is added.
</div>
<i>If you have any question or suggests about this project or any other project please do not hesitate to contract me<i/>