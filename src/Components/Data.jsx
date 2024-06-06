// import React, { useState } from 'react';
// import '../Data.css';

// const initialMeals = {
//   breakfast: [],
//   midMorning: [],
//   lunch: [],
//   midAfternoon: [],
//   eveningSnacks: [],
//   dinner: [],
// };

// const Data = () => {
//   const [meals, setMeals] = useState(initialMeals);
//   const [newFood, setNewFood] = useState({ title: '', calories: '', mealType: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewFood(prevFood => ({
//       ...prevFood,
//       [name]: value,
//     }));
//   };

//   const handleAddFood = (mealType) => {
//     const foodTitle = newFood.title;
//     const foodCalories = parseInt(newFood.calories, 10);
//     if (foodTitle && !isNaN(foodCalories)) {
//       setMeals(prevMeals => ({
//         ...prevMeals,
//         [mealType]: [
//           ...prevMeals[mealType],
//           { title: foodTitle, calories: foodCalories }
//         ]
//       }));
//       setNewFood({ title: '', calories: '', mealType: '' });
//     }
//   };

//   const deleteFood = (mealType, index) => {
//     setMeals(prevMeals => ({
//       ...prevMeals,
//       [mealType]: prevMeals[mealType].filter((_, i) => i !== index)
//     }));
//   };

//   const updateFood = (mealType, index) => {
//     const foodTitle = prompt("Update the food title:", meals[mealType][index].title);
//     const foodCalories = parseInt(prompt("Update the calories:", meals[mealType][index].calories), 10);
//     if (foodTitle && !isNaN(foodCalories)) {
//       setMeals(prevMeals => ({
//         ...prevMeals,
//         [mealType]: prevMeals[mealType].map((food, i) =>
//           i === index ? { title: foodTitle, calories: foodCalories } : food
//         )
//       }));
//     }
//   };

//   const calculateTotalCalories = (mealType) => {
//     return meals[mealType].reduce((total, food) => total + food.calories, 0);
//   };

//   return (
//     <div className="meals-container">
//       {Object.keys(meals).map(mealType => (
//         <div key={mealType} className="meal-section">
//           <div className="meal-header">
//             <h2>{mealType.charAt(0).toUpperCase() + mealType.slice(1)} - {calculateTotalCalories(mealType)} cal</h2>
//             <button className="add-food-btn" onClick={() => setNewFood({ ...newFood, mealType })}>+</button>
//           </div>
//           <ul>
//             {meals[mealType].map((food, index) => (
//               <li key={index}>
//                 {index + 1}. {food.title} - {food.calories} cal
//                 <button onClick={() => updateFood(mealType, index)}>Update</button>
//                 <button onClick={() => deleteFood(mealType, index)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//           {newFood.mealType === mealType && (
//             <div className="add-food-form">
//               <input
//                 type="text"
//                 name="title"
//                 value={newFood.title}
//                 onChange={handleInputChange}
//                 placeholder="Food Title"
//               />
//               <input
//                 type="number"
//                 name="calories"
//                 value={newFood.calories}
//                 onChange={handleInputChange}
//                 placeholder="Calories"
//               />
//               <button onClick={() => handleAddFood(mealType)}>Add</button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Data;


//CODE 2
// import React, { useState } from 'react';
// import '../Data.css';

// const initialMeals = {
//   breakfast: [],
//   midMorning: [],
//   lunch: [],
//   midAfternoon: [],
//   eveningSnacks: [],
//   dinner: [],
// };

// const Data = () => {
//   const [meals, setMeals] = useState(initialMeals);
//   const [newFood, setNewFood] = useState({ title: '', calories: '', mealType: '' });
//   const [updateIndex, setUpdateIndex] = useState(null);
//   const [updateFood, setUpdateFood] = useState({ title: '', calories: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewFood(prevFood => ({
//       ...prevFood,
//       [name]: value,
//     }));
//   };

//   const handleUpdateInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdateFood(prevFood => ({
//       ...prevFood,
//       [name]: value,
//     }));
//   };

//   const handleAddFood = (mealType) => {
//     const foodTitle = newFood.title;
//     const foodCalories = parseInt(newFood.calories, 10);
//     if (foodTitle && !isNaN(foodCalories)) {
//       setMeals(prevMeals => ({
//         ...prevMeals,
//         [mealType]: [
//           ...prevMeals[mealType],
//           { title: foodTitle, calories: foodCalories }
//         ]
//       }));
//       setNewFood({ title: '', calories: '', mealType: '' });
//     }
//   };

