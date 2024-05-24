console.log("hello world")

 function palindrom(str){
    // var str="madam";
 var rstr="";
 for(var i=0;i<=str.length;i++){
    var str2= str.charAt(i);
    rstr=str2+rstr;
    
 }
 if(rstr==str)
    console.log("true")
else
    console.log("false");
 }
 palindrom("1214")
    
 

var arr=[1,2,4,1,2,9,9,9,4,2]
var arr2=arr.sort();
console.log(arr2);
var i=0;
var sum=0;
for(i=0;i<=2;i++){
    sum=arr2[i]+sum

}
console.log(sum);
var j;
var sum2=0;
for(j=arr2.length-1;j<arr2.length;j++){
    sum=arr2[j]+sum

}
console.log(sum)

arr3=[5,6,5,3,2,1]
/*[2,1,2,1,1,1] */
var arr4;
for(var i=0;i<=arr3.length-1;i++){
    for(var j=i;j<=arr3.length;j++){
        if(arr3[i]==arr4[j]){
            arr4.push(arr3[i]);
            arr4.push(arr3.push(arr3[j]))
        }

    }

}


    
   