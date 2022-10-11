import "./sideBarStatus.scss";
import open from '@assets/images/eye.svg'
import close from '@assets/images/eyeSlash.svg'

const SideBarStatus = () => {

    function handleHideSideBar() {

    }

    return (
        <button className="sideBarStatus" onClick={handleHideSideBar}>
            <img className="sideBarStatus__img" src={close} alt="hide sidebar" />
            <p className="sideBarStatus__text" >Hide Sidebar</p>
        </button>
    );
};

export default SideBarStatus;
