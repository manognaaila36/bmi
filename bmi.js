function calculateBMI() {
    const mass = parseFloat(prompt('Enter your mass in Kg?'));
    const height = parseFloat(prompt('Enter your height in cm?'));

    const bmi = mass / ((height / 100) ** 2);

    if (bmi < 18.5) {
        alert('You are underweight');
    } else if (bmi < 25) {
        alert('You are normal weight');
    } else if (bmi < 30) {
        alert('You are overweight');
    } else {
        alert('You are obese');
    }
}
function askToContinue() {
    return prompt('Do you wish to continue? (yes/no)').toLowerCase() === 'yes';
}
do {
    calculateBMI();
} while (askToContinue());