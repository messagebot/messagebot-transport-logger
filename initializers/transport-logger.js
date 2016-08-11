module.exports = {
  loadPriority:  1000,

  initialize: function(api, next){
    var transport = {
      name: 'logger',
      description: 'for testing messages by sending them to a log file',

      requiredDataKeys: {
        person: ['firstName', 'lastName']
      },

      campaignVariables: [
        'logPrefix',
        'logLevel',
      ],

      deliver: function(payload, person, callback){
        var message = '';
        message += '[' + payload.logPrefix + ' | to ' + person.data.data.firstName + ' ' + person.data.data.firstName + '] ';
        message += payload.body;

        api.log(message, payload.logLevel);
        return callback();
      }
    }

    api.transports.push(transport);

    next();
  },
};
