
import { 
    HomeOutlined, 
    UserAddOutlined, 
    EnvironmentOutlined

} from '@ant-design/icons';

const Navbar = [
    {
        key: 1,
        title: "Home",
        icon: <HomeOutlined />,
        link: "/home",  
    },
    {
        key: 1,
        title: "Add User",
        icon: <UserAddOutlined />,
        link: "/addcontacts",  
    },
    {
        key: 1,
        title: "Map",
        icon: <EnvironmentOutlined />,
        link: "/map",  
    },
    
]

export default Navbar