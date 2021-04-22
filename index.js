

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

let app = {  

    inicializar: function() {
        console.log("inicializar: function(){...");
        document.addEventListener('deviceready', meuapp.onDeviceReady, false);
        document.addEventListener('onResume', meuapp.retornoAoPrimeiroPlano, false);
    },

    onMyDeviceReady: function() {
        console.log('####=> Running cordova-' + cordova.platformId + '@' + cordova.version);
        document.getElementById("btnSelecionaContato").addEventListener('click', meuapp.selecionarContato)
},

retornoAoPrimeiroPlano: function(){
    console.log("retornoAoPrimeiroPlano: function(){...");

},
    selecionaContato: function(){
        console.log("selecionaContato: function(){...");
        navigator.contacts.pickContact(function(c){
            console.log("###=> Contato Selecionado");
            console.log(c);
        },function(err){   
            console.log("###=> Contato não Selecionado");
            console.log("err");
        });
    }
}