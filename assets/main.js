$(function($) {

$ $.ajax({
    url: 'https://www.codeschool.com/users/mknijnenberg.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
    }
  });

})(jQuery);
