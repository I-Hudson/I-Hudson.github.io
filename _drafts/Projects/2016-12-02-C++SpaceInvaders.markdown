---
layout: project
title:  "C++ Space Invaders"
date:   2016-12-04 
author: Ian Hudson

summary: A* and Dijkstra algorithm in Unity.

categories:
skills:
- C++
img: c++spaceInvaders/c++spaceInvaders_img.png
thumb: c++spaceInvaders/c++spaceInvaders_img.png
carousel:
- c++spaceInvaders/c++spaceInvaders_img.png
tagged: C++, Game Development
---
__Update - 14/05/2017__

When I first completed this project, I had always wanted sound in it. At the time, I did not have any knowledge of what to do. Didn't even know of any sound engines that I could implement within C++. That’s when my lecture told me of FMOD. FMOD is used industry wide and has been used in multiple projects such as BioShock2, Crysis, Hitman Absolution and many more a list can be found [here](https://en.wikipedia.org/wiki/FMOD "FMOD").

FMOD can also be incorporated in to a C++ project. Over the last few weeks I have been researching and have implemented FMOD into my Space Invaders game. Short sound clips are played when you fire a bullet, get hit by a bullet and more. I hope to not only increase the sound library within my Space Invaders but also use the skills and knowledge I have gain from this to incorporate FMOD into more of my C++ projects.

FMOD can be foud [Here](http://www.fmod.com/ "FMOD")

---

Here is a finished version of a C++ remake of the classic game Space Invaders. This project was made for my first assignment in programming and mathematics for games module. 

I faced many challenges when doing this project as this as the first one I had done. Throughout the project I learnt all the basic knowledge like variables, pointers/references, data storage types, inheritance and more including theory. Like the big O notation.
The game includes multiply features including player movement, enemy movement, player shooting, enemy shooting and high scores being written to and read from a file.

<!--There is a download link for the .exe at the bottom of the page.-->


![alt-text](/img/SpaceInvaders/SpaceInvaders.png "Space Invaders")

Here is a C++ snippet of code used in the Space Invaders remake in C++ to make random alive enemies fire back at the player. The C++ code is using integers and Booleans for the variables, and includes custom made functions as well as use of rand().
Rand is used for generating a random number. This could be improved however has rand() is not truly random and is pseudo random.

I am also calling custom functions though pointers which have been stored in an array.
m.

More information about Rand can be found here: [Rand()](http://www.cplusplus.com/reference/cstdlib/rand/ "Cplusplus")

			
Code:

<pre class="brush: c++">
//If "m_bEnemyBullet_1" is true
//execute the code below
if (m_bEnemyBullet_1 == true)
{
	//"i" is an integer which was created at the start of the 
	//loop. The for loop will loop a certain number of times 
	//depending on what maxEnemies is set to in this instance 
	//maxEnemies is set to 50

	//Assigning the integer in 'm_iEnemy1Store' to 'm_iEnemy1'
	m_iEnemy1Store = m_iEnemy1;

	//"m_iEnemy1Store" is a random number from 0 to 50 this is 
	//created at the top of the game loop
	
	//Check if 1 is equal to m_iEnemy1Store
	//if it is then execute the cide within the if statment
	if (i == m_iEnemy1Store)
	{
		//Set m_bEnemyBullet_1 to false. This is because
		//the bullet has been fired
		m_bEnemyBullet_1 = false;

		//Create two temp floats to store the x and y 
		//position of the enemy which has been chosen
		//to fire a bullet
		float m_fTempX = 0;
		float m_fTempY = 0;
		
		//Set the floats above to the enemies position
		m_pEnemy[i]->GetPosition(m_fTempX, m_fTempY);

		//If the enemy is on screen then set m_pEnemybullet 
		//at their position
		
		//The if statement is using the number 800 as 
		//that is how high the screen is
		if (m_fTempY < 800)		
		{
			//Calling the function SetPosition and 
			//pass though 'm_fTempX' and 'm_fTempY'
			//to set the position of the bullet
			m_pEnemyBullet->SetPosition(m_fTempX, 
						    m_fTempY);
			
			//Set the velocity of the bullet
			//The velocity is a negative number as 
			//the bullet is traveling down
			m_pEnemyBullet->SetVelocity(0, -400);
		}
	}
}
</pre>

<script type="text/javascript">
     SyntaxHighlighter.all()
</script>

<!--[SpaceInvaders.zip](/downloads/SpaceInvadersRelease.zip)-->