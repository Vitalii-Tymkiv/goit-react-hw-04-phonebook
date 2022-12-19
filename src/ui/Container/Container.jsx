import PropTypes from 'prop-types';
import { ContainerStyles } from './Container.styled';

export const Container = ({ children }) => (
  <ContainerStyles>{children}</ContainerStyles>
);

Container.propTypes = { children: PropTypes.node };
