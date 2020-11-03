import React from 'react'
import { action } from '@storybook/addon-actions'
import NumberSelector from '..'

export default {
  title: 'NumberSelector',
  component: NumberSelector
}

export const NumberSelectorDefault = () => (
  <NumberSelector onChange={action('change')} onClick={action('click')} />
)
export const NumberSelectorWithCustomInputAndDisable = () => (
  <NumberSelector
    onChange={action('change')}
    onClick={action('click')}
    values={[-1, 1, 3, 7]}
    minValue={1}
    disabledText={'Ignore'}
    onInputChange={action('input changed')}
  />
)

export const NumberSelectorWithCustomInputAndDisableBlack = () => (
  <div
    style={{
      background: 'grey',
      display: 'flex',
      justifyContent: 'center',
      padding: '2ex'
    }}
  >
    <div />
    <NumberSelector
      onChange={action('change')}
      onClick={action('click')}
      values={[-1, 1, 3, 7]}
      minValue={1}
      colour={'#ffffff'}
      inputColour={'#000000'}
      disabledText={'Ignore'}
      onInputChange={action('input changed')}
    />
  </div>
)

export const NumberSelectorWithUndefinedValues = () => (
  <NumberSelector
    onChange={action('change')}
    onClick={action('click')}
    values={undefined}
  />
)

export const NumberSelectorWithDisable = () => (
  <NumberSelector
    onChange={action('change')}
    onClick={action('click')}
    values={[-1, 1, 3, 7]}
  />
)
export const NumberSelectorPink = () => (
  <div
    style={{
      background: 'grey',
      display: 'flex',
      justifyContent: 'center',
      padding: '2ex'
    }}
  >
    <div />
    <NumberSelector colour='hotpink' onClick={action('click')} />
  </div>
)
export const NumberSelectorPinkWithCustomArray = () => (
  <div
    style={{
      background: 'grey',
      display: 'flex',
      justifyContent: 'center',
      padding: '2ex'
    }}
  >
    <div />
    <NumberSelector
      colour='hotpink'
      onClick={action('click')}
      values={[1, 3, 7]}
    />
  </div>
)
export const NumberSelectorDarkBackground = () => (
  <NumberSelector background={'#909090'} onClick={action('click')} />
)
export const NumberSelectorCustomWidthWhiteOnBlackWithAlpha = () => (
  <div
    style={{
      background: 'black',
      display: 'flex',
      justifyContent: 'center',
      padding: '2ex'
    }}
  >
    <div />
    <NumberSelector width={50} onClick={action('click')} />
  </div>
)

export const NumberSelectorTransparent = () => (
  <div
    style={{
      background: 'black',
      display: 'flex',
      justifyContent: 'center',
      padding: '2ex'
    }}
  >
    <div />
    <NumberSelector background={'#00000090'} onClick={action('click')} />
  </div>
)

export const NumberSelectorBiggerFont = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '2ex'
    }}
  >
    <div />
    <NumberSelector fontSize={'40px'} onClick={action('click')} />
  </div>
)

export const NumberSelectorSelectedWidth = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '2ex'
    }}
  >
    <div />
    <NumberSelector
      background={'#ffffff'}
      lineWidth={3}
      onClick={action('click')}
    />
  </div>
)
