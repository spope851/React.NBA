import requests
import string
import re
from bs4 import BeautifulSoup
import csv
import json
import os
import time

def plusForSpaceList(l):
    res = []
    for name in l:
        res.append(name.replace(' ','+'))
    return res

FILE='playerNames.json'
with open(FILE) as data:    
    names = json.load(data)
    
url = 'https://www.balldontlie.io/api/v1/players?search='
apiNames=plusForSpaceList(names)
players=[]
count=0
test=[]

for name in apiNames:
    r=requests.get(url+name)
    print(r)
    if r.status_code == 429:
        time.sleep(60)
        r=requests.get(url+name)
        print(r)
    else:
        if r.status_code != 200:
            print(r.status_code)
    test.append(r)

for i in test:
    if i.status_code == 200:
        players.append(i.json())
        print(count)
        count+=1
    else:
        print(i.status_code)
        count+=1
    
    
handle = open('playerStats.json', "w")
json.dump(players, handle, indent=6)
handle.close()
