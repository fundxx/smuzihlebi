import React from 'react';
import {Button} from "@mui/material";

const ButtonUi = ({text, onClick, width, isDisabled, size}) => {

    return (
        <Button variant="outlined"
                sx={{
                    borderRadius: 50,
                    width: `${width}`,
                    color: 'text.gray',
                    borderColor: 'text.gray'
                }}
                size={size}
                onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default ButtonUi;