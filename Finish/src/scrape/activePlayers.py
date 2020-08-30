import requests
import string
import re
from bs4 import BeautifulSoup
import csv
import json
import os
#import pandas as pd
alphabet_string = string.ascii_lowercase
alph = list(alphabet_string)

links=[]
def listToString(s):  
    
    # initialize an empty string 
    str1 = ""  
    
    # traverse in the string   
    for ele in s:  
        str1 += str(ele)   
    
    # return string   
    return str1
 
url = "https://en.hispanosnba.com/players/nba-active/"

FILE = 'playersNames.json'

names = []
for let in alph:
    r = requests.get(url+let)
    data = r.text
    soup = BeautifulSoup(data, 'html.parser')
    #('a', href=re.compile("/players/"))
    player_tags=soup.find_all('th', 'tdl')
    players = []
    for tag in player_tags:
        for child in tag.children:
            players.append(child)
            break
    #print(players)
    
    for player in players:
        names.append(player.string)
'''print(len(names))

def plusForSpaceList(l):
    res = []
    for name in l:
        res.append(name.replace(' ','+'))
    return res

url = 'https://www.balldontlie.io/api/v1/players?search='
apiNames=plusForSpaceList(names)
players={}
count=0
for name in apiNames:
    r=requests.get(url+name)
    data=r.json()
    players.update({names[count] : data})
    print(players)
    break
    count+=1
'''
handle = open(FILE, "w")
json.dump(names, handle, indent=6)
handle.close()
