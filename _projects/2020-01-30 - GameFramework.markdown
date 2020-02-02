---
layout: project
title:  "Game Engine Framework/Model Viewer"
date:   2020-01-30 
author: Ian Hudson

summary: Game Engine framework/Model Viewer

Tags:
- C++
- OpenGL
- Vulkan
- Personal
- WIP

categories:
- project,

Platform:
- PC

EngineLanguage: C++

Project:
- Individual project

thumb: Engine-Framework/demoModel.PNG

GithubLink:
- https://github.com/I-Hudson/Engine-Framework

TitleImgs:
- Engine-Framework/demoModel.PNG

TitleVideo:
- 

tagged: C++, OpenGL, Graphics

---

# About 
This project is a small framework which has been planed to be used for most/all game related C++ projects. This project contains a renderer system which has support for OpenGL and has Vulkan being implemented.

Currently there is one project which uses this framework.

## Model Viewer
Model view is a small application with a purpose of displaying 3d models with PBR shaders in real time. This project came from when talking to an Art friend who was interested in having a small program which they could display a model in to see what different textures/effects would look like.

## Challenges
With the goal of having a mostly all purpose framework which would be used for most/all game related C++ projects, one of the main challenges was planning a clean but robust structure for how the framework works internally. One example would be the renderer system. Due to having more than one API this system had to be planned with this in mined. Because of this the system uses a selection on abstract base classes from which a new API would override and implement API specif code.

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#renderSystemDiagram">Simple Renderer System Diagram</button>
<div id="renderSystemDiagram" class="collapse">
<h2>Simple Renderer System Diagram</h2>
<p>
<a href="https://i-hudson.github.io/assets/img/project/Engine-Framework/demoModel.PNG" target="_blank"><img src="/../assets/img/project/Engine-Framework/simpleRenderSystem.PNG"></a>
Above is a simple diagram showing what classes are interacted with and the internal classes. The current implementation of the system is to inherit a base class (RendererAPI for example) and store/interact though that. This way no matter the API being used the way to interface with it is the same. The method is used for Shaders, textures, Buffers and more.

</p>
</div>

### Model View Example
<a href="https://i-hudson.github.io/assets/img/project/Engine-Framework/demoModel.PNG" target="_blank"><img src="/assets/img/project/Engine-Framework/demoModel.PNG"></a>


<!--
<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#improvments">Future / Improvements</button>
<div id="improvments" class="collapse">
<h2>Future / Improvements</h2>
<p>
</p>
</div>
-->
<i>If you have any question or suggests about this project or any other project please do not hesitate to contract me. This is an area in which I would like to learn more in.<i/>

