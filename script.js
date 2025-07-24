function calculate() {
    // Ambil nilai input
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const activity = parseFloat(document.getElementById('activity').value);

    // Hitung BMR (Mifflin-St Jeor Equation)
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // Hitung TDEE
    const tdee = bmr * activity;

    // Tampilkan hasil
    document.getElementById('bmr').textContent = bmr.toFixed(2);
    document.getElementById('tdee').textContent = tdee.toFixed(2);
    document.getElementById('result').classList.remove('hidden');
}