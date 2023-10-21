import { Link as MuiLink } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

import React from "react";

const LinkUi = (props) => {
    return (
        <MuiLink {...props} component={ReactRouterLink} to={props.href ?? "#"} />
    );
};

export default LinkUi;