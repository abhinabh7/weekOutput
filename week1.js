function genrateTable(){
    let getData = document.getElementById("number").value;
    let displayData = document.getElementById("display");
    let i;

    if (getData!=="" && !isNaN(getData) && getData>0){
        
        for (i =1; i<=10;i++){
            displayData.innerHTML+=getData+" X "+i+"  = "+getData*i+"<br>";

    
        }
        alert("Do you want to print table?")


    }else{
        displayData.innerHTML="Please Enter valid ";
        alert('Please Enter valid number')
    }

    


}