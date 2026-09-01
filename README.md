**Project Overview :

**Small-scale music event organizers lack a dedicated platform for event promotion and ticket sales, making it difficult for both organizers and attendees to engage with events efficiently. As a result, attendees often need to search across multiple sources, such as social media pages, venue websites and third-party channels, to discover events and purchase tickets. This fragmented process creates an inconsistent user experience and increases the effort required to find and attend events. For organizers, the absence of a centralized platform means that event promotion must be repeated for every new event. Limited marketing resources and reliance on individual promotional channels reduce event visibility and make it difficult to build a long-term audience base. To address these challenges, this project proposes a Music Festival Ticket Management System that centralizes event discovery, ticket purchasing and ticket management.  **


**Setup Instructions 

Prerequisites:
-Node.js
-MongoDB Atlas account
-Git

Installation:

cmd-
git clone https://github.com/henry7410/IFN636-MusicFestivalTicketSystem.git
cd backend
npm install

cd frontend
npm install



Configure Environment Variables

PORT=5001
MONGODB_URI=mongodb+srv://henry7410_db_user:VovdiSN2K6gY3vpd@henry.jp4ph3v.mongodb.net/?appName=henry
JWT_SECRET=2J8zqkP7VN6bxzg+Wy7DXCsd3Yx8mF3Bl0kch6HYtFs=


start server:
cmd-
npm start


**Architecture Summary

Frontend Layer:

Customer functions include-
Browse events
View event details
Purchase tickets
View purchased tickets
Transfer tickets
Cancel tickets

Organizer functions include-
Create events
View events
Edit events
Delete events

Backend Layer:

User authentication
Event management
Ticket booking management
Ticket transfer operations
Ticket cancellation operations

Database Layer:

The database stores-
User information
Event information
Booking records




**Known Limitations

The current implementation has the following limitations:

-No real payment gateway integration
-No QR code ticket validation
-No email or SMS notifications
-No event analytics or reporting dashboard
-No mobile application support
-Ticket transfers store recipient information only and do not maintain a complete transfer history log
-The system is designed for demonstration and assessment purposes


**Live Application

http://16.176.233.81

Deployment Environment:

AWS EC2
Ubuntu Linux
Node.js
MongoDB Atlas