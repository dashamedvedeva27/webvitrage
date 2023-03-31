$(document).ready(function(){
  $(".logotip").click(function() {
    $(".logotip").addClass("none");
    $(".screen2").removeClass("none");

  })
})

$(document).ready(function(){
  $(".window").click(function() {
    $(".logotip").addClass("none");
    $(".screen2").addClass("none");
    $(".screen3").removeClass("none");
  })
})

  $( function() {
    $( "#draggable1" ).draggable({ snap: ".ui-widget-header", snapMode: "inner" });
    $( "#draggable2" ).draggable({ snap: ".ui-widget-header", snapMode: "inner" });
    $( "#draggable3" ).draggable({ snap: ".ui-widget-header", snapMode: "inner" });
    $( "#draggable4" ).draggable({ snap: ".ui-widget-header", snapMode: "inner" });
    $( "#draggable5" ).draggable({ snap: ".ui-widget-header", snapMode: "inner" });
    $( "#draggable6" ).draggable({ snap: ".ui-widget-header", snapMode: "inner" });
     } );

      const arr = ["#EE4629", "#364CA2" , "#FC931F" , "#058264"];

      function getRandomNumber () {
       return Math.floor(Math.random() * arr.length);
      }

      $(document).ready(function(){
        $("path").click(function(){
         const randIndex = getRandomNumber()
         $(this).attr("fill", (arr[randIndex]))
       })
       return arr["randIndex"]
      });

      $(document).ready(function(){
        $(".arrow").click(function() {
          $(".window1").removeClass("none");
          $(".prokrutka").removeClass("none");

        })
      })

      $(document).ready(function(){
        $(".prokrutka").click(function() {
          $(".logotip").removeClass("none");
          $(".screen2").addClass("none");
          $(".screen3").addClass("none")
          $(".window1").addClass("none");
          $(".prokrutka").addClass("none");

        })
      })
