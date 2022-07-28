var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

let PokenMonDetails = function(p1, p2,  p3){
    console.log(this.getPokeName()+" "+p1+" "+p2+" "+p3);
}

PokenMonDetails.call(pokemon, 'walling', "in Garden", "with fridns");
PokenMonDetails.apply(pokemon, ['walling', "in Garden", "with fridns"]);

let funbind = function(p1, p2){
    console.log(this.getPokeName()+"binding "+p1+" "+p2)
}
let bindresult =  funbind.bind(pokemon);

bindresult(' and ', ' showing result');



