const arrow = document.getElementById("arrow-svg");

window.addEventListener("scroll", () => {
    arrow.style.animation = "none"; 
});





// Define the initial story state
let storyState = 0;
let looper = false;

// Define the story content
const storyContent = [
    {
        text: '"You wake up confused with your phone ringing. "',
        options: ["Pick up your phone"],
        id:"start",
        image: "media/panel1.gif"
    },
    {
        text: '"You receive a text message. It`s the girl you have been talking to and there is a new movie you want to watch. This is the perfect chance to ask her out."',
        options: ["Invite her to a movie date", "Go to the cinema alone"],
        id:"phoneText",
        image: "img/panel2_merged.png"
    },  
    {
        text: "You texted the girl. She agrees to go on the date.",
        options: ["Watch the movie with her"],
        id:"cinemaGirl",
        image: "img/panel3_girlfriend.png"
    },  
    {
        text: "You went alone to the cinema.",
        options: ["Watch the movie"],
        id:"cinemaBoy",
        image: "img/panel3_alone.png"
    },
    {
        text: "After watching the movie together, you both decide to come out of the cinema. Outside, you meet a robber that threatens to shoot.",
        options: ["Duck and dodge the bullet","Stay still"],
        id:"shooting1",
        image: "media/panel4.gif",
        bullet: "media/panel4_bullet.gif",
        gun: "img/Panel4_gun.png"
    },
    {
        text: "After watching the movie by yourself, you decide to come out of the cinema. Outside, you meet a robber that threatens to shoot.",
        options: ["Dodge the bullet","Protect the girl"],
        id:"shooting2",
        image: "media/panel4.gif",
        gun: "img/Panel4_gun.png",
        bullet: "media/panel4_bullet.gif"
    },
    {
        text: "The girl dies",
        options: ["??????"],
        id:"dodge",
        image: "img/badEnding1.jpg",
        ending: true
    },
    {
        text: "The guy dies",
        options: ["??????"],
        id:"take",
        image: "img/badEnding2.jpg",
        ending: true
    },
    {
        text: "END",
        options:[],
        id:"trEnding",
        image: "",
    }
    
];


const storyOptions = [
    {
        choose: "Pick up your phone",
        result: "phoneText"
    },
    {
        choose: "Invite her to a movie date",
        result: "cinemaGirl"
    },
    {
        choose: "Go to the cinema alone",
        result: "cinemaBoy"
    },
    {
        choose: "Watch the movie with her",
        result: "shooting1"
    },
    {
        choose: "Watch the movie",
        result: "shooting2"
    },
    {
        choose: "Duck and dodge the bullet",
        result: "dodge"
    },
    {
        choose: "Stay still",
        result: "take"
    },
    {
        choose: "??????",
        result: "start"
    }
]


// Function to update the story based on the user's choice
function updateStory(choice) {
    const story = storyContent[storyState];
    const optionIndex = choice - 1;
    document.querySelector(".story-container").style.opacity = "0";
    if(story.ending===true){
        looper = true;
        document.getElementById("loopText").style.display = "block";
    }
    else{
        looper = false;
        document.getElementById("loopText").style.display = "none";
    }
    

    if (optionIndex >= 0 && optionIndex < story.options.length) {
        const nextOption = story.options[optionIndex];
        const nextId = storyOptions[storyOptions.findIndex(item => item.choose === nextOption)].result;
        console.log(nextId);
        const nextStoryState = storyContent.findIndex(item => item.id === nextId);
        if (nextStoryState !== -1) {
            storyState = nextStoryState;
            updateStoryView();
        }
    }
    document.getElementById("arrow").scrollIntoView({ behavior: "smooth"});
}

// Function to update the story view
function updateStoryView() {
    const storyContainer = document.querySelector(".story");
    const optionsContainer = document.querySelector(".options");
    const imageContainer = document.querySelector(".panel");
    const story = storyContent[storyState];
    
    storyContainer.innerHTML = `<p>${story.text}</p>`;

    optionsContainer.innerHTML = ""; // Clear previous options

    if (story.options.length > 0) {
        story.options.forEach((option, index) => {
            optionsContainer.innerHTML += `<button id="option${index + 1}" onclick="updateStory(${index + 1})">${option}</button>`;
        });
    } else {
        optionsContainer.innerHTML = ``;
    }
    imageContainer.innerHTML = `<img src="${story.image}"> </img>`;
    if(story.gun != undefined){
        imageContainer.innerHTML = `<div id="imgSpecial" style="width:80vw;"> <img src="${story.image}" style="width:20vw"> </img><img src="${story.gun}" style="width:20vw" id="imgGun" onclick="endLoop()"> </img><img src="${story.bullet}" style="width:20vw"> </img></div>`;
    }
    storyContainer.animate({ 'opacity': '1' }, 3000);
}

function endLoop(){
    storyState = 8;
    updateStoryView();
}



$(document).ready(function() {
    updateStoryView();
    /* Every time the window is scrolled */
    $(window).scroll(function () {
        /* Check the location of each art */
        $('.story-container').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object-800) {

                $(this).animate({ 'opacity': '1' }, 3000);

            }

        });

    });

});
// Initialize the story

