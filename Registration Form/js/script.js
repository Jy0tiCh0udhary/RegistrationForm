function formValidation(){
		  var ele = document.getElementsByName('gender');
		  var gender ='';
          for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
					var gender = ele[i].value;
          }
		  
		  var ele = document.getElementsByName('Lan');
		  var Language = '';
          for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
					Language = Language+" "+ ele[i].value;
          }
		  
		  let form = document.registration;
		  alert("User Id - "+form.userid.value
				+"\nPassword - "+form.passid.value
				+"\nUsername - "+form.username.value
				+"\nAddress - "+form.address.value
				+"\nCountry - "+form.country.value
				+"\nEmail - "+form.email.value
				+"\nGender - "+gender
				+"\nLanguage - "+Language
				+"\nAbout - "+form.desc.value)
	}