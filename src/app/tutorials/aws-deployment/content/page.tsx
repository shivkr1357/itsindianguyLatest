import type { Metadata } from "next";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
  title: "AWS Cloud Deployment Tutorial - Complete Guide | ItsIndianGuy",
  description: "Deploy full-stack applications to AWS with EC2, S3, RDS and more. Complete tutorial by ItsIndianGuy.",
};

export default function AWSDeploymentContentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/tutorials/aws-deployment"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tutorial Overview
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            AWS Cloud Deployment - Complete Guide
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Deploy full-stack applications to AWS with EC2, S3, RDS, and CI/CD pipelines
          </p>
        </header>

        {/* Section 1: AWS Setup */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 1: AWS Account & CLI Setup
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Install and Configure AWS CLI
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Install AWS CLI (Windows)
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi

# Install AWS CLI (Mac)
brew install awscli

# Install AWS CLI (Linux)
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Verify installation
aws --version

# Configure AWS credentials
aws configure
# AWS Access Key ID: YOUR_ACCESS_KEY
# AWS Secret Access Key: YOUR_SECRET_KEY
# Default region: us-east-1
# Default output format: json

# Test configuration
aws s3 ls`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: EC2 Deployment */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 2: Deploy Backend to EC2
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Launch and Configure EC2 Instance
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Launch EC2 instance (AWS Console or CLI)
aws ec2 run-instances \\
  --image-id ami-0c55b159cbfafe1f0 \\
  --instance-type t2.micro \\
  --key-name my-key-pair \\
  --security-group-ids sg-xxxxxx \\
  --subnet-id subnet-xxxxxx

# Connect to instance
ssh -i "my-key-pair.pem" ubuntu@ec2-xx-xx-xx-xx.compute.amazonaws.com

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Clone your repository
git clone https://github.com/yourusername/your-api.git
cd your-api

# Install dependencies
npm install

# Create .env file
nano .env
# Add your environment variables

# Start application with PM2
pm2 start npm --name "api" -- start
pm2 startup
pm2 save

# Check status
pm2 status
pm2 logs api`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Configure Nginx as Reverse Proxy
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Install Nginx
sudo apt install nginx -y

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/api

# Add configuration:
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

# Enable site
sudo ln -s /etc/nginx/sites-available/api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Install SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d api.yourdomain.com`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: S3 for Static Files */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 3: S3 for Static Files & Frontend
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Deploy React/Next.js to S3
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Create S3 bucket
aws s3 mb s3://my-app-frontend

# Enable static website hosting
aws s3 website s3://my-app-frontend \\
  --index-document index.html \\
  --error-document index.html

# Set bucket policy for public access
cat > policy.json <<EOF
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::my-app-frontend/*"
  }]
}
EOF

aws s3api put-bucket-policy \\
  --bucket my-app-frontend \\
  --policy file://policy.json

# Build and upload
npm run build
aws s3 sync build/ s3://my-app-frontend --delete

# Get website URL
aws s3api get-bucket-website \\
  --bucket my-app-frontend`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                CloudFront CDN Setup
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Create CloudFront distribution
aws cloudfront create-distribution \\
  --origin-domain-name my-app-frontend.s3-website-us-east-1.amazonaws.com \\
  --default-root-object index.html

# Invalidate cache after updates
aws cloudfront create-invalidation \\
  --distribution-id DISTRIBUTION_ID \\
  --paths "/*"`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: RDS Database */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 4: RDS Database Setup
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Create PostgreSQL RDS Instance
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Create RDS instance
aws rds create-db-instance \\
  --db-instance-identifier myapp-db \\
  --db-instance-class db.t3.micro \\
  --engine postgres \\
  --master-username admin \\
  --master-user-password YourPassword123 \\
  --allocated-storage 20 \\
  --vpc-security-group-ids sg-xxxxxx \\
  --db-subnet-group-name my-subnet-group \\
  --backup-retention-period 7 \\
  --preferred-backup-window "03:00-04:00"

# Get endpoint
aws rds describe-db-instances \\
  --db-instance-identifier myapp-db \\
  --query 'DBInstances[0].Endpoint.Address'

# Connect from EC2
psql -h myapp-db.xxxxxx.us-east-1.rds.amazonaws.com \\
     -U admin \\
     -d postgres`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: CI/CD with GitHub Actions */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 5: CI/CD Pipeline with GitHub Actions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                GitHub Actions Workflow
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# .github/workflows/deploy.yml
name: Deploy to AWS

on:
  push:
    branches: [ main ]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Deploy to EC2
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.EC2_HOST }}
          username: ubuntu
          key: \${{ secrets.EC2_SSH_KEY }}
          script: |
            cd /home/ubuntu/my-api
            git pull origin main
            npm install
            pm2 restart api

  deploy-frontend:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          REACT_APP_API_URL: \${{ secrets.API_URL }}
      
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      
      - name: Deploy to S3
        run: aws s3 sync build/ s3://my-app-frontend --delete
      
      - name: Invalidate CloudFront
        run: |
          aws cloudfront create-invalidation \\
            --distribution-id \${{ secrets.CLOUDFRONT_ID }} \\
            --paths "/*"`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Lambda Functions */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 6: Serverless with AWS Lambda
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Create Lambda Function
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`// index.js - Lambda function
export const handler = async (event) => {
    try {
        const body = JSON.parse(event.body || '{}');
        
        // Your business logic here
        const result = {
            message: 'Success',
            data: body,
            timestamp: new Date().toISOString()
        };
        
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(result)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message
            })
        };
    }
};`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Deploy Lambda with AWS CLI
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Package function
zip -r function.zip index.js node_modules

# Create IAM role for Lambda
aws iam create-role \\
  --role-name lambda-execution-role \\
  --assume-role-policy-document file://trust-policy.json

# Attach policy
aws iam attach-role-policy \\
  --role-name lambda-execution-role \\
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

# Create function
aws lambda create-function \\
  --function-name myFunction \\
  --runtime nodejs18.x \\
  --role arn:aws:iam::ACCOUNT_ID:role/lambda-execution-role \\
  --handler index.handler \\
  --zip-file fileb://function.zip

# Invoke function
aws lambda invoke \\
  --function-name myFunction \\
  --payload '{"key": "value"}' \\
  response.json

cat response.json`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: API Gateway */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 7: API Gateway & Domain Setup
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Create REST API with API Gateway
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Create REST API
aws apigateway create-rest-api \\
  --name "MyAPI" \\
  --description "My REST API"

