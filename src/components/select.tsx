import React from 'react';
import { Select } from 'antd';
import querystring from 'querystring';
import url from 'url';

const { Option } = Select;

const versions = ['1', '2'];

const VersionSelect = () => {
  const version = querystring.parse(window.location.search.substr(1)).version;
  console.log('version', version);
  const handleChange = (e) => {
    console.log('e', e);
    // @ts-ignore
    window.location = "/src-pages-docs-installation-index?version="+e;
    
  }
  return(
    <div>
      version:
      <Select defaultValue={version || 1} style={{ width: 120 }} onChange={handleChange}>
      {
        versions.map(e=>(<Option value={e}>{e}</Option>))
      }
      </Select>
    </div>
  );
}


