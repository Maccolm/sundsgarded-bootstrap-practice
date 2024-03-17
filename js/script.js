window.onload = function(){
	const profileBtn = document.getElementById('profile-btn')
	profileBtn.onclick = function(){
		const profile = document.getElementById('profile-tab')

		const profileTab = new bootstrap.Tab(profile)
		profileTab.show()
	}
}