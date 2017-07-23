var array=[1, "apple", -3, "orange", 0.5];

function numbers_only(arr){

  var newarr=[];

  for(var i=0; i< arr.length; i++){

    num=array[i];

    if (typeof num==="number"){
      newarr.push(num);
    }

  }
  console.log(newarr);
}

numbers_only([1, "apple", -3, "orange", 0.5])
