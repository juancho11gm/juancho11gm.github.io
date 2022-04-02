import PropTypes from 'prop-types'; // ES6

function Layout({ children }) {
  return <main className="max-w-6xl	my-0 mx-auto">{children}</main>;
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Layout;
