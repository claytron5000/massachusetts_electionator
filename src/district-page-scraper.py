from lxml import html
import requests
import json

page = requests.get('http://www.sec.state.ma.us/ele/eledist/con11idx.htm')
tree = html.fromstring(page.content)
town_array = tree.xpath('//*[@id="content_third"]/p')
print(town_array)

# TODO: some cities have "wards" that are in seperate districts
counties = []
for num in range(len(town_array)):
  towns = tree.xpath('//*[@id="content_third"]/p[{0}]/text()'.format(num))
  district = tree.xpath('//*[@id="content_third"]/p[{0}]/preceding-sibling::h2[1]/text()'.format(num))
  county = { 'towns': towns, 'district': district }
  counties.append(county)
print(counties)

towns = []
for each in counties:
  district = each['district']
  district = "".join(district)
  for town in each['towns']:
    towns.append({'town': town.strip(), 'district': district.strip()})
print(towns)

file = open('scraped_towns.json', 'w')
file.write(json.dumps(towns, sort_keys=True, indent=4, separators=(',', ': ')))