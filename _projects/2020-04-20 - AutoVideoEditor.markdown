---
layout: project
title:  "Auto Video Editor"
date:   2020-04-20 
author: Ian Hudson

summary: Automated video editor.

Tags:
- C++
- - ffmpeg
- Personal

categories:
- project,

Platform:
- PC

EngineLanguage: C++

Project:
- Individual project
- Personal

thumb: autoVideoEditor/thumbnail.PNG

GithubLink:
- https://github.com/I-Hudson/Video-Editor-Auto

TitleImgs:
- 

TitleVideo:
- https://www.youtube.com/embed/5SL95prES7M

---

# About 


## Auto Video Editor
Auto Video Editor is a small application with the purpose of removing frames which have a big difference between them such as when the camera is being panned around quickly. 

## Challenges
The main challenge which came with this project was using a new 3rd party library, ffmpeg. This was because I have never used this library, or any image/video processing library with C++ before. It was an enjoyable challenge to overcome. I learnt about the library by reading through the example code which was provided which contained all the relevant steps I wanted for this project.

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#frameCompare">Frame compare</button>
<div id="frameCompare" class="collapse">
<h2>Frame compare</h2>
<p>
<pre class="brush: c++">
for (int y = 0; y < m_decCtx->height; y += prec)
	{
		for (int x = 0; x < rgbWidth; x += precWidth)
		{
			uint8_t r = tempFrame->data[0][y * tempFrame->linesize[0] + x];
			uint8_t g = tempFrame->data[0][y * tempFrame->linesize[0] + x + 1];
			uint8_t b = tempFrame->data[0][y * tempFrame->linesize[0] + x + 2];

			rD += r / (double)255;
			gD += g / (double)255;
			bD += b / (double)255;
		}
	}

    // Normalise the red, green and blue values of the whole frame by the number of samplers taken.
	rD /= numSamples;
	gD /= numSamples;
	bD /= numSamples;

	if (a_compare)
	{
        // Get the difference between this frame and last frame.
		double rDiff = abs(rD - m_oldR);
		double gDiff = abs(gD - m_oldG);
		double bDiff = abs(bD - m_oldB);
		double diff = (rDiff + gDiff + bDiff) / 3;

		if (diff < m_minDiff)
		{
			m_minDiff = diff;
		}
		else if (diff > m_maxDiff)
		{
			m_maxDiff = diff;
		}

		m_avgDiff += diff;

		if (diff > m_frameCompare)
		{
			result = true;
		}
	}
</pre>
Shown above is a code snippet of how two frames are compared. This will return a single double value which is then checked to see if it meets a threshold. If the different value is greater than the threshold then the frame is discarded. 

</p>
</div>

<!--
<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#improvments">Future / Improvements</button>
<div id="improvments" class="collapse">
<h2>Future / Improvements</h2>
<p>
</p>
</div>
-->
<i>If you have any question or suggests about this project or any other project please do not hesitate to contract me. This is an area in which I would like to learn more in.<i/>

