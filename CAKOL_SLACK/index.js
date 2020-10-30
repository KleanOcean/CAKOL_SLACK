const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
  token: 'xoxb-1448243822455-1475862205921-5CKSV8Q1kSXzWnEUyW0ulkiG',
  name: 'gody'
});

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
});

// Respons to Data
function handleMessage(message) {
  if (message.includes('coding')) {
    bot.postMessageToChannel('general', "No worries, I can assure you that this feeling is common as a beginner, lets figure it out together, shall we?");
    bot.postMessageToChannel('general', "first thing first, let me get to know you more =)");}
    else if (message.includes('sure')) {
      bot.postMessageToChannel('general', " ",params_questionaire);}
   else if (message.includes('done')) {
    bot.postMessageToChannel('general', "Great! currently I think u can try....", params_course_recommandation);}
    else if (message.includes('wow')) {
      bot.postMessageToChannel('general', "Actually we have more to offer for you Jack! We have come across some offline activities around you, do you want to take a look?");}
      else if (message.includes('of course')) {
        bot.postMessageToChannel('general', "", params_offline_activities);}
     else if (message.includes('help')) {
    runHelp();
  }
}
const params_offline_activities = {
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*<fakelink.ToMoreTimes.com|Show more times>*"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Tomorrow - 6-6:30pm*\nSome people aren't available: @iris, ~@zelda~"
			},
			"accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"emoji": true,
					"text": "Choose"
				},
				"value": "click_me_123"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Propose a new time:*"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "image",
					"image_url": "https://api.slack.com/img/blocks/bkb_template_images/notificationsWarningIcon.png",
					"alt_text": "notifications warning icon"
				},
				{
					"type": "mrkdwn",
					"text": "*Conflicts with Team Huddle: 4:15-4:30pm*"
				}
			]
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*<fakeLink.toUserProfiles.com|Iris / Zelda 1-1>*\nTuesday, January 21 4:00-4:30pm\nBuilding 2 - Havarti Cheese (3)\n2 guests"
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
				"type": "plain_text",
				"emoji": true,
				"text": "Looks like you have a scheduling conflict with this event:"
			}
		}
	]
};
const params_course_recommandation = {
	"blocks": [
		{
			"type": "section",
			"fields": [
				{
					"type": "plain_text",
					"text": "Great! currently I think u can try....",
					"emoji": true
				},
				
			]
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*<fakeLink.toHotelPage.com|Omni Royal Orleans Hotel>*\n★★★★★\n$419 per night\nRated: 8.8 - Excellent"
			},
			"accessory": {
				"type": "image",
				"image_url": "https://api.slack.com/img/blocks/bkb_template_images/tripAgent_3.png",
				"alt_text": "Omni Royal Orleans Hotel thumbnail"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "image",
					"image_url": "https://api.slack.com/img/blocks/bkb_template_images/tripAgentLocationMarker.png",
					"alt_text": "Location Pin Icon"
				},
				{
					"type": "plain_text",
					"emoji": true,
					"text": "Location: French Quarter"
				}
			]
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*<fakeLink.toHotelPage.com|The Ritz-Carlton New Orleans>*\n★★★★★\n$340 per night\nRated: 9.1 - Excellent"
			},
			"accessory": {
				"type": "image",
				"image_url": "https://api.slack.com/img/blocks/bkb_template_images/tripAgent_2.png",
				"alt_text": "Ritz-Carlton New Orleans thumbnail"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "image",
					"image_url": "https://api.slack.com/img/blocks/bkb_template_images/tripAgentLocationMarker.png",
					"alt_text": "Location Pin Icon"
				},
				{
					"type": "plain_text",
					"emoji": true,
					"text": "Location: Central Business District"
				}
			]
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*<fakeLink.toHotelPage.com|Windsor Court Hotel>*\n★★★★★\n$340 per night\nRated: 9.4 - Excellent"
			},
			"accessory": {
				"type": "image",
				"image_url": "https://api.slack.com/img/blocks/bkb_template_images/tripAgent_1.png",
				"alt_text": "Windsor Court Hotel thumbnail"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "We found *205 Hotels* in New Orleans, LA from *12/14 to 12/17*"
			},
			"accessory": {
				"type": "overflow",
				"options": [
					{
						"text": {
							"type": "plain_text",
							"emoji": true,
							"text": "Option One"
						},
						"value": "value-0"
					},
					{
						"text": {
							"type": "plain_text",
							"emoji": true,
							"text": "Option Two"
						},
						"value": "value-1"
					},
					{
						"text": {
							"type": "plain_text",
							"emoji": true,
							"text": "Option Three"
						},
						"value": "value-2"
					},
					{
						"text": {
							"type": "plain_text",
							"emoji": true,
							"text": "Option Four"
						},
						"value": "value-3"
					}
				]
			}
		}
	]
} ;
const params_questionaire = {
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Do you have prior experience on coding?"
			},
			"accessory": {
				"type": "radio_buttons",
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "none",
							"emoji": true
						},
						"value": "value-0"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "a little bit",
							"emoji": true
						},
						"value": "value-1"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "moderate",
							"emoji": true
						},
						"value": "value-2"
					}
				],
				"action_id": "radio_buttons-action"
			}
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
