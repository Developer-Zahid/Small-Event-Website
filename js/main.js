(function($) {
    "use strict";

    function toggleSticky() {
        if ($('.pxp-sp-agent-section').length > 0) {
            var windowWidth = $(window).width();
            var footerHeight = $('.pxp-footer').height() + 360;
            var topSpacing = 182;

            if (windowWidth > 991) {
                $('.pxp-sp-agent-section').sticky({
                    topSpacing: topSpacing, 
                    bottomSpacing: footerHeight
                });
            } else {
                $('.pxp-sp-agent-section').unstick();
            }
        }
    }

    function checkNav() {
        var windowWidth = $(window).width();

        if (windowWidth > 991) {
            if ($('.pxp-header-nav-trigger').hasClass('pxp-active')) {
                $('.pxp-header-nav-trigger').removeClass('pxp-active');
                $('.pxp-logo').removeClass('pxp-logo-nav');
                $('.pxp-header').removeClass('pxp-mobile');
            }

            $('.pxp-nav').show();
            $('.pxp-nav .pxp-nav-sub').hide();
        } else {
            if (!$('.pxp-header-nav-trigger').hasClass('pxp-active')) {
                $('.pxp-nav').hide();
            }

            $('.pxp-nav .pxp-nav-sub').show();
        }
    }

    function windowResizeHandler() {
        toggleSticky();
        checkNav();
    }

    windowResizeHandler();

    $(window).resize(function() {
        windowResizeHandler();
    });

    function onContentScroll() {
        if (window.pageYOffset > 93) {
            $('.pxp-header').addClass('pxp-is-sticky');
        } else {
            $('.pxp-header').removeClass('pxp-is-sticky');
        }
    }

    window.onscroll = function() {
        onContentScroll();
    };

    var animateHTML = function() {
        var elems;
        var windowHeight;

        function init() {
            elems = document.querySelectorAll('.pxp-animate-in');
            windowHeight = window.innerHeight;
            addEventHandlers();
            checkPosition();
        }

        function addEventHandlers() {
            window.addEventListener('scroll', checkPosition);
            window.addEventListener('resize', init);
        }

        function checkPosition() {
            for (var i = 0; i < elems.length; i++) {
                var positionFromTop = elems[i].getBoundingClientRect().top;

                if (positionFromTop - windowHeight <= 0) {
                    elems[i].classList.add('pxp-in');
                }
            }
        }

        return {
            init: init
        };
    };

    if ($('.pxp-hero-has-animation').length > 0) {
        setTimeout(function() {
            $('.pxp-hero-has-animation').addClass('pxp-hero-animate');
        }, 100);
    }

    animateHTML().init();

    if ($('.pxp-props-carousel-right-stage').length > 0) {
        $('.pxp-props-carousel-right-stage').owlCarousel({
            'nav': true,
            'dots': false,
            'margin': 30,
            'responsive': {
                0: {
                    'items': 1
                },
                600: {
                    'items': 2,
                    'stagePadding': 30
                },
                900: {
                    'items': 3,
                    'stagePadding': 60
                },
                1200: {
                    'items': 3,
                    'stagePadding': 120
                },
                1600: {
                    'items': 4,
                    'stagePadding': 120
                }
            },
            'navText': [`<div class="pxp-props-carousel-left-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828" class="pxp-arrow-1">
                                <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                    <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`,
                        `<div class="pxp-props-carousel-right-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                    <line id="Line_2" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`],
            'checkVisible': false,
            'smartSpeed': 600
        });
    }

    if ($('.pxp-props-carousel-right-stage-1').length > 0) {
        $('.pxp-props-carousel-right-stage-1').owlCarousel({
            'nav': true,
            'dots': false,
            'margin': 30,
            'responsive': {
                0: {
                    'items': 1
                },
                600: {
                    'items': 2,
                },
                900: {
                    'items': 2,
                    'stagePadding': 30
                },
                1200: {
                    'items': 3,
                    'stagePadding': 30
                },
                1600: {
                    'items': 3,
                    'stagePadding': 120
                }
            },
            'navText': [`<div class="pxp-props-carousel-left-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                    <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`,
                        `<div class="pxp-props-carousel-right-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                    <line id="Line_2" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`],
            'checkVisible': false,
            'smartSpeed': 600
        });
    }

    if ($('.pxp-services-c-stage').length > 0) {
        $('.pxp-services-c-stage').owlCarousel({
            'nav': true,
            'dots': false,
            'margin': 30,
            'responsive': {
                0: {
                    'items': 1
                },
                600: {
                    'items': 2,
                },
                900: {
                    'items': 2,
                },
                1200: {
                    'items': 3,
                },
            },
            'navText': [`<svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                            <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>`,
                        `<svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                            <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                <line id="Line_2" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_3" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_4" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>`],
            'checkVisible': false,
            'smartSpeed': 600
        });
    }

    if ($('.pxp-testim-1-stage').length > 0) {
        $('.pxp-testim-1-stage').owlCarousel({
            'nav': true,
            'dots': false,
            'margin': 30,
            'responsive': {
                0: {
                    'items': 1
                },
                600: {
                    'items': 2,
                },
                900: {
                    'items': 2,
                },
                1200: {
                    'items': 3,
                },
            },
            'navText': [`<svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                            <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>`,
                        `<svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                            <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                <line id="Line_2" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_3" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_4" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>`],
            'checkVisible': false,
            'smartSpeed': 600
        });
    }

    var heroPropCarouselItems = 1;

    $('.pxp-hero-props-carousel-1 .carousel-item').each(function(index, element) {
        if (index == 0) {
            $('.pxp-hero-props-carousel-1-prices').addClass('pxp-price-active pxp-first-time');
        }

        $('.pxp-hero-props-carousel-1-prices .pxp-carousel-ticker-counter').append('<span>0' + heroPropCarouselItems + '</span>');

        heroPropCarouselItems += 1;
    });

    $('.pxp-hero-props-carousel-1-prices .pxp-carousel-ticker-total').append('<span>0' + $('.pxp-hero-props-carousel-1 .carousel-item').length + '</span>');

    $('.pxp-hero-props-carousel-1').on('slide.bs.carousel', function(carousel) {
        $('.pxp-hero-props-carousel-1-prices').removeClass('pxp-first-time');
        $('.pxp-hero-props-carousel-1-prices').carousel(carousel.to);
    });

    $('.pxp-hero-props-carousel-1').on('slid.bs.carousel', function(carousel) {
        var tickerPos = (carousel.to) * 13;

        $('.pxp-hero-props-carousel-1-prices .pxp-carousel-ticker-counter > span').css('transform', 'translateY(-' + tickerPos + 'px)');
    });

    $('.pxp-hero-props-carousel-1 .pxp-carousel-control-next').click(function(e) { 
        $('.pxp-hero-props-carousel-1').carousel('next');
    });
    $('.pxp-hero-props-carousel-1 .pxp-carousel-control-prev').click(function(e) { 
        $('.pxp-hero-props-carousel-1').carousel('prev');
    });

    $('.pxp-hero-props-carousel-2-right').on('slide.bs.carousel', function(carousel) {
        if(carousel.direction == 'left') {
            $('.pxp-hero-props-carousel-2-left').carousel('next');
        } else {
            $('.pxp-hero-props-carousel-2-left').carousel('prev');
        }
    });

    $('.pxp-hero-props-carousel-2 .pxp-carousel-control-next').click(function(e) { 
        $('.pxp-hero-props-carousel-2-right').carousel('next');
    });
    $('.pxp-hero-props-carousel-2 .pxp-carousel-control-prev').click(function(e) { 
        $('.pxp-hero-props-carousel-2-right').carousel('prev');
    });

    var heroPropCarousel2Items = 1;

    $('.pxp-hero-props-carousel-2-right .carousel-item').each(function(index, element) {
        $('.pxp-hero-props-carousel-2 .pxp-carousel-ticker-counter').append('<span>0' + heroPropCarousel2Items + '</span>');

        heroPropCarousel2Items += 1;
    });

    $('.pxp-hero-props-carousel-2 .pxp-carousel-ticker-total').append('<span>0' + $('.pxp-hero-props-carousel-2-right .carousel-item').length + '</span>');

    $('.pxp-hero-props-carousel-2-right').on('slid.bs.carousel', function(carousel) {
        var tickerPos = (carousel.to) * 13;

        $('.pxp-hero-props-carousel-2 .pxp-carousel-ticker-counter > span').css('transform', 'translateY(-' + tickerPos + 'px)');
    });

    $('.pxp-sp-more').click(function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        $(this).prev('p').find('.pxp-dots').toggle();
        $(this).prev('p').find('.pxp-dots-more').slideToggle();
        $(this).toggleClass('pxp-sp-less');
    });

    if ($('#pxp-calculator-chart').length > 0) {
        var calculatorChartElem = document.getElementById('pxp-calculator-chart').getContext('2d');
        var calculatorChart = new Chart(calculatorChartElem, {
            type: 'doughnut',
            data: {
                labels: ['Principal and Interest', 'Property Taxes', 'HOA Dues'],
                datasets: [{
                    data: [0, 0, 0],
                    backgroundColor: ['rgba(0, 112, 201, 1)', 'rgba(75, 154, 217, 1)', 'rgba(153, 198, 233, 1)'],
                    borderWidth: [2, 2, 2],
                    hoverBackgroundColor: ['rgba(0, 112, 201, 1)', 'rgba(75, 154, 217, 1)', 'rgba(153, 198, 233, 1)'],
                    hoverBorderWidth: [2, 2, 2],
                    hoverBorderColor: ['rgba(0, 112, 201, 0.10)', 'rgba(75, 154, 217, 0.10)', 'rgba(153, 198, 233, 0.10)']
                }],
            },
            options: {
                responsive: true,
                cutoutPercentage: 90,
                tooltips: {
                    enabled: false
                },
                legend: {
                    display: false,
                }
            }
        });
    }

    function updateCalculatorInfo() {
        var term           = $('#pxp-calculator-form-term').val();
        var interest       = $('#pxp-calculator-form-interest').val();
        var price          = $('#pxp-calculator-form-price').val();
        var downPrice      = $('#pxp-calculator-form-down-price').val();
        var downPercentage = $('#pxp-calculator-form-down-percentage').val();
        var taxes          = $('#pxp-calculator-form-property-taxes').val();
        var dues           = $('#pxp-calculator-form-hoa-dues').val();

        var termValue = term;
        var interestValue = interest.replace('%', '');
        var priceValue = price.replace(/\D+/g, '');
        var downPriceValue = downPrice;
        var downPercentageValue = downPercentage.replace('%', '');
        var taxesValue = taxes.replace(/\D+/g, '');
        var duesValue = dues.replace(/\D+/g, '');

        var dpa   = parseFloat(downPercentageValue) * parseFloat(priceValue) / 100;
        var ma    = parseFloat(priceValue) - dpa;
        var r     = parseFloat(interestValue) / 12 / 100;
        var n     = parseFloat(termValue) * 12;
        var tmp   = Math.round(ma * (r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1));
        var total = tmp + parseFloat(taxesValue) + parseFloat(duesValue);

        $('#pxp-calculator-data-pi').text('$' + tmp.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        $('#pxp-calculator-data-pt').text(taxes);
        $('#pxp-calculator-data-hd').text(dues);
        $('.pxp-calculator-chart-result-sum').text('$' + total.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','));

        calculatorChart.data.datasets[0].data = [tmp, taxesValue, duesValue];
        calculatorChart.update();
    }

    if ($('.pxp-calculator-form').length > 0) {
        updateCalculatorInfo();
    }

    $('.pxp-form-control-transform').focus(function() {
        var self_ = $(this);
        var inputValue = self_.val();
        var dataType = self_.attr('data-type');
        var newInputValue;

        if (dataType == 'currency') {
            newInputValue = inputValue.replace(/\D+/g, '');
        } else if (dataType == 'percent') {
            newInputValue = inputValue.replace('%', '');
        }

        self_.val(newInputValue);
        self_.attr('type', 'number');

        if (dataType == 'percent') {
            self_.attr('min', '0');
            self_.attr('max', '100');
        }
    });

    $('.pxp-form-control-transform').blur(function() {
        var self_ = $(this);
        var inputValue = self_.val();
        var dataType = self_.attr('data-type');
        var newInputValue;

        if (dataType == 'currency') {
            newInputValue = '$' + inputValue.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        } else if (dataType == 'percent') {
            newInputValue = inputValue.replace(/\,/g, '.') + '%';
        }

        self_.attr('type', 'text');

        if (dataType == 'percent') {
            self_.removeAttr('min');
            self_.removeAttr('max');
        }

        self_.val(newInputValue);
    });

    $('#pxp-calculator-form-down-price').on('keyup change', function() {
        var price     = $('#pxp-calculator-form-price').val();
        var downPrice = $(this).val();

        var priceValue = price.replace(/\D+/g, '');
        var downPercentage = (parseFloat(downPrice) * 100 / parseFloat(priceValue)).toFixed(2);
        var newDownPercentage = downPercentage.toString() + '%';

        $('#pxp-calculator-form-down-percentage').val(newDownPercentage);

        updateCalculatorInfo();
    });

    $('#pxp-calculator-form-down-percentage').on('keyup change', function() {
        var price          = $('#pxp-calculator-form-price').val();
        var downPercentage = $(this).val();

        var priceValue = price.replace(/\D+/g, '');
        var downPrice = Math.round(parseFloat(downPercentage) * parseFloat(priceValue) / 100);
        var newDownPrice = '$' + downPrice.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        $('#pxp-calculator-form-down-price').val(newDownPrice);

        updateCalculatorInfo();
    });

    $('#pxp-calculator-form-price').on('keyup change', function() {
        var price          = $(this).val();
        var downPercentage = $('#pxp-calculator-form-down-percentage').val();

        var priceValue = price.replace(/\D+/g, '');
        var downPrice = Math.round(parseFloat(downPercentage) * parseFloat(priceValue) / 100);
        var newDownPrice = '$' + downPrice.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        $('#pxp-calculator-form-down-price').val(newDownPrice);

        updateCalculatorInfo();
    });

    $('#pxp-calculator-form-interest').on('keyup change', function() {
        updateCalculatorInfo();
    });

    $('#pxp-calculator-form-term').on('change', function() {
        updateCalculatorInfo();
    });

    $('.pxp-blog-posts-carousel-1 .pxp-carousel-control-next').click(function(e) { 
        $('.pxp-blog-posts-carousel-1-img').carousel('next');
    });
    $('.pxp-blog-posts-carousel-1 .pxp-carousel-control-prev').click(function(e) { 
        $('.pxp-blog-posts-carousel-1-img').carousel('prev');
    });

    $('.pxp-blog-posts-carousel-1-img').on('slide.bs.carousel', function(carousel) {
        if(carousel.direction == 'left') {
            $('.pxp-blog-posts-carousel-1-caption').carousel('next');
        } else {
            $('.pxp-blog-posts-carousel-1-caption').carousel('prev');
        }
    });

    // Animate nav sub menu
    $('.pxp-nav > li').hover(function() {
        var subMenu = $(this).children('ul:first');

        if (subMenu.length > 0 && !$('.pxp-header').hasClass('pxp-mobile')) {
            var subMenuWidth  = subMenu.width();
            var menuItemLeft  = $(this).offset().left;
            var windowWidth   = $(window).width();
            var menuItemRight = windowWidth - menuItemLeft;

            if (menuItemRight < subMenuWidth) {
                subMenu.css({
                    'right': '0',
                    'left': 'auto'
                });
            }

            subMenu.fadeIn({ queue: false, duration: 200 });
            subMenu.animate({ top: "24px" }, 200);
        }
    }, function() {
        var subMenu = $(this).children('ul:first');

        if (subMenu.length > 0  && !$('.pxp-header').hasClass('pxp-mobile')) {
            subMenu.fadeOut({ queue: false, duration: 200 });
            subMenu.animate({ top: "10px" }, 200);
        }
    });

    $('.pxp-header-nav-trigger').click(function() {
        $(this).toggleClass('pxp-active');
        $('.pxp-logo').toggleClass('pxp-logo-nav');
        $('.pxp-header').toggleClass('pxp-mobile');
        $('.pxp-nav').toggle();
    });

    $('.pxp-blog-post-video').click(function() {
        $(this).hide().next('iframe').show();
    });

    // Handle agent rating system
    function clearAgentRating() {
        $('.pxp-single-agent-rating span').removeClass('pxp-selected');
    }
    $('.pxp-single-agent-rating span').click(function() {
        clearAgentRating();
        $(this).addClass('pxp-selected');
    });

    $('.pxp-map-toggle').click(function () {
        $('.pxp-map-side').addClass('pxp-max');
        $('.pxp-content-side').addClass('pxp-min');
        $('.pxp-list-toggle').show();
    });

    $('.pxp-list-toggle').click(function() {
        $('.pxp-map-side').removeClass('pxp-max');
        $('.pxp-content-side').removeClass('pxp-min');
        $('.pxp-list-toggle').hide();
    });

    $('.pxp-adv-toggle').click(function () {
        $(this).toggleClass('pxp-active');
        $('.pxp-content-side-search-form-adv').slideToggle();
    });

    $('.pxp-signin-trigger').click(function() {
        $('#pxp-signup-modal').modal('hide');
        $('#pxp-signin-modal').modal('show');
    });
    $('.pxp-signup-trigger').click(function() {
        $('#pxp-signin-modal').modal('hide');
        $('#pxp-signup-modal').modal('show');
    });
    $('#pxp-signin-modal').on('shown.bs.modal', function () {
        $('body').addClass('modal-open');
    });
    $('#pxp-signup-modal').on('shown.bs.modal', function () {
        $('body').addClass('modal-open');
    });

    $('.pxp-results-card-1 .carousel-control-next').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('data-href');

        $(target).carousel('next');
    });
    $('.pxp-results-card-1 .carousel-control-prev').click(function(event) {
        event.preventDefault()
        var target = $(this).attr('data-href');

        $(target).carousel('prev');
    });

    if ($('.pxp-gallery-carousel-stage').length > 0) {
        $('.pxp-gallery-carousel-stage').owlCarousel({
            'nav': true,
            'dots': false,
            'center': true,
            'loop': true,
            'margin': '100',
            'margin': false,
            'responsive': {
                0: {
                    'items': 1,
                    'stagePadding': 80
                },
                600: {
                    'items': 1,
                    'stagePadding': 120
                },
                900: {
                    'items': 1,
                    'stagePadding': 220
                },
                1200: {
                    'items': 1,
                    'stagePadding': 320
                },
                1600: {
                    'items': 1,
                    'stagePadding': 420
                },
                1800: {
                    'items': 1,
                    'stagePadding': 520
                }
            },
            'navText': [`<div class="pxp-gallery-carousel-left-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828" class="pxp-arrow-1">
                                <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                    <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`,
                        `<div class="pxp-gallery-carousel-right-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                    <line id="Line_2" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`],
            'checkVisible': false,
            'smartSpeed': 600
        });
    }

    $('.pxp-testim-2-caption-carousel .pxp-carousel-control-next').click(function(e) { 
        $('.pxp-testim-2-caption-carousel').carousel('next');
    });
    $('.pxp-testim-2-caption-carousel .pxp-carousel-control-prev').click(function(e) { 
        $('.pxp-testim-2-caption-carousel').carousel('prev');
    });
    $('.pxp-testim-2-caption-carousel').on('slide.bs.carousel', function(carousel) {
        $('.pxp-testim-2-photos-carousel').carousel(carousel.to);
    });

    // Hero search tabs toggle
    $('.pxp-hero-search-tabs ul li a').click(function() {
        $(this).prev().prop("checked", true);
        $(this).parent().siblings().removeClass('pxp-active');
        $(this).parent().addClass('pxp-active');
    });

    // Areas section carousel
    if ($('.pxp-areas-carousel-stage').length > 0) {
        $('.pxp-areas-carousel-stage').owlCarousel({
            'nav': true,
            'dots': false,
            'margin': 30,
            'responsive': {
                0: {
                    'items': 1
                },
                600: {
                    'items': 2
                },
                900: {
                    'items': 3
                },
                1200: {
                    'items': 3
                },
                1600: {
                    'items': 4
                }
            },
            'navText': [`<div class="pxp-areas-carousel-left-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828" class="pxp-arrow-1">
                                <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                    <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`,
                        `<div class="pxp-areas-carousel-right-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                    <line id="Line_2" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`],
            'checkVisible': false,
            'smartSpeed': 600
        });
    }

    // Services tabs section
    $('.pxp-services-tabs .carousel-indicators li').on('click', function() {
        var slide = $(this).attr('data-slide-to');

        $('.pxp-services-tabs .carousel-indicators li').removeClass('active');
        $(this).addClass('active');
        $('#pxp-services-tabs-content-carousel').carousel(parseInt(slide));
    });

    // Toogle properties advanced search form section
    $('.pxp-search-properties-toggle').click(function () {
        $(this).toggleClass('pxp-active');
        $('.pxp-search-properties-toggle-plus').toggle();
        $('.pxp-search-properties-toggle-minus').toggle();
        $('.pxp-search-properties-form-adv').slideToggle();
    });

    // Promo slider
    $('.pxp-promo-slider-caption .pxp-promo-slider-caption-dots li').on('click', function() {
        $('.pxp-promo-slider-caption .pxp-promo-slider-caption-dots li').removeClass('active');
        $(this).addClass('active');
    });

    $('.pxp-promo-slider-carousel').on('slide.bs.carousel', function(carousel) {
        var currentSlide = $(this).parent().find('.pxp-promo-slider-caption-item.pxp-active');
        var nextSlide = $(this).parent().find('.pxp-promo-slider-caption-item[data-index=' + carousel.to + ']');
        var currentDot = $(this).parent().find('.pxp-promo-slider-caption-dots li.active');
        var nextDot = $(this).parent().find('.pxp-promo-slider-caption-dots li[data-slide-to=' + carousel.to + ']');

        currentSlide.removeClass('pxp-active');
        nextSlide.css({
            'opacity': '0',
            'top': '20px',
            'position': 'relative'
        }).addClass('pxp-active').animate({ 'opacity': '1',  'top': '0' }, 600);

        currentDot.removeClass('active');
        nextDot.addClass('active');
    });
})(jQuery);