

class RunFetchera {

    static fetch(uid){ // Pass
  



      let hasUndefined = false;

      this.runs = [];
  
      return new Promise(async (resolve, reject) => {
        
        const db = firebase.firestore();
        const me = await db
      .collection("Runs")
      .doc(uid)
      // .doc("4CeFfXMvPmRS8bugIJQrBO0PlkO2")
      .collection("MyRuns")
      .get();
  me.docs.map(d => { 
   /* let r = new WebRun();

      r.date = d.data().date;
      r.distance = d.data().distance;
      r.time = d.data().time; // Phase-out
      r.duration = d.data().duration;
      r.effectivePace = d.data().effectivePace;
      r.coordinates = d.data().coordinates;
      r.heartRates = d.data().heartRates;
      r.kmSplits = d.data().kmSplits;
      r.mileSplits = d.data().mileSplits;
      r.cadenceArray = d.data().cadenceArray();
*/










      let obj = {
        date: d.data().date,
        location: d.data().location,
        distance: d.data().distance,
        duration: d.data().time, // Phase-out
        duration: d.data().duration,
        effectivePace: d.data().effectivePace,
        coordinates: d.data().coordinates,
        heartRates: d.data().heartRates,
        kmSplits: d.data().kmSplits,
        mileSplits: d.data().mileSplits,
        cadenceArray: d.data().cadenceArray
      }


      console.warn(`--------------RUN ${d.data().location}`);



      if (d.data().kmSplits === undefined || d.data().location === undefined || d.data().mileSplits === undefined || d.data().cadenceArray === undefined || d.data().distance === undefined){
        hasUndefined = true;
      } else {

       /* if (d.data().kmSplits[0] === "empty" || d.data().mileSplits[0] === "empty" || d.data().cadenceArray[0] === "empty"){
          hasUndefined = true;
        }*/
  

      }

     

    for (const [key, value] of Object.entries(obj)) {
      console.log(`Key: ${key}, value: ${value}`);


      if (key === undefined || value === undefined) {
        hasUndefined = true;
        console.error(`--------------RUN ${d.data().date} DOES NOT PASSS`);
      }


    }



      if (hasUndefined === false){
       this.runs.push(obj);
       console.log("OBJAAA IS");
       console.log(obj);
       // 180554
      }

      hasUndefined = false;

      console.log(this.runs);
  
      resolve(this.runs);
  });
    
  
  
      });
    
  }










  }