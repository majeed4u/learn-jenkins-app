pipeline {
    agent any

    stages {
        stage('build') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                   ls -al
                   node --version
                   npm --version
                   npm ci
                   npm ru build
                   ls -al
                
                '''
            }
            
        }
    }
}