angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
    
  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Salary',
    lastText: '500$',
    face: 'http://i.istockimg.com/file_thumbview_approve/39038102/3/stock-illustration-39038102-us-dollar-green-web-icon.jpg'
  }, {
    id: 1,
    name: 'Lottery',
    lastText: '100$',
    face: 'http://i.istockimg.com/file_thumbview_approve/39038102/3/stock-illustration-39038102-us-dollar-green-web-icon.jpg'
  }, {
    id: 2,
    name: 'Cash Rewards',
    lastText: '10$',
    face: 'http://i.istockimg.com/file_thumbview_approve/39038102/3/stock-illustration-39038102-us-dollar-green-web-icon.jpg'
  }, {
    id: 3,
    name: 'Casino',
    lastText: '50$',
    face: 'http://i.istockimg.com/file_thumbview_approve/39038102/3/stock-illustration-39038102-us-dollar-green-web-icon.jpg'
  }, {
    id: 4,
    name: 'Bonus',
    lastText: '30$',
    face: 'http://i.istockimg.com/file_thumbview_approve/39038102/3/stock-illustration-39038102-us-dollar-green-web-icon.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
