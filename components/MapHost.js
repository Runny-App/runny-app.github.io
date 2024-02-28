class MapHost extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.db = firebase.firestore();
    }
    
    getGoogleMaps() {
    // If we haven't already defined the promise, define it
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        // Add a global handler for when the API finishes loading
        window.resolveGoogleMapsPromise = () => {
          // Resolve the promise
          resolve(google);
    
          // Tidy up
          delete window.resolveGoogleMapsPromise;
        };
    
        // Load the Google Maps API
        const script = document.createElement("script");
        const API = 'AIzaSyDqziKeJ_hLpcDCtbs25YleQ3fr7U3nTxU';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
      });
    }
    
    // Return a promise for the Google Maps API
    return this.googleMapsPromise;
    }
    
    componentWillMount() {
    // Start Google Maps API loading since we know we'll soon need it
    this.getGoogleMaps();
    }
    
    componentDidMount = async () => {
    // Once the Google Maps API has finished loading, initialize the map
    this.getGoogleMaps().then((google) => {
    
        
      const uluru = {lat: -25.363, lng: 131.044};
      const map = new google.maps.Map(document.getElementById('map'));
      const marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    
    
    
     /* const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.21 },
    { lat: 37.762, lng: -122.22 },
    { lat: 37.752, lng: -122.23 }
    ];*/
    
    
    const flightPlanCoordinates = this.props.coordinates;
    
    
    // console.log(this.props.coordinates[0])
    
    // flightPathCoordinates.push(this.props.coordinates[0]);
    
    
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < flightPlanCoordinates.length; i++) {
    bounds.extend(flightPlanCoordinates[i]);
    }
    
    map.fitBounds(bounds);
    
    const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#1ABC9C",
    strokeOpacity: 1.0,
    strokeWeight: 3,
    });
    
    flightPath.setMap(map);
    
    });
    }
    
    render() {
    return (
      <div>
        <div id="map"></div>
      </div>
    )
    }
    }


    // 22:20:40 2:20 in video
    // What if I made service