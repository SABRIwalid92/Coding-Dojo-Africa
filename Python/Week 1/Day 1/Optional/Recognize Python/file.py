num1 = 42 #variable declaration, initialize Number

num2 = 2.3 #variable declaration, initialize Number
boolean = True #variable declaration, initialize Boolean
string = 'Hello World' #variable declaration, initialize String
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration, initialize List

person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable declaration, initialize Dictionary
fruit = ('blueberry', 'strawberry', 'banana') #variable declaration, initialize Tuples
print(type(fruit)) #log statement, type check
print(pizza_toppings[1]) #log statement, access value
pizza_toppings.append('Mushrooms') #add value
print(person['name']) #log statement, access value
person['name'] = 'George' #change value
person['eye_color'] = 'blue' #add value
print(fruit[2]) #log statement, access value

if num1 > 45:
    print("It's greater")
else:
    print("It's lower") #conditional if else, log statement

if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!") #conditional if else if, log statement

for x in range(5):
    print(x) #for loop, log statement
for x in range(2,5):
    print(x) #for loop start stop, log statement
for x in range(2,10,3):
    print(x) #for loop start stop increment, log statement
x = 0
while(x < 5):
    print(x)
    x += 1 #while loop stop, log statement, increment

pizza_toppings.pop() #list delete last value
pizza_toppings.pop(1) #list delete value with index 1

print(person) #log dictionary
person.pop('eye_color') #delete dictionary value with "eye_color" key
print(person) #log dictionary #{'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break 		""" 'After 1st if statement'
		  	    'After 1st if statement'
		 	    'After 1st if statement' """

def print_hello_ten_times():
    for num in range(10):
        print('Hello')       


print_hello_ten_times()      """'Hello'
				'Hello'
				'Hello'
				'Hello'
				'Hello'
				'Hello'
				'Hello'
				'Hello'
				'Hello'
				'Hello'"""

def print_hello_x_times(x):
    for num in range(x):
        print('Hello')       

print_hello_x_times(4)       """'Hello'
				'Hello'
				'Hello'
				'Hello'"""

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)"""'Hello'
				'Hello'
				'Hello'
				'Hello'
				'Hello'
				'Hello'
				'Hello'
				'Hello'
				'Hello'
				'Hello'"""
			     """'Hello'
				'Hello'
				'Hello'
				'Hello'"""


"""
Bonus section
"""

# print(num3) #NameError: name <variable name> is not defined
# num3 = 72 #variable declaration, initialize Number
# fruit[0] = 'cranberry' #TypeError: 'tuple' object does not support item assignment
# print(person['favorite_team']) #KeyError: 'favorite_team'
# print(pizza_toppings[7]) #IndexError: list index out of range
#   print(boolean) #IndentationError: unexpected indent
# fruit.append('raspberry') #AttributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1) #AttributeError: 'tuple' object has no attribute 'pop'