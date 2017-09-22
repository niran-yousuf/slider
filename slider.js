(function($) {
    var sliderUl = $('div.slider').css('overflow', 'hidden').children('ul'),
        imgs = sliderUl.find('img'),
        imgWidth = imgs[0].width, // for default with of all images 
        imgsLen = imgs.length, // total images
        current = 1,
        totalImgsWidth = imgsLen * imgWidth;
    
    $('#slider-nav').show().find('button').on('click', function() {
        var direction = $(this).data('dir'),
            loc = imgWidth; // 600px or image width
        
        // update current valu
        /*if(direction === 'next') {
            current += 1;
        } else {
            current -= 1;
        }*/
        // or
        // (test) ? true : falsr
        ( direction === 'next') ? ++current : --current;
        
        // if first image
        if (current === 0) {
            current = imgsLen;
            loc = totalImgsWidth - imgWidth;
            direction = 'next';
        } else if (current - 1 === imgsLen) { // are we at end? should be reset?
            current = 1;
            loc = 0;
        }
        
        transition(sliderUl, loc, direction);
    });
    
    function transition( container, loc, direction ) {
        var unit; // -= or +=
        if (direction && loc !== 0) {
            unit = (direction === 'next') ? '-=' : '+=';
        }
        container.animate({
            'margin-left': unit ? (unit + loc) : loc
        });
    }
    
})(jQuery);