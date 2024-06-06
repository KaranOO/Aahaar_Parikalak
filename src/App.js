// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//     const [formData, setFormData] = useState({
//         weight: '',
//         desired_weight: '',
//         height: '',
//         age: '',
//         gender: 'male',
//         activity_level: 'sedentary',
//         days: ''
//     });

//     const [result, setResult] = useState(null);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://127.0.0.1:5000/api/calculate', formData)
//             .then(response => {
//                 setResult(response.data.target_daily_calorie_intake);
//             })
//             .catch(error => {
//                 console.error('There was an error!', error);
//             });
//     };

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>AAHAAR PARIKALAK</h1>
//                 <form onSubmit={handleSubmit}>
//                     <input type="number" name="weight" placeholder="Current Weight (kg)" value={formData.weight} onChange={handleChange} required />
//                     <input type="number" name="desired_weight" placeholder="Desired Weight (kg)" value={formData.desired_weight} onChange={handleChange} required />
//                     <input type="number" name="height" placeholder="Height (cm)" value={formData.height} onChange={handleChange} required />
//                     <input type="number" name="age" placeholder="Age (years)" value={formData.age} onChange={handleChange} required />
//                     <select name="gender" value={formData.gender} onChange={handleChange}>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                     </select>
//                     <select name="activity_level" value={formData.activity_level} onChange={handleChange}>
//                         <option value="sedentary">Sedentary</option>
//                         <option value="lightly active">Lightly Active</option>
//                         <option value="moderately active">Moderately Active</option>
//                         <option value="very active">Very Active</option>
//                         <option value="super active">Super Active</option>
//                     </select>
//                     <input type="number" name="days" placeholder="Days to Achieve Goal" value={formData.days} onChange={handleChange} required />
//                     <button type="submit">Calculate</button>
//                 </form>
//                 {result && (
//                     <div>
//                         <h2>Target Daily Calorie Intake:</h2>
//                         <p>{result.toFixed(2)} kcal</p>
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }

// export default App;


// src/App.js CODE 2 ----------------------------------------------------
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [weight, setWeight] = useState('');
//   const [desiredWeight, setDesiredWeight] = useState('');
//   const [height, setHeight] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [activityLevel, setActivityLevel] = useState('');
//   const [days, setDays] = useState('');
//   const [targetCalories, setTargetCalories] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://127.0.0.1:5000/api/calculate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           weight,
//           desired_weight: desiredWeight,
//           height,
//           age,
//           gender,
//           activity_level: activityLevel,
//           days,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setTargetCalories(data.target_calories);
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Calorie Predictor</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//           placeholder="Current Weight (kg)"
//           required
//         />
//         <input
//           type="number"
//           value={desiredWeight}
//           onChange={(e) => setDesiredWeight(e.target.value)}
//           placeholder="Desired Weight (kg)"
//           required
//         />
//         <input
//           type="number"
//           value={height}
//           onChange={(e) => setHeight(e.target.value)}
//           placeholder="Height (cm)"
//           required
//         />
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           placeholder="Age (years)"
//           required
//         />
//         <select
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           required
//         >
//           <option value="">Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//         <select
//           value={activityLevel}
//           onChange={(e) => setActivityLevel(e.target.value)}
//           required
//         >
//           <option value="">Activity Level</option>
//           <option value="sedentary">Sedentary</option>
//           <option value="lightly active">Lightly Active</option>
//           <option value="moderately active">Moderately Active</option>
//           <option value="very active">Very Active</option>
//           <option value="super active">Super Active</option>
//         </select>
//         <input
//           type="number"
//           value={days}
//           onChange={(e) => setDays(e.target.value)}
//           placeholder="Days to Achieve Goal"
//           required
//         />
//         <button type="submit">Predict</button>
//       </form>
//       {targetCalories && <h2>Target Daily Calorie Intake: {targetCalories} kcal</h2>}
//     </div>
//   );
// }

// export default App;


//CODE 3------------------------------------------
// src/App.js
import React, { useState } from 'react';
import './App.css';


function App() {
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

    try {
      const response = await fetch('http://127.0.0.1:5000/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          weight: parseFloat(weight),
          desired_weight: parseFloat(desiredWeight),
          height: parseFloat(height),
          age: parseInt(age),
          gender,
          activity_level: activityLevel,
          days: parseInt(days),
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setTargetCalories(data.target_calories);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="App">
      <h1>Calorie Predictor</h1>
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

export default App;
