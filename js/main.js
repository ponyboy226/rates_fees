$(document).ready(function() {


    var show = $('#3TTotal').val()

    $("#btnSubmit").click(function(){
        var qual_d = parseFloat($('#qual_d').val())
        var mqual_d = parseFloat($('#mqual_d').val())
        var nqual_d = parseFloat($('#nqual_d').val())
        var Sswipe = parseFloat($('#Sswipe').val())
        var Skey = parseFloat($('#Skey').val())
        var Pswipe = parseFloat($('#Pswipe').val())
        var Pkey = parseFloat($('#Pkey').val())
        var show = parseFloat($('#3TTotal'))

        var alpha = ($('#qual_d').val() * ($('#qual').val() / 100)) + ($('#mqual_d').val() * ($('#mqual').val()) / 100) + ($('#nqual_d').val() * ($('#nqual').val() / 100));
        var beta = (qual_d * (Sswipe/100)) + ((mqual_d + nqual_d) * (Skey / 100));
        var gamma = qual_d * (Pswipe/100)) + ((mqual_d + nqual_d) * (Pkey / 100))).toFixed(2);

        $(".radio").click(function(){
            if($(this).hasClass("radio1")){
                console.log("radio1")
            }
            if($(this).hasClass("radio2")){
                console.log("radio2")
            }
            if($(this).hasClass("radio3")){
                console.log("radio3")
            }
            if($(this).hasClass("radio4")){
                console.log("radio4")
            }
            if($(this).hasClass("radio5")){
                console.log("radio5")
            }

        }

        $('#3TTotal').val(alpha*n);
        $('#STotal').val(beta*n);
        $('#PTotal').val(gamma*n);

});
