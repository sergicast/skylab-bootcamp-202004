class Home extends Component {
    constructor (name, callback) {
    super (`<section class="home">
    <h1>Welcome, ${name}!</h1><button>Logout</button>
    </section>`)

    const button = container.querySelector('button');

    button.addEventListener('click', function() {
        callback()
    })

    let results;

    const self = this;

    this.container.appendChild(new Search(function(query){
        const users = searchUsers (query);

        if(!results){
            results = new Results(users)

            self.container.appendChild(results.container)
        } else {
            const _results = results;

            _results = new Results(users);

            _results.container.replaceWith(results.container)
        }

    }).container)

}
}

