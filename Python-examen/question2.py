#Trouver les nombres parfaits jusque 10000
n = 1
cptParfait = 0
while True:
    if sum([i for i in range(1,n+1) if n%i == 0]) == 2*n:
        print (n)
        cptParfait += 1
        if cptParfait == 4:
            break
    n += 1