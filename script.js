

document.querySelector('#demo').onclick = function () {


    var elements = document.querySelectorAll('input');


    for (var i = 0; i < elements.length; i++) {

        elements[i].select();

    };


};



/**
 *      jQuery equivalent
 *
 *      $('#demo').click(function () {
 *          $('input').select();
 *      });
 *
 */
