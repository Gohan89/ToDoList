Jenkins CI/CD Setup with GitHub Integration
Objective
To automate the deployment process using Jenkins CI/CD, integrated with Docker and GitHub, and deployed on an AWS EC2 instance.

Tools Used
AWS EC2: For hosting Jenkins and the application.
Jenkins: For continuous integration and continuous deployment.
Docker: For containerizing the application.
GitHub: For version control and webhook integration.
Node.js & npm: For application runtime environment.
Setup Details
EC2 Instance:

Provisioned a t2.medium instance on AWS.
Opened ports 22 (SSH), 8080 (Jenkins), and 8000 (application access).
Jenkins Installation:

Installed Jenkins on the EC2 instance.
Configured port 8080 for web access.
Plugins:

Installed necessary Jenkins plugins to support Docker and GitHub integration.
Environment Setup:

Configured Node.js, npm, and Docker on the EC2 instance.
User Permissions:

Added the current user and Jenkins user to the Docker group for proper permissions.
GitHub Integration:

Configured a webhook in the GitHub repository to trigger builds on Jenkins.
Configuration Files:

Dockerfile: Created a Dockerfile for building the application environment.
Jenkinsfile: Defined a Jenkinsfile for pipeline automation, including build, test, and deploy stages.
Accessing Deployed Site:

After successful deployment, access your site on port 8000 of your EC2 instance.
Images
![AWS EC2](https://images/AWS EC2.png)
![WebHook](https://images/Webhook.png)
![Application](https://images/Application.png)

Usage
Clone this repository.
Set up a t2.micro EC2 instance on AWS with appropriate port openings.
Install Jenkins, Node.js, npm, and Docker following the instructions in this repository.
Configure Jenkins plugins and add necessary credentials.
Set up a webhook in your GitHub repository to trigger builds on Jenkins.
Customize the Dockerfile and Jenkinsfile to match your project requirements.
Initiate your CI/CD pipeline with Jenkins!
