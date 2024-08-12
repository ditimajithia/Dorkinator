
# Dorkinator

Dorkinator is a web-based automated Google Dorking tool designed to enhance the cybersecurity posture of organizations by simplifying the information-gathering phase of penetration testing. This tool automates complex Google Dorking queries, making it easier for cybersecurity professionals to identify vulnerabilities in websites and databases. Dorkinator was developed as part of an MSc research project in Cybersecurity at the National College of Ireland.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Survey and Evaluation](#survey-and-evaluation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Automated Google Dorking:** Execute complex search queries automatically to uncover sensitive information.
- **User-Friendly Interface:** Simple and intuitive UI, accessible for users with varying levels of expertise.
- **Real-Time Data Processing:** Fast and efficient processing of queries with real-time results.
- **Account Management:** Features include sign-up, login, and saving search history for easy revisitation.
- **Support and Documentation:** Comprehensive resources available for user support.

## Installation

### Prerequisites

- Node.js (version 20.15.0 or later)
- Vite (version 5.3.1 or later)
- PocketBase (version 0.21.3 or later)
- Netlify (for deployment)

### Setting Up the Frontend

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ditimajithia/Dorkinator.git
   cd Dorkinator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Tailwind CSS:**
   Tailwind CSS is already set up in the project. Ensure you have the required configuration files in place.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

### Setting Up the Backend

1. **Download PocketBase:**
   Ensure you have PocketBase installed and running.

2. **Run PocketBase:**
   Follow the instructions on the PocketBase [website](https://pocketbase.io) to get the backend up and running.

### Deployment

Deploy the frontend using Netlify:
1. Connect your repository to Netlify.
2. Configure the deployment settings and build commands as required.
3. Deploy the application.

## Usage

Once the application is set up and running:

1. **Login/Sign-up:** Access the tool by logging in or creating a new account.
2. **Run Dork Queries:** Use the interface to input your target domain and execute Google Dorking queries.
3. **View and Manage History:** Access previous queries through the history page.

## Survey and Evaluation

Dorkinator was evaluated against another existing tool called Investigator. A comprehensive survey was conducted to assess the tool's performance in terms of accuracy, efficiency, user satisfaction, and overall experience. The results showed that Dorkinator excelled in speed, user interface, and general satisfaction, making it a valuable addition to any cybersecurity professional's toolkit.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support:

- **Email:** [diti.majithia@example.com](mailto:diti.majithia@example.com)
- **GitHub:** [@ditimajithia](https://github.com/ditimajithia)
```
