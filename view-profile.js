function updateLevelProgress() {
    var pointsStr = document.getElementById('points').innerHTML;
    var points = parseInt(pointsStr);
    var level = document.getElementById('volunteer-level').innerHTML;
    var goal = document.getElementById('goal').innerHTML;

    if (points > 200){
        level = "Ultimate";
        goal = "-";
        document.getElementById('curr-progress').innerHTML = "-";
    }
    else if (points > 140){
        level = "Diamond";
        goal = "200";
    }
    else if (points > 90){
        level = "Platnium";
        goal = "140";
    }
    else if (points > 50){
        level = "Gold";
        goal = "90";
    }
    else if (points > 20){
        level = "Silver";
        goal = "50";
    }
    else if (points >= 0){
        level = "Bronze";
        goal = "20";
    }

    document.getElementById('level-progress').value = points;
}

function updateProgressBar() {
    const points = document.getElementById('points').innerHTML;
    
}

function editProfile() {
    document.getElementById('edit-profile-window').style.display = "block";

    document.getElementById('save-changes').onclick = function(){
        document.getElementById('new-first-name').innerHTML = document.getElementById('firstname').innerHTML;
        document.getElementById('new-last-name').innerHTML = document.getElementById('lastname').innerHTML;
        document.getElementById('new-phone').innerHTML = document.getElementById('phone').innerHTML;
        document.getElementById('new-mbti').innerHTML = document.getElementById('mbti').innerHTML;
    };

    document.getElementById('cancel').onclick = function(){
        document.getElementById('edit-profile-window').style.display = "none";
    };
}

function previewProfilePicture(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('edit-profile-picture');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

function triggerFileInput() {
    document.getElementById('new-profile-picture').click();
    console.log('qqq');
}