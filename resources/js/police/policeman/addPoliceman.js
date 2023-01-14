const form = document.getElementById('form');
const name = document.getElementById('name');
const police_id = document.getElementById('police_id');
const nic = document.getElementById('nic');
const rank = document.getElementById('rank');
const police_station = document.getElementById('police_station');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const nameValue = name.value.trim();
	const police_idValue = police_id.value.trim();
	const nicValue = nic.value.trim();
	const rankValue = rank.value.trim();
    const police_stationValue = police_station.value.trim();
    
	if(nameValue === '') {
		setErrorFor(name, 'Name cannot be blank');
	} else {
		setSuccessFor(name);
	}
	
	if(police_idValue === '') {
		setErrorFor(police_id, 'Police ID cannot be blank');
	// } else if (!isEmail(emailValue)) {
	// 	setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(police_id);
	}
	
	if(nicValue === '') {
		setErrorFor(nic, 'NIC cannot be blank');
	} else {
		setSuccessFor(nic);
	}

    if(rankValue === '') {
        setErrorFor(rank, 'Rank cannot be blank');
    } else {
        setSuccessFor(rank);
    }

    if(police_stationValue === '') {
        setErrorFor(police_station, 'Police Station cannot be blank');
    } else {
        setSuccessFor(police_station);
    }
	
	// if(password2Value === '') {
	// 	setErrorFor(password2, 'Password2 cannot be blank');
	// } else if(passwordValue !== password2Value) {
	// 	setErrorFor(password2, 'Passwords does not match');
	// } else{
	// 	setSuccessFor(password2);
	// }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }


// const rank = document.getElementById("rank");

// const rankData = {
//     "Policeman": "",
//     "OIC": ""
// }

// for (let key in rankData) {
//     let option = document.createElement("option");
//     option.setAttribute('value', rankData["option" + key]);

//     //remove later
//     console.log(key);
    
//     let optionText = document.createTextNode(key); 
//     option.appendChild(optionText);
  
//     rank.appendChild(option);
// }

let rankOptions = document.getElementById("rank");
let rankOptionsList = ["Policeman", "OIC"];

let isOpen = false;



