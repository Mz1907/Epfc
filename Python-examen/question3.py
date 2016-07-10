#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Création jeu bataille
import random
#préparation de la variable carte pour le traitement
cartes = [
    [
        "trefle", "pique", "coeur", "carreau"
    ],
    [
        "7", "8", "9", "10", "valet", "reine", "roi", "as"
    ]]

def tirerCarte(cartesDictionnaire):
    #Joueur 1 tire une carte
    couleurRandom1 = cartes[0][random.randint(0, len(cartesDictionnaire[0]) - 1)]
    valeurRandom1 = cartes[1][random.randint(0, len(cartesDictionnaire[1]) - 1)]
    while True:
        #joueur 2 tire une carte
        couleurRandom2 = cartes[0][random.randint(0, len(cartesDictionnaire[0]) - 1)]
        valeurRandom2 = cartes[1][random.randint(0, len(cartesDictionnaire[1]) - 1)]
        #comparaison des cartes afin d'éviter que j1 et j2 ont la même carte
        if valeurRandom1 is valeurRandom2 and couleurRandom1 is couleurRandom2:
            couleurRandom2 = cartes[0][random.randint(0, len(cartesDictionnaire[0]) - 1)]
            valeurRandom2 = cartes[1][random.randint(0, len(cartesDictionnaire[1]) - 1)]
        else:
            break

    #comparaison terminées on renvoie les cartes dans une liste contenant 2 dictionnaires
    carteJoueur1 = {
        "couleur": couleurRandom1,
        "valeur": valeurRandom1
    }
    carteJoueur2 = {
        "couleur": couleurRandom2,
        "valeur": valeurRandom2
    }
    return [carteJoueur1, carteJoueur2]

def bataille(listeCartes):
    cartesDictionnaire = tirerCarte(cartes)
    #joueur 1 prend la 1er carte du dictionnaire
    j1 = cartesDictionnaire[0]
    #joueur2 prend la 2eme carte du dictionnaire
    j2 = cartesDictionnaire[1]

    #celui qui a l'index le plus haut a gagné, sinon c'est match nul
    indexJ1 = listeCartes[1].index(j1["valeur"])
    indexJ2 = listeCartes[1].index(j2["valeur"])
    print("Le joueur A a tire la carte", j1["valeur"], "de", j1["couleur"])
    print("Le joueur B a tire la carte", j2["valeur"], "de", j2["couleur"])

    if indexJ1 > indexJ2:
        print("Le joueur A a gagne")
    elif indexJ1 < indexJ2:
        print("Le joueur B a gagne")
    else: print("Bataille !")

#Execution d'une partie
bataille(cartes)
