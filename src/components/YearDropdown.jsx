import { useState } from 'react';
import PropTypes from 'prop-types';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const YearDropdown = () => {
    return (
        <Select>
            <Option value="test">Test Year</Option>
        </Select>
    );
};

export default YearDropdown;


