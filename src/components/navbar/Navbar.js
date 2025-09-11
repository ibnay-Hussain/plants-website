import React, { Component } from 'react'
export default class Navbar extends Component {

  constructor(){
    super();
    this.state = {
      isOpen: false,
      isScroll: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== this.state.isScroll) {
      this.setState({ isScroll: isScrolled });
    }
  };

  toggleBtn = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));  
  }

  closeMenu = () => {
    this.setState({isOpen: false});
  }

  render() {
    return (
      <div>
        <div id="navbar_parent" className={`fixed w-full top-0 left-0 z-50 h-16 sm:h-20 transition-all duration-[400ms] md:duration-[700ms] ${this.state.isScroll ? 'bg-yellow-500' : 'bg-transparent'}`}>
          <nav id="navbar" className='container flex items-center justify-between py-3'>
            <div className='text-3xl text-white font-medium'>Indoreplants</div>
            <div id="nav-menu" className={`absolute top-0 w-full min-h-[80vh] bg-green-950/80 z-30 backdrop-blur-sm flex items-center justify-center transition-all duration-[500ms] ${this.state.isOpen ? 'left-[0%]':'left-[-120%]'} lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}>
              <ul className='flex flex-col gap-8 lg:gap-10 items-center lg:flex-row'>
                <li className='text-2xl text-white'>
                  <a href="/" className="nav-link" onClick={this.closeMenu}>Home</a>
                </li>
                <li className='text-2xl text-white'>
                  <a href="/" className="nav-link" onClick={this.closeMenu}>About</a>
                </li>
                <li className='text-2xl text-white'>
                  <a href="/" className="nav-link" onClick={this.closeMenu}>Popular</a>
                </li>
                <li className='text-2xl text-white'>
                  <a href="/" className="nav-link" onClick={this.closeMenu}>Review</a>
                </li>
              </ul>
              <div>
                <img src="/assets/img/leaf-1.png" alt="Leaf1" className='absolute bottom-0 -right-10 w-32 lg:hidden'/>
              </div>
              <div>
                <img src="/assets/img/leaf-2.png" alt="Leaf2" className='absolute -top-10 -left-10 w-32 rotate-90 lg:hidden'/>
              </div>
            </div>
            <div className='z-40'>
              < i id='hamburger' className={`${this.state.isOpen ? 'ri-close-fill' : 'ri-menu-4-line'}  cursor-pointer text-xl lg:hidden `} onClick={this.toggleBtn}></i>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
