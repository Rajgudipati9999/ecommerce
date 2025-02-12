import {NotFoundContainer , NotFoundImg } from './styledComponent'

const NotFound = () => (
  <NotFoundContainer className="not-found-container">
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not-found"
    />
  </NotFoundContainer>
);

export default NotFound;