# Assignment 2- Web Comic (Fausto, Jiho, Kashyapa, Kyrie)

# Project Description
## Main idea of the project
The idea of making a comic which loops came from trying to make a comic that can be interacted. We first thought of a comic that has different story lines depending on the user’s choice in between panels. But we noticed that this would lead us to having too many endings, and we didn’t want that. Also, if there were many endings, we couldn’t think of how to smoothly lead the users to redo the comic. So we came up with the idea where the story could smoothly restart - a time loop. We would end up killing the main character unless the user chooses the correct ones(its like it has answers). This would lead the users to retry the comic until they end up with the happy ending. Here, we wanted to have more interaction between the comic and the users and decided to have bad endings no matter what the users choose for the story. Instead we would have a little easter egg-like concept (in our case clicking on the serial killer’s gun) to see the happy ending. The whole discussion and process of coming up with our idea was fun because we were able to see the comic in both the programmer and user’s point of view.

![mainpage]
## Story
The main character (referred as ‘YOU’ or whoever is watching the web comic) is watching news in his living room. He sees that there is a serial killer roaming the city, and thinks that he has watched the news somewhere, but cannot think when and where. He decides to go watch a movie to stop thinking. Here he decides to whether take his girlfriend to the theater or not. (which does not affect the ending). When both/ or only the main character arrives at the movie, he hears a gunshot and turns around to see what happened. It was the serial killer he saw on the news a few moments ago. The serial killer shoots at the main character because the main character did not behave as the serial killer wanted him to. Here, he has a choice to either dodge the bullet or take it which again will not affect the ending of the story. However this time, the main character has a third choice of action. Taking away his gun (for the users the gun image will shine). If the main character manages to take the gun, the serial killer is arrested and will have a happy ending. Otherwise, the he will be sent back to the first plot, at his living room, watching the same news. 
![bullet]

## Team members 

- Kyrie Park -> Design
- Jiho Choi -> Design
- Fausto Fang -> Website coding
- Kashyapa Jayasekera -> Website coding
# Process
## Problems
### Merging gifs with pngs and or gifs
Since plots have more than one panels, we had to combine two image/gifs. The problem was that gifs was a series of different images, while an image is just one. Also, when combining two different gifs, the gifs had different number of frames, which was harder to figure out how to put them in a single file.

![merge]




### State management:
In order to properly display the story based on the decisions the user takes, it was necessary to establish a system that would change the images displayed according to what the user chooses.
The story information is hosted inside an array, with every single panel being one separate object. In here, we host the path of the image, the caption text and the options we have, which are hosted in another array. As arrays are made to work in numerical/index order, it was complicated to imagine a system to properly manage the story flow. Why is this? The main reason behind the problem is the fact that every decision we make increases the possible scenarios to twice the previous number. With just 2 decisions, we have already 4 endings, in addition of the last "true" ending. Therefore, we need a reliable way to jump between scenarios.
![options]
### 

## Solutions
### Merging gifs with pngs and or gifs
Via websearching, we noticed that the timeline function in adobe photoshop ables us to photoshop gifs. It allowed us put the images on each frame of tthe gif, so that as a result the gif would move but the image would just stay. For adding gifs on gifs, because the number of frames are different, we had to approach differently. From plot 4, the serial killer's eyes shacking scene is consisted of 3 frames, but the bullet moving scene is 72 frames. Fortunately we could fit the eyes shacking frames exactly 24 times while he bullet scene loops one time. So what we did was to loop the eye scene 24 times alongside the bullet scene (which run one loop). As a result, we could get a gif file with two gifs moving.
### State Management
The solution we implemented was to utilize a separate object list that would link the decision to an ID, which represents the ID of the next panel (basically, where the button should lead to).

![state]

Every button has a caption, and this caption has an ID attached to it that we will pass to the function that updates the panels.
### 

# Reflection/Evaluation
## Final thoughts and improvements
In this project, we consider that we succesfully managed to offer an experience similar to what we had in plan. The idea of making a "choose your own story" type of webcomic that would have no proper ending achievable with the normal options was something that we really wanted to feature, because it fits the theme of the story. The concept of "breaking the loop" by using unconventional methods is something we are very proud of and would like to experiment further in the future. Regarding possible improvements, we could have experimented with more complex ways to offer the "easter egg" good ending, but the current method is something that we consider both hidden enough so that it's not obvious but at the same time simple enough so that readers are able to find it easily. In general terms, we are very proud of the project and we have learned a lot working on it. Hopefully we will apply these learnings in further projects, and maybe we will be able to explore more deeply these types of interactive media.



[state]: docImg/storyManagement.png
[mainpage]: docImg/main.png
[bullet]: docImg/bullet.png
[options]: docImg/options.png
[merge]: media/panel4_bullet.gif