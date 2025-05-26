/*global $, jQuery, switchStylestyle, google*/

$('#StyleSwitcher .switcher-btn').click(function () {

    'use strict';

    $('#StyleSwitcher').toggleClass('open');

    return false;
});

$('.color-switch').click(function () {

    'use strict';

    var title = jQuery(this).attr('title');
    jQuery('#color-switch').attr('href', 'css/' + title + '.css');

    return false;

});

$('.style').click(function () {

    'use strict';

    jQuery('.navbar-brand img').attr('src', 'images/logo.png');
    jQuery('.slide-logo img').attr('src', 'images/slider-logo.png');

});

$('.style-2').click(function () {

    'use strict';

    jQuery('.navbar-brand img').attr('src', 'images/extra-logo/logo-2.png');
    jQuery('.slide-logo img').attr('src', 'images/extra-logo/slider-logo-2.png');

});
$('.style-3').click(function () {

    'use strict';

    jQuery('.navbar-brand img').attr('src', 'images/extra-logo/logo-3.png');
    jQuery('.slide-logo img').attr('src', 'images/extra-logo/slider-logo-3.png');

});
$('.style-4').click(function () {

    'use strict';

    jQuery('.navbar-brand img').attr('src', 'images/extra-logo/logo-4.png');
    jQuery('.slide-logo img').attr('src', 'images/extra-logo/slider-logo-4.png');

});
$('.style-5').click(function () {

    'use strict';

    jQuery('.navbar-brand img').attr('src', 'images/extra-logo/logo-5.png');
    jQuery('.slide-logo img').attr('src', 'images/extra-logo/slider-logo-5.png');

});
$('.style-6').click(function () {

    'use strict';

    jQuery('.navbar-brand img').attr('src', 'images/extra-logo/logo-6.png');
    jQuery('.slide-logo img').attr('src', 'images/extra-logo/slider-logo-6.png');

});
$('.style-7').click(function () {

    'use strict';

    jQuery('.navbar-brand img').attr('src', 'images/extra-logo/logo-7.png');
    jQuery('.slide-logo img').attr('src', 'images/extra-logo/slider-logo-7.png');

});
$('.style-8').click(function () {

    'use strict';

    jQuery('.navbar-brand img').attr('src', 'images/extra-logo/logo-8.png');
    jQuery('.slide-logo img').attr('src', 'images/extra-logo/slider-logo-8.png');

});
$('.style-9').click(function () {

    'use strict';

    jQuery('.navbar-brand img').attr('src', 'images/extra-logo/logo-9.png');
    jQuery('.slide-logo img').attr('src', 'images/extra-logo/slider-logo-9.png');

});
$('.style-10').click(function () {

    'use strict';

    jQuery('.navbar-brand img').attr('src', 'images/extra-logo/logo-10.png');
    jQuery('.slide-logo img').attr('src', 'images/extra-logo/slider-logo-10.png');

});
$('.style-11').click(function () {

    'use strict';

    jQuery('.navbar-brand img').attr('src', 'images/extra-logo/logo-11.png');
    jQuery('.slide-logo img').attr('src', 'images/extra-logo/slider-logo-11.png');

});