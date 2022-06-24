import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/calculator';

 function dobCalc(input) {
    let dob = new Date(input)
    let month_diff = Date.now() - dob.getTime();  
    let age_dt = new Date(month_diff);   
    let year = age_dt.getUTCFullYear();   
    let age = Math.abs(year - 1970); 
    return age;
 }


$('form#ageForm').submit(function(event) {
    const dateControl = $('input[type="date"]').val();
    const genderInput = $("input:radio[name=gender]:checked").val();
    let user = new Calculator(dobCalc(dateControl),genderInput);
    user.mercCalc();
    user.venusCalc();
    user.marsCalc();
    user.jupCalc();
    user.yearsLeft();
    console.log(dateControl);
    console.log(genderInput);
    console.log(user);


}) 

