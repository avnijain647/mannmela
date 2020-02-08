$(document).on('scroll', function() {

  var pixels = $(document).scrollTop()
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  var windowWidth = $(window).width()
var windowWidth = $(window).width()
// var heightvoid = 100+'vh'
  var difference = documentHeight - windowHeight
  var percentage = 100 * pixels / difference
  var bardiff =  windowWidth - 200
var barpercentage = percentage * bardiff/100



if (pixels <= 180){

       $('.headerimg').css('width', 300 - pixels/3)
       $('.headerimg').css('height', 260 - pixels/3)
           $('.headerimg').removeClass('size')
           $('.headerimg').css('top', 100 )
           $('.headerimg').css('right', 200)

    }
    else{
      $('.headerimg').css('width', 100 )
      $('.headerimg').css('height', 85)
      $('.headerimg').css('top', 25 )
      $('.headerimg').css('right', 25)
    }

 })








      var doc = document.getElementById("#ticker");
      var color = ["#8AFE4F", "#FF40FF", "#FFF", "#37A7FF", "#CA83F6", "#F5A623"];
      // "#F4E243"
      var textArray = [
          'Bungee',
              'Bungee Outline',
              'Bungee Shade',
                'Bungee Hairline',
                'Bungee Inline'

      ];
      var i = 0;
      function change() {
        // doc.style.fontfamily = textArray[i];
        $(".greenblock").css("font-family", textArray[i]);
        i++;
        // $(".greenblock").css("color", color[i]);
        // i++;
        if(i > textArray.length - 1) {
          i = 0;
        }
      }
      setInterval(change, 150);

    var speed = 50;
       var first = 0;
       var pause = 900;
    function tick() {
        first = $('ul#ticker li:first').html();
        $('ul#ticker li:first').animate({
            height: 0
        }, speed).hide('medium', function() {
            $(this).remove();

            last = '<li>' + first + '</li>';
            $('ul#ticker').append(last);

        });
    }

    $('ul#ticker').click(function() {

        tick();
        return false;
    });
    setInterval(tick, pause);
