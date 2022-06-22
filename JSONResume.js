let resume = {
    
    basicInformation: {
      "name": "Sabarikrishnan MB",
      "email": "mbsabarikrishnan@gmail.com",
      "phone": "7373314145",
      "address": "1/80 F-7 Perundevi Nagar, Emaneswaram,Pin Code 623701, Ramanathapuram",  
    },

    education: [
      {
        "college": "St. Michael College of Engineering & Technology, Kalayarkoil",
        "degree"  : "B. Tech - Information Technology (Percentage 71.8)",
        "yearOfPassed": 2014,
      },
      
      {
        "school":"Sourashtra Higher Secondary School, Paramakudi",
        "sslc": "2010 with 82 percentage",
        "hsc": "2012 with 70 percentage",
      },
    ],

    workExperiance:[
      {
      "icmr":"National Institute of Epidemiology (September 2017- August 2019) DEO – A (IRIS – Project): Data entry and analysis work for the project. Assist project staffs and schedule the shifts for the project field staffs. Processing TA claims, and maintains project payments and receipts. Maintain project documents and all other project related works assigned by Project Investigator and Co- Project Investigators of the Project",
      },
      
      {
      "igs": "Intelenet Global Services Limited (April 2015- May 2016) Senior Customer Service Executive (SCSE): Responsible for Retail Banking And Account Opening team to check all customer and business related details. We will check all provided documents and validate the business and the customer and approve their business and provide funding acknowledgement for the client",
      },
    ],

  }

    let resumeJson = JSON.stringify(resume);
    console.log(resumeJson);

    let resumeObject= JSON.parse(resumeJson);
    console.log(resumeObject);