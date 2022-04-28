// SƠ ĐỒ 3 KHỐI

/**
 * INPUT :nhập A B C
 * 
 * PROCESS : 
 *  1. Input : tạo các biến var numA, numB, numC
 *  2. Tạo var evenEl = 0 lưu các số chẵn, var oddEl = 0 lưu các số lẻ
 *         var resutl3 chứa giá trị sô chẳn/lẻ sau khi sắp xếp
 *  3. Người dùng nhập giá trị vào 3 biến numA, numB, numC
 *     Nếu cả 3 biến đều là kiểu number : 
 *       - numA,numB,numC % 10 = 0 ==> tăng giá trị biến EvenEl thêm 1
 *       - numA, numB, numC % 10 # 0 ==> tăng giá trị biến oddEl thêm 1
 *     Nếu 1 trong 3 biến không phải kiểu number :
 *      - NaN NaN NaN
 *  4. Log kết quả ra man hình
 * 
 * OUTPUT : biến result3 
 */



function sortEven()
{
    var numA = +document.getElementById("numA").value 
    var numB = +document.getElementById("numB").value
    var numC = +document.getElementById("numC").value

    var evenEl = 0
    var oddEl = 0

    var result3 = document.getElementById("result3")
    if(isNaN(numA) === true || isNaN(numB) === true || isNaN(numC) === true)
    {
        result3.innerHTML = `NaN NaN NaN`  
    }
    else{
        if(numA % 2 == 0 )
        {
            evenEl += 1
        }
        else{
            oddEl += 1
        }
        if(numB % 2 == 0)
        {
            evenEl += 1
        }
        else{
            oddEl += 1
        }
        if(numC % 2 == 0)
        {
            evenEl += 1
        }
        else{
            oddEl += 1
        }
        result3.innerHTML = `Có : ${evenEl} số chẳn và ${oddEl} số lẻ`
    }

    
}