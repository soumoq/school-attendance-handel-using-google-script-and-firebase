// Script params:
// CENTER_ID
// SPREADSHEET_ID
// WORKSHEET_NO (Starts from 0)
// Select the function name from dropdown and press run.

//  DB Structure = centers/19-22-016-000/students/19-22-016-000-01-0030

//  Center Name = Karimpur
//  Center ID = 19-22-016-000
//  SpreadsheetApp ID = 1hq1eX8jWlCzakijWUabhEDAMuA3oW_BrXFurN5b6u1o

//  Center Name = Rishra
//  Center ID = 19-22-026-000
//  SpreadsheetApp ID = 1VpMdlLwbuI2AapvyK3S2w9WtqbzFtXVSe5_WPZbgKbE

function uploadStudentsDetails() {
  var CENTERS_KEY = "centers";
  var CENTRE_ID = "19-22-026-000";
  var STUDENTS_KEY = "students";

  var email = "firebase-adminsdk-8r770@techieteacher-9e7b7.iam.gserviceaccount.com";
  var key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDHgVxOxvgYNtY/\nteGmeiJWl53J3bEDnB22bMhumf9J7Lui5kZKgK4iGmYkwS53o5FM2SISWdcZdZkG\nozh1Hlqm571U5Akd45D6t3SG4u7yIhaotukT2CKhtIHr6ZsBxmZgSID3/VjxdARs\n0+zoeK/OnrOTkMmz5PlruHyGKkQDKtI9xu1GpKoL7SAujnEaTZxJaphDmHxfVPaE\nUI1OEzF9jYa1fEv7gHYvRacnjtdOOFxCn43zBYxOLb9IiZ/buKppyOy1NArB+ZsG\nBrjiHWGOPlU/9XFZkRrbc64cHHCJd70XF4AzsMXRyN50Sr0+DN/+TA2edrsaajJ9\n79S3CDB/AgMBAAECggEAGSJWf0Q44FAUSN2AqqkLZ25dfh+UW/iQk7l7vNdg3q7Y\n6sppA5zXk0tRIANId+Ee/pgCX157J2V13Gy2waaL1Cgw5Z9++ImBa9yt7QptAQtD\nYIj+rzXVExs7HP4GvcABiNLJkLSVvoGXxyAh4h3GRFkhFY+xoZzQwX3yDjMH83/6\nHUulpuyBosEhKTdi6GilnwI39CfCsN5c/YliqskQZnLF24bnxYp12cC17oNCEwvr\nRs2mzjpz3WJaUcBdMNJSexFjOx6vOfcCXghJ8xEMRkrvSLzpc2v0aSwMjSmpuDpx\nWPofVvWQlRJ6gCUO4iuuHlJmMYJrHSoKJ0YtTd4akQKBgQDmjwJoqYDn9pNiYsAg\n+PYP7k5z6G2IghLWEO7IzO4YvQXoEij4fvkIz5Y5AqQ/FGHH1giBt+eawQqCGG//\nzZpdPXBYQa7lzYP6A7r/20akCdwuM6rzJxNxBBwiMeNNqks/ZhWHtQFYoyY8UT1m\nFfOKyzEqkrk1GDNTnLRpEG9R8QKBgQDdhSJX6qo6kGuOkD3+CHVEN0Wo+N9dc2cP\nIxSeYKDJ80P4i7TUkMi+lkjjWuBQQHlB8RCaWZ5l4/KFwQAX+ujqXGTJdJ+Y3aHB\naKgm3pfhfScNjkrj4trvLpAQNd7xm1fpkDhMdMwfAxnlKvTwHfVDlpY6UJHk9inu\na2ZIoNU5bwKBgFZMw3cPs3ugNUzHb+knp1sRNXZ3UsCdB5XvIqIw6xKBdnuGiKVz\nSZ49rZpLXdVquKsHd4mun9eyWE+X/BxBBn3OKIYwl9nW0oa77LwmhMuUEUGN/3gi\ncUmFY059Y/rHOoFRoc95NjbKYt6C/jt/Dfku04l/ACpak6PBbVpCV5jRAoGASJ/T\nSJuIv7aFbLHhgR1oxLqSPfmJ0Wt6SD4qDlqDnHICwMOcv2vQRJukvdUXYXghyPqt\nhM0I30LCShOiYjpCjkNIT7vKbyWKWIxlRIkJpkWPviP+bYP8XxoW5RmkQ/W39rzv\nmDFaknhDzxwsPWS0+jmueuPbUQNbb+0KFZmVDkUCgYEAu+DW+SnSNUWwlMJlqAYN\nvqKMLT8NhhUE6TPqYKaB4DNSewPYtx+7K7WFZssPx4sfzCE5T2vovw+V5d09lilQ\nxzIebjeNFuwuM84ADpOhckO6Yf79SYOuq3ifDkHTUicimBP20wo8I8iXHLsisBEA\n3R8+Zmw/nw3rwVfk+yr8IG0=\n-----END PRIVATE KEY-----\n";
  var projectId = "techieteacher-9e7b7";
  var firestore = FirestoreApp.getFirestore(email, key, projectId);

  var id = SpreadsheetApp.openById('1VpMdlLwbuI2AapvyK3S2w9WtqbzFtXVSe5_WPZbgKbE');
  var sheet = id.getSheets()[1];
  var data = sheet.getDataRange().getValues();

  var obj = {};
  var headers = data[0];
  var cols = headers.length;
  var row = [];

  for (var i = 1; i < data.length; i++) {
    row = data[i];
    obj = {};
    for (var col = 0; col < cols; col++)
    {
      obj[headers[col]] = row[col];
    }

    Logger.log(obj);
    var doc = data[i][0];
    firestore.updateDocument(CENTERS_KEY + "/" + CENTRE_ID + "/" + STUDENTS_KEY + "/" + doc, obj);
  }
}
