import requests

x = requests.post('REPLACE_WITH_HelloWorldApi_URL')

result = x.json()

url = result['url']
fields = result['fields']

with open('/home/ec2-user/environment/REPLACE_WITH_YOUR_PHOTO.jpg', 'rb') as f:
    files = {'file':('file',f)}
    http_response = requests.post(url,data=fields,files=files)

print (url + '/' + fields['key'])
