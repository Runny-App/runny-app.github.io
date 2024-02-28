// useEffect instead of componentDidMount DetailView


class TableComponent extends React.Component { // LayoutComponent

      constructor(props){
            super(props);
            this.props = props;
          // USE props.array
      }

      tableElement(){
            return new Table(this.props.array)
            .cellPadding("0.4em")
            .cellAlign("center")
              .style({font: "Arial"})
              .rowStyle({
                  nth: 2,
                  color: "orange"
              })
            // .border(2, "solid", "black")
             .sizes([
                 {width: 1000, size: "1rem"},
                 {mobile: "1.33rem"}
             ])
             .center()
              .headStyle({
                  color: "white",
                  background: "#3498db"
              })
              .borderRadius()
              .arrayMargin(["top", "bottom"], "10px")
          }
      
          render(){
             return (
             <div>

         { this.props.array.length > 0 ? <LayoutHost el={this.tableElement()}/> : null }
          {/*<h2>MyTable</h2> */} 
             </div>);
             
          }
        }



        function round_number(options) {
            const places = 10**options.decimal_places;
            const res = Math.round(options.number * places)/places;
            return(res)
        }
      

function HooksDetailView(props){

const [coord, setCoord] = React.useState([])

// const [count, setCount] = React.useState(0);

  React.useEffect(() => { // 10:26:36 - 11:40
    if (props.run.coordinates != null){
  
          
      let split = props.run.coordinates.split("S");
      
      let happiness = [];
      
      for (var i = 0; i < split.length; i++){
          let data = split[i].split("A");
          console.log(data);
      
            if (data[0].length > 3){
            happiness.push({lat: Number(data[0]), lng: Number(data[1])});
            }
      }
        setCoord(happiness)
      } 
  }, []); // This stops the infinite loop :)






  // Code is beauty
     // const formatTime = (s) => (s-(s%=60))/60+(9<s?':':':0')+s;
      
       var conv = [];

       let unit = window.localStorage.getItem("unit") || "km";

      if (unit === "km") {
            if (props.run.kmSplits[0] !== "empty" && props.run.distance > 1) {

                  if (props.run.kmSplits === undefined) {
                        props.run.kmSplits = [1]
                  }

                  if (props.run.kmSplits !== null) {
                        props.run.kmSplits.forEach((el, i) => conv.push({
                              distance: props.run.kmSplits.indexOf(el) + 1,
                              time: el//formatTime(el)
                        }));
                  }


                  let rnd = Number(`0.${props.run.distance.split(".")[1]}`);
                  let rand = round_number({
                        number: rnd,
                        decimal_places: 2
                  });

                  conv[conv.length - 1].distance = `${rand}`;
            }

      } else {
            if (props.run.mileSplits[0] !== "empty" && props.run.distance > 1) {
                  if (props.run.mileSplits === undefined) {
                        props.run.mileSplits = [1]
                  }
                  if (props.run.mileSplits !== null) {
                        props.run.mileSplits.forEach((el, i) => conv.push({
                              distance: props.run.mileSplits.indexOf(el) + 1,
                              time: el//formatTime(el)
                        }));
                  }


                  let rnd = Number(`0.${props.run.distance.split(".")[1]}`);
                  let rand = round_number({
                        number: rnd / 1.609,
                        decimal_places: 2
                  });
                

                  conv[conv.length - 1].distance = `${rand}`;
                  console.log(conv); // HERE
            }
      }


// 16:07:30 Done !!! 
// 23/12
console.log("ALREADY");
       console.log(coord);

       if (props.run.date === "20.12.2022 18:44:06"){
            console.log("ALLA");
            console.log(props.run.cadenceArray);
        }
        

       let cada = 0;
  
  if (props.run.cadenceArray.length > 0){
      cada = props.run.cadenceArray.reduce((a, b) => a + b) / props.run.cadenceArray.length;
  }


  cada = Math.round(cada);

  if (isNaN(cada)){
      cada = "n/a";
  }


  console.log("CONV");
  console.log(conv);


  let efPace = props.run.effectivePace;
  if (props.run.effectivePace != "n/a"){

  
  let perKm = props.run.effectivePace.split(":")

  if (unit === "mi"){
  let re = Number(perKm[0]) * 60 + Number(perKm[1]);

  let effectiveSecondsPerMile = re * 1.609;

  let fm = new Date(effectiveSecondsPerMile * 1000).toISOString().slice(11, 19);
  perKm = fm;
  }


  efPace = perKm;
}





console.log(props.run.heartRates);



  
  return( <div>
      
    {/*24.01.2022 0:25:27*/}

 <div id="center">

    <div id="backAlign">
      <button className="backButton" onClick={props.getBack}>←</button>
    </div>



{/*
<TableComponent array={[
                  { name: "Monte A", height: 16},
                  { name: "Monte B", height: 168},
                  { name: "Monte C", height: 165}
]}/>

*/}





{/*<TableComponent/>  location 12:54:01*/}

    <DateTitle name={props.run.date}/>
    <RunTitle name={props.run.location}/> 

    <section id="grid">
      <div className="dataSection">
      <h3 className="distItem">{Number(unit === "km" ? props.run.distance : props.run.distance / 1.609).toPrecision(2)}</h3>
      <h4>Distance</h4>
</div>

<div className="dataSection">
      <h3 className="distItem">{efPace}</h3>
      <h4>Effective pace</h4>
</div>


<div className="dataSection">
      <h3 className="distItem">{props.run.duration}</h3>
      <h4>Duration</h4>
</div>

<div className="dataSection">
      <h3 className="distItem">{cada}</h3>
      <h4>Cadence</h4>
</div>
    

      </section>


     


{/*             30.01.2022 00:00:00 HAS NaN Splits ???        */}




{

/*
<h2>{props.run.kmSplits.length}</h2>
<h2>{conv.length}</h2>
*/
}


{conv != null && conv[0] != undefined && props.run.kmSplits.length > 0 ? <TableComponent array={conv}/>: null}

{/* {props.run.kmSplits != null && conv != null ? <TableComponent array={conv}/> : null} */}

{/*

<button onClick={() => {setCount(count + 1)}}>Plus plus</button>
<h2>{count}</h2>
      <HeartRate value={count}/>
*/}

      {/*10:35:34*/}
  
     
      {coord.length > 0 ? <MapHost coordinates={coord}/> : null}
     
      
     { props.run.heartRates.length > 2 ? <HeartRate value={"AVG: " + Math.round(props.run.heartRates.reduce((a, b) => a + b) / props.run.heartRates.length)}/> : null }

      {props.run.heartRates.length > 2 ?  <ChartComponent rates={{
                                          hrArr: props.run.heartRates,
                                          distance: props.run.distance,
                                          id: "heart",
                                          borderColor: "#bdc3c7",
                                          chartColor: "#e74c3c",
                                          title: "Heart rate"
                                         }}/> : null}

{props.run.cadenceArray.length > 2 ?  <ChartComponent rates={{
                                          hrArr: props.run.cadenceArray,
                                          distance: props.run.distance,
                                          id: "cadence",
                                          borderColor: "#bdc3c7",
                                          chartColor: "#2ecc71",
                                          title: "Cadence"
                                         
                                         }}/> : null}



                                         {/* 15:01:44 Twoi charts */}

      </div>
      
    </div>
      
      );



}










































