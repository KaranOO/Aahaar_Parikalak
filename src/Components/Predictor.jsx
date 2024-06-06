import React, { useState } from 'react';

function Predictor() {
  const [weight, setWeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [days, setDays] = useState('');
  const [targetCalories, setTargetCalories] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        weight,
        desired_weight: desiredWeight,
        height,
        age,
        gender,
        activity_level: activityLevel,
        days,
      }),
    });

    const data = await response.json();
    setTargetCalories(data.target_calories);
  };

  return (
    <div>
      <h1>Predictor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Current Weight (kg)"
          required
        />
        <input
          type="number"
          value={desiredWeight}
          onChange={(e) => setDesiredWeight(e.target.value)}
          placeholder="Desired Weight (kg)"
          required
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height (cm)"
          required
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age (years)"
          required
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          required
        >
          <option value="">Activity Level</option>
          <option value="sedentary">Sedentary</option>
          <option value="lightly active">Lightly Active</option>
          <option value="moderately active">Moderately Active</option>
          <option value="very active">Very Active</option>
          <option value="super active">Super Active</option>
        </select>
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="Days to Achieve Goal"
          required
        />
        <button type="submit">Predict</button>
      </form>
      {targetCalories && <h2>Target Daily Calorie Intake: {targetCalories} kcal</h2>}
    </div>
  );
}

export default Predictor;
