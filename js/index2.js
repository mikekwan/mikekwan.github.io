// javascript functions

function playSound1()
{
	document.getElementById('badgersound-1').play();
}

function playSound2()
{
	document.getElementById('badgersound-2').play();
}

function playSound3()
{
	document.getElementById('badgersound-3').play();
}

/* hamburger


$('hamburger').click(navMenuClicked);

function navMenuClicked(evt) {
    evt.preventDefault();
    console.log('hamburgerClicked')
    if ($('#mobileNav').hasClass('active')) {
        $('#mobileNav').slideUp('slow').removeClass('active');
    } 

    else {
        $('#mobileNav').slideDown('slow').removeClass('active');
}
}

*/

//the counter!
//thanks to Matt Huggins
//https://github.com/mhuggins/jquery-countTo

(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);

jQuery(function($) {
        $('#maulings-counter').countTo({
            from: 0,
            to: 2500,
            speed: 39920000,
            refreshInterval: 2,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });

jQuery(function($) {
        $('#honey-counter').countTo({
            from: 0,
            to: 2500,
            speed: 920000,
            refreshInterval: 2,
            onUpdate: null,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });

jQuery(function($) {
        $('#snakes-counter').countTo({
            from: 0,
            to: 2500,
            speed: 50000,
            refreshInterval: 1,
            onUpdate: null,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });

jQuery(function($) {
        $('#babies-counter').countTo({
            from: 0,
            to: 2500,
            speed: 920000,
            refreshInterval: 1,
            onUpdate: null,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });
