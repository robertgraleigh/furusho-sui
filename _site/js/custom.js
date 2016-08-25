/**
 * Created by karasek on 8/25/16.
 */

$(document).ready(function() {



  // Semantic UI
  // ===========
  $('.ui.accordion').accordion();
  console.log("Hello world");
  $('.test.modal').modal('attach events', '.test.card', 'show');

});
