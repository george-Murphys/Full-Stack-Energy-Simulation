# Full-Stack-Energy-Simulation Software Requirement Specification (SRS)

## 1. Introduction

### 1.1 Purpose
The **Full-Stack-Energy-Simulation** application provides a user-friendly platform for simulating and analyzing building energy consumption based on customizable parameters. The application is designed for energy consultants, architects, and facility managers to assess HVAC efficiency, building size, and insulation factors, enabling informed decisions for energy optimization.

### 1.2 Scope
This web-based application will:
- Allow users to input building parameters (e.g., size, HVAC specs, insulation, etc.).
- Calculate and display energy usage based on these parameters.
- Save simulation results in an **Oracle 23c AI database** for future reference.
- Provide a responsive and visually appealing UI for real-time and historical data visualization.
- Enable interaction via **REST APIs** to support extensibility.

### 1.3 Definitions, Acronyms, and Abbreviations
- **HVAC**: Heating, Ventilation, and Air Conditioning.  
- **REST API**: Representational State Transfer Application Programming Interface.  
- **Oracle 23c AI**: A relational database with AI-enabled capabilities.  
- **Frontend**: React.js.  
- **Backend**: Node.js with Express.js.

### 1.4 References
- [React.js Documentation](https://reactjs.org/).  
- [Node.js and Express.js Documentation](https://nodejs.org/).  
- [Oracle 23c AI Database Documentation](https://www.oracle.com/).  
- [Material-UI](https://mui.com/) and [Bootstrap](https://getbootstrap.com/) for UI styling.

---

## 2. Overall Description

### 2.1 Product Perspective
The application is a standalone product that integrates multiple technologies to provide simulation and data storage capabilities. It includes:
- **Frontend**: Developed in React.js for responsiveness and interactivity.  
- **Backend**: Built using Node.js and Express.js to handle logic and API interactions.  
- **Database**: Oracle 23c AI for persistent data storage and advanced querying.

### 2.2 Product Features
- **User Input Forms**: Accept building parameters like square footage, insulation type, and HVAC efficiency.  
- **Energy Simulation Engine**: Calculate estimated energy consumption using predefined formulas and algorithms.  
- **Data Visualization**: Display results in charts and tables.  
- **Historical Data Management**: Save and retrieve past simulations.  
- **API Support**: REST APIs for interaction with third-party systems or applications.

### 2.3 User Characteristics
The primary users will have a technical or semi-technical background, such as energy consultants or facility managers, with basic familiarity with web applications.

### 2.4 Constraints
- **Deployment**: Cloud platforms (frontend on Netlify/Vercel; backend on Heroku/Render; database on Oracle Cloud).  
- **Scalability**: The application must handle up to 1,000 concurrent users.  
- **Database**: Oracle 23c AI is a requirement for its AI-enabled querying capabilities.

### 2.5 Assumptions and Dependencies
- Oracle 23c AI is pre-configured and accessible.  
- Users have stable internet connections.

---

## 3. Specific Requirements

### 3.1 Functional Requirements
**Input Parameters**:
- Users must be able to input building area (sq. ft.), insulation type, and HVAC specifications.

**Energy Simulation**:
- The backend will use a mathematical model to calculate energy consumption.

**Data Visualization**:
- Results displayed as charts (e.g., bar, line) and tables.  
- Responsive design for desktop and mobile devices.

**Data Persistence**:
- Simulation results stored in Oracle 23c AI database with proper indexing for fast retrieval.

**API**:
- REST APIs to fetch, add, update, and delete simulation records.

### 3.2 Non-Functional Requirements
- **Performance**: Response time < 2 seconds for user actions.  
- **Scalability**: Support up to 1,000 concurrent users.  
- **Security**: User authentication and secure REST APIs with JWT.  
- **Maintainability**: Modular architecture to facilitate future enhancements.

### 3.3 Interface Requirements
- **Frontend**:  
  - React.js with Material-UI or Bootstrap for styling.  
  - Responsive design compatible with desktop and mobile screens.  

- **Backend**:  
  - Node.js with Express.js for API handling and business logic.  

- **Database**:  
  - Oracle 23c AI database with tables for user data, simulations, and historical records.

---

## 4. System Design Description

### 4.1 Architecture Diagram
- **Frontend**: React.js (UI & visualization).  
- **Backend**: Node.js + Express.js (business logic, APIs).  
- **Database**: Oracle 23c AI (data storage).

### 4.2 Deployment Diagram
- **Frontend**: Deployed on Netlify/Vercel.  
- **Backend**: Deployed on Heroku/Render.  
- **Database**: Hosted on Oracle Cloud.

---

## 5. Appendices

### Mathematical Model for Simulation
**Energy Consumption** =  
**(Building Area × HVAC Coefficient) / Insulation Factor**

### API Endpoints
- **POST /simulate**: Run a simulation.  
- **GET /history**: Fetch past simulations.  
- **DELETE /history/:id**: Delete a simulation.
