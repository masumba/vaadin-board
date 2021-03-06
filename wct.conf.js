var envIndex = process.argv.indexOf('--env') + 1;
var env = envIndex ? process.argv[envIndex] : undefined;

module.exports = {
  registerHooks: function(context) {
    var saucelabsPlatforms = [
      'macOS 10.12/ipad@10.3',
      'macOS 10.12/ipad@11.2',
      'Windows 10/microsoftedge@16',
      'Windows 10/internet explorer@11',
      'macOS 10.13/safari@11.1',
      'Windows 10/firefox@59',
      'Windows 10/chrome@65'
    ];

    var cronPlatforms = [
      'Android/chrome',
      'Windows 10/chrome@65',
      'Windows 10/firefox@59'
    ];

    if (env === 'saucelabs') {
      context.options.plugins.sauce.browsers = saucelabsPlatforms;
    } else if (env === 'saucelabs-cron') {
      context.options.plugins.sauce.browsers = cronPlatforms;
    }
  }
};
