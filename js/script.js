window.onload = function(){
	const profileBtn = document.getElementById('profile-btn')
	const messagesBlock = document.getElementById('messages')
	
	function checkMessages(){
		if(messagesBlock.classList.contains('active')){
			messagesBlock.style.display = 'block'
		} else{
			messagesBlock.style.display = 'none'
		}
	}	
	
	profileBtn.onclick = function(){
		const profile = document.getElementById('profile-tab')
		const profileTab = new bootstrap.Tab(profile)
		profileTab.show()
	}
	checkMessages()
	document.addEventListener('shown.bs.tab', function (event) {
		if (event.target.id === 'messages-tab') {
			checkMessages()
		} else{
			checkMessages()
		}
	})
}