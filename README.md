# AppSignal - Rocket.chat integration
Enable notification webhooks of [AppSignal](https://appsignal.com/) to show nicely in your [Rocket.Chat](https://rocket.chat/) instance.

## Setup
1. Go to your admin page
2. Go to Integrations
3. Create a New Integration and select Incoming WebHook
4. Select the channel were you will receive the alerts (you can override in messages)
5. Set Script Enabled to True
6. Paste the contents of `script.js` inside the Script field
7. Save the integration
8. Use the generated WebHook URL to POST messages to Rocket.Chat

## More information
* Rocket.Chat integrations - https://rocket.chat/docs/administrator-guides/integrations/
* AppSignal Webhooks - https://docs.appsignal.com/application/integrations/webhooks.html
