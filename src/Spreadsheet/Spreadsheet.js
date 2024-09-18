import React, { useRef } from 'react';
import Handsontable from 'handsontable';
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.min.css';

const Spreadsheet = () => {
  const hotTableComponent = useRef(null);

  const data = [
    ['Country', 'Phone Number'],
    ['USA', '123-456-7890'],
    ['UK', '987-654-3210'],
    ['Germany', '555-111-2222'],
    ['France', '333-444-5555'],
  ];

  return (
    <div>
      <HotTable
        ref={hotTableComponent}
        data={data}
        colHeaders={true}
        rowHeaders={true}
        width="100%"
        height="300"
        stretchH="all"
        licenseKey="non-commercial-and-evaluation"
      />
    </div>
  );
};

export default Spreadsheet;
