import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester } from '../../config/schemaform-utils.jsx';
import { fileConfig } from '../../../src/js/definitions/file';

describe('Schemaform definition file', () => {
  it('should render file', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={fileConfig.schema()}
        uiSchema={fileConfig.uiSchema('Test')}/>
    );

    const formDOM = findDOMNode(form);

    expect(formDOM.querySelector('input[type="file"]')).not.to.be.null;
    expect(formDOM.querySelector('label[role="button"]')).not.to.be.null;
  });
});
