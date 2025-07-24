@Library("Shared") _
pipeline{
    agent { label "vinod" }
    
    stages{
        stage("Hello"){
            steps{
                script{
                    hello()
                }
            }
        }
        stage("Code"){
            steps{
                script{
                    clone("https://github.com/HrishiDarade/FirstNodeApp.git", "main")
                }
            }
        }
        stage("Build"){
             steps{
                 script{
                     docker_build("first-node-app", "latest")
                 }
             }
        }
        stage("Test"){
             steps{
                 echo "This is testing the code"
             }
        }
        stage("Push"){
            steps{
                script{
                    docker_build("first-node-app", "latest")
                }
            }
        }
        stage("Deploy"){
             steps{
                 echo "This is deploying the code"
                 sh "docker compose down"
                 sh "docker compose up -d --build"
             }
        }
    }
    
}
