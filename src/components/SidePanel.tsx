import React from 'react';
import { Select } from 'antd';
import StyledSidePanel from '../styles/StyledSidePanel';
import { Regions } from '../interfaces/mapInterfaces';
import Cap from '../assets/police-cap.svg';
import countriesRegionsRaw from '../assets/data/countriesRegions.min.json';

const { Option, OptGroup } = Select;
const countriesRegions = countriesRegionsRaw as Regions;

const SidePanel: React.FC<{}> = () => {
  const optionGroups = Object.keys(countriesRegions).map(regionName => {
    const countries = countriesRegions[regionName];
    return (
      <OptGroup key={regionName} label={regionName}>
        {countries.map(country => {
          const { name, code } = country;
          return (
            <Option key={code} value={code}>
              {name}
            </Option>
          );
        })}
      </OptGroup>
    );
  });
  return (
    <>
      <StyledSidePanel>
        <Cap id="cap" />
        <h1>Border Police</h1>

        <p>
          Border Police instantly shows you a map of the visa-free countries that you can travel to!
        </p>
        <p>Either select a country below or hover on any on the map.</p>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a country"
          optionFilterProp="children"
        >
          {optionGroups}
        </Select>
      </StyledSidePanel>
    </>
  );
};

export default SidePanel;