# Get API ID
API_ID=$(aws apigateway get-rest-apis \\
  --query 'items[?name==\`MyAPI\`].id' \\
  --output text)

# Get root resource ID
ROOT_ID=$(aws apigateway get-resources \\
  --rest-api-id $API_ID \\
  --query 'items[?path==\`/\`].id' \\
  --output text)

# Create resource
RESOURCE_ID=$(aws apigateway create-resource \\
  --rest-api-id $API_ID \\
  --parent-id $ROOT_ID \\
  --path-part users \\
  --query 'id' \\
  --output text)

# Create GET method
aws apigateway put-method \\
  --rest-api-id $API_ID \\
  --resource-id $RESOURCE_ID \\
  --http-method GET \\
  --authorization-type NONE

# Integrate with Lambda
aws apigateway put-integration \\
  --rest-api-id $API_ID \\
  --resource-id $RESOURCE_ID \\
  --http-method GET \\
  --type AWS_PROXY \\
  --integration-http-method POST \\
  --uri arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:ACCOUNT_ID:function:myFunction/invocations

# Deploy API
aws apigateway create-deployment \\
  --rest-api-id $API_ID \\
  --stage-name prod`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Monitoring */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 8: Monitoring & Logging
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                CloudWatch Logs and Metrics
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# View Lambda logs
aws logs tail /aws/lambda/myFunction --follow

# Create CloudWatch alarm for errors
aws cloudwatch put-metric-alarm \\
  --alarm-name lambda-errors \\
  --alarm-description "Alert on Lambda errors" \\
  --metric-name Errors \\
  --namespace AWS/Lambda \\
  --statistic Sum \\
  --period 300 \\
  --threshold 5 \\
  --comparison-operator GreaterThanThreshold \\
  --evaluation-periods 1

# View EC2 metrics
aws cloudwatch get-metric-statistics \\
  --namespace AWS/EC2 \\
  --metric-name CPUUtilization \\
  --dimensions Name=InstanceId,Value=i-xxxxxx \\
  --start-time 2024-01-01T00:00:00Z \\
  --end-time 2024-01-01T23:59:59Z \\
  --period 3600 \\
  --statistics Average`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Best Practices */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 9: Production Best Practices
          </h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">1. Use Environment Variables</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Store secrets in AWS Systems Manager Parameter Store or Secrets Manager
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">2. Enable Auto Scaling</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Configure Auto Scaling Groups for EC2 instances to handle traffic spikes
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">3. Implement Health Checks</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Add health check endpoints and configure Load Balancer health checks
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">4. Set Up Backups</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Enable automated backups for RDS and regular snapshots for EC2
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">5. Monitor Costs</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Set up AWS Budgets and CloudWatch billing alarms
              </p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">You&apos;re Now an AWS Expert! ☁️</h3>
          <p className="mb-6">
            You&apos;ve learned EC2, S3, RDS, Lambda, CloudFront, API Gateway, and CI/CD pipelines for production deployments!
          </p>
          <Link
            href="/tutorials/aws-deployment"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-neutral-100 transition"
          >
            Back to Tutorial Overview
          </Link>
        </div>
      </div>
    </div>
  );
}

