




function triangle()
{
    var edgeAEL = +document.getElementById("edgeA").value    
    var edgeBEL = +document.getElementById("edgeB").value    
    var edgeCEL = +document.getElementById("edgeC").value    

    var result4 = document.getElementById("result4")


    if(isNaN(edgeAEL) === true || isNaN(edgeBEL) === true || isNaN(edgeCEL) === true){
        result4.innerHTML = `NaN NaN NaN`
    }
    else{

        if((edgeAEL === edgeBEL) && (edgeAEL === edgeCEL) && (edgeBEL === edgeCEL))
        {
            result4.innerHTML =`Tam giác đều`
        }
        else if((edgeAEL === edgeBEL) || (edgeAEL === edgeCEL) || (edgeBEL === edgeCEL))
        {
            result4.innerHTML = `Tam giác cân`
        }
        else if((edgeCEL*edgeCEL) === (edgeAEL*edgeAEL + edgeBEL*edgeBEL))
        {
            result4.innerHTML =`Tam giác vuông`
        }
        else{
            result4.innerHTML = `Một loại tam giác khác  `
        }
    }
}   