//   const deleteFood = (mealType, index) => {
//     setMeals(prevMeals => ({
//       ...prevMeals,
//       [mealType]: prevMeals[mealType].filter((_, i) => i !== index)
//     }));
//   };

//   const openUpdateModal = (index) => {
//     setUpdateIndex(index);
//     setUpdateFood(meals[updateIndex]);
//   };

//   const updateFoodItem = () => {
//     const updatedFood = { ...updateFood };
//     setMeals(prevMeals => ({
//       ...prevMeals,
//       [Object.keys(prevMeals)[updateIndex]]: prevMeals[Object.keys(prevMeals)[updateIndex]].map((food, i) =>
//         i === updateIndex ? updatedFood : food
//       )
//     }));
//     setUpdateIndex(null);
//     setUpdateFood({ title: '', calories: '' });
//   };

//   const calculateTotalCalories = (mealType) => {
//     return meals[mealType].reduce((total, food) => total + food.calories, 0);
//   };

//   return (
//     <div className="meals-container">
//       {Object.keys(meals).map((mealType, mealIndex) => (
//         <div key={mealType} className="meal-section">
//           <div className="meal-header">
//             <h2>{mealType.charAt(0).toUpperCase() + mealType.slice(1)} - {calculateTotalCalories(mealType)} cal</h2>
//             <button className="add-food-btn" onClick={() => setNewFood({ ...newFood, mealType })}>+</button>
//           </div>
//           <ul>
//             {meals[mealType].map((food, index) => (
//               <li key={index}>
//                 {index + 1}. {food.title} - {food.calories} cal
//                 <button onClick={() => openUpdateModal(index)}>Update</button>
//                 <button onClick={() => deleteFood(mealType, index)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//           {newFood.mealType === mealType && (
//             <div className="add-food-form">
//               <input
//                 type="text"
//                 name="title"
//                 value={newFood.title}
//                 onChange={handleInputChange}
//                 placeholder="Food Title"
//               />
//               <input
//                 type="number"
//                 name="calories"
//                 value={newFood.calories}
//                 onChange={handleInputChange}
//                 placeholder="Calories"
//               />
//               <button onClick={() => handleAddFood(mealType)}>Add</button>
//             </div>
//           )}
//           {updateIndex === mealIndex && (
//             <div className="update-food-form">
//               <input
//                 type="text"
//                 name="title"
//                 value={updateFood.title}
//                 onChange={handleUpdateInputChange}
//                 placeholder="Food Title"
//               />
//               <input
//                 type="number"
//                 name="calories"
//                 value={updateFood.calories}
//                 onChange={handleUpdateInputChange}
//                 placeholder="Calories"
//               />
//               <button onClick={updateFoodItem}>Update</button>
//               <button onClick={() => setUpdateIndex(null)}>Cancel</button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Data;

//CODE 3
// import React, { useState } from 'react';
// import '../Data.css';

// const initialMeals = {
//   breakfast: [],
//   midMorning: [],
//   lunch: [],
//   midAfternoon: [],
//   eveningSnacks: [],
//   dinner: [],
// };

// const Data = () => {
//   const [meals, setMeals] = useState(initialMeals);
//   const [newFood, setNewFood] = useState({ title: '', calories: '', mealType: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewFood(prevFood => ({
//       ...prevFood,
//       [name]: value,
//     }));
//   };

//   const handleAddFood = (mealType) => {
//     const foodTitle = newFood.title;
//     const foodCalories = parseInt(newFood.calories, 10);
//     if (foodTitle && !isNaN(foodCalories)) {
//       setMeals(prevMeals => ({
//         ...prevMeals,
//         [mealType]: [
//           ...prevMeals[mealType],
//           { title: foodTitle, calories: foodCalories }
//         ]
//       }));
//       setNewFood({ title: '', calories: '', mealType: '' });
//     }
//   };

//   const deleteFood = (mealType, index) => {
//     setMeals(prevMeals => ({
//       ...prevMeals,
//       [mealType]: prevMeals[mealType].filter((_, i) => i !== index)
//     }));
//   };

