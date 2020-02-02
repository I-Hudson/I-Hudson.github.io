---
layout: project
title:  "InSight Engine"
date:   2019-01-01 
author: Ian Hudson

summary: OpenGL game engine made in C++.

Tags:
- C++
- OpenGL
- University

categories:
- project,

Platform:
- PC

EngineLanguage: C++

Project:
- Individual project

thumb: c++-opengl/title.PNG

GithubLink:
- https://github.com/I-Hudson/Insight-Engine

TitleImgs:
- 

TitleVideo:
- https://youtube.com/embed/mpf4T3wIzJ4

tagged: C++, OpenGL, Graphics

---

# About 
InSight Engine is a lite game engine which has been made from an assignment submission. InSIght includes an ECS (Entity component system) which can be found in Unity and makes use of multiple libraries such as Dear ImGui, a fast and self-contained UI library, and Assimp, a powerful model loading library.
InSight does also include one notable feature. This being the usage of light volumes.

Currently only OpenGL is fully supported in InSight with Vulkan being setup and rendering a triangle.

InSIght includes a demo scene. The scene includes:
- A directional light with adjustable colour values
- A Point light with adjustable colour values and range/radius
- A Spotlight with adjustable colour values and adjustable inner and outer radius and range
- Shadow mapping from the directional light
- Vertex shader animation on the water
- Tessellation on the tank and ground models
- Attempt at screen space reflections

If you would like to have a go with the demo scene click the GitHub logo and download the latest release (InSight.zip), extract the bin folder and then run InSight.exe.

This project has really allowed me to apply what I have learnt at university and has become a project which I am proud of.

## Additional Features
From continuing this project, I have been able to add more features like adding/removing entities, adding/removing components, saving to a file and I am currently rewriting the renderer to become rendering API agnostic.

## Challenges
This project produced many challenges. The biggest challenge was the small amount of knowledge I had with OpengGL. This is due to this being one of the few projects where I interfaced with OpenGL directly. This meant I had a step learning curve with this project. To over come this challenge I used reference materiel from the lectures to help grasp an understanding of OpenGL and used online resources to further my understanding.

### Pre-made Scene Image
<a href="https://i-hudson.github.io/assets/img/project/c++-opengl/title.PNG" target="_blank"><img src="/assets/img/project/c++-opengl/title.PNG"></a>

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#improvments">Future / Improvements</button>
<div id="improvments" class="collapse">
<h2>Future / Improvements</h2>
<p>
This project has taught me much about how graphics are rendered and has given me a great appreciation for render engines. I hope to continue to work on this project in my free time and add more features like audio and materials.
</p>
</div>

<i>If you have any question or suggests about this project or any other project please do not hesitate to contract me. This is an area in which I would like to learn more in.<i/>

