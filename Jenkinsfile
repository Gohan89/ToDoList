pipeline {
    agent any
    
    environment {
        APP_NAME = 'node-todo-app'
        DOCKERHUB_USERNAME = 'gohan789'
        DOCKERHUB_CREDENTIALS = 'Docker-id'
        DOCKER_IMAGE_NAME = "${DOCKERHUB_USERNAME}/${APP_NAME}"
        IMAGE_TAG = "latest-${env.BUILD_ID}-${env.BUILD_NUMBER}" 
    }
    
    stages {
        stage('Fetch Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Gohan89/ToDoList.git'
            }
        }
        
        stage('Run Tests') {
            steps {
                script {
                    dir("${WORKSPACE}") {
                        sh "npm install --no-save"
                        sh "npm test"
                    }
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE_NAME}:${IMAGE_TAG}")
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        dockerImage.push("${IMAGE_TAG}")
                    }
                }    
            }
        }
        
        stage('Deploy on EC2') {
            steps {
                script {
                        sh "docker run -d --name ${APP_NAME} -p 8000:8000 ${DOCKERHUB_USERNAME}/${APP_NAME}:${IMAGE_TAG}"
                    }
            }
        }
    }
}
