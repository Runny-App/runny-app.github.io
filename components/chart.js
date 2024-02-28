
class ChartComponent extends React.Component {


    constructor(props){
        super();
        this.props = props;
        console.log("MY RATES");
        console.log(this.props.rates.hrArr);
    }


    // I have array of 7 HRs
     distributeDistance(dist, n){
      let reso = [];
      let step = dist / n;
      let begin = 0;
      
      while (begin < dist - step){
        begin += step;
          reso.push(begin.toFixed(2));
      }
      
      return reso;
      }
      
  // 14:39:49 Wow !!!


    componentDidMount(){
//super.componentDidMount();


       // var xValues = this.props.rates.xValues.map(val => val.x); //[1, 3, 6, 8];

new Chart(this.props.rates.id, { // Check the chart dimensions !!!!! 
  type: "line",
  data: {
    labels: this.distributeDistance(this.props.rates.distance, this.props.rates.hrArr.length),/*[0,
      this.props.rates.distance * 0.33,
      this.props.rates.distance * 0.50,
      this.props.rates.distance * 0.66,
      this.props.rates.distance * 0.80,
      this.props.rates.distance],*/
    datasets: [{ 
      
        label: "HR",
        data: this.props.rates.hrArr,
     // data: [181, 192, 183, 189, 186, 190, 183],
      borderColor: this.props.rates.borderColor,
      fill:  {
        target: 'origin',
        above: this.props.rates.chartColor,   // Area will be red above the origin
        below: 'rgb(0, 0, 255)'    // And blue below the origin
      } // 20:40
    }]
  },
  options: {
    legend: {display: false}
  }
});
    }
    render(){
        return (/*<h1>Chart</h1>*/ <div class="myc">
          <h2>{this.props.rates.title}</h2>
          <canvas className="hrChart" id={this.props.rates.id}></canvas>
          </div> );
    }
}




