
/* borek@a.com
function StatsView(props){
let [sum, setSum] = React.useState(0);
let runs = props.runs;

let [allow, setAllow] = React.useState(false);



setTimeout(() => setAllow(true), 1000);
// sum = runs.reduce((a, b) => a.distance + b.distance);
// alert(sum);

var suma = 0;


// runs.forEach(run => suma += Number(run.distance));




return <div>
  

   {allow ? <GridViewa runs={runs}/> : null}
  </div>
}


// Grid using my Lib
*/

/*
function StatsView(props){

  const getText = () => {
    return new Texta(`Wow ${props.runs.length}`)
  }
  return <LayoutHost el={getText()}/> //<h2>A {props.runs.length}</h2>
// return <GridViewa runs={props.runs}/>
}*/

