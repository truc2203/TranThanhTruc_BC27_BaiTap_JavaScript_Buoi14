// SƠ ĐỒ 3 KHỐI

/**
 * INPUT :nhập 3 cạnh A B C
 * 
 * PROCESS : 
 *  1. Input : tạo các biến var edgeAEl, edgeBEl, edgeCEl
 *  2. Tạo var result4  lưu kết quả loại tam giác
 *   
 *  3. Người dùng nhập giá trị vào 3 biến edgeAEl, edgeBEl, edgeCEl
 *     Nếu cả 3 biến đều là kiểu number : 
 *       - A = B = c ==> Tam giác đều
 *       - A = B hoặc A = C hoặc B = C ==> Tam giác cân
 *       - C*C = A*A + B*B ==> Tam giác vuông
 *     Nếu 1 trong 3 biến không phải kiểu number :
 *      - NaN NaN NaN
 *  4. Log kết quả ra man hình
 * 
 * OUTPUT : biến result3 
 */




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