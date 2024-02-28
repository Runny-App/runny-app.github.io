class DataView extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            nickname : "",
            UID: "",
            data: [],
            coord: [],
            run: null
        };

        this.db = firebase.firestore();
        this.check();
       // this.gety();
        
    }


    logOut = () => {
        firebase.auth().signOut().then(function() {
  console.log('Signed Out');
}, function(error) {
  console.error('Sign Out Error', error);
});
    }
 

    async gety(uid) {
      await new RunFetchera
.fetch(uid)
.then(r => {
  console.log(r);
  console.log("GOT RUNS!!!");

this.setState({data: r});
 
});
    }

    check = () => {

        firebase.auth().onAuthStateChanged(user => {
  if (user) {

this.gety(user.uid);


  }
  else {
    // User is signed out.
  }
})
    }



    reden(){
      return new Text("K")
    }

    
    getCard(obj){


      let storage = window.localStorage.getItem("unit") || "km";
      

      let number = storage === "mi" ? obj.value / 1.609 : obj.value;

      return new Card().items([
         new Texta(`${Number(number).toFixed(2)}`)
         .fluid("S4"),
         new Texta(obj.title)
         .fluid("S5")
         .font("Roboto")
         .color("#1abc9c")
       ])
     }

    getStats(runs){

      alert(runs.length + "K");
      let texts = [

        this.getCard({
          title: "Runs",
          value: runs.length
        }),
    
        this.getCard({
          title: "Longest run",
          value: -1 //Math.max.apply(null, runs.map(x => Number(x.distance)))
        }),
    
        this.getCard({
          title: "Sum",
          value: -1
        })
      ]


      return new Grid(3)
    .items(texts)
    .center()
    .gap(20)
    .setColumns({count: 1, width: 600})
    .padding(20)
    }

    
    render(){
        
       /* let arr = [
    { lat: 37.772, lng: -122.21 },
    { lat: 37.762, lng: -122.22 },
    { lat: 37.752, lng: -122.23 }
  ];
*/




 

var rules = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
}





let unit = localStorage.getItem("unit") || "km";



        return (<div>


           {/*17:42:00*/}
     




       { this.state.data.length > 0 ? <GridViewa runs={this.state.data}/> : null}

    


        <div style={rules}>
        {this.state.data.map(a => <div className="blueBorder" key={a.date} onClick={() => this.props.switch(a)} style={{padding: "1em"}}>
            <h3 className="gray green">{a.date}</h3>
            <h2>{unit === "mi" ? Number(a.distance / 1.609).toPrecision(2) : Number(a.distance).toPrecision(2) /*/ 1.609 : null*/}</h2>
            <h2>{a.duration}</h2>
           {a.coordinates ? <h2>{a.coordinates.length}</h2> : null}

           

            {/*
            
    
   a.date === "23.01.2022 23:08:25" ?
  <ContactBody coordinates={this.state.coord}/> : null
  

            */  }

            </div>
           
            )

           
        }

      </div>
       
       
       
         

        </div>);
    }


}