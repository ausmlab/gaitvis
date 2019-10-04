# Gait Visualization

Pedestrian movements are measured and visualized in this dashboard.
Starting from an offline process of [detecting](https://github.com/CMU-Perceptual-Computing-Lab/openpose) and tracking poses, data is created.

The dashboard consists of a footstep chart, a speed chart and a video player.

- The footstep chart shows a top down representation of the image. A dashed circle is a person, which contains two solid circles representing the left and right foot placement. The walking path is shown by a thin line.
- The speed chart shows the walking speed of a person.
- The video player shows a frame with detected pedestrian poses. 

## Controls
Drag the slider to navigate the video frames to show an image frame and its relavant pedestrian data.
Alternatively, use the left and right arrow to move the slider. 

Check the heatmap option to enable the heatmap in the footstep chart.
