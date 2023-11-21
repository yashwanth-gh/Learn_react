function customRender(container,reactElement){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    // container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children')continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
   container.appendChild(domElement);
}

const container = document.getElementById('root');

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click this to go to google\'s website'
}

customRender(container,reactElement);