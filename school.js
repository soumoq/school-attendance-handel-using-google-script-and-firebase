/*
correction

var studentName=studentDetails[j].fields.Studet_Name;
var STUDENTS_KEY = "students";

*/


function main() {
  fatchField();
}

//firebase key = MYeP8ZEEt1ylVDxS7uyg9plDOcoke7-2l
//firestore kry = 1VUSl4b1r1eoNcRWotZM3e87ygkxvXltOgyDZhixqncz9lQ3MjfT1iKFw
//firebase connection

function firebaseConnection() 
{
  var email = "firebase-adminsdk-5491u@school-f2298.iam.gserviceaccount.com";
  var key = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDYy7zWYf9g300D\nBXgVV7+YomepF6wtM5MzAw5tMRZvGBtj+PwRLY7KQvm9nopkdFz2Y3VMQ+/K3gQ3\n4AMWQetkZMfKc+XAKBQ2et1WSjV9ZLkLVeXtbTROIW6vPaFGE2BIvbjOdpm/4P0h\nwZCRlZgRGkhGlUHitpXMBG8xyTpf8lqsfCFMxrAfT4BdSaCk9VAwPwY/AEtA0pqH\nW3N8pGiTyvnfs5qeepjJFCcf/wpOn91lPSqz+wDIudsk1999zQbVDQhIvWajQcRS\nsV3yVPuhgnrPkg4DBqj1U5KFUdqR5ht8J3uQgI7RNaLE3DGEhNU55GAv3dNHyeSj\nQNor8qm7AgMBAAECggEAN3d88360J5VKL1U1YYSHVSZsDiOr3g69gQYtqTsvabIJ\nw/y+hSiaSV50ZhLLhqMM688Lgj05ezZtbtxF/epUruVoBoC7jfvTHBM4UO0AnXnp\nLCDIiIPxp3G/T1+dxP+NGV9NCqnmcWS/buUGt3DGLM4EIubqKfacAcw6pMq+wDAZ\nYmRhEky0FURgZRaOT1NhtuS8BpnIeSdOYX1naE/mcV+QSITQ84a42sPJiUEzYbw3\nPD6SJSAeQ5lFLk+c3FZzraRGYz8077D2wMLaYQ206ZdeKkBtEp64tF6GYe2TsJlG\nQB4hMCGHA5sayQjGoySM/1cgh+xCdTBtkLtcPiSZvQKBgQD1oNSsHgYvLQ+P818U\nuPOyqBM1c1E63AAkGfvmnqA+Cae0zWYHAiVsTKiigdLubB2jYZ7fMsi9U4Ewqw/q\nkqZZ+PcNJD1yLWeYb8iEms5Atdi+C3KQABmoj4jqEr/dElhf62mroNPvd6mORK7X\nds5mf4oRoFoEnLovAwpP++Pi7QKBgQDh8zy28+3hgcIrZpijJVFtIRuYUMhHA8bb\n0pvKTvwCZZZDYhcUSeZujJvxPxT2C4IoinrzumKGs2vQ23duv1QFFRC8dA7ZefP/\nWtm3dPIZrK/6WKUnx3YlTkSyKoXfodCToH3pnMaBquBEeC8BdO0z+N06kR8FFTQk\nTGcLomBiRwKBgQCO/MQxOf0xo1Km4u8buhsrioo8GFhWIlH2siWg+ACifK5jIxrc\nw5QTeoDEsTygTNHoFWEN35taE21mbn6CeEJcqADxZoJaoDHpXFFnWFLu+q0k3Lch\nOt208XGriaSlRhOqKvnFzobxpUBQMI1zopa+tkoivq0IeFAuI9/x9dmQdQKBgQCQ\nmxJVaKHqvBffnOa9KwoE1LaLcc/rmyAu2Yg5HvmsMwXLFED/DBi80aKP8DZjDZR8\ni7wKtlOOL9Alt/+k0jBcnFG8um4ygxlEaQmDnwW+psVtbEQuxDn5wDC48fwB1tbd\nVE6hL2Pf4tNrHpu+y+1vYKt9axk2MI7RWFBuoroaywKBgHgL6FNGt0z8IaXezWuZ\npjzg9mQOghpJUi364ukU987c/WQeioS/H2iuFdVv5Ry4/t+DSF47kvxZwBYBsDSE\nISBfGTBEso7FE6pDbF7snJQs7ZwnMEGZ0P5ESuBxghxosvcEZIO21gGz7J62wdbF\nPlx4+2/A2x4s2nz8CGvOBHoI\n-----END PRIVATE KEY-----\n";
  var projectId = "school-f2298";
  var firestore = FirestoreApp.getFirestore(email, key, projectId);
  return firestore;

}

//fatch all center from firebase
function centerData()
{
  var CENTERS_KEY="centers"
  var firestore=firebaseConnection();
  const allCentres = firestore.query(CENTERS_KEY).execute();
  //Logger.log(allCentres);
  return allCentres;
}




