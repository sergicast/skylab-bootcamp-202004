function Results(users) {
    Component.call(this, `<section class="results">
    </section>`)

    if (users.length) {
        const list = document.createElement('ul')

        // users.forEach(function (user) {
        users.forEach(function ({ name, surname, email }) {
            const item = document.createElement('li')

            // const { name, surname, email } = user

            item.innerText = `${name} ${surname} (${email})`

            list.appendChild(item)
        })

        this.container.appendChild(list)
    } else this.container.appendChild(Feedback('sorry, no results :(', 'warning'))
}

Results.prototype = Object.create(Component.prototype)
Results.prototype.constructor = Results