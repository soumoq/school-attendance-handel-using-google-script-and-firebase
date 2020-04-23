function main() {
  //firebaseUploadLight();
  firebaseUpload();
}

function firebaseConnection()
{
  var email="firebase-adminsdk-vehkc@fir-basic-ec8bf.iam.gserviceaccount.com";
  var key="-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQDOs+OClZ/sLLo0\nmsf5wcFxJXCsIyIq7Z2vWzqaqiPT6Xbhpr3RFYAwcM7DsYC3/uWNChW5kNE9KON5\n3wJOoojnGxY9hxkIsZMS2bv+Wc4YpPqUrw9egZSE3O5QwVzD4MS+0INZKPFcNu+D\nbO4zR8T+wVX+j+XT3E4ChkhsOj1gHSfpfAoQKLYzuvsDNRRQcCYZu0xbaOGsaGtA\nir684GEb8EatIrYa/7bcD7UWVjEuFxLPFHILin7qoPdD1noPgAuiv2RaW+PYMfdN\n7M7kVYETC7xTRTnBWIQ7EFym+S0MfjqSRkLuN0b0gyCEeQ/y6iGH4D+GOkBAsJI5\nK4IjHZsNAgMBAAECgf8n8H/drlIz6sjSLFPzJ8gaB36n1dtwZzLFvI/qL1b6sWzH\nG4bqIb1p07G2FYjxU/KUJkiiar6Qm49YqTXEgFy+o0ytPoxVkAvoRK583J+ZWGq6\nanofa/v7jNg47oTw6lWnBKwEQ0qDBu5AuPwhlDO1pMkgsfPnI50bUoeaPp3JfQO+\nOpS4NkzjYk53bi5JWTuFizF1Lw2vshnLl8c6bnzvzb6ZWRGkqol2KwqBcbWKUZzH\nEyJJfqos/rfUL1/N+imA37HRLeZwFKU5/6sZtlxxD/OVtCTgji1I5jTGrYjCThAp\noJs7f03KdO3nOJBQGd0hSUDU6cNXAxTPmcTc1S8CgYEA/7J6X6cZHo0GcXGYekEX\noLkvVY+zuZ6EXvU8CKWsLrT1254AlB3aPiQr016Af6EjXpQsDCHswmeZ1XeG0ISe\nFdTvljxQmIkS5E9G8hN7kRghbIduVyE3ifOw73Sue7BQtmisCGhKw7gW5YspEQhE\nPfmH3SxE0wZPeIA/tzq1NusCgYEAzvKOfRS9ODEJ52itr2xZfkkqqZq7heHcOh2Z\n6InwJ8Bku/VnIWj37JdUp4iHwVXXhSczc6e5HIhbpYVAERo9l8RYjQ/5Ti7UlTJ1\nVH7AtLzZ0mGRFVXtqJGTIzW/UPY3t3WIVDuvBiloDqM7MqxQ640Irnql4PzncTD5\nkQJh5+cCgYEA0diO99tyERGZ/RZGFec/1ebFAwo5bJe8eRX4G/yjb32R3JgyT1yk\nlKUo1oJTIOuE1IT0FUzuOqm9pWQ/3vdHqhEkQ37ighzUxUyOo/L7URulqqUHGDip\nlOzLA+oVnGsaAmmq7gdxfGijWeU4YcMQBnC4YPqIzUr7g6B1KhHjUNsCgYBuZaSv\ngy3B2R8wbH4jE8jV/pActCePL0K9Wectzs/nVNIoFqyyfP2tH7mQOdw5veJf7N6c\ntv+gAfnp3aCkvvvWh265qajUFVVgVe+TaJ7Ci/AjM9sip5lFkIsOgHCT7xUf8DoO\nvVwMDHCvRlKhIJ12WuEjutfcou2QS5EG01+JRwKBgFh5TMafn0jkXnLrUpSGdsZe\ntqgm6tzFDtn9R34hNrKxPBefPCqFbrE0GzmcA4GmVzDnvtY0tfsiq7oxPP2jf1Es\nwKpMZdv5mwJh/tHTJK6HWMJgWkCOcfggJdzIO7FcTrZRb5DDP7XVMnZGzVGTJMZl\nLk5/7RA+BH8k3A8mqhpN\n-----END PRIVATE KEY-----\n";
  var projectId="fir-basic-ec8bf";
  var firestore = FirestoreApp.getFirestore(email, key, projectId);
  return firestore;
}




function firebaseUpload()
{
  var obj={
    "topics": [
      {
        "quiz_set_id": "CoronavirusAwareness_EP1_TP1_QZ",
        "topic_id": "CoronavirusAwareness_EP1_TP1",
        "topic_text": "Sonu And His Family",
        "topic_image_id": "CoronavirusAwareness/media/images/sonu_and_family_thumbnail.jpg",
        "media_id": [
          "CoronavirusAwareness_EP1_TP1_VD1",
          "CoronavirusAwareness_EP1_TP1_PDF1",
        ],
          "vernacular_id": "VR_CoronavirusAwareness_EP1_TP1"
          },
          {
          "quiz_set_id": "CoronavirusAwareness_EP1_TP2_QZ",
          "topic_id": "CoronavirusAwareness_EP1_TP2",
          "topic_text": "Thoughtful Milli",
          "topic_image_id": "CoronavirusAwareness/media/images/thoughful_millli_thumbnail.jpg",
          "media_id": [
          "CoronavirusAwareness_EP1_TP2_VD1",
          "CoronavirusAwareness_EP1_TP2_PDF1",
        ],
        "vernacular_id": "VR_CoronavirusAwareness_EP1_TP2"
      },
      {
        "quiz_set_id": "CoronavirusAwareness_EP1_TP3_QZ",
        "topic_id": "CoronavirusAwareness_EP1_TP3",
        "topic_text": "Clever Rivu",
        "topic_image_id": "CoronavirusAwareness/media/images/clever_rivu_thumbnail.jpg",
        "media_id": [
          "CoronavirusAwareness_EP1_TP3_VD1",
          "CoronavirusAwareness_EP1_TP3_PDF1",
        ],
          "vernacular_id": "VR_CoronavirusAwareness_EP1_TP3"
          },
        ]
      }
      
      var firestore=firebaseConnection();
      Logger.log(obj.topics.length);
      
      for(var i=0;i<obj.topics.length;i++)
      {
         firestore.createDocument("topics", obj.topics[i]);
      }
      
      
      
}





function firebaseUploadLight()
{
  var obj = {
    "classes": [
        {
            "class_id": "CoronavirusAwareness",
            "episode_file_id": "CoronavirusAwareness_episodes",
            "class_text": "Coronavirus Awareness",
            "class_image_id": "CoronavirusAwareness/media/images/coronavirus_thumbnail.jpg",
            "vernacular_id": "VR_CoronavirusAwareness1"
        },
        {
            "class_id": "CoronavirusAwareness1",
            "episode_file_id": "CoronavirusAwareness_episodes1",
            "class_text": "Coronavirus Awareness1",
            "class_image_id": "CoronavirusAwareness/media/images/coronavirus_thumbnail.jpg1",
            "vernacular_id": "VR_CoronavirusAwareness11"
        }
    ]
}
      var firestore=firebaseConnection();
      Logger.log(obj.classes.length);
  
  for(var i=0;i<obj.classes.length;i++)
  {
    firestore.createDocument("classes", obj.classes[i]);
  }
      
}
