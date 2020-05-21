const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_QUESTIONER_ALPHA_BOT_TOKEN,
  signingSecret: process.env.SLACK_QUESTIONER_ALPHA_SIGNING_SECRET
});

app.message('hello', async ({message, say}) => {
    await say(`Hey there <@${message.user}>!`);
    console.log('message acceppted');
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();