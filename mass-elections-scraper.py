from lxml import html
import requests
import json

page = requests.get('http://www.sec.state.ma.us/ele/ele16/state_election_cand_16.htm')
tree = html.fromstring(page.content)
races = tree.xpath('//*[@id="content_third"]/p')
election_array = []

for num in range(len(races)):
  candidates = tree.xpath('//*[@id="content_third"]/p[{0}]/text()'.format(num))
  zone = tree.xpath('//*[@id="content_third"]/p[{0}]/strong/text()'.format(num))
  if len(zone) < 1:
    zone = tree.xpath('//*[@id="content_third"]/p[{0}]/text()[1]'.format(num))
  position_array = tree.xpath('//*[@id="content_third"]/p[{0}]/preceding-sibling::h3[1]/text()'.format(num))
  position = []
  for each in position_array:
    each = each.replace('\r\n', ':')
    position.append(each)
  title = " ".join(position)

  for candidate in candidates:
    race_object = {}
    race_object['candidate'] = candidate.strip()
    race_object['zone'] = "".join(zone)
    race_object['position'] = title
    # print(race_object)
    election_array.append(race_object)
# print(election_array)
# with open('election_2016.json', 'wb') as outfile:
file = open('election_2016.json', 'w')
file.write(json.dumps(election_array, sort_keys=True, indent=4, separators=(',', ': ')))