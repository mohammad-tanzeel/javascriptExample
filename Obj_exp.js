let car = {
    type :'fiat',
    color:'black',
    cost:'5000',
    myFun: function(){
            return this.color;
    }
    }
    
    console.log(car.type+" "+car.color+" "+car.cost);
    console.log("color = "+car.myFun());