//   const updateFood = (mealType, index) => {
//     const foodTitle = prompt("Update the food title:", meals[mealType][index].title);
//     const foodCalories = parseInt(prompt("Update the calories:", meals[mealType][index].calories), 10);
//     if (foodTitle && !isNaN(foodCalories)) {
//       setMeals(prevMeals => ({
//         ...prevMeals,
//         [mealType]: prevMeals[mealType].map((food, i) =>
//           i === index ? { title: foodTitle, calories: foodCalories } : food
//         )
//       }));
//     }
//   };

//   const calculateTotalCalories = (mealType) => {
//     return meals[mealType].reduce((total, food) => total + food.calories, 0);
//   };

//   return (
//     <div className="meals-container">
//       {Object.keys(meals).map(mealType => (
//         <div key={mealType} className="meal-section">
//           <div className="meal-header">
//             <h5 className="meal-title">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h5>
//             <div className="meal-info">
//               <span className="meal-calories">{calculateTotalCalories(mealType)} cal</span>
//               <button className="add-food-btn" onClick={() => setNewFood({ ...newFood, mealType })}>+</button>
//             </div>
//           </div>
//           <ul>
//             {meals[mealType].map((food, index) => (
//               <li key={index}>
//                 {index + 1}. {food.title} - {food.calories} cal
//                 <button onClick={() => updateFood(mealType, index)}>Update</button>
//                 <button onClick={() => deleteFood(mealType, index)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//           {newFood.mealType === mealType && (
//             <div className="add-food-form">
//               <input
//                 type="text"
//                 name="title"
//                 value={newFood.title}
//                 onChange={handleInputChange}
//                 placeholder="Food Title"
//               />
//               <input
//                 type="number"
//                 name="calories"
//                 value={newFood.calories}
//                 onChange={handleInputChange}
//                 placeholder="Calories"
//               />
//               <button onClick={() => handleAddFood(mealType)}>Add</button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Data;

//CODE 4   - Default ok working
// import React, { useState } from 'react';
// import '../Data.css';

// const initialMeals = {
//   breakfast: [],
//   midMorning: [],
//   lunch: [],
//   midAfternoon: [],
//   eveningSnacks: [],
//   dinner: [],
// };

// const Data = () => {
//   const [meals, setMeals] = useState(initialMeals);
//   const [newFood, setNewFood] = useState({ title: '', calories: '', mealType: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewFood(prevFood => ({
//       ...prevFood,
//       [name]: value,
//     }));
//   };

//   const handleAddFood = (mealType) => {
//     const foodTitle = newFood.title;
//     const foodCalories = parseInt(newFood.calories, 10);
//     if (foodTitle && !isNaN(foodCalories)) {
//       setMeals(prevMeals => ({
//         ...prevMeals,
//         [mealType]: [
//           ...prevMeals[mealType],
//           { title: foodTitle, calories: foodCalories }
//         ]
//       }));
//       setNewFood({ title: '', calories: '', mealType: '' });
//     }
//   };

//   const deleteFood = (mealType, index) => {
//     setMeals(prevMeals => ({
//       ...prevMeals,
//       [mealType]: prevMeals[mealType].filter((_, i) => i !== index)
//     }));
//   };

//   const updateFood = (mealType, index) => {
//     const foodTitle = prompt("Update the food title:", meals[mealType][index].title);
//     const foodCalories = parseInt(prompt("Update the calories:", meals[mealType][index].calories), 10);
//     if (foodTitle && !isNaN(foodCalories)) {
//       setMeals(prevMeals => ({
//         ...prevMeals,
//         [mealType]: prevMeals[mealType].map((food, i) =>
//           i === index ? { title: foodTitle, calories: foodCalories } : food
//         )
//       }));
//     }
//   };

//   const calculateTotalCalories = (mealType) => {
//     return meals[mealType].reduce((total, food) => total + food.calories, 0);
//   };

