// Created by David Walshe on 25/02/2020

import {Link} from "react-router-dom";
import React from "react";

const NotFoundPage = () => (
    <>
        Page not found. <Link to={"/"}>Go to Home</Link>
    </>
);

export default NotFoundPage;