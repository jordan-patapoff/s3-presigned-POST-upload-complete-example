# s3-presigned-POST-upload-complete-example

1) Create Cloud9 instance with all defaults
2) `sam init`
3) 1 - AWS Quick Start Templates
4) 1 - Zip (artifact is a zip uploaded to S3)
5) 1 - nodejs14.x
6) (enter) to choose default name: sam-app
7) 1 - Hello World Example
8) copy app.js from this repo into ~/environment/sam-app/hello-world folder, replacing existing file
9) copy template.yaml from this repo into ~/environment/sam-app folder, replacing existing file
10) open app.js and replace REPLACE_WITH_UNTAKEN_BUCKET_NAME with a unique bucket name that is not yet taken
11) `cd sam-app/`
12) `sam deploy --guided`
13) Respond to prompts, using defaults is fine, with 2 exceptions: for "Parameter AppBucketName" you need to provide the REPLACE_WITH_UNTAKEN_BUCKET_NAME from previous steps S3 bucket name, for "HelloWorldFunction may not have authorization defined, Is this okay?" select y
14) After deploy completes, in terminal look for HelloWorldApi URL (ex https://XXXXXX.execute-api.us-west-2.amazonaws.com/Prod/create-post-object-signed-url/)
15) curl -X POST {HelloWorldApi} to test
16) `cd ..`
17) drop testupload.py from this repo into ~/environment folder
18) open testupload.py: replace REPLACE_WITH_HelloWorldApi_URL with HelloWorldApi URL, replace REPLACE_WITH_YOUR_PHOTO.jpg with path to test image
19) `sudo python3 -m pip install requests`
20) `python3 testupload.py`
