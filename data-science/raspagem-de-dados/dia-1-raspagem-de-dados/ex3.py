import requests

result = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Chrome", "Accept": "text/html"}
)

assert "bot detected" not in result.text
