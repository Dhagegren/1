


const log = this.document.createElement("p");
const log2 = this.document.createElement("p");

 function init() {
    var permissionBtn =CreateButton.createButton("tryck på mig"); 
     permissionBtn.addEventListener("click", Permission.givePermission);
}





window.addEventListener("devicemotion", function (event) {
     
        var shaking = false;

        const gamma = event.rotationRate.gamma;
        log2.innerHTML = gamma.toFixed(2);
        document.body.appendChild(log2);


        if (gamma > 20 || gamma < -20) {
          shaking= true;
        }

        else {
          shaking = false;
        }


        let interval = setInterval(function(){

            if (shaking){
                log.innerHTML = "jag skakar";
                document.body.appendChild(log);

            }
            else {
                log.innerHTML = "";
                document.body.appendChild(log);

            }
        }, 1500);
    });

    window.addEventListener("load", init);




