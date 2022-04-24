
function init() {
    fetch('/api/me', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            let {courses, edu, ...otherData} = data
            Object.keys(otherData).forEach(key => {
                let element = document.getElementById(key)
                if (element) {
                    element.innerText = otherData[key]
                }
            })
            let coursesList = document.getElementById('courses')
            courses.forEach(({loc, name, year}) => {
                let courseItem = document.createElement('li')
                courseItem.classList.add('list__item', 'timeline__item', 'row')
                courseItem.innerHTML = `<span class="timeline__date col-2">${year}</span>
                                <div class="timeline__info col-10">
                                    <p class="timeline__text">
                                        ${loc}<br>
                                        <i>${name}</i>
                                    </p>
                                </div>`
                coursesList.appendChild(courseItem)
            })
        })
}

init()