//   return (
//     <div className="meals-container">
//       {Object.keys(meals).map(mealType => (
//         <div key={mealType} className={`meal-section ${mealType}`}>
//           <div className="meal-header">
//             <h5 className="meal-title">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h5>
//             <div className="meal-info">
//               <span className="meal-calories">{calculateTotalCalories(mealType)} cal</span>
//               <button className="add-food-btn" onClick={() => setNewFood({ ...newFood, mealType })}>+</button>
//             </div>
//           </div>
//           <ul>
//             {meals[mealType].map((food, index) => (
//               <li key={index}>
//                 {index + 1}. {food.title} - {food.calories} cal
//                 <button onClick={() => updateFood(mealType, index)}>Update</button>
//                 <button onClick={() => deleteFood(mealType, index)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//           {newFood.mealType === mealType && (
//             <div className="add-food-form">
//               <input
//                 type="text"
//                 name="title"
//                 value={newFood.title}
//                 onChange={handleInputChange}
//                 placeholder="Food Title"
//               />
//               <input
//                 type="number"
//                 name="calories"
//                 value={newFood.calories}
//                 onChange={handleInputChange}
//                 placeholder="Calories"
//               />
//               <button onClick={() => handleAddFood(mealType)}>Add</button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Data;

// Code 5-----------------
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../Data.css';

// const initialMeals = {
//   breakfast: [],
//   midMorning: [],
//   lunch: [],
//   midAfternoon: [],
//   eveningSnacks: [],
//   dinner: [],
// };

// const Data = () => {
//   const [meals, setMeals] = useState(initialMeals);
//   const [newFood, setNewFood] = useState({ title: '', calories: '', mealType: '' });

//   useEffect(() => {
//     fetchMeals();
//   }, []);

//   const fetchMeals = async () => {
//     const response = await axios.get('http://localhost:5000/api/meals');
//     const mealsFromDB = response.data.reduce((acc, meal) => {
//       acc[meal.mealType].push({ title: meal.title, calories: meal.calories });
//       return acc;
//     }, initialMeals);
//     setMeals(mealsFromDB);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewFood(prevFood => ({
//       ...prevFood,
//       [name]: value,
//     }));
//   };

//   const handleAddFood = async (mealType) => {
//     const foodTitle = newFood.title;
//     const foodCalories = parseInt(newFood.calories, 10);
//     if (foodTitle && !isNaN(foodCalories)) {
//       const newMeal = { title: foodTitle, calories: foodCalories, mealType };
//       await axios.post('http://localhost:5000/api/meals', newMeal);
//       setMeals(prevMeals => ({
//         ...prevMeals,
//         [mealType]: [
//           ...prevMeals[mealType],
//           { title: foodTitle, calories: foodCalories }
//         ]
//       }));
//       setNewFood({ title: '', calories: '', mealType: '' });
//     }
//   };

//   const deleteFood = async (mealType, index) => {
//     const mealToDelete = meals[mealType][index];
//     const response = await axios.get('http://localhost:5000/api/meals');
//     const mealFromDB = response.data.find(meal => meal.title === mealToDelete.title && meal.calories === mealToDelete.calories && meal.mealType === mealType);
//     if (mealFromDB) {
//       await axios.delete(`http://localhost:5000/api/meals/${mealFromDB._id}`);
//       setMeals(prevMeals => ({
//         ...prevMeals,
//         [mealType]: prevMeals[mealType].filter((_, i) => i !== index)
//       }));
//     }
//   };

//   const updateFood = async (mealType, index) => {
//     const foodTitle = prompt("Update the food title:", meals[mealType][index].title);
//     const foodCalories = parseInt(prompt("Update the calories:", meals[mealType][index].calories), 10);
//     if (foodTitle && !isNaN(foodCalories)) {
//       const mealToUpdate = meals[mealType][index];
//       const response = await axios.get('http://localhost:5000/api/meals');
//       const mealFromDB = response.data.find(meal => meal.title === mealToUpdate.title && meal.calories === mealToUpdate.calories && meal.mealType === mealType);
//       if (mealFromDB) {
//         await axios.put(`http://localhost:5000/api/meals/${mealFromDB._id}`, { title: foodTitle, calories: foodCalories });
//         setMeals(prevMeals => ({
//           ...prevMeals,
//           [mealType]: prevMeals[mealType].map((food, i) =>
//             i === index ? { title: foodTitle, calories: foodCalories } : food
//           )
//         }));
//       }
//     }
//   };

//   const calculateTotalCalories = (mealType) => {
//     return meals[mealType].reduce((total, food) => total + food.calories, 0);
//   };

