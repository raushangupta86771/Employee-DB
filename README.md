# Employee-DB

Creating a new employee:

POST /employees

Content-Type: application/json

{
    "fullName": "John Doe",
    "jobTitle": "Software Engineer",
    "phoneNumber": "555-555-5555",
    "email": "john.doe@example.com",
    "address": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "primaryEmergencyContact": {
        "name": "Jane Doe",
        "phoneNumber": "555-555-5556",
        "relationship": "Spouse"
    },
    "secondaryEmergencyContact": {
        "name": "Bob Smith",
        "phoneNumber": "555-555-5557",
        "relationship": "Friend"
    }
}


<img width="523" alt="image" src="https://user-images.githubusercontent.com/97835784/230972303-48a82408-b0f3-4f4e-a21a-dac5d81fa0e1.png">


<img width="523" alt="image" src="https://user-images.githubusercontent.com/97835784/230972333-efe40aa3-03b1-4e64-9a6f-d52c7df2a130.png">


Listing employees with pagination:

GET /employees?page=1&pageSize=5

<img width="523" alt="image" src="https://user-images.githubusercontent.com/97835784/230972374-5696b37d-62d5-4ca8-b523-ee9caa89aac4.png">


Getting a specific employee by ID:

GET /employees/1234567890abcdef12345678

<img width="523" alt="image" src="https://user-images.githubusercontent.com/97835784/230972414-d2defd84-08e2-4df5-bdfa-b9cd1200d61a.png">


Updating an employee by ID:
PATCH /employees/1234567890abcdef12345678
Content-Type: application/json

Request
{
    "phoneNumber": "122222",
    "primaryEmergencyContact": {
        "name": "Kumar",
        "phoneNumber": "323232",
        "relationship": "Father"
    }
}















Response

{
  "primaryEmergencyContact": {
    "name": "Kumar",
    "phoneNumber": "323232",
    "relationship": "Father"
  },
  "secondaryEmergencyContact": {
    "name": "Saksham",
    "phoneNumber": "555-555-5557",
    "relationship": "Friend"
  },
  "_id": "643453c0404298af4aa59e9d",
  "fullName": "Raushan Kumar",
  "jobTitle": "Software Intern",
  "phoneNumber": "122222",
  "email": "raushan@gmail.com",
  "address": "123 Main St",
  "city": "Anytown",
  "state": "CA",
  "__v": 0
}


<img width="523" alt="image" src="https://user-images.githubusercontent.com/97835784/230972466-4fbdc414-7d94-4eb7-bda6-213ba905e458.png">


Deleting an employee by ID:

DELETE /employees/1234567890abcdef12345678

<img width="523" alt="image" src="https://user-images.githubusercontent.com/97835784/230972518-97edb32d-236b-4070-97a6-a012135c40f2.png">
