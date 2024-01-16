(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "jack", "Paula", "Laura", "jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();