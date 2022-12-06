import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loop';
  studentArr : any = [];
  studentRecords = [ 
                      {name: 'John', id: 123, marks : 98 },
                      {name: 'Baba', id: 101, marks : 23 },
                      {name: 'yaga', id: 200, marks : 45 },
                      {name: 'Wick', id: 115, marks : 75 } 
                   ];
  constructor(){}
  ngOnInit(): void {
    //this.forLoop();
    //this.forOfLoop();
    //this.forEachLoop();
    //this.map();
    //this.filter();
    //this.find();
    //this.arrayFrom();
    //this.arrayOf();
    //this.arrayIndex();
    //this.arrayEntries();
    //this.arrayKeys();
    this.arrayValue();
  }

  //for loop
  forLoop(){
    for (let index = 0; index < this.studentRecords.length; index++) {
      this.studentArr.push(this.studentRecords[index].name.toUpperCase());
    }
    console.log("for loop..................",this.studentArr);
  }

  //for of loop
  forOfLoop(){
    for(const data of this.studentRecords){
      this.studentArr.push(data.name.toUpperCase());
    }
    console.log("for of loop..................",this.studentArr);
  }

  //for each loop
  forEachLoop(){
    this.studentRecords.forEach(element => {
      console.log("element............",element.name);
      this.studentArr.push(element.name.toUpperCase());
    });
    console.log("for each loop..................",this.studentArr);
  }

  //Map
  map(){
    const names = this.studentRecords.map(element => element.name.toUpperCase());
    console.log("map.............",names);
  }

  //filter 
  //returns only those elements from array which fulfils the provided criteria.
  filter(){
    const data1 = this.studentRecords.filter(element => element.marks > 23);
    const data2 = data1.map(element => element.name.toUpperCase());
    console.log("filter.............",data2);
  }

  //find
  //The find() method returns the first element in the provided array

  find(){
    const data = this.studentRecords.find(element => element.marks === 23);
    console.log("data...............",data?.name);
  }


  //Array function.........................

  //Array.from ->
  //It is the object to convert to an array.
  arrayFrom(){
    const val = Array.from("text");
    console.log("arrayFrom............",val);
  }

  //Array.of->
  // creating an array only with a single numeric value
  arrayOf(){
    const val = 100;
    console.log("arrayTo............",Array.of(val)); 
  }

  //Array.findIndex
  arrayIndex(){
    const arr = [10,20,30,40,50];
    // const val = arr.findIndex(elment => elment === 50);
    const val = arr.findIndex(elment => elment > 50);
    console.log("arrayIndex.........",val);
    
  }

  // Array.entries
  arrayEntries(){
    //This method returns an array iterator object, which can be used to loop through keys and values of arrays.
    const colours = ["Red", "Yellow", "Blue", "Black"];  
    const colorArr = colours.entries();
    console.log("arrayEntries............",...colorArr);
    // for(const arr of colorArr){
    //   console.log("arrayEntries............",arr);
    // }
  }

  arrayKeys(){
    const colours = ["Red", "Yellow", "Blue", "Black"];  
    const keys = colours.keys();
    console.log("keys............",...keys);
    
  }

  arrayValue(){
    const colours = ["Red", "Yellow", "Blue", "Black"];  
    const value = colours.values();
    console.log("keys............",...value);
    
  }
}
