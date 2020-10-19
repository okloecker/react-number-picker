import React from 'react'
import { action } from '@storybook/addon-actions'
import NumberPicker from '..'

export default {
  title: 'NumberPicker',
  component: NumberPicker
}

export const NumberPickerDefault = () => (
  <NumberPicker onChange={action('change')} onClick={action('click')} />
)
export const NumberPickerWithCustomInputAndDisable = () => (
  <NumberPicker
    onChange={action('change')}
    onClick={action('click')}
    values={[-1, 1, 3, 7]}
    showCustomInput={true}
  />
)
export const NumberPickerWithDisable = () => (
  <NumberPicker
    onChange={action('change')}
    onClick={action('click')}
    values={[-1, 1, 3, 7]}
  />
)
export const NumberPickerPink = () => (
  <div
    style={{
      background: 'grey',
      display: 'flex',
      justifyContent: 'center',
      padding: '2ex'
    }}
  >
    <div />
    <NumberPicker colour='hotpink' onClick={action('click')} />
  </div>
)
export const NumberPickerPinkWithCustomArray = () => (
  <div
    style={{
      background: 'grey',
      display: 'flex',
      justifyContent: 'center',
      padding: '2ex'
    }}
  >
    <div />
    <NumberPicker
      colour='hotpink'
      onClick={action('click')}
      values={[1, 3, 7]}
    />
  </div>
)
export const NumberPickerDarkBackground = () => (
  <NumberPicker background={'#909090'} onClick={action('click')} />
)
export const NumberPickerCustomWidthWhiteOnBlackWithAlpha = () => (
  <div
    style={{
      background: 'black',
      display: 'flex',
      justifyContent: 'center',
      padding: '2ex'
    }}
  >
    <div />
    <NumberPicker width={50} onClick={action('click')} />
  </div>
)

export const NumberPickerTransparent = () => (
  <div
    style={{
      background: 'black',
      display: 'flex',
      justifyContent: 'center',
      padding: '2ex'
    }}
  >
    <div />
    <NumberPicker background={'#00000090'} onClick={action('click')} />
  </div>
)

export const NumberPickerBiggerFont = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '2ex'
    }}
  >
    <div />
    <NumberPicker fontSize={'40px'} onClick={action('click')} />
  </div>
)

export const NumberPickerSelectedWidth = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '2ex'
    }}
  >
    <div />
    <NumberPicker
      background={'#ffffff'}
      lineWidth={3}
      onClick={action('click')}
    />
  </div>
)
