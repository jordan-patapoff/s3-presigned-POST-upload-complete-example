const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.lambdaHandler = async(event, context) => {
    const key = uuidv4() + '.jpg';
    const bucket = 'REPLACE_WITH_UNTAKEN_BUCKET_NAME';
    const contentType = 'image/jpeg';
    
    const params = {
        Expires: 3600,
        Bucket: bucket,
        Conditions: [
            ['content-length-range', 100, 10000000] // 100Byte - 10MB
        ],
        Fields: {
            'acl': 'public-read',
            'Content-Type': contentType,
            'Cache-Control': 'max-age=31536000',
            'Access-Control-Allow-Origin': '*',
            key
        }
    };

    const promise = new Promise(function(resolve, reject) {
        s3.createPresignedPost(params, (err, data) => {
            if (err) {
                reject({
                    'statusCode': 500,
                    'body': JSON.stringify(err)
                });

            }
            resolve({
                'statusCode': 200,
                'body': JSON.stringify(data)
            });
        });
    });
    return promise
};

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}