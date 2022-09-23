var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var remove = document.querySelector('.remove-all')
// console.log(remove)
var tags = ['Nodejs' , 'Reactjs']
var  x = 'Bạn chưa nhập dữ liệu <3'
function render() {
	content.innerHTML = ''
	for (let i = 0; i < tags.length; i++) {
		var tag = tags[i]
		content.innerHTML += `<li>
								${tag}
								<i class="fal fa-times" onmouseover="removeTag(${i})"></i>
							</li>
							`
	}
	content.appendChild(input) // vì thẻ input bị mất nên dùng appendChild thêm vào cuối 
	input.focus() // vào cái có thể gõ luôn input
}

render() // gọi in ra các phần tử của mảng tags



input.addEventListener('keydown', function(event){
	if (event.key == 'Enter') {
		if (input.value == '') {
			window.alert(x);
		}
		else{
			tags.push(input.value.trim())	
			render() // gọi lại hàm render vì đã thêm 1 phần tử mới vào mảng tags bên trên nên for lại từ đầu . lúc này tags.length = 3
			input.value = ''
		}
		
	}
})

function removeTag(index){
	 tags.splice(index,1)
	 render()
}
console.log(tags.length)
console.log(tags[1])
remove.addEventListener('click',()=>{
	tags = []
	render()
})