const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: '',
    name: 'OTO'
});

const channel = "general";

// Start Handler
bot.on('start', () => {
    const params =
        {
            icon_emoji: ':smiley:'
        };

    bot.postMessageToChannel(
        'general',
        'Hi Jack! Anything I can do for you?',
        params
    );
});

// Error Handler
bot.on('error', err => console.log(err));

// Message Handler
bot.on('message', data => {
    if (data.type !== 'message') {
        return;
    }
    console.log(data);
    handleMessage(data.text);
    recommendCourses(data.text);
});

// Respons to Data
function handleMessage(message) {
    if (message.includes("want to learn")) {
        bot.postMessageToChannel(
            channel,
            "No worries, I can assure you that this feeling is common as a beginner, lets figure it out together, shall we?"
        ).then(function () {
            bot.postMessageToChannel(
                channel,
                "First, let me get to know you more =)"
            ).then(bot.postMessageToChannel(
                channel,
                "Do you have any experience in coding?"
            ));
        });


    } else if (message.includes("yes, i have")) {
        bot.postMessageToChannel(
            channel,
            "How long have you been learning to code?"
        );
    } else if (message.includes("1 week")) {
        bot.postMessageToChannel(
            channel,
            "Do you have a preference in coding language?"
        ).then(function(){
            bot.postMessageToChannel(
                channel,
                "[1] Python: It is the hottest language for data scientist."
            ).then(function (){
                bot.postMessageToChannel(
                    channel,
                    "[2] Javascript. It is a must know language for web development."
                ).then(function (){
                    bot.postMessageToChannel(
                        channel,
                        "[3] C++. It is one of the fundamental languages."
                    ).then(function (){
                        bot.postMessageToChannel(channel, "Others. Please specify");
                    })
                });
            })
        });

    } else if (message.includes("which language will be useful")) {
        bot.postMessageToChannel(channel, "I see. What do you want to achieve?");
    } else if (message.includes("sales data")) {
        bot.postMessageToChannel(
            channel,
            "If that is the case, I recommend you to learn SQL. It's quick and easy to use."
        );
    } else if (message.includes("python is more powerful")) {
        bot.postMessageToChannel(
            channel,
            "Sure, I can recommend you both Python and SQL courses."
        );
        bot.postMessageToChannel(
            channel,
            "Do you want to take a brief coding test to know your skill level?"
        );
    } else if (message.includes("i already know")) {
        bot.postMessageToChannel(
            channel,
            "Are you a beginner/intermediate/advanced user?"
        );
    } else if (message.includes("i am a beginner")) {
        bot.postMessageToChannel(
            channel,
            "Do you want to know more about offline learning?"
        );
    } else if (message.includes("sounds great to me")) {
        bot.postMessageToChannel(
            channel,
            "Now I know more about your coding skills, Jack. Let's get started!"
        ).then(function () {
            bot.postMessageToChannel(channel, "I have compiled a list of Python courses that fits your needs and background. Check it out!").then(function (){
                bot.postMessageToChannel(channel, " ", recommendation_1);
            });
        })
    }
}

function recommendCourses(message){
    if(message.includes("thanks for that")){
        bot.postMessageToChannel(channel, "You're welcome! so which one do you prefer?")
    } else if (message.includes("i think the second one")){
        bot.postMessageToChannel(channel, "No problem! You can decide later, Jack. Actually I have more information and websites can offer you! Maybe let you know more about Python.").then(
            function (){
                bot.postMessageToChannel(channel, " ", recommendation_2);
            }
        ).then(function (){
                bot.postMessageToChannel(channel, "I've also found several offline events happening today that might interest you").then(function(){
                    bot.postMessageToChannel(channel, " ", params_offline_activities);
                });
        })
    } else if(message.includes("registration form")){
        bot.postMessageToChannel(channel, "You can find the forms in the event's website").then(function(){
            bot.postMessageToChannel(channel, "However, some of them require tickets and registration fee. May I offer you free access events?");
        })
    } else if(message.includes("no, i got what i need")){
        bot.postMessageToChannel(channel, "Alright! anything else I can do for you?")
    } else if(message.includes("i got everything i need")){
        bot.postMessageToChannel(channel, "Okay! See you later")
    }
}

