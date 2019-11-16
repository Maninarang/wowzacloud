<script type="text/javascript" src="https://player.wowza.com/player/latest/wowzaplayer.min.js"></script>
<div id="playerElement" style="width:640px; height:360px; padding:0;"></div>
<script type="text/javascript">
var getQueryString = function ( field, url ) {
	var href = url ? url : window.location.href;
	var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	var string = reg.exec(href);
	return string ? string[1] : null;
};

var test = getQueryString('test');
    WowzaPlayer.create("playerElement",
        {
        "license":"PLAY2-nwt3Z-dhXVZ-DtbTM-8N847-uYyxA",
        "sources":[{
        "sourceURL":test
        },
        {
        "sourceURL":""
        }],
        "title":"",
    "description":"",
    "autoPlay":true,
    "mute":false,
    "volume":75
        }
    );



    </script>
