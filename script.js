function calculateConsumption() {
    const watts = document.getElementById("watts").value;
    const hours = document.getElementById("hours").value;
    const days = document.getElementById("days").value;

    if (watts && hours && days) {
        const totalConsumption = (watts * hours * days) / 1000; // in kWh
        document.getElementById("result").innerText = `Total Energy Consumption: ${totalConsumption.toFixed(2)} kWh`;
    } else {
        document.getElementById("result").innerText = 'Please fill in all fields.';
    }
}
