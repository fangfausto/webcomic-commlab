const arrow = document.getElementById("arrow-svg");

window.addEventListener("scroll", () => {
    arrow.style.animation = "none"; 
});





// Define the initial story state
let storyState = 0;

// Define the story content
const storyContent = [
    {
        text: "You wake up confused with your phone ringing. The girl you have been talking to sent you a text and there is a new movie you want to watch.",
        options: ["Invite her to a movie date", "Go to the cinema alone"],
        id:"start",
        image: "media/panel1.gif"
    },
    {
        text: "You texted the girl. She agrees to go on the date.",
        options: ["Jump in front of the bullet", "Dodge the bullet"],
        id:"bulletGirl"
    },  
    {
        text: "You went alone to the cinema.",
        options: ["Jump in front of the bullet", "Dodge the bullet"],
        id:"bulletBoy"
    },
    
];


const storyOptions = [
    {
        choose: "Invite her to a movie date",
        result: "bulletGirl"
    },
    {
        choose: "Go to the cinema alone",
        result: "bulletBoy"
    }
]


// Function to update the story based on the user's choice
function updateStory(choice) {
    const story = storyContent[storyState];
    const optionIndex = choice - 1;
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
        optionsContainer.innerHTML = "";
    }
    imageContainer.innerHTML = `<img src="${story.image}"> </img>`;
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
            if (bottom_of_window > bottom_of_object - 200) {

                $(this).animate({ 'opacity': '1' }, 3000);

            }

        });

    });

});
// Initialize the story

