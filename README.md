# Maplecroft Frontend Development Test

## Quick Start

```
npm install
npm start
```

## Tasks

This is a simple Angular application to display a globe with countries colour coded to illustrate the level of risk for each country measured against a client's portfolio.

You can rotate and zoom in and out on the globe, hovering over a country will show the country name and risk score at the top right of the window.

You've been asked to make some improvements to this application, listed below are your tasks.

## Task 1

Some countries do not have scores shown for some reason even though the API response includes those scores. In particular the client needs France and Norway to work, you need to make a change so that the scores/colour coding for those countries work.

## Solution 1

There are two ways to approach fixing this:
First option: is to fix the data and update the values for `ISO_AS2` and `ISO_A3` with the correct abreviations, this assumes that it's possible to fix.
In this example the data has not been fixed and I've assumed that changing this may not be immediately possible in a real world situation.

Second option: If fixing the data is not possible or may take time to fix, then getting the country abreviation from the country name could be a short to medium term fix. See solution 1 in the code.

I've included two images a before and after, the after shows France and Norway is now included, this would also fixes Northern Cyprus and Somaliland, if they had scores

## Task 2

Currently the API call is done from AppComponent, we would like this to be in a separate service.

## Solution 2

Created a new service `data.service.ts`, and called this from app.component instead. Service uses dependency injection,

## Task 3

The data includes an entitled boolean, we would like all countries where entitled is false to not have scores/colours displayed on the globe.

## Solution 3

There are two possible solutions.

First option: is to remove the data from the record set so only data that has the entitled flag set to `true` is included. I have included this as an option, though it does mean that the data will need to be called again if it was needed elsewhere.

Second option: to check for entitled in the getCountryScore and showDetails methods to return undefined if entitled equals false, this means the data is available should it be required eleswhere.

## Task 4

Implement tests for your new data service and ensure existing tests work. (This application uses Jasmine/Karma, however feel free to convert it to Jest if you wish)

## Solution 4

fixed the unit tests as it was missing the HttpClientTestingModule as an import.
Added a spec file and have written a test to check for a 404 if the api was unavailable.
Added a test to check that the call to the api has happened.

## Task 5

To help your Team Lead plan for future development of this application provide a brief list of issues and/or improvements that could be made to this application.

## Solution 5

Application needs to be running the latest version of Angular and other dependencies.
Application could be split into a smaller components, for example the code to create the globe map could be a separate component or library that could be used in other applications.

Move unit testing over to a Vitest (or Jest)

Look into creating interfaces for data and remove the `any` datatype.

## Submission of Completed Test

**Please do not fork this repository directly**, instead download/clone it, make your changes and upload to a new separate repository (e.g. GitHub, BitBucket etc.) or create a zip file from your local repo.
