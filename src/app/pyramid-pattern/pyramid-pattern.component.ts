import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pyramid-pattern',
  templateUrl: './pyramid-pattern.component.html',
  styleUrls: ['./pyramid-pattern.component.css']
})
export class PyramidPatternComponent implements OnInit {
  num1:any=[1,2,3,4,5,6,7,8,9,10];
  space:any;
  k:any;
  arr:any;
  col = 5;
  rows=5/2;
  output = '';
 

  constructor() { }
  // createPyramid(rows)
  // {
  //     for (let i = 0; i < rows; i++) {
  //         var output = '';
  //         for (let j =0; j < rows - i; j++) output += ' ';
  //         for (let k = 0; k <= i; k++) output += '* ';
  //         console.log(output);  
  //     } 
  // }


  generatePyramid() {
    var totalNumberofRows = 5;
        
    for (var i = 1; i <= totalNumberofRows; i++) {
        this.arr = [];
        
        for (var k = 1; k <= i; k++) {
          this.arr.join("")
          
            this.arr.push(k);            
        }
        console.log(this.arr.join(" ") + "\n");
    }
}
  
//  pyramid(n) {  // Input or number of rows
//   for (var i = 1; i <= n; i++) {
//       var s = "";
//       // For every each counter there exist 2*n-1 value
//       for (var j = 1; j <= (2 * n - 1); j++) {
//         // Hint: Check the workbook image
//           (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " ";   
//       }
//       console.log(s);
//   }
// }

  


  ngOnInit() {

    // this.createPyramid(5);
    this.generatePyramid();
    // this.pyramid(5);
    
  }

}
