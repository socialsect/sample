import React from 'react';
import './Breadcrumb.css';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb">
      <div className="breadcrumb-container">
        {items.map((item, index) => (
          <React.Fragment key={item.path}>
            {index > 0 && <span className="breadcrumb-separator">/</span>}
            {index === items.length - 1 ? (
              <span className="breadcrumb-current">{item.label}</span>
            ) : (
              <a href={item.path} className="breadcrumb-link">{item.label}</a>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;
