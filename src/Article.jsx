import React, { useState, useEffect } from 'react';
import './ArticleStyle.css';

function Article({ title, subtitle, content }) {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns(distributeText(content));
  }, [content]);

  return (
    <div className="article">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className="image-placeholder"></div>
      <div className="content">
        {columns.map((column, index) => (
          <div key={index} className="column">
            {column.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Article;