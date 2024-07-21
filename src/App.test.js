import React from 'react';
import Article from './Article';

function App() {
  const articleContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor volutpat porttitor. Proin mollis tempus feugiat. Mauris lectus nunc, porttitor ac odio ac, maximus ultricies est. Etiam neque ex, pharetra at lorem vitae, ullamcorper mollis tortor. Sed non tempor nec ex, convallis porttitor. Aliquam eu tempor ipsum. Aenean ut justo velit. Pellentesque eleifend id lorem et feugiat. Aenean ac urna in leo gravida blandit. Praesent eget fringilla erat. Integer nulla netus gravida. Imperdiet felis et, gravida arcu. Nulla et velit massa. Sed mollis diam sit amet nisi varius molestie.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor volutpat porttitor. Proin mollis tempus feugiat. Mauris lectus nunc, porttitor ac odio ac, maximus ultricies est. Etiam neque ex, pharetra at lorem vitae, ullamcorper mollis tortor. Sed non tempor nec ex, convallis porttitor. Aliquam eu tempor ipsum. Aenean ut justo velit. Pellentesque eleifend id lorem et feugiat. Aenean ac urna in leo gravida blandit. Praesent eget fringilla erat. Integer nulla netus gravida. Imperdiet felis et, gravida arcu. Nulla et velit massa. Sed mollis diam sit amet nisi varius molestie.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor volutpat porttitor. Proin mollis tempus feugiat. Mauris lectus nunc, porttitor ac odio ac, maximus ultricies est. Etiam neque ex, pharetra at lorem vitae, ullamcorper mollis tortor. Sed non tempor nec ex, convallis porttitor. Aliquam eu tempor ipsum. Aenean ut justo velit. Pellentesque eleifend id lorem et feugiat. Aenean ac urna in leo gravida blandit. Praesent eget fringilla erat. Integer nulla netus gravida. Imperdiet felis et, gravida arcu. Nulla et velit massa. Sed mollis diam sit amet nisi varius molestie.`;

  return (
    <div className="App">
      <Article
        title="Proyecto de software usando React y JS"
        subtitle="Desarrollo backend de el mides para administracion"
        content={articleContent}
      />
    </div>
  );
}

export default App;