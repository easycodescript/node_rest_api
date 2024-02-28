# Exercise

The goal of this exercise is to build a very simple REST API to create meetups with a list of talks.

The system should support the following resources:
- List all meetups
- Create/Update/Delete a meetup
- List all talks for a meetup
- Create/Update/Delete a talk of a meetup

A meetup should have at least a name, a date, a start time and an address where it takes place.
A talk should have a name, a short abstract and the name of the speaker. 
It is not necessary to create a separate resource for speakers.

In addition, you could integrate one or two APIs to enhance the data that gets returned to the client. For example you could include the related GPS information for given addresses or enrich the data with weather forcasts for the meetup day or also something else. Here is a list of possible APIs, but you can integrate whatever you want: https://github.com/public-apis/public-apis

It is not required to add users and authentication to this example. It would be nice if the code includes also some tests.

Please describe in the readme how we can run the application.
