//Import Mixpanel SDK
import mixpanel from 'mixpanel-browser';
 
// Near entry of your product, init Mixpanel
mixpanel.init('81aed151497772adf2d006af732fba1c', {debug: true, track_pageview: true, persistence: 'localStorage'});