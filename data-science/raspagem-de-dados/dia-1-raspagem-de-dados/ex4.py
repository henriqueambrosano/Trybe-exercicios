from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"

response = requests.get(URL_BASE + "the-grand-design_405/index.html")

selector = Selector(response.text)
suffix = "...more"

title = selector.css(".product_main h1::text").get()
price = selector.css(".product_main p.price_color::text").re_first(
    r"\d*\.\d{2}"
)
description = selector.css(
    ".product_page #product_description + p::text"
).get()
if description.endswith(suffix):
    description = description[: -len(suffix)]
cover = URL_BASE + selector.css(".item.active img::attr(src)").get()
availability = selector.css(".product_main .availability::text").re_first(
    r"\d"
)

print(title, price, description, cover, availability, sep=", ")