//fatch data from firebase
function fatchField()
{
  var allCentres=centerData();
  var center_name;
  var center_name_arr=[];
  var center_id;
  var branch;
  var branch_arr=[];
  var center_id_arr=[];

  for(var i=0;i<allCentres.length;i++)
  {
     center_name= allCentres[i].fields.Center_Name;
     center_id= allCentres[i].fields.Center_ID;
     //branch=allCentres[i].fields.Batch;
     center_name_arr.push(center_name);
     center_id_arr.push(center_id);
     //branch_arr.push(branch);Untitled project

  }
  
  
  newSheet(center_name_arr,center_id_arr);
}



//write new Sheet
function newSheet(sheet,center_id)
{
  
  var student_attendance_date_arr=[];
  var student_attendance_present_arr=[];
  var student_name_arr=[];
  var student_batch_arr=[];
  var student_QR_Code_arr=[];
  var CENTERS_KEY = "centers";
  var STUDENTS_KEY = "student";
  var BATCH_FIELD = "Batch";
  var ATTENDANCE = "attendance";
  var allCentres=centerData();
  var firestore=firebaseConnection();
  var p=2;
  var q=1;
  var x=1;
  var y=4;
  var e=1;
  var cNo=0;
  var m=4;
  var n=2;
  var flg=true
 
  
  
    for(i=0;i<sheet.length;i++)
    {


      //create new sheet
      var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      var NewSheet = activeSpreadsheet.getSheetByName(sheet[i]);

      if (NewSheet != null) {
        activeSpreadsheet.deleteSheet(NewSheet);
      }

      NewSheet = activeSpreadsheet.insertSheet();
      NewSheet.setName(sheet[i]);
      
      
      var studentDetails = firestore.query(CENTERS_KEY + "/" + center_id[cNo] + "/" + STUDENTS_KEY).execute();
      
      
      //fatch student details
      for(j=0;j<studentDetails.length;j++)
      {
        var studentName=studentDetails[j].fields.Studet_Name;
        var studentBatch=studentDetails[j].fields.Batch;
        var student_QR_Code=studentDetails[j].fields.QR_Code;
        
       
        
        student_name_arr.push(studentNameUntitled project);
        student_batch_arr.push(studentBatch);
        student_QR_Code_arr.push(student_QR_Code);
        
        
        var studentAttendance= firestore.query(CENTERS_KEY + "/" + center_id[cNo] + "/" + STUDENTS_KEY + "/" + student_QR_Code + "/" + ATTENDANCE).execute();
        
        for(k=0;k<studentAttendance.length;k++)
        {
          var attendanceDate=studentAttendance[k].fields.Date;
          var attendancePresent=studentAttendance[k].fields.Present;
          
          student_attendance_date_arr.push(attendanceDate);
          student_attendance_present_arr.push(attendancePresent);
        }
        
        
        
        //add attendance date 
        for(f=0;f<student_attendance_date_arr.length;f++)
        {
          
          var app=SpreadsheetApp;
          var ss=app.getActiveSpreadsheet();
          var activeSheet=ss.getActiveSheet();
          activeSheet.getRange(x,y).setValue(student_attendance_date_arr[f]);
          y++;
          
          
        }
        
        y=4;
        x=1;
        
        
        //add attenddance value
        for(f1=0;f1<student_attendance_present_arr.length;f1++)
        {
          var app=SpreadsheetApp;
          var ss=app.getActiveSpreadsheet();
          var activeSheet=ss.getActiveSheet();
          activeSheet.getRange(n,m).setValue(student_attendance_present_arr[f1]);
          m++;
        }
        m=4;
        n++;
        
        student_attendance_present_arr=[];
        student_attendance_date_arr=[];
      }
      
      
      
      //adding value into sheet
      for(k=0;k<student_QR_Code_arr.length;k++)
      {
        var app=SpreadsheetApp;
        var ss=app.getActiveSpreadsheet();
        var activeSheet=ss.getActiveSheet();
        activeSheet.getRange(1,1).setValue("QR Code");
        activeSheet.getRange(p,q).setValue(student_QR_Code_arr[k]);
        p++;
      }
      
      p=2;
      q=2;
      for(k=0;k<student_name_arr.length;k++)
      {
        var app=SpreadsheetApp;
        var ss=app.getActiveSpreadsheet();
        var activeSheet=ss.getActiveSheet();
        activeSheet.getRange(1,2).setValue("Name");
        activeSheet.getRange(p,q).setValue(student_name_arr[k]);
        p++;
      }
      p=2;
      q=3;
      for(k=0;k<student_batch_arr.length;k++)
      {
        var app=SpreadsheetApp;
        var ss=app.getActiveSpreadsheet();
        var activeSheet=ss.getActiveSheet();
        activeSheet.getRange(1,3).setValue("Batch");
        activeSheet.getRange(p,q).setValue(student_batch_arr[k]);
        p++;
      }
      
      
      p=2;
      q=1;
      cNo++;
      student_QR_Code_arr=[];
      student_name_arr=[];
      student_batch_arr=[];
      student_attendance_date_arr=[];
      
      
  }
 
  
}













