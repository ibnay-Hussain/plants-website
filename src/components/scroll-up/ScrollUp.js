import React, { Component } from 'react'

export default class ScrollUp extends Component {

    constructor() {
        super();
        this.state = {
            scroll: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 300) {
            this.setState({ scroll: true });
        } else {
            this.setState({ scroll: false });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div>
                <a
                    className={`fixed ${this.state.scroll ? 'bottom-4' : '-bottom-1/2'} right-4 px-2 py-1 md:px-3 md:py-2 text-xl rounded-md  bg-yellow-500 hover:-translate-y-1 duration-300 inline-block z-50 cursor-pointer`}
                    href='/'
                >
                    <i className='ri-arrow-up-line'></i>
                </a>
            </div>
        )
    }
}
