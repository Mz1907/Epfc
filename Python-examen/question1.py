#Création triangle isocèle
while True:
    userInput = int(input("Donnez le nombre de ligne entre 2 et 9"))
    print(userInput)
    if(userInput >= 2 and userInput <= 9):
        break

for i in range(userInput):
    print (' '*(userInput-i-1) + str(i+1)*(2*i+1))