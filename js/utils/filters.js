'use strict';

/*const filterByDistrict = (stations,query) => {
}*/

/*
$(function(){
	$("#search-input").keyup(function(){
		var texto = $(this).val();
		$("#ulItens li").css("display", "block");
		$("#ulItens li").each(function(){
			if($(this).text().indexOf(texto) < 0)
			   $(this).css("display", "none");
		});
	});
});*/
$(document).ready(function () {
(function ($) {

            $('#search-input').keyup(function () {

                var rex = new RegExp($(this).val(), 'i');
                $('.container-station .stations').hide();
                $('.container-station .stations').filter(function () {
                    return rex.test($(this).text());
                }).show();

            })

        }(jQuery));

});