const params_offline_activities ={
    "blocks": [
        {
            "type": "context",
            "elements": [
                {
                    "type": "plain_text",
                    "text": "2 Offline events found ",
                    "emoji": true
                }
            ]
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*<fakeLink.toUserProfiles.com|Python Workshop>*\nTuesday, January 21 4:00-4:30pm\nBuilding 2 - Havarti Cheese (3)\n 50 quotas left"
            },
            "accessory": {
                "type": "image",
                "image_url": "https://api.slack.com/img/blocks/bkb_template_images/notifications.png",
                "alt_text": "calendar thumbnail"
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*<fakeLink.toUserProfiles.com|Python Seminar>*\nTuesday, January 21 12:00-3:30pm\nCyberport\n 50 quotas left"
            },
            "accessory": {
                "type": "image",
                "image_url": "https://api.slack.com/img/blocks/bkb_template_images/notifications.png",
                "alt_text": "calendar thumbnail"
            }
        },
        {
            "type": "divider"
        }
    ]
};
// const params_course_recommandation = {
//     "blocks": [
//         {
//             "type": "section",
//             "fields": [
//                 {
//                     "type": "plain_text",
//                     "text": "Great! currently I think u can try....",
//                     "emoji": true
//                 },
//
//             ]
//         },
//         {
//             "type": "section",
//             "text": {
//                 "type": "mrkdwn",
//                 "text": "*<fakeLink.toHotelPage.com|Omni Royal Orleans Hotel>*\n★★★★★\n$419 per night\nRated: 8.8 - Excellent"
//             },
//             "accessory": {
//                 "type": "image",
//                 "image_url": "https://api.slack.com/img/blocks/bkb_template_images/tripAgent_3.png",
//                 "alt_text": "Omni Royal Orleans Hotel thumbnail"
//             }
//         },
//         {
//             "type": "divider"
//         },
//         {
//             "type": "context",
//             "elements": [
//                 {
//                     "type": "image",
//                     "image_url": "https://api.slack.com/img/blocks/bkb_template_images/tripAgentLocationMarker.png",
//                     "alt_text": "Location Pin Icon"
//                 },
//                 {
//                     "type": "plain_text",
//                     "emoji": true,
//                     "text": "Location: French Quarter"
//                 }
//             ]
//         },
//         {
//             "type": "section",
//             "text": {
//                 "type": "mrkdwn",
//                 "text": "*<fakeLink.toHotelPage.com|The Ritz-Carlton New Orleans>*\n★★★★★\n$340 per night\nRated: 9.1 - Excellent"
//             },
//             "accessory": {
//                 "type": "image",
//                 "image_url": "https://api.slack.com/img/blocks/bkb_template_images/tripAgent_2.png",
//                 "alt_text": "Ritz-Carlton New Orleans thumbnail"
//             }
//         },
//         {
//             "type": "divider"
//         },
//         {
//             "type": "context",
//             "elements": [
//                 {
//                     "type": "image",
//                     "image_url": "https://api.slack.com/img/blocks/bkb_template_images/tripAgentLocationMarker.png",
//                     "alt_text": "Location Pin Icon"
//                 },
//                 {
//                     "type": "plain_text",
//                     "emoji": true,
//                     "text": "Location: Central Business District"
//                 }
//             ]
//         },
//         {
//             "type": "section",
//             "text": {
//                 "type": "mrkdwn",
//                 "text": "*<fakeLink.toHotelPage.com|Windsor Court Hotel>*\n★★★★★\n$340 per night\nRated: 9.4 - Excellent"
//             },
//             "accessory": {
//                 "type": "image",
//                 "image_url": "https://api.slack.com/img/blocks/bkb_template_images/tripAgent_1.png",
//                 "alt_text": "Windsor Court Hotel thumbnail"
//             }
//         },
//         {
//             "type": "divider"
//         },
//         {
//             "type": "section",
//             "text": {
//                 "type": "mrkdwn",
//                 "text": "We found *205 Hotels* in New Orleans, LA from *12/14 to 12/17*"
//             },
//             "accessory": {
//                 "type": "overflow",
//                 "options": [
//                     {
//                         "text": {
//                             "type": "plain_text",
//                             "emoji": true,
//                             "text": "Option One"
//                         },
//                         "value": "value-0"
//                     },
//                     {
//                         "text": {
//                             "type": "plain_text",
//                             "emoji": true,
//                             "text": "Option Two"
//                         },
//                         "value": "value-1"
//                     },
//                     {
//                         "text": {
//                             "type": "plain_text",
//                             "emoji": true,
//                             "text": "Option Three"
//                         },
//                         "value": "value-2"
//                     },
//                     {
//                         "text": {
//                             "type": "plain_text",
//                             "emoji": true,
//                             "text": "Option Four"
//                         },
//                         "value": "value-3"
//                     }
//                 ]
//             }
//         }
//     ]
// };
// const params_questionaire = {
//     "blocks": [
//         {
//             "type": "section",
//             "text": {
//                 "type": "mrkdwn",
//                 "text": "Do you have prior experience on coding?"
//             },
//             "accessory": {
//                 "type": "radio_buttons",
//                 "options": [
//                     {
//                         "text": {
//                             "type": "plain_text",
//                             "text": "none",
//                             "emoji": true
//                         },
//                         "value": "value-0"
//                     },
//                     {
//                         "text": {
//                             "type": "plain_text",
//                             "text": "a little bit",
//                             "emoji": true
//                         },
//                         "value": "value-1"
//                     },
//                     {
//                         "text": {
//                             "type": "plain_text",
//                             "text": "moderate",
//                             "emoji": true
//                         },
//                         "value": "value-2"
//                     }
//                 ],
//                 "action_id": "radio_buttons-action"
//             }
//         }
//     ]
// };
const recommendation_1 = {
    "blocks": [
        {
            "type": "divider"
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Python 101*\n:star::star::star::star: 1528 reviews\n This first tutorial introduces you to the basic concepts and features of Python 3. After reading that tutorial, you will be able to read and write basic Python programs, and explore Python in depth on your own. "
            },
            "accessory": {
                "type": "image",
                "image_url": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                "alt_text": "alt text for image"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Python and Data Analytics for Dummies*\n:star::star::star: 1638 reviews\n The second one is a quick start on basic data analysis programming by using python. If you want to start solving the problem as soon as possible, of course, you can choose this tutorial."
            },
            "accessory": {
                "type": "image",
                "image_url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                "alt_text": "alt text for image"
            }
        },
        {
            "type": "divider"
        }
    ]
};
const recommendation_2 ={
    "blocks": [
        {
            "type": "context",
            "elements": [
                {
                    "type": "plain_text",
                    "text": "Python related websites",
                    "emoji": true
                }
            ]
        },
        {
            "type": "divider"
        },

        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Learn Python*\nhttps://www.learnpython.org/\n Free interactive Python tutorial. "
            },
            "accessory": {
                "type": "image",
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Python_for_iOS_App_Icon.png",
                "alt_text": "alt text for image"
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*About Python*\nhttps://https://www.python.org/about/\n Python is powerful... and fast, plays well with others, runs everywhere, is friendly & easy to learn, is Open. "
            },
            "accessory": {
                "type": "image",
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Python_for_iOS_App_Icon.png",
                "alt_text": "alt text for image"
            }
        },
        {
            "type": "divider"
        }
    ]
};
// Tell a Chuck Norris Joke
function chuckJoke() {
    axios.get('http://api.icndb.com/jokes/random').then(res => {
        const joke = res.data.value.joke;

        const params = {
            icon_emoji: ':laughing:'
        };

        bot.postMessageToChannel('general', `Chuck Norris: ${joke}`, params);
    });
}

// Tell a Yo Mama Joke
function yoMamaJoke() {
    axios.get('http://api.yomomma.info').then(res => {
        const joke = res.data.joke;

        const params = {
            icon_emoji: ':laughing:'
        };

        bot.postMessageToChannel('general', `Yo Mama: ${joke}`, params);
    });
}

// Tell a Random Joke
function randomJoke() {
    const rand = Math.floor(Math.random() * 2) + 1;
    if (rand === 1) {
        chuckJoke();
    } else if (rand === 2) {
        yoMamaJoke();
    }
}

// Show Help Text
function runHelp() {
    const params = {
        icon_emoji: ':question:'
    };

    bot.postMessageToChannel(
        'general',
        `Type @jokebot with either 'chucknorris', 'yomama' or 'random' to get a joke`,
        params
    );
}
