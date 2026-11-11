   pipeline {
       agent any
       tools { nodejs 'NodeJS-22' }
       options {
           // lets CD-React-App copy this job's artifacts
           copyArtifactPermission('CD-React-App')
       }
       stages {
           stage('Checkout') {
               steps { checkout scm }
           }
           stage('Run Test') {
               steps {
                   sh 'npm install'
                   sh 'npm test'
               }
           }
           stage('Build') {
               steps { sh 'npm run build' }
           }
           stage('Archive Artifact') {
               steps {
                   sh "tar -czf react-app-${env.BUILD_NUMBER}.tar.gz dist Dockerfile"
                   archiveArtifacts artifacts: "react-app-${env.BUILD_NUMBER}.tar.gz", fingerprint: true
               }
           }
       }
   }