function whereIsMyFood(fridge , item){
    for(var i = 0; i< fridge.length ; i++){
        if(fridge[i] == item){
            return i;
        }
       
    }
    return-1;
}
var item = "banana";
var fridge = ["milk" , "icecream"  , "meat" , "banana" ];
var result = whereIsMyFood(fridge , item);
console.log(result);
