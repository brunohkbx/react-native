/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */

'use strict';

const React = require('react');
const Text = require('../../../Text/Text');
const TouchableHighlight = require('../TouchableHighlight');
const render = require('../../../../jest/renderer');

describe('TouchableHighlight', () => {
  it('renders correctly', () => {
    const instance = render.create(
      <TouchableHighlight style={{}}>
        <Text>Touchable</Text>
      </TouchableHighlight>,
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });

  it('has displayName', () => {
    expect(TouchableHighlight.displayName).toEqual('TouchableHighlight');
  });
});
