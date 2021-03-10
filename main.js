// access all filter buttons
let filterButtons = document.querySelectorAll('.mybtn')

// access all items
let allItems = document.querySelectorAll('.card')

// traverse buttons array
filterButtons.forEach(function (value) {
    value.addEventListener('click', myFilter)
})

// creating myfilter function
function myFilter(e) {
    // firstly find which filter button is clicked
    let clickedButton = e.target.innerHTML

    // when clicked on "All" button
    if (clickedButton === 'all') {
        allItems.forEach(function (value) {
            value.style.display = 'block'
        })
    }

    // when clicked on "Cakes" button
    if (clickedButton === 'cakes') {
        allItems.forEach(function (value) {
            if (value.classList.contains('cakes')) {
                value.style.display = 'block'
            } else {
                value.style.display = 'none'
            }
        })
    }


    // if clicked on "cupcake" button
    if (clickedButton === 'cupcakes') {
        allItems.forEach(function (value) {
            if (value.classList.contains('cupcakes')) {
                value.style.display = 'block'
            } else {
                value.style.display = 'none'
            }
        })
    }


    // if clicked on "sweets" buttons
    if (clickedButton === 'sweets') {
        allItems.forEach(function (value) {
            if (value.classList.contains('sweets')) {
                value.style.display = 'block'
            } else {
                value.style.display = 'none'
            }
        })
    }


    // if clicked on "cones" butotn
    if (clickedButton === 'cones') {
        allItems.forEach(function (value) {
            if (value.classList.contains('cones')) {
                value.style.display = 'block'
            } else {
                value.style.display = 'none'
            }
        })
    }
}