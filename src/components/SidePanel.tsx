import React from 'react';
import { Select } from 'antd';
import StyledSidePanel from '../styles/StyledSidePanel';
import { Regions } from '../interfaces/mapInterfaces';
import { SidePanelProps } from '../interfaces/sidePanel';
import Cap from '../assets/police-cap.svg';
import countriesRegionsRaw from '../assets/data/countriesRegions.min.json';

const { Option, OptGroup } = Select;
const countriesRegions = countriesRegionsRaw as Regions;

const SidePanel: React.FC<SidePanelProps> = ({ hoveredCountryCode, selectedCountryCode }) => {
  const optionGroups = Object.keys(countriesRegions).map(regionName => {
    const countries = countriesRegions[regionName];
    return (
      <OptGroup key={regionName} label={regionName}>
        {countries.map(country => {
          const { name, code } = country;
          return (
            <Option key={name} value={code}>
              <div
                onMouseOver={(): void => {
                  console.log('hovered -->', code);
                }}
              >
                {name}
              </div>
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
          allowClear
          filterOption={(input, option): boolean =>
            option && option.key
              ? option.key
                  .toString()
                  .toLowerCase()
                  .includes(input.toLowerCase())
              : false
          }
          style={{ width: 200 }}
          placeholder="Select a country"
          onChange={value => {
            console.log(value);
          }}
        >
          {optionGroups}
        </Select>
      </StyledSidePanel>
    </>
  );
};

export default SidePanel;
