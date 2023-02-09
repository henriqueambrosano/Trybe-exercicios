class Eletrodomestics:
    def __init__(self, price, color, voltage, brand, speed, power):
        self.price = price
        self.color = color
        self.voltage = voltage
        self.brand = brand
        self.speed = speed
        self.power = power


class Fan(Eletrodomestics):
    pass


class Dryer(Eletrodomestics):
    pass


class WashingMachine(Eletrodomestics):
    pass


class FoodMixer(Eletrodomestics):
    pass


class Person:
    def __init__(self, name, account_balance):
        self.name = name
        self.account_balance = account_balance
        self.fan = None

    def buy_fan(self, fan):
        if fan.price > self.account_balance:
            raise ValueError("Tu nao tem grana parça")

        self.account_balance -= fan.price
        self.fan = fan

    def __str__(self):
        if self.fan:
            return f"{self.name} possui um ventilador"
        return f"{self.name} nao possui um ventilador"


mixer = FoodMixer(500, 'Black', '127V', 'Brastemp', '4000rpm', '1000w')

print(mixer.color)