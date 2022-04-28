// SƠ ĐỒ 3 KHỐI

/**
 * INPUT :Nhập A B C
 * 
 * PROCESS : 
 *  1. Input : tạo các biến var numbarA, numberB, numberC
 *  2. Tạo var resutl chứa giá trị 3 biến sau khi sắp xếp
 *  3. Nếu người dùng nhập giá trị vào 3 biến là kiểu Number 
 *    ==> Dùng câu điều kiên if else để sắp xếp các biên theo thứ tự tăng dần
 *     Nếu ngươi dùng nhập vào 1 trong 3 biến không phải kiểu Number
 *    ==> NaN
 *  4. Log kết quả ra man hình
 * 
 * OUTPUT : biến result sau khi sắp xếp / NaN NaN NaN
 */

function sortUp()
{
    var numberAEl = +document.getElementById("numberA").value 
    var numberBEl = +document.getElementById("numberB").value
    var numberCEl = +document.getElementById("numberC").value

    var resultEl = document.getElementById("result")

    if(numberAEl >= numberBEl && numberAEl >= numberCEl)
    {
        if(numberBEl >= numberCEl)
        {
            resultEl.innerHTML = `${numberCEl}  <  ${numberBEl}  <  ${numberAEl}`
        }
        else if(numberBEl <= numberCEl)
        {
            resultEl.innerHTML = `${numberBEl}  <  ${numberCEl}  <  ${numberAEl}`
        }
    }
    else if(numberBEl >= numberAEl && numberBEl >= numberCEl)
    {
        if(numberAEl >= numberCEl)
        {
            resultEl.innerHTML = `${numberCEl}  <  ${numberAEl}  <  ${numberBEl}`
        }
        else if(numberAEl <= numberCEl)
        {
            resultEl.innerHTML = `${numberAEl}  <  ${numberCEl}  <  ${numberBEl}`
        }
    }
    else if(numberCEl >= numberBEl && numberCEl >= numberAEl)
    {
        if(numberBEl >= numberAEl)
        {
            resultEl.innerHTML = `${numberAEl}  <  ${numberBEl}  <  ${numberCEl}`
        }
        else if(numberBEl <= numberAEl)
        {
            resultEl.innerHTML = `${numberBEl} < ${numberAEl} < ${numberCEl}`
        }
    }
    else if(numberAEl = numberBEl = numberCEl)
    {
        resultEl.innerHTML = `${numberAEl} < ${numberBEl} < ${numberCEl}`
    }
    else
    {
        resultEl.innerHTML = `NaN NaN NaN`
    }
}