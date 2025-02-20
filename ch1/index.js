const container = React.createElement('div', { id: 'container' }, [
  React.createElement('div', { id: 'container2' }, [
    React.createElement('h1', { id: 'heading1' }, 'Heading 1'),
    React.createElement(
      'h2',
      {
        style: {
          color: 'white',
          backgroundColor: 'Black',
          textAlign: 'center',
        },
      },
      'Heading 2'
    ),
  ]),
  React.createElement('h3', { id: 'heading3' }, 'Heading 3'),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
