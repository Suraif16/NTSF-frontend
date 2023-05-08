function loadProfileInformation(){
    document.getElementById('user_name').innerHTML = sessionStorage.getItem('user_police_name');
        
    var table = document.getElementById("profile-table");
    
    jwt = sessionStorage.getItem('jwt');
    console.log(jwt);
    user_police_id = sessionStorage.getItem('user_police_id');
    console.log("user_police_id: " +user_police_id);
    user_rank = sessionStorage.getItem('rank');
    console.log(user_rank);
    let httpreq = new XMLHttpRequest;
    httpreq.onreadystatechange = function()
    {
        if (this.readyState === 4 && this.status === 200) {
            completeLoad(this);
        }
    }

    httpreq.open("POST", "http://localhost:8080/ntsf_backend_war/policeman", true);
    httpreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded" );
    httpreq.setRequestHeader("Authorization", "Bearer " + sessionStorage.getItem('jwt'));
    httpreq.send("action=viewProfile" + "&police_id=" + user_police_id + "&rank=" + user_rank);

    function completeLoad(httpreq)
    {
        let jsonProfileData = JSON.parse(httpreq.responseText);
        console.log(jsonProfileData);

        if(jsonProfileData.serverResponse === "null session" || jsonProfileData.serverResponse === "Not Allowed")
        {
            window.location.href = "http://localhost:8080/ntsf_backend_war/login"; //Redirect to login page
            console.log("Redirecting to login page");
        }
        else if(jsonProfileData.serverResponse === "Allowed")
        {
            console.log("Allowed");

            console.log(jsonProfileData.List[0].grade);
            console.log(jsonProfileData.List[0].position);
                    
            document.getElementById("grade").innerHTML = jsonProfileData.List[0].grade;
            document.getElementById("police-id").innerHTML = jsonProfileData.List[0].police_id;
            document.getElementById("nic").innerHTML = jsonProfileData.List[0].nic;
            document.getElementById("mobile-number").innerHTML = jsonProfileData.List[0].mobile_number;
            document.getElementById("email").innerHTML = jsonProfileData.List[0].email;
            document.getElementById("police-station").innerHTML = jsonProfileData.List[0].police_station;
            document.getElementById("rank").innerHTML = jsonProfileData.List[0].rank;
            document.getElementById("name").innerHTML = jsonProfileData.List[0].name;
            document.getElementById("position").innerHTML = jsonProfileData.List[0].position;

        }
        else
        {
            alert("Something went wrong");
        }
        return jsonProfileData;
    }
}


