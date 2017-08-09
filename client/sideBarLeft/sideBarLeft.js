/**
 * Created by blinux on 09/07/17.
 */

var $root = $('html, body');

$(document).on('click', 'a', function(event)
{
    var $this = $(this);
    if($this.hasClass("buttonSideNav"))
    {
        event.preventDefault();
        $root.animate(
            {
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
    }
});