//   return (
//     <div className="meals-container">
//       {Object.keys(meals).map(mealType => (
//         <div key={mealType} className={`meal-section ${mealType}`}>
//           <div className="meal-header">
//             <h5 className="meal-title">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h5>
//             <div className="meal-info">
//               <span className="meal-calories">{calculateTotalCalories(mealType)} cal</span>
//               <button className="add-food-btn" onClick={() => setNewFood({ ...newFood, mealType })}>+</button>
//             </div>
//           </div>
//           <ul>
//             {meals[mealType].map((food, index) => (
//               <li key={index}>
//                 {index + 1}. {food.title} - {food.calories} cal
//                 <button onClick={() => updateFood(mealType, index)}>Update</button>
//                 <button onClick={() => deleteFood(mealType, index)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//           {newFood.mealType === mealType && (
//             <div className="add-food-form">
//               <input
//                 type="text"
//                 name="title"
//                 value={newFood.title}
//                 onChange={handleInputChange}
//                 placeholder="Food Title"
//               />
//               <input
//                 type="number"
//                 name="calories"
//                 value={newFood.calories}
//                 onChange={handleInputChange}
//                 placeholder="Calories"
//               />
//               <button onClick={() => handleAddFood(mealType)}>Add</button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Data;


// Code 5 icon experiment
import React, { useState } from 'react';
import '../Data.css';

const initialMeals = {
  breakfast: [],
  midMorning: [],
  lunch: [],
  midAfternoon: [],
  eveningSnacks: [],
  dinner: [],
};

const Data = () => {
  const [meals, setMeals] = useState(initialMeals);
  const [newFood, setNewFood] = useState({ title: '', calories: '', mealType: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFood(prevFood => ({
      ...prevFood,
      [name]: value,
    }));
  };

  const handleAddFood = (mealType) => {
    const foodTitle = newFood.title;
    const foodCalories = parseInt(newFood.calories, 10);
    if (foodTitle && !isNaN(foodCalories)) {
      setMeals(prevMeals => ({
        ...prevMeals,
        [mealType]: [
          ...prevMeals[mealType],
          { title: foodTitle, calories: foodCalories }
        ]
      }));
      setNewFood({ title: '', calories: '', mealType: '' });
    }
  };

  const deleteFood = (mealType, index) => {
    setMeals(prevMeals => ({
      ...prevMeals,
      [mealType]: prevMeals[mealType].filter((_, i) => i !== index)
    }));
  };

  const updateFood = (mealType, index) => {
    const foodTitle = prompt("Update the food title:", meals[mealType][index].title);
    const foodCalories = parseInt(prompt("Update the calories:", meals[mealType][index].calories), 10);
    if (foodTitle && !isNaN(foodCalories)) {
      setMeals(prevMeals => ({
        ...prevMeals,
        [mealType]: prevMeals[mealType].map((food, i) =>
          i === index ? { title: foodTitle, calories: foodCalories } : food
        )
      }));
    }
  };

  const calculateTotalCalories = (mealType) => {
    return meals[mealType].reduce((total, food) => total + food.calories, 0);
  };

  return (
    <div className="meals-container">
      {Object.keys(meals).map(mealType => (
        <div key={mealType} className={`meal-section ${mealType}`}>
          <div className="meal-header">
            <h5 className="meal-title">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h5>
            <div className="meal-info">
              <span className="meal-calories">{calculateTotalCalories(mealType)} cal</span>
              <span className="add-food-btn" onClick={() => setNewFood({ ...newFood, mealType })}>
                <i className="fas fa-plus"></i>
              </span>
            </div>
          </div>
          <ul>
            {meals[mealType].map((food, index) => (
              <li key={index}>
                <span>{index + 1}. {food.title} - {food.calories} cal</span>
                <span className="food-actions">
                  <i className="fas fa-edit" onClick={() => updateFood(mealType, index)}></i>
                  <i className="fas fa-trash-alt" onClick={() => deleteFood(mealType, index)}></i>
                </span>
              </li>
            ))}
          </ul>
          {newFood.mealType === mealType && (
            <div className="add-food-form">
              <input
                type="text"
                name="title"
                value={newFood.title}
                onChange={handleInputChange}
                placeholder="Food Title"
              />
              <input
                type="number"
                name="calories"
                value={newFood.calories}
                onChange={handleInputChange}
                placeholder="Calories"
              />
              <button onClick={() => handleAddFood(mealType)}>Add</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Data;
