$(document).ready(function(){


  $("#1").click(function(){
    $("#hidden1").css("display", "inline")
  })

    //solution question 1:
                              $('#submitBtn').click(function(){
                              var answer = $('#textInput').val();
                              console.log(answer);
                              $(`<h3>${answer}</h3>`).insertAfter("#submitBtn");
                              })

  $("#2").click(function(){
    $("#hidden2").css("display", "inline")
  })

      //solution question 2:
                              $('.chex input').click(function(){
                              $('h2').toggleClass('hidden');
                              })



  $("#3").click(function(){
    $("#hidden3").css("display", "inline")
  })

  //solution question 3:
                              $('.table-striped').append('<tr><td>Montezuma</td><td>20</td><td>Barfing</td></tr>');

  $("#4").click(function(){
    $("#hidden4").css("display", "inline")
  })

  //solution question 4:


                            $(".table-striped tbody").children().each(function(){
                              var hungerLevel = $(this).children("td:nth-child(3)");
                              if(hungerLevel.text()==="Content"){
                                $(hungerLevel).css('color', 'green');
                              }else if(hungerLevel.text()==="Barfing"){
                                $(hungerLevel).css('color', 'purple')
                              }else{
                                $(hungerLevel).css('color', 'red');
                              }
                            })

//-------------------part 2 Needs to be finished, how to target correct data and return? What is the conditional statement?
//what exactly is that data structure array that gets returned?


  $("#5").click(function(){
    $("#hidden5").css("display", "inline")
  })
//solution question 5:
                          $(".btn-warning").click(function(){
                            console.log('hi');
                          $(".table-striped tbody").children().each(function () {
                          var weight = $(this).children("td:nth-child(2)");
                          if ($(weight).text() < 10) {
                          $(this).hide();
                          }
                          })
                          });



  $("#6").click(function(){
    $("#hidden6").css("display", "inline")
  })

  //solution question #6


                        $(".btn-success").click(function(){
                        $("tbody").children().each(function(){
                        console.log($(this).children("td:nth-child(1)"));
                        var name = $(this).children("td:nth-child(1)");
                        $(name).text($(name).text().toUpperCase());
                      })

                      })




  $("#7").click(function(){
    $("#hidden7").css("display", "inline")
  })
  //solution question #7
                      $(".btn-primary").click(function(){
                      $(".table-striped").toggle()
                      })


  $("#8").click(function(){
    $("#hidden8").css("display", "inline")
  })
  //solution question #8
                    $('#disableUs input').prop('disabled', true);
                    $('#disableUs a').click(function(){
                      return false;
                    })

  $("#9").click(function(){
    $("#hidden9").css("display", "inline")
  })
 //solution question #9
                   $(".dropdown").change(function () {

                  var value = $(this).find("option:selected").text();
                  $("<h3>" + value + "</h3>").insertAfter(".dropdown");
                  });

  $("#10").click(function(){
    $("#hidden10").css("display", "inline")
  })
 //solution question #10 & 11

                     $("<input type='button' class='btn btn-secondary' value='add'/>").insertBefore("#alertList");
                       $("<input type='button' class='btn btn-danger' value='remove'/>").insertBefore("#alertList");

                       var count = 0;
                       $("#alertList").children().each(function () {
                           count += 1;
                           update();
                       });

                       $("#alert10").click(function () {
                           alert(count);
                       });

                       $(".btn-secondary").click(function () {
                           $("#alertList").append("<li>New Item</li>");
                           count += 1;
                           update();
                       });

                       $(".btn-danger").click(function () {
                           $("#alertList").children('li:last-child').remove();
                           count -= 1;
                           update();
                       });

  $("#11").click(function(){
    $("#hidden11").css("display", "inline")
  })
  $("#12").click(function(){
    $("#hidden12").css("display", "inline")
  })

  function update() {
        $("#displayList12").text("The count is: " + count);
    }




});
