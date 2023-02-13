import requests

result = requests.get('https://api.github.com/users')
users = result.json()


for user in users:
    print(user['login'], user['url'])
