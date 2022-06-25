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

    user.mercCalc();
    user.venusCalc();
    user.marsCalc();
    user.jupCalc();
    user.yearsLeft();

    let mercYearsLeft = user.mercuryYearsLeft
    const mercPosMessage = `you have ${mercYearsLeft} years to live on Mercury`;
    const mercNegMessage = `you have already surpassed your life expectancy by ${Math.abs(mercYearsLeft)} years on Mercury`;

    let venYearsLeft = user.venusYearsLeft
    const venPosMessage = `you have ${venYearsLeft} years to live on Venus`;
    const venNegMessage = `you have already surpassed your life expectancy by ${Math.abs(venYearsLeft)} years on Venus`;

    let marYearsLeft = user.marsYearsLeft;
    const marPosMessage = `you have ${marYearsLeft} years to live on Mars`;
    const marNegMessage = `you have already surpassed your life expectancy by ${Math.abs(marYearsLeft)} years on Mars`;

    let jYearsLeft = user.jupYearsLeft;
    const jPosMessage = `you have ${jYearsLeft} years to live on Jupiter`;
    const jNegMessage = `you have already surpassed your life expectancy by ${Math.abs(jYearsLeft)} years on Jupiter`;

    $('.output-container').slideDown();
    $('#merc').text(user.mercuryAge);
    $('#mercYrs').text(user.determineAgeSpan(mercYearsLeft,mercNegMessage,mercPosMessage));
    $('#venus').text(user.venusAge);
    $('#venYrs').text(user.determineAgeSpan(venYearsLeft,venNegMessage,venPosMessage));
    $('#mars').text(user.marsAge);
    $('#marYrs').text(user.determineAgeSpan(marYearsLeft,marNegMessage,marPosMessage));
    $('#jup').text(user.jupAge);
    $('#jYrs').text(user.determineAgeSpan(jYearsLeft,jNegMessage,jPosMessage));
});

