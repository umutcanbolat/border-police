import React, { useMemo } from 'react';
import { Select } from 'antd';
import { OptionProps } from 'antd/lib/select';
import StyledSidePanel from '../styles/StyledSidePanel';
import { Regions } from '../interfaces/mapInterfaces';
import { SidePanelProps } from '../interfaces/sidePanel';
import Cap from '../assets/police-cap.svg';
import countriesRegionsRaw from '../assets/data/countriesRegions.min.json';

const { Option, OptGroup } = Select;
const countriesRegions = countriesRegionsRaw as Regions;

const onFilter = (input: string, option: React.ReactElement<OptionProps>): boolean =>
  option && option.key
    ? option.key
        .toString()
        .toLowerCase()
        .includes(input.toLowerCase())
    : false;

const SidePanel: React.FC<SidePanelProps> = ({
  hoveredCountryCode,
  selectedCountryCode,
  onSelect,
}) => {
  const optionGroups = Object.keys(countriesRegions).map(regionName => {
    const countries = countriesRegions[regionName];
    return (
      <OptGroup key={regionName} label={regionName}>
        {countries.map(country => {
          const { name, code } = country;
          return (
            <Option key={name} value={code}>
              {name}
            </Option>
          );
        })}
      </OptGroup>
    );
  });

  const onChange = (value: string): void => {
    onSelect(value);
  };

  return useMemo(() => {
    return (
      <>
        <StyledSidePanel>
          <Cap id="cap" />
          <h1>Border Police</h1>
          <p>
            Border Police instantly shows you a map of the visa-free countries that you can travel
            to!
          </p>
          <p>Either select a country below or hover on any on the map.</p>
          <Select
            showSearch
            allowClear
            filterOption={onFilter}
            style={{ width: 200 }}
            placeholder="Select a country"
            value={hoveredCountryCode || selectedCountryCode || undefined}
            onChange={onChange}
          >
            {optionGroups}
          </Select>

          {/* TODO: Extract color palette to a new component */}
          <div className="color-palette">
            <div className="palette">
              <div id="visaFree" className="box"></div>
              <span>Visa Free</span>
            </div>
            <div className="palette">
              <div id="visaOnArrival" className="box"></div>
              <span>Visa on Arrival</span>
            </div>
            <div className="palette">
              <div id="eVisa" className="box"></div>
              <span>e-Visa</span>
            </div>
          </div>
        </StyledSidePanel>
      </>
    );
  }, [hoveredCountryCode, selectedCountryCode, onSelect]);
};

export default SidePanel;
