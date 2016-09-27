# Electionator
An effort to scrape and display information about elections in a user friendly way.

## MVP
1. Address finder
 	> The mvp might be something like a simple address webform
2. Important Dates
 	> Upcoming election date
 	> Early voting dates
 	> Source as of yet unknown
 3. My Ballot tab
 	> The my Ballot tab displays the meat and potatoes of the site. This includes Initiatives, Resolutions, and Candidates. For the moment, I'm calling these three content types.

## Content Types
#### Candidate
- Data Source
	- Depends on Level (ie State versus Congress)
- Title(name)
- Image
- Blurb
- Office
- Level
- Party
- Endorsements
- Incumbency
- Voting Record
- On Current Events
#### Ballot Initiative
- Title
- Blurb
- Full Text
- Endoresements
- "For and Against" arguments? Sometimes these are available on the actual ballot.
#### Resolutions
- Are these the laws that are passed by the General Court? I.e. Massachusetts state laws? I'm a little unclear what these would point to.

## NOTES
There's a pretty clear divide between the different levels of government, and it might be a good idea to seperate each level as it's own set of tasks, if not site architecture. I say this because the source on municipal and county-wide issues and candidates is going to be very different(and more janky) than that of the state or federal level. For this reason I'm keeping 3 MVP's in mind without doing to much architecturing:

### Municipal/County
### State
### Federal