function Search({ onSubmit }) {
    // const handleSubmit = event => {
    function handleSubmit(event) {
        event.preventDefault()

        let { query } = event.target

        query = query.value

        onSubmit(query)
    }

    return <section className="search">
        <form onSubmit={handleSubmit}>
            <input type="text" name="query" />
            <button>🔍</button>
        </form>
    </section>
}