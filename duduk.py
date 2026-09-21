import random

people = ["A", "G", "N", "Z", "R", "T"]

# Fisher-Yates Shuffle
for i in range(len(people) - 1, 0, -1):
    j = random.randint(0, i)
    people[i], people[j] = people[j], people[i]

print(" - ".join(people))