//const searchkit = new SearchkitSearchkitManager("http://demo.searchkit.co/api/movies/");

const searchkit = new Searchkit.SearchkitManager("https://kili-eu-west-1.searchly.com/movies/", {
    basicAuth:"read:teetndhjnrspbzxxyfxmf5fb24suqxuj"
})

const App = () => React.createElement(
    Searchkit.SearchkitProvider,
    { searchkit: searchkit },
    React.createElement(
        Searchkit.Layout,
        null,
        React.createElement(
            Searchkit.TopBar,
            null,
            React.createElement(Searchkit.SearchBox, {
                autofocus: true,
                searchOnChange: true,
                prefixQueryFields: ["actors^1", "type^2", "languages", "title^10"] })
        ),
        React.createElement(
            Searchkit.LayoutBody,
            null,
            React.createElement(
                Searchkit.SideBar,
                null,
                React.createElement(Searchkit.HierarchicalMenuFilter, {
                    fields: ["type.raw", "genres.raw"],
                    title: "Categories",
                    id: "categories" }),
                React.createElement(Searchkit.RefinementListFilter, {
                    id: "actors",
                    title: "Actors",
                    field: "actors.raw",
                    operator: "AND",
                    size: 10 })
            ),
            React.createElement(
                Searchkit.LayoutResults,
                null,
                React.createElement(
                    Searchkit.ActionBar,
                    null,
                    React.createElement(
                        Searchkit.ActionBarRow,
                        null,
                        React.createElement(Searchkit.HitsStats, null)
                    ),
                    React.createElement(
                        Searchkit.ActionBarRow,
                        null,
                        React.createElement(Searchkit.SelectedFilters, null),
                        React.createElement(Searchkit.ResetFilters, null)
                    )
                ),
                React.createElement(Searchkit.Hits, { mod: "sk-hits-grid", hitsPerPage: 10, itemComponent: Searchkit.MovieHitsGridItem,
                    sourceFilter: ["title", "poster", "imdbId"] }),
                React.createElement(Searchkit.NoHits, null)
            )
        )
    )
);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));