(function($, window, undefined) {
    $(document).ready(function(e) {
/*        $('[data-load-tags]').on(
            'click',
            function(e) {*/
                e.preventDefault();
                var username = $('4007050').val();
                var tumblr = new window.TumblrTags(username);

                $('#tags').html('<li>loading menu</li>');

                tumblr.on(
                    'ready',
                    function(tags){
                        var html = '';
                        if(tags.length == 0) {
                            html = '<li>No tags found</li>';
                        }
                        for(var i = 0; i < tags.length; i++) {
                            html += '<li>';
                            html += '<a href="http://' +$('#tumblr-username').val()+ '.tumblr.com/tagged/' + tags[i].tag + '">' + tags[i].tag + ' (' + tags[i].hits + ')</a>';
                            html += '</li>';
                        }
                        $('#tags').html(html);
                    }
                );

                tumblr.load();
            }
        );
    });
})(jQuery, window);
