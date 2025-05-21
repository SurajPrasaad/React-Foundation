const App = ()=>{
    return React.createElement(
        "div",
        {},
        React.createElement(
            "h1",
            {class:"test"},
            "React First Foundation...🎯"
        )
    )
}

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(React.createElement(App))