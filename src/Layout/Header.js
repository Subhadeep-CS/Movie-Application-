import Logo from '../assets/images/logo.png';
const Header=()=>{
    return(
        <div id='headerLogo' className='absolute z-10 px-8 py-2 bg-gradient-to-b from-black'>
            <img src={Logo} alt='logo' className='w-44'/>
        </div>
    );
}

export default Header;