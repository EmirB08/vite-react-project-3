import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const YearDropdown = () => {
    const handleChange = (event, newValue) => {
        console.log(newValue);
    };

    return (
        <Select placeholder="Velg år" onChange={handleChange}>
            <Option value="2024">2024</Option>
            <Option value="2023">2023</Option>
            <Option value="2022">2022</Option>
            <Option value="2021">2021</Option>
            <Option value="2020">2020</Option>
            <Option value="2019">2019</Option>
            <Option value="2018">2018</Option>
            <Option value="2017">2017</Option>
            <Option value="2016">2016</Option>
            <Option value="2015">2015</Option>
            <Option value="2014">2014</Option>
            <Option value="2013">2013</Option>
            <Option value="2012">2012</Option>
            <Option value="2011">2011</Option>
            <Option value="2010">2010</Option>
            <Option value="2009">2009</Option>
            <Option value="2008">2008</Option>
            <Option value="2007">2007</Option>
            <Option value="2006">2006</Option>
            <Option value="2005">2005</Option>
            <Option value="2004">2004</Option>
            <Option value="2003">2003</Option>
            <Option value="2002">2002</Option>
            <Option value="2001">2001</Option>
            <Option value="2000">2000</Option>
            <Option value="1999">1999</Option>
            <Option value="1998">1998</Option>
            <Option value="1997">1997</Option>
            <Option value="1996">1996</Option>
            <Option value="1995">1995</Option>
            <Option value="1994">1994</Option>
        </Select>
    );
};

export default YearDropdown;





