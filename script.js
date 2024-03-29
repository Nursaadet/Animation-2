const cursor = document.createElement("div")
cursor.className = "cursor"

document.body.append(cursor)

document.documentElement.addEventListener('mousemove', (e) => {
    cursor.style.setProperty('top', e.clientY + 'px')
    cursor.style.setProperty('left', e.clientX + 'px')
    console.log(
    e.clientX,
    e.clientY 
    )
});
