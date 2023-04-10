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
