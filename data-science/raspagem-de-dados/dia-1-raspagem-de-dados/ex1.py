import requests

result = requests.get('https://httpbin.org/encoding/utf8').text

print(result)
