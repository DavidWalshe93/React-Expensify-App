// Created by David Walshe on 25/02/2020

import React from "react";

const EditExpensePage = (props) => {
    console.log(props);
    return (<>
            Editing the expense with id of {props.match.params.id}
        </>
    )
};

export default EditExpensePage;