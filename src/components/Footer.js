import React from "react";

function Footer() {
    return (
        <footer className='page-footer blue lighten-1'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/wrongsky1/shop-project'
                        target='_blank'
                        rel='noreferrer'>
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
