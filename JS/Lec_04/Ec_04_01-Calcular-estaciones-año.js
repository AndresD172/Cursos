const prompt = require("prompt");

prompt.start()

prompt.get(['mes'], function(err, val){
    if (val.mes >= 3 && val.mes <= 6) {
      console.log(`El mes ${val.mes} se encuentra en Primavera`)
    }
    else if (val.mes >= 7 && val.mes <= 9) {
      console.log(`El mes ${val.mes} se encuentra en Verano`)
    }
    else if (val.mes >= 10 && val.mes <= 12 ) {
      console.log(`El mes ${val.mes} se encuentra en Otoño`)
    }
    else {
      console.log(`El mes ${val.mes} se encuentra en Invierno`)
    }
})