(function($) {
    "use strict";

    var map;
    var markers = [];
    var markerCluster;
    var styles;
    var propertiesList;
    var options = {
        zoom : 14,
        mapTypeId : 'Styled',
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        scrollwheel: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM,
        },
        fullscreenControl: false,
    };

    styles = [{"featureType": "all","elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#000000"},{"lightness": 40}]},{"featureType": "all","elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#000000"},{"lightness": 16}]},{"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#000000"},{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"lightness": 17},{"weight": 1.2}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 20}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 21}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#000000"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 16}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 19}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 17}]}];

    propertiesList = [{
        id: 1,
        title: 'Chic Apartment in Downtown',
        photo: 'images/ph-thmb.jpg',
        position: {
            lat: '37.779023',
            lng: '-122.48862200000002'
        },
        price: {
            long: '$890,000',
            short: '$890k'
        },
        link: 'single-property.html',
        features: {
            beds: 2,
            baths: 2,
            size: '920 SF'
        }
    }, {
        id: 2,
        title: 'Colorful Little Apartment',
        photo: 'images/ph-thmb.jpg',
        position: {
            lat: '37.75347110977809',
            lng: '-122.46686778459474'
        },
        price: {
            long: '$2,675',
            short: '$2.6k'
        },
        link: 'single-property.html',
        features: {
            beds: 1,
            baths: 1,
            size: '500 SF'
        }
    }, {
        id: 3,
        title: 'Cozy Two Bedroom Apartment',
        photo: 'images/ph-thmb.jpg',
        position: {
            lat: '37.7487769',
            lng: '-122.424534'
        },
        price: {
            long: '$960,000',
            short: '$960k'
        },
        link: 'single-property.html',
        features: {
            beds: 2,
            baths: 2,
            size: '870 SF'
        }
    }, {
        id: 4,
        title: 'Beautiful House in Marina',
        photo: 'images/ph-thmb.jpg',
        position: {
            lat: '37.748134',
            lng: '-122.437206'
        },
        price: {
            long: '$5,198,000',
            short: '$5.2m'
        },
        link: 'single-property.html',
        features: {
            beds: 5,
            baths: 4.5,
            size: '3,945 SF'
        }
    }, {
        id: 5,
        title: 'Modern Residence',
        photo: 'images/ph-thmb.jpg',
        position: {
            lat: '37.7883186',
            lng: '-122.4897848'
        },
        price: {
            long: '$7,995',
            short: '$8k'
        },
        link: 'single-property.html',
        features: {
            beds: 4,
            baths: 1.5,
            size: '2,240 SF'
        }
    }, {
        id: 6,
        title: 'Luxury Mansion',
        photo: 'images/ph-thmb.jpg',
        position: {
            lat: '37.7985699',
            lng: '-122.4446982'
        },
        price: {
            long: '$5,430,000',
            short: '$5.4m'
        },
        link: 'single-property.html',
        features: {
            beds: 4,
            baths: 5,
            size: '5,200 SF'
        }
    }];

    function CustomMarker(id, latlng, map, classname, html) {
        this.id        = id;
        this.latlng_   = latlng;
        this.classname = classname;
        this.html      = html;

        this.setMap(map);
    }

    CustomMarker.prototype = new google.maps.OverlayView();

    CustomMarker.prototype.draw = function() {
        var me = this;
        var div = this.div_;

        if (!div) {
            div = this.div_ = document.createElement('div');
            div.classList.add(this.classname);
            div.innerHTML = this.html;

            google.maps.event.addDomListener(div, 'click', function(event) {
                google.maps.event.trigger(me, 'click');
            });

            var panes = this.getPanes();
            panes.overlayImage.appendChild(div);
        }

        var point = this.getProjection().fromLatLngToDivPixel(this.latlng_);

        if (point) {
            div.style.left = point.x + 'px';
            div.style.top = point.y + 'px';
        }
    };

    CustomMarker.prototype.remove = function() {
        if (this.div_) {
            this.div_.parentNode.removeChild(this.div_);
            this.div_ = null;
        }
    };

    CustomMarker.prototype.getPosition = function() {
        return this.latlng_;
    };

    CustomMarker.prototype.addActive = function() {
        if (this.div_) {
            $('.pxp-price-marker').removeClass('active');
            this.div_.classList.add('active');
        }
    };

    CustomMarker.prototype.removeActive = function() {
        if (this.div_) {
            this.div_.classList.remove('active');
        }
    };

    function addMarkers(props, map) {
        $.each(props, function(i, prop) {
            var latlng = new google.maps.LatLng(prop.position.lat, prop.position.lng);

            var html = '<div class="pxp-marker-short-price">' + prop.price.short + '</div>' + 
                        '<a href="' + prop.link + '" class="pxp-marker-details">' + 
                            '<div class="pxp-marker-details-fig pxp-cover" style="background-image: url(' + prop.photo + ');"></div>' + 
                            '<div class="pxp-marker-details-info">' + 
                                '<div class="pxp-marker-details-info-title">' + prop.title + '</div>' + 
                                '<div class="pxp-marker-details-info-price">' + prop.price.long + '</div>' + 
                                '<div class="pxp-marker-details-info-feat">' + prop.features.beds + ' BD<span>|</span>' + prop.features.baths + ' BA<span>|</span>' + prop.features.size + '</div>' + 
                            '</div>' + 
                        '</a>';

            var marker = new CustomMarker(prop.id, latlng, map, 'pxp-price-marker', html);

            marker.id = prop.id;
            markers.push(marker);
        });
    }

    setTimeout(function() {
        if($('#results-map').length > 0) {
            map = new google.maps.Map(document.getElementById('results-map'), options);
            var styledMapType = new google.maps.StyledMapType(styles, {
                name : 'Styled',
            });

            map.mapTypes.set('Styled', styledMapType);
            map.setCenter(new google.maps.LatLng(37.7577627,-122.4726194));
            map.setZoom(15);

            addMarkers(propertiesList, map);

            map.fitBounds(markers.reduce(function(bounds, marker) {
                return bounds.extend(marker.getPosition());
            }, new google.maps.LatLngBounds()));

            markerCluster = new MarkerClusterer(map, markers, {
                maxZoom: 18,
                gridSize: 60,
                styles: [
                    {
                        width: 40,
                        height: 40,
                    },
                    {
                        width: 60,
                        height: 60,
                    },
                    {
                        width: 80,
                        height: 80,
                    },
                ]
            });

            google.maps.event.trigger(map, 'resize');

            $('.pxp-results-card-1').each(function(i) {
                var propID = $(this).attr('data-prop');

                $(this).on('mouseenter', function() {
                    if (map) {
                        var targetMarker = $.grep(markers, function(e) {
                            return e.id == propID;
                        });

                        if(targetMarker.length > 0) {
                            targetMarker[0].addActive();
                            map.setCenter(targetMarker[0].latlng_);
                        }
                    }
                });
                $(this).on('mouseleave', function() {
                    var targetMarker = $.grep(markers, function(e) {
                        return e.id == propID;
                    });

                    if(targetMarker.length > 0) {
                        targetMarker[0].removeActive();
                    }
                });
            });
        }
    }, 300);
})(jQuery);