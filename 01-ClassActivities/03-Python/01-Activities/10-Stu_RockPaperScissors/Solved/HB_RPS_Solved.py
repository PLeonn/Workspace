# Incorporate the random library
import random

# Print Title
print("Let's Play Rock Paper Scissors!")

# Specify the three options
options = ["r", "p", "s"]
names = ["rock", "paper", "scissors"]

# Computer Selection
computer_choice = random.choice(options)

# User Selection
user_choice = input("Make your Choice: (r)ock, (p)aper, (s)cissors? ")

print(f"Computer chose: {computer_choice}")

yi = options.index(user_choice)
ci = options.index(computer_choice)

# Run Conditionals
if ((user_choice == "r" and computer_choice == "p") or (user_choice == "p" and computer_choice == "s") or (user_choice == "s" and computer_choice == "r")):
    print(f"You chose {names[yi]}. The computer chose {names[ci]}.")
    print("Sorry. You lose.")

elif ((user_choice == "r" and computer_choice == "s") or (user_choice == "p" and computer_choice == "r") or (user_choice == "s" and computer_choice == "p")):
    print(f"You chose {names[yi]}. The computer chose {names[ci]}.")
    print("Yay! You won.")

elif user_choice == computer_choice:
    print(f"You chose {names[yi]}. The computer chose {names[ci]}.")
    print("A smashing tie!")

else:
    print("I don't understand that!")
    print("Next time, choose from 'r', 'p', or 's'.")
