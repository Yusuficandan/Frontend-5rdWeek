

(function(window,document,undefined){
   
    window.onload=init;

    function init(){

        let Name = prompt("Adinizi Girin")
        let myName = document.querySelector("#myName")
        myName.innerHTML = `${Name}`

        let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
        var clock_set=setInterval(function(){myTimer()},1000);
        let div_clock = document.querySelector("#myClock")

        function myTimer() {
            var d = new Date();
            div_clock.innerHTML = `${d.toLocaleTimeString()} ${days[d.getUTCDay()+1]}`;
        }
}
})(window,document,undefined);


