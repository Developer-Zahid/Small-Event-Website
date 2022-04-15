(function($) {
    "use strict";

    var map;
    var styles;
    var marker                = [];
    var placesIDs             = [];
    var transportationMarkers = [];
    var restaurantsMarkers    = [];
    var shoppingMarkers       = [];
    var cafesMarkers          = [];
    var artsMarkers           = [];
    var fitnessMarkers        = [];

    // Property map marker position
    var propLat = '37.75347110977809';
    var propLng = '-122.46686778459474';

    var options = {
        zoom : 14,
        mapTypeId : 'Styled',
        panControl: false,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: false,
        streetViewControl: true,
        overviewMapControl: false,
        scrollwheel: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM,
        },
        fullscreenControl: true,
    };


    styles = [{"featureType": "all","elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#000000"},{"lightness": 40}]},{"featureType": "all","elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#000000"},{"lightness": 16}]},{"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#000000"},{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"lightness": 17},{"weight": 1.2}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 20}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 21}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#000000"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 16}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 19}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 17}]}];

    var transportationMarkerImage = {
        url: 'images/transportation-marker.png',
        size: new google.maps.Size(47, 47),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(24, 21),
        scaledSize: { width: 47, height: 47 }
    };
    var restaurantsMarkerImage = {
        url: 'images/restaurants-marker.png',
        size: new google.maps.Size(47, 47),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(24, 21),
        scaledSize: { width: 47, height: 47 }
    };
    var shoppingMarkerImage = {
        url: 'images/shopping-marker.png',
        size: new google.maps.Size(47, 47),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(24, 21),
        scaledSize: { width: 47, height: 47 }
    };
    var cafesMarkerImage = {
        url: 'images/cafes-marker.png',
        size: new google.maps.Size(47, 47),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(24, 21),
        scaledSize: { width: 47, height: 47 }
    };
    var artsMarkerImage = {
        url: 'images/arts-marker.png',
        size: new google.maps.Size(47, 47),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(24, 21),
        scaledSize: { width: 47, height: 47 }
    };
    var fitnessMarkerImage = {
        url: 'images/fitness-marker.png',
        size: new google.maps.Size(47, 47),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(24, 21),
        scaledSize: { width: 47, height: 47 }
    };

    var info = new InfoBox({
        disableAutoPan: false,
        maxWidth: 200,
        pixelOffset: new google.maps.Size(-70, -44),
        zIndex: null,
        boxClass: 'poi-box',
        boxStyle: {
            'background' : '#fff',
            'opacity'    : 1,
            'padding'    : '5px',
            'box-shadow' : '0 1px 2px 0 rgba(0, 0, 0, 0.13)',
            'width'      : '140px',
            'text-align' : 'center',
            'border-radius' : '3px'
        },
        closeBoxMargin: "28px 26px 0px 0px",
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1),
        pane: "floatPane",
        enableEventPropagation: false
    });

    function getPOIs(pos, map, type) {
        var service   = new google.maps.places.PlacesService(map);
        var bounds    = map.getBounds();
        var types     = new Array();

        switch(type) {
            case 'transportation':
                types = ['bus_station', 'subway_station', 'train_station', 'transit_station', 'airport'];
                break;
            case 'restaurants':
                types = ['restaurant'];
                break;
            case 'shopping':
                types = ['bicycle_store', 'book_store', 'clothing_store', 'convenience_store', 'department_store', 'electronics_store', 'florist', 'furniture_store', 'hardware_store', 'home_goods_store', 'jewelry_store', 'liquor_store', 'shoe_store', 'shopping_mall', 'store', 'supermarket'];
                break;
            case 'cafes':
                types = ['bar', 'cafe'];
                break;
            case 'arts':
                types = ['amusement_park', 'aquarium', 'art_gallery', 'bowling_alley', 'casino', 'movie_rental', 'movie_theater', 'museum', 'stadium', 'zoo'];
                break;
            case 'fitness':
                types = ['gym'];
                break;
        }

        $.each(types, function(i, t) {
            service.nearbySearch({
                location: pos,
                bounds: bounds,
                radius: 2000,
                types: [t]
            }, function poiCallback(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        if (jQuery.inArray(results[i].place_id, placesIDs) == -1) {
                            createPOI(results[i], map, type);
                            placesIDs.push(results[i].place_id);
                        }
                    }
                }
            });
        });
    }

    function createPOI(place, map, type) {
        var placeLoc = place.geometry.location;
        var poiMarker;

        switch (type) {
            case 'transportation':
                poiMarker = new google.maps.Marker({
                    map: map,
                    position: placeLoc,
                    icon: transportationMarkerImage,
                });
                transportationMarkers.push(poiMarker);
                break;
            case 'restaurants':
                poiMarker = new google.maps.Marker({
                    map: map,
                    position: placeLoc,
                    icon: restaurantsMarkerImage,
                });
                restaurantsMarkers.push(poiMarker);
                break;
            case 'shopping':
                poiMarker = new google.maps.Marker({
                    map: map,
                    position: placeLoc,
                    icon: shoppingMarkerImage,
                });
                shoppingMarkers.push(poiMarker);
                break;
            case 'cafes':
                poiMarker = new google.maps.Marker({
                    map: map,
                    position: placeLoc,
                    icon: cafesMarkerImage,
                });
                cafesMarkers.push(poiMarker);
                break;
            case 'arts':
                poiMarker = new google.maps.Marker({
                    map: map,
                    position: placeLoc,
                    icon: artsMarkerImage,
                });
                artsMarkers.push(poiMarker);
                break;
            case 'fitness':
                poiMarker = new google.maps.Marker({
                    map: map,
                    position: placeLoc,
                    icon: fitnessMarkerImage,
                });
                fitnessMarkers.push(poiMarker);
                break;
        }

        google.maps.event.addListener(poiMarker, 'mouseover', function() {
            info.setContent(place.name);
            info.open(map, this);
        });
        google.maps.event.addListener(poiMarker, 'mouseout', function() {
            info.open(null,null);
        });
    }

    function tooglePOIs(map, type) {
        for (var i = 0; i < type.length; i++) {
            if (type[i].getMap() != null) {
                type[i].setMap(null);
            } else {
                type[i].setMap(map);
            }
        }
    }

    function CustomMarker(latlng, map, classname) {
        this.latlng_   = latlng;
        this.classname = classname;

        this.setMap(map);
    }

    CustomMarker.prototype = new google.maps.OverlayView();

    CustomMarker.prototype.draw = function() {
        var me = this;
        var div = this.div_;

        if (!div) {
            div = this.div_ = document.createElement('div');
            div.classList.add(this.classname);

            var panes = this.getPanes();
            panes.overlayImage.appendChild(div);
        }

        var point = this.getProjection().fromLatLngToDivPixel(this.latlng_);

        if (point) {
            div.style.left = point.x + 'px';
            div.style.top = point.y + 'px';
        }
    };

    function addPropMarker(propLat, propLng, map) {
        var latlng = new google.maps.LatLng(propLat, propLng);
        marker = new CustomMarker(latlng, map, 'pxp-single-marker');
    }

    setTimeout(function() {
        if($('#pxp-sp-map').length > 0) {
            map = new google.maps.Map(document.getElementById('pxp-sp-map'), options);
            var styledMapType = new google.maps.StyledMapType(styles, {
                name : 'Styled',
            });
            var center = new google.maps.LatLng(propLat, propLng);

            map.mapTypes.set('Styled', styledMapType);
            map.setCenter(center);
            map.setZoom(15);

            addPropMarker(propLat, propLng, map);

            google.maps.event.trigger(map, 'resize');

            $('.pxp-sp-pois-nav-transportation').click(function() {
                var this_ = $(this);
                if($(this).hasClass('pxp-active')) {
                    $(this).removeClass('pxp-active');
    
                    tooglePOIs(map, transportationMarkers);
                } else {
                    $(this).addClass('pxp-active');
    
                    getPOIs(center, map, 'transportation');
                    tooglePOIs(map, transportationMarkers);
                }
                google.maps.event.addListener(map, 'bounds_changed', function() {
                    if(this_.hasClass('pxp-active')) {
                        getPOIs(map.getCenter(), map, 'transportation');
                    }
                });
            });

            $('.pxp-sp-pois-nav-restaurants').click(function() {
                var this_ = $(this);
                if($(this).hasClass('pxp-active')) {
                    $(this).removeClass('pxp-active');
    
                    tooglePOIs(map, restaurantsMarkers);
                } else {
                    $(this).addClass('pxp-active');
    
                    getPOIs(center, map, 'restaurants');
                    tooglePOIs(map, restaurantsMarkers);
                }
                google.maps.event.addListener(map, 'bounds_changed', function() {
                    if(this_.hasClass('pxp-active')) {
                        getPOIs(map.getCenter(), map, 'restaurants');
                    }
                });
            });

            $('.pxp-sp-pois-nav-shopping').click(function() {
                var this_ = $(this);
                if($(this).hasClass('pxp-active')) {
                    $(this).removeClass('pxp-active');
    
                    tooglePOIs(map, shoppingMarkers);
                } else {
                    $(this).addClass('pxp-active');
    
                    getPOIs(center, map, 'shopping');
                    tooglePOIs(map, shoppingMarkers);
                }
                google.maps.event.addListener(map, 'bounds_changed', function() {
                    if(this_.hasClass('pxp-active')) {
                        getPOIs(map.getCenter(), map, 'shopping');
                    }
                });
            });

            $('.pxp-sp-pois-nav-cafes').click(function() {
                var this_ = $(this);
                if($(this).hasClass('pxp-active')) {
                    $(this).removeClass('pxp-active');
    
                    tooglePOIs(map, cafesMarkers);
                } else {
                    $(this).addClass('pxp-active');
    
                    getPOIs(center, map, 'cafes');
                    tooglePOIs(map, cafesMarkers);
                }
                google.maps.event.addListener(map, 'bounds_changed', function() {
                    if(this_.hasClass('pxp-active')) {
                        getPOIs(map.getCenter(), map, 'cafes');
                    }
                });
            });

            $('.pxp-sp-pois-nav-arts').click(function() {
                var this_ = $(this);
                if($(this).hasClass('pxp-active')) {
                    $(this).removeClass('pxp-active');
    
                    tooglePOIs(map, artsMarkers);
                } else {
                    $(this).addClass('pxp-active');
    
                    getPOIs(center, map, 'arts');
                    tooglePOIs(map, artsMarkers);
                }
                google.maps.event.addListener(map, 'bounds_changed', function() {
                    if(this_.hasClass('pxp-active')) {
                        getPOIs(map.getCenter(), map, 'arts');
                    }
                });
            });

            $('.pxp-sp-pois-nav-fitness').click(function() {
                var this_ = $(this);
                if($(this).hasClass('pxp-active')) {
                    $(this).removeClass('pxp-active');
    
                    tooglePOIs(map, fitnessMarkers);
                } else {
                    $(this).addClass('pxp-active');
    
                    getPOIs(center, map, 'fitness');
                    tooglePOIs(map, fitnessMarkers);
                }
                google.maps.event.addListener(map, 'bounds_changed', function() {
                    if(this_.hasClass('pxp-active')) {
                        getPOIs(map.getCenter(), map, 'fitness');
                    }
                });
            });
        }
    }, 300);
})(jQuery);