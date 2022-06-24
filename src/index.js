import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/calculator';

 function dobCalc(input) {
    let dob = new Date(input);
    let month_diff = Date.now() - dob.getTime();  
    let age_dt = new Date(month_diff);   
    let year = age_dt.getUTCFullYear();   
    let age = Math.abs(year - 1970); 
    return age;
 }

$('form#ageForm').submit(function(event) {
    event.preventDefault();
    const dateControl = $('input[type="date"]').val();
    const genderInput = $("input:radio[name=gender]:checked").val();
    let user = new Calculator(dobCalc(dateControl),genderInput);
    const mercYearsLeft = user.mercuryYearsLeft;
    const mercPosMessage = `you have ${mercYearsLeft} years to live on Mercury`;
    const mercNegMessage = `you have already surpassed your life expectancy by ${mercYearsLeft} years on Mercury`;
    // const venYearsLeft = user.venusYearsLeft;
    // const marYearsLeft = user.marsYearsLeft;
    // const jYearsLeft = user.jupYearsLeft;
    
    user.mercCalc();
    user.venusCalc();
    user.marsCalc();
    user.jupCalc();
    user.yearsLeft();
    console.log(user.mercuryYearsLeft);
    $('.output-container').slideDown();
    $('#merc').text(user.mercuryAge);
    $('#mercYrs').text(user.determineAgeSpan(mercYearsLeft,mercNegMessage,mercPosMessage));
    $('#venus').text(user.venusAge);
    $('#mars').text(user.marsAge);
    $('#jup').text(user.jupAge);
    


    
    

    // console.log(dateControl);
    // console.log(genderInput);
    // console.log(user);
});

