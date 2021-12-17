import React from 'react';
import Link from "next/link";
const Headertoolbar = () => {
    return (
        <div className="header__toolbar">
            <Link href="/login">
                <a>
                    Login
                </a>
            </Link>
            <Link href="/cart">
                <a>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-bag" class="svg-inline--fa fa-shopping-bag fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 128C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 48c44.112 0 80 35.888 80 80H144c0-44.112 35.888-80 80-80zm176 384c0 17.645-14.355 32-32 32H80c-17.645 0-32-14.355-32-32V176h48v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h160v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h48v256z"></path></svg>
                </a>
            </Link>
        </div>
    );
}

export default Headertoolbar;