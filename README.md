# Assignment 2- Web Comic (Fausto, Jiho, Kashyapa, Kyrie)

## MAIN IDEA
The idea of making a comic which loops came from trying to make a comic that can be interacted. We first thought of a comic that has different story lines depending on the user’s choice in between panels. But we noticed that this would lead us to having too many endings, and we didn’t want that. Also, if there were many endings, we couldn’t think of how to smoothly lead the users to redo the comic. So we came up with the idea where the story could smoothly restart - a time loop. We would end up killing the main character unless the user chooses the correct ones(its like it has answers). This would lead the users to retry the comic until they end up with the happy ending. Here, we wanted to have more interaction between the comic and the users and decided to have bad endings no matter what the users choose for the story. Instead we would have a little easter egg-like concept (in our case clicking on the serial killer’s gun) to see the happy ending. The whole discussion and process of coming up with our idea was fun because we were able to see the comic in both the programmer and user’s point of view.

## Story
The main character (referred as ‘YOU’ or whoever is watching the web comic) is watching news in his living room. He sees that there is a serial killer roaming the city, and thinks that he has watched the news somewhere, but cannot think when and where. He decides to go watch a movie to stop thinking. Here he decides to whether take his girlfriend to the theater or not. (which does not affect the ending). When both/ or only the main character arrives at the movie, he hears a gunshot and turns around to see what happened. It was the serial killer he saw on the news a few moments ago. The serial killer shoots at the main character because the main character did not behave as the serial killer wanted him to. Here, he has a choice to either dodge the bullet or take it which again will not affect the ending of the story. However this time, the main character has a third choice of action. Taking away his gun (for the users the gun image will shine). If the main character manages to take the gun, the serial killer is arrested and will have a happy ending. Otherwise, the he will be sent back to the first plot, at his living room, watching the same news. 

## Problems
### Merging gifs with pngs and or gifs
Since plots have more than one panels, we had tto combine two image/gifs. The problem was thatt gifs was a series of different images, while an image is just one. Also, when combining two differnt gifs, the gifs had different number of frames, which was  harder to figure ou how to put them in a single file.
### 
### 

## Solutions
### Merging gifs with pngs and or gifs
Via websearching, we noticed that the timeline function in adobe photoshop ables us to photoshop gifs. It allowed us put the images on each frame of tthe gif, so that as a result the gif would move but the image would just stay. For adding gifs on gifs, because the number of frames are different, we had to approach differently. From plot 4, the serial killer's eyes shacking scene is consisted of 3 frames, but the bullet moving scene is 72 frames. Fortunately we could fit the eyes shacking frames exactly 24 times while he bullet scene loops one time. So what we did was to loop the eye scene 24 times alongside the bullet scene (which run one loop). As a result, we could get a gif file with two gifs moving.
### 
### 