/*

class DetailView extends React.Component {
    constructor(props){
      super(props); // Data about the run
      this.props = props;
  
      this.state = {
        coord:[]
      }
         
    }
  
  
    componentDidMount(){
      if (this.props.run.coordinates != null){
  
          
  let split = this.props.run.coordinates.split("S");
  
  let happiness = [];
  
  for (var i = 0; i < split.length; i++){
      let data = split[i].split("A");
      console.log(data);
  
      //if(isNaN(Number(data[0]) === false) && isNaN(Number(data[1]) === false)){
  
        if (data[0].length > 3){
        
        
        happiness.push({lat: Number(data[0]), lng: Number(data[1])});
        }
     // }
     
  }
  
  
  
  this.setState({coord: happiness });
  } else {
  alert("IS NULL AT 1.05")
  }
    }
  
  
  
   
  
    // Draw a map here :)
    // 25:27
  
    render(){
  
      
  
     return( <div>
      
  
  
  
  
      <div id="center">
  

  
  


  <div id="backAlign">
      <button className="backButton" onClick={this.props.getBack}>←</button>
      </div>

      
      <h3 className="date">{this.props.run.date}</h3>
  
  
  
      
  
      <h2 className="title">Nymburk</h2>
  
      <section id="grid">
  
        
  
        <div className="dataSection">
        <h3 className="distItem">{this.props.run.distance}</h3>
        <h4>Distance</h4>
  </div>
  
  <div className="dataSection">
        <h3 className="distItem">2:31</h3>
        <h4>Effective pace</h4>
  </div>
  
  
  <div className="dataSection">
        <h3 className="distItem">12:38</h3>
        <h4>Duration</h4>
  </div>
  
  
  
  <div className="dataSection">
        <h3 className="distItem">200</h3>
        <h4>Cadence</h4>
  </div>
  
  
  
      
        </section>
  
  
  
  
        <LayoutComponent name="200"/>
  
  

    
  
  
  
        {this.state.coord.length > 0 ? <ContactBody coordinates={this.state.coord}/> : null}
       



        {this.props.run.heartRates != null ? <h2>{this.props.run.heartRates.length}</h2> : null }


        {this.props.run.heartRates != null ?  <ChartComponent rates={{
  hrArr: this.props.run.heartRates,
  distance: this.props.run.distance
}}/> : null}

       
        </div>
        
      </div>
        
        );
       
      
    }
  }
  
  
  */