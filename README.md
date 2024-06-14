# Aahaar Parikalak

Aahaar Parikalak is a comprehensive meal tracking application designed to help users monitor their food intake, manage meals, and track nutritional information. The app provides an easy-to-use interface for adding, updating, and deleting food items, and calculates total calories consumed throughout the day. The data is saved in a MongoDB database and resets daily at midnight while retaining historical data.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Add, update, and delete food items for different meals.
- Calculate total calories for each meal.
- Persist data in MongoDB.
- Daily reset of food data at midnight.
- Retain historical data for analysis.

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/aahaar-parikalak.git
   ```

2. Navigate to the project directory:
   ```bash
   cd aahaar-parikalak
   ```

3. Install dependencies for the frontend:
   - Goto Aahar Parikalak master
   ```bash
   npm install
   ```

5. Install dependencies for the backend:
   ```bash
   cd ../backend
   pip install Flask
   pip install Flask-Cors
   ```


## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the interface to add food items for different meals.
3. The application will automatically calculate and display the total calories for each meal.
4. Data is saved in MongoDB and will persist across page refreshes.
5. At midnight, the food data will reset, but historical data is retained in the database.

## API Endpoints

### Fetch Meals

- **GET /api/meals**
  - Fetch all meals.

### Add Meal

- **POST /api/meals**
  - Add a new meal.
  - Request Body: `{ title: String, calories: Number, mealType: String }`

### Update Meal

- **PUT /api/meals/:id**
  - Update an existing meal by ID.
  - Request Body: `{ title: String, calories: Number, mealType: String }`

### Delete Meal

- **DELETE /api/meals/:id**
  - Delete a meal by ID.

## Project Structure

```
aahaar-parikalak/
├── backend/
│   ├── models/
│   │   └── mealModel.js
│   ├── routes/
│   │   └── mealRoutes.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   │   └── Data.jsx
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please contact [your-email@example.com](mailto:your-email@example.com).

---

Thank you for using Aahaar Parikalak! We hope it helps you achieve your nutritional goals.
