import LinkMenu from './LinkMenu';

const Layout = (props) => (
    <div>
        <LinkMenu />
        {props.children}
    </div>
)

export default Layout;