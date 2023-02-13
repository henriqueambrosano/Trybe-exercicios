from pymongo import MongoClient


def get_books_by_category(category):
    try:
        with MongoClient() as client:
            db = client.library
            if db is None:
                print("Error: Unable to access the 'library' database.")
                return []
            books = list(
                db.books.find({"categories": category}, projection=["title"])
            )
    except Exception as e:
        print("Error connecting to the MongoDB database:", e)
        return []

    return [book["title"] for book in books]


def search():
    category = 'action'
    books = get_books_by_category(category)

    if books:
        for book in books:
            print(book)
    else:
        print("No books found for the given category.")


search()
