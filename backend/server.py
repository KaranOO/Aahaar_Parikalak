from flask import Flask, request, jsonify
from flask_cors import CORS


app=Flask(__name__)
CORS(app)

def calculate_target_calorie_intake(weight, desired_weight, height, age, gender, activity_level, days):
    weight=float(weight)
    desired_weight = float(desired_weight)
    height = float(height)
    age = int(age)
    days= int(days)
    
    if gender =='male':
        BMR=(10 * weight) + (6.25 * height)-(5 * age) + 5
    else:
        BMR=(10 * weight) + ( 6.25* height)-(5 * age) - 161
    activity_factors = {'sedentary: 1.2, lightly active': 1.375,'moderately active': 1.55, 'very active': 1.725,'super active': 1.9}

    TDEE = BMR*activity_factors[activity_level]
    daily_calorie_change = ((desired_weight-weight)*7700)/days

    if desired_weight > weight: 
        target_daily_calorie_intake = TDEE + daily_calorie_change
    else:
        target_daily_calorie_intake = TDEE - daily_calorie_change

    return int(target_daily_calorie_intake)


@app.route('/api/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    weight = data['weight']
    desired_weight= data['desired_weight']
    height= data['height']
    age= data['age']
    gender =data['gender']
    activity_level = data['activity_level']
    days =data['days']
    target_calories = calculate_target_calorie_intake(weight, desired_weight, height , age, gender, activity_level, days)
    return jsonify({'target_calories': target_calories})

if __name__ =='__main__':
    app.run(debug=True)

