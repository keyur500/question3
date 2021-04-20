window.addEventListener("load", function(){

    function getJsonData(){
       const JsonFileURL = "https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json";
       
       fetch(JsonFileURL)
        .then(resonse => resonse.json())
        .then(data => { addData(data); });
    }

    function addData(data){
        console.log(data.cats);
        
        for(let i=0; i< data.cats.length; i++){
            console.log(data.cats[i]);
        }
    }
    getJsonData();
})