pipeline {
    agent any
    environment{
        NETLIFY_SITE_ID = '801ab88c-4cbf-405e-a6db-41d941a17327'
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')
    }

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
                   npm run build
                   ls -al
                
                '''
            }
            
        }
        stage('Test'){
             agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps{
                sh '''
                  test -f build/index.html
                  npm test
                '''
            }
        }
         stage('Deploy') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                   npm install netlify-cli
                   node_modules/.bin/netlify --version
                   echo "Deploy to production. Site ID: $NETLIFY_SITE_ID"
                   node_modules/.bin/netlify status
                   node_modules/.bin/netlify deploy --dir=build --prod
                   
                
                '''
            }
            
        }

    }
    post{
        always{
            junit 'test-results/junit.xml'
        }
    }
}
