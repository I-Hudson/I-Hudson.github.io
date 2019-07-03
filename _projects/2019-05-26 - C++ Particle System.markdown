---
layout: project
title:  "Particle System"
date:   2019-01-03 
author: Ian Hudson

summary: Particle system made in C++.

Tags:
- C++
- OpenGL
- Unversity

categories:
- project,

Platform:
- PC

EngineLanguage: C++

Project:
- Individual project

thumb: c++particlesystem/thump.PNG

GithubLink:
- https://github.com/I-Hudson/CPlusPlus-Particle-System

TitleImgs:
-

TitleVideo:
- https://www.youtube.com/embed/7tY3bMEI4EI

tagged: C++, OpenGL

---

# About 
This project was my submission for low level architecture which I was awarded a first. The objective of this project was to create a particle system in C++ using OpenGL. This project helped me improve my C++ and OpenGL knowledge. 

The skills I have learnt from doing this project include:
- OpenGL knowledge, 
- Improved C++ knowledge, 
- Shaders (Vertex, Geometry and Fragment),  
- SIMD (Single Instruction Multiple Data), 
- Experimenting Multithreading,
- Optimisation.

## Challenges
When creating this project I was faced with many challenges. Some of which were the limited Open GL rendering pipe line knowledge I had, some advance C++ techniques and GLSL shaders. Throughout the project however I built up all these areas of knowledge.
For example I created a geometry shader which took a single vertex in as input and outputted a full quad this was a performance optimisation. 

For the geometry shader to work however I had to change the vertex array object and the vertex buffer object to accept single points. Also when implementing the geometry shader I had to change the vertex attribute locations, enable them and assign them pointers this gave me more confidence around Open Gl.

Another skill that I learnt was SIMD (Single Instruction Multiply Data). This was another performance optimisation that allowed the particle system to update 8 floats in one instruction instead of one. 


<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#code">Code Snippet</button>
<div id="code" class="collapse">
<pre class="brush: c++">
//Geometry Shader
const char* gsSource = GLSL(
	//Input primitive type of points into the shader
	layout (points) in; 
	//Output primitive type of triangle strip
	layout (triangle_strip, max_vertices = 5) out; 
	//Input all the colours from the primitive. One for each 
	//vertex
	in vec4 vColour[]; 
	//Output a vec4 for the colour of the primitive
	out vec4 fColour; 

	//Create two floats for the size of the particle
	float pSizeX = 0.2; 
	float pSizeY = 0.2; 

	//Function to create a single vertex
	void CreateVertex(float a_pSizeX, float a_pSizeY) 
	{ 
		//Set gl_Position
		gl_Position = gl_in[0].gl_Position + vec4(a_pSizeX, 
							 a_pSizeY, 
							 0.0, 0.0);
		//EmitVertex
		EmitVertex(); 
	} 
	//Main function
	void main() 
	{ 
		//Set fColour to the colour of the point passed 
		//though
		fColour = vColour[0]; 
		
		//Create 5 vertexes for the quad
		CreateVertex(-pSizeX, pSizeY); 
		
		CreateVertex(pSizeX, pSizeY); 
		
		CreateVertex(pSizeX, -pSizeY); 
		
		CreateVertex(-pSizeX, pSizeY); 
		
		CreateVertex(-pSizeX, -pSizeY); 
		
		//Call EndPrimitive
		EndPrimitive(); 
	};
</pre>
<pre class="brush: c++">
//SIMD
void UpdatePartilce(__m256* a_particleItem, __m256* a_move, 
		    __m256* a_sDir, const float& a_sDAcc, 
		    const float& a_speed, 
                    const float& a_deltaTime)
{
	//Create an integer to store the max number of 
	//particles divided by 8 we are using multiply (*) 
	//as it is a quicker operation than divide (/)
	int maxParticles = MAX_NUM_PARTICLES * 0.125f;
	
	//Times speed by deltaTime
	float m_speedDeltaTime = a_speed * a_deltaTime;

	//Create union to hold temp values in
	union
	{
		__m256 items;
		float f[8];
	};
	
	//Create another union to hold the secondary
	//direction value in
	union
	{
		__m256 sDAcc;
		float s[8];
	};

 	//Update the union values to be equal to
	//m_speedDeltaTime and the second 
    	//direction values
	for (int i = 0; i < 8; ++i)
	{
		f[i] = m_speedDeltaTime;
		s[i] = a_sDAcc;
	}

	//Create an emptry __m256 variable
	__m256 newDir[MAX_NUM_PARTICLES / 8];

	for (int i = 0; i < maxParticles; ++i)
	{
		//Create a new direction value
		//from the old direction plus the 
		//new secondary direction
		newDir[i] = _mm256_add_ps(a_move[i], a_sDir[i]);
		
		//Get all the new direction values and multiply 
		//them by a_deltaTime
		__m256 values = _mm256_mul_ps(newDir[i], items);
		
		//Add the movement values on to the position of
		//the particle
		a_particleItem[i] = _mm256_add_ps(a_particleItem[i], 
							    values);
		a_sDir[i] = _mm256_add_ps(a_sDir[i], sDAcc);
	}
}
</pre>
</div>


<i>If you have any question or suggests about this project or any other project please do not hesitate to contract me.<i/>

