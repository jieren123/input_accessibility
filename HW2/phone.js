$(document).ready(function() {
    $('.tab').click(function() {
      $('.tab').removeClass('active');
      $(this).addClass('active');
      });
      

    $("#tab1").show();
    $("#tab2").show();
    $("#tab3").show();
    $("#tab4").show();

    $("#tab1").click(function() {
        $(".dialer").show();
        $(".contact-list").hide();
        $(".add-contact").hide();
        $(".test-gestures").hide();

    });

    $("#tab2").click(function() {
        $(".dialer").hide();
        $(".contact-list").show();
        $(".add-contact").hide();
        $(".test-gestures").hide();

    });

    $("#tab3").click(function() {
        $(".dialer").hide();
        $(".contact-list").hide();
        $(".add-contact").show();
        $(".test-gestures").hide();

    });

    $("#tab4").click(function() {
        $(".dialer").hide();
        $(".add-contact").hide();
        $(".contact-list").hide();
        $(".test-gestures").show();
    });
});



$(document).ready(function() {
      var number = "";
      
      $('.key').click(function() {
        var key = $(this).data('key');
        number += key;
        $('#phone-number').val(number);
      });
      
      $('#clear').click(function() {
        number = "";
        $('#phone-number').val(number);
      });
      
      $('#dial').click(function() {
        // Implement your dialing logic here
        alert("Dialing: " + number);
      });
      

      $('#add-contact-btn').click(function() {
        var name = $('#contact-name').val();
        var email = $('#contact-email').val();
        var phone = $('#contact-phone').val();
        

      if (name && email && phone) {
          var newContact = $('<div class="contact"><h3>' + name + '</h3><p>Phone: ' + phone + '</p><p>Email: ' + email + '</p></div>');
          $('.contact-list').append(newContact);
          $('#contact-name').val('');
          $('#contact-email').val('');
          $('#contact-phone').val('');
        }
      });
      
      $('#clear-contact-btn').click(function() {
        $('#contact-name').val('');
        $('#contact-email').val('');
        $('#contact-phone').val('');
      });
});

// $(function() {
//     var downX = 0;

//     $("#gesture_area").mousedown(function(event) {
//         downX = event.pageX;
//         $("#gesture_output").val("mouse down");
//     });

//     $("#gesture_area").mouseup(function(event) {
//         var upX = event.pageX;

//         if (upX < downX) {
//             $("#gesture_output").val("swipe left");
//         } else if (upX > downX) {
//             $("#gesture_output").val("swipe right");
//         } else if (upX == downX) {
//             $("#gesture_output").val("mouse up");
//         }
//     });
// });

$(function() {
    var downX = 0;
    var mouseDetected = false;

    $("#gesture_area").mousemove(function(event) {
        if (!mouseDetected) {
            $("#gesture_output").val("ready");
            mouseDetected = true;
        }
    });

    $("#gesture_area").mousedown(function(event) {
        downX = event.pageX;
        $("#gesture_output").val("mouse down");
    });

    $("#gesture_area").mouseup(function(event) {
        var upX = event.pageX;

        if (upX < downX) {
            $("#gesture_output").val("swipe left");
        } else if (upX > downX) {
            $("#gesture_output").val("swipe right");
        } else if (upX == downX) {
            $("#gesture_output").val("mouse up");
        }
    });
});



