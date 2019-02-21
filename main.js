//selector

const profileForm     = document.querySelector('.profileForm');
const profile         = document.querySelector('.profile');
const nameInput       = document.querySelector('#name');
const ageInput        = document.querySelector('#age');
const professionInput = document.querySelector('#profession');

function loadEventListener(){
    document.addEventListener('DOMContentLoaded', getProfiles);
    profileForm.addEventListener('submit',profileSubmit);
}


loadEventListener();

function getProfiles(){

        let  profiles;
        if( localStorage.getItem('profiles') ){
          profiles = JSON.parse(localStorage.getItem('profiles'));
         
        }else{
          profiles = [];
        }
    
        let formatTxt='';
        profiles.forEach( prof => {
          
           formatTxt += formatText(prof);
        });
        profile.innerHTML = formatTxt;
}

//Lisetening 
function profileSubmit(e){
 if( nameInput.value == ''|| ageInput.value == '' || profession.value == '' ){
   alert('provide correct information');
   return;
 }
        e.preventDefault();
       const profileData = {
            name : nameInput.value,
            age  : ageInput.value,
            profession: profession.value
       } 

       console.log(profileData);
        const formattedText = formatText(profileData);
        saveData(profileData);
    
        profile.innerHTML += formattedText;
        nameInput.value    = '';
        ageInput.value     = '';
        professionInput.value ='';
}

function formatText ({name, age, profession}){
    return `<div class="profile__section">
   <h3>Name: ${name}</h3>
   <p>Age:${age}</p>
   <p>Profession: ${profession}</p>
   </div>`
}


function saveData(profileData){
    let  profiles;
    if( localStorage.getItem('profiles') ){
      profiles = JSON.parse(localStorage.getItem('profiles'));
   
    }else{
      profiles = [];
    }
    profiles.push(profileData);
    localStorage.setItem('profiles', JSON.stringify(profiles));
}


