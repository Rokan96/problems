function validateRecipe(fridge , ingredients){
    var check = 0;
    for(var i = 0; i< fridge.length ; i++){
        for(var j = 0 ; j<ingredients.length ; j++ ){
            if(ingredients[j] == fridge[i]){
                check ++;
                if(check == ingredients.length){
                    return true;

                }
            }
        }
    }
   return false;
}
var ingredients = ["banana" , "milk" , "grape"];
var fridge = ["milk" , "icecream"  , "grape" , "banana" ];
var result = validateRecipe(fridge , ingredients);
console.log(result);
