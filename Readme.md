# React Native CRM App (Expo)

A mobile CRM (Customer Relationship Management) app built with **Expo + React Native**, featuring user authentication, customer management, and API integration. State is persisted using **Redux Persist**.

---

### 🖼 Screenshots
---
| Login Screen                  | Register Screen                    | Customers Screen                  | Add Customer Screen                 |
|-------------------------------|------------------------------------|-------------------------------|--------------------------------|
| ![List](screenshots/login.jpg)  | ![Details](screenshots/register.jpg)  | ![Edit](screenshots/customerlist.jpg)  | ![Add](screenshots/add_customer.jpg)    |

| Dashboard Screen                  | Leads Screen                    | Leads Details Screen                   | Customer Details Screen                 | Customers Screen                |
|-------------------------------|------------------------------------|-------------------------------|--------------------------------|---------------------------------|
| ![List](screenshots/dashboard.jpg)  | ![Details](screenshots/leads.jpg)  | ![Edit](screenshots/leads_details.jpg)  | ![Add](screenshots/customer_details.jpg)  | ![Add](screenshots/customerlist.jpg)  |


## 🚀 Setup Instructions (Expo)

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/expo-crm-app.git
cd expo-crm-app
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the App using Expo**

```bash
npx expo start
```

* This will open **Expo Dev Tools** in your browser.
* You can run the app on:

  * Android Emulator / iOS Simulator
  * Physical devices via Expo Go app


## 🛠️ Tech Stack

* **React Native** (via Expo) – Mobile app framework
* **Expo** – Development and deployment
* **Redux Toolkit** – State management
* **Redux Persist** – Persisted auth state
* **Axios** – API calls
* **React Navigation** – Navigation between screens

---

## 💡 Features Implemented

* **User Authentication:** Register and login with persisted state
* **Customer Management:** Fetch and display customers from API
* **Persistent Login:** Redux Persist ensures login state remains after app reload
* **Error and Loading Handling:** For API calls

---



