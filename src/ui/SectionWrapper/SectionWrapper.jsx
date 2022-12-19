import { Section, Title } from './SectionWrapper.styled';
import PropTypes from 'prop-types';

export const SectionWrapper = ({ title, children }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      {children}
    </Section>
  );
};

SectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
