import requests
import string
import re
from bs4 import BeautifulSoup
import csv
import json
import os
alphabet_string = string.ascii_lowercase
alph = list(alphabet_string)

links=[]
def listToString(s):  
    str1 = ""  
    for ele in s:  
        str1 += str(ele)   
    return str1
 
url = "https://en.hispanosnba.com/players/nba-active/"
FILE = 'playerNames.json'

names = []
for let in alph:
    r = requests.get(url+let)
    data = r.text
    soup = BeautifulSoup(data, 'html.parser')
    player_tags=soup.find_all('th', 'tdl')
    players = []
    for tag in player_tags:
        for child in tag.children:
            players.append(child)
            break
    
    for player in players:
        names.append(player.string)

handle = open(FILE, "w")
json.dump(names, handle, indent=6)
handle.close()
