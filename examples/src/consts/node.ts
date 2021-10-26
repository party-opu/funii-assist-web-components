import { AppV1_Typography, AppV1_Image, AppV1_Space, AppV1_Button, AppV1_List, AppV1_ListItem, AppV1_Frame } from '@funii-inc/funii-assist-types'

const LIGHT = 300
const REGULAR = 400
const MEDIUM = 500
// const BOLD = 700

export const typography1: AppV1_Typography = {
  id: '1',
  name: 'タイポグラフィー',
  thumbnailURL: null,
  visible: true,
  type: 'TYPOGRAPHY',
  text: ['Headline1'],
  textStyle: {
    fontFamily: null,
    fontWeight: LIGHT,
    fontSize: 96,
    lineHeight: 1.2,
    letterSpacing: -1.5,
    textAlignHorizontal: 'LEFT',
    textAlignVertical: 'CENTER',
    fills: [{ type: 'SOLID', color: { r: 33, g: 33, b: 33, a: 1 } }],
  },
  padding: [0, 12, 0, 12],
  actions: [],
}

export const typography2: AppV1_Typography = {
  id: '2',
  name: 'タイポグラフィー',
  thumbnailURL: null,
  visible: true,
  type: 'TYPOGRAPHY',
  text: ['Headline2'],
  textStyle: {
    fontFamily: null,
    fontWeight: LIGHT,
    fontSize: 60,
    lineHeight: 1.2,
    letterSpacing: -0.5,
    textAlignHorizontal: 'LEFT',
    textAlignVertical: 'CENTER',
    fills: [{ type: 'SOLID', color: { r: 33, g: 33, b: 33, a: 1 } }],
  },
  padding: [0, 12, 0, 12],
  actions: [],
}

export const typography3: AppV1_Typography = {
  id: '3',
  name: 'タイポグラフィー',
  thumbnailURL: null,
  visible: true,
  type: 'TYPOGRAPHY',
  text: ['Headline3'],
  textStyle: {
    fontFamily: null,
    fontWeight: REGULAR,
    fontSize: 48,
    lineHeight: 1.2,
    letterSpacing: 0,
    textAlignHorizontal: 'LEFT',
    textAlignVertical: 'CENTER',
    fills: [{ type: 'SOLID', color: { r: 33, g: 33, b: 33, a: 1 } }],
  },
  padding: [0, 12, 0, 12],
  actions: [],
}

export const image1: AppV1_Image = {
  id: '1',
  name: 'イメージ',
  thumbnailURL: null,
  visible: true,
  type: 'IMAGE',
  images: [
    {
      path: null,
      size: {
        width: null,
        height: null,
      },
      url: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/mv.jpg',
    },
    {
      path: null,
      size: {
        width: null,
        height: null,
      },
      url: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/bg_pikmin.jpg',
    },
  ],
  renderMode: 'CAROUSEL',
  horizontalAxisSizingMode: 'AUTO',
  verticalAxisSizingMode: 'AUTO',
  size: {
    width: null,
    height: null,
  },
  scaleMode: 'FILL',
  imageAlignHorizontal: 'CENTER',
  imageAlignVertical: 'CENTER',
  padding: [0, 0, 0, 0],
  cornerRadius: [0, 0, 0, 0],
  actions: [],
}

export const image2: AppV1_Image = {
  id: '2',
  name: 'イメージ',
  thumbnailURL: null,
  visible: true,
  type: 'IMAGE',
  images: [
    {
      path: null,
      size: {
        width: null,
        height: null,
      },
      url: 'https://img.cpcdn.com/recipes/1399875/750x500cq60/bb3d5f6ac2730c61de617ebf3a145438?p=1301829031',
    },
    {
      path: null,
      size: {
        width: null,
        height: null,
      },
      url: 'https://shop.cake-cake.net/rich_field/images/cate_3/SP/38.jpg',
    },
  ],
  renderMode: 'CAROUSEL',
  horizontalAxisSizingMode: 'AUTO',
  verticalAxisSizingMode: 'AUTO',
  size: {
    width: null,
    height: null,
  },
  scaleMode: 'FIT',
  imageAlignHorizontal: 'CENTER',
  imageAlignVertical: 'CENTER',
  padding: [0, 0, 0, 0],
  cornerRadius: [0, 0, 0, 0],
  actions: [],
}

export const space1: AppV1_Space = {
  id: '1',
  name: 'スペース',
  thumbnailURL: null,
  visible: true,
  type: 'SPACE',
  size: 12,
}

export const space2: AppV1_Space = {
  id: '2',
  name: 'スペース',
  thumbnailURL: null,
  visible: true,
  type: 'SPACE',
  size: 24,
}

export const space3: AppV1_Space = {
  id: '3',
  name: 'スペース',
  thumbnailURL: null,
  visible: true,
  type: 'SPACE',
  size: 48,
}

export const button1: AppV1_Button = {
  id: '1',
  name: 'ボタン',
  thumbnailURL: null,
  visible: true,
  type: 'BUTTON',
  text: ['ボタン'],
  icon: null,
  // icon: 'aaa',
  horizontalAxisSizingMode: 'STRETCH',
  verticalAxisSizingMode: 'AUTO',
  size: {
    width: null,
    height: null,
  },
  shapeHorizontalSpacing: 12,
  shapeVerticalSpacing: 12,
  itemSpacing: 3,
  fills: [{ type: 'SOLID', color: { r: 33, g: 33, b: 33, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  shapeAlignHorizontal: 'CENTER',
  shapeAlignVertical: 'CENTER',
  textStyle: {
    fontFamily: null,
    fontWeight: MEDIUM,
    fontSize: 14,
    lineHeight: 1.2,
    letterSpacing: 1.25,
    textAlignHorizontal: 'LEFT',
    textAlignVertical: 'CENTER',
    fills: [{ type: 'SOLID', color: { r: 255, g: 255, b: 255, a: 1 } }],
  },
  padding: [6, 12, 6, 12],
  cornerRadius: [12, 12, 12, 12],
  actions: [],
}

export const button2: AppV1_Button = {
  id: '1',
  name: 'ボタン',
  thumbnailURL: null,
  visible: true,
  type: 'BUTTON',
  text: ['ボタン'],
  icon: null,
  // icon: 'aaa',
  horizontalAxisSizingMode: 'STRETCH',
  verticalAxisSizingMode: 'AUTO',
  size: {
    width: null,
    height: null,
  },
  shapeHorizontalSpacing: 12,
  shapeVerticalSpacing: 12,
  itemSpacing: 3,
  fills: [{ type: 'SOLID', color: { r: 33, g: 33, b: 33, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  shapeAlignHorizontal: 'CENTER',
  shapeAlignVertical: 'CENTER',
  textStyle: {
    fontFamily: null,
    fontWeight: MEDIUM,
    fontSize: 14,
    lineHeight: 1.2,
    letterSpacing: 1.25,
    textAlignHorizontal: 'CENTER',
    textAlignVertical: 'CENTER',
    fills: [{ type: 'SOLID', color: { r: 255, g: 255, b: 255, a: 1 } }],
  },
  padding: [6, 12, 6, 12],
  cornerRadius: [12, 12, 12, 12],
  actions: [],
}

export const button3: AppV1_Button = {
  id: '1',
  name: 'ボタン',
  thumbnailURL: null,
  visible: true,
  type: 'BUTTON',
  text: ['ボタン'],
  icon: null,
  // icon: 'aaa',
  horizontalAxisSizingMode: 'STRETCH',
  verticalAxisSizingMode: 'AUTO',
  size: {
    width: null,
    height: null,
  },
  shapeHorizontalSpacing: 12,
  shapeVerticalSpacing: 12,
  itemSpacing: 3,
  fills: [{ type: 'SOLID', color: { r: 33, g: 33, b: 33, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  shapeAlignHorizontal: 'CENTER',
  shapeAlignVertical: 'CENTER',
  textStyle: {
    fontFamily: null,
    fontWeight: MEDIUM,
    fontSize: 14,
    lineHeight: 1.2,
    letterSpacing: 1.25,
    textAlignHorizontal: 'RIGHT',
    textAlignVertical: 'CENTER',
    fills: [{ type: 'SOLID', color: { r: 255, g: 255, b: 255, a: 1 } }],
  },
  padding: [6, 12, 6, 12],
  cornerRadius: [12, 12, 12, 12],
  actions: [],
}

export const button4: AppV1_Button = {
  id: '3',
  name: 'ボタン',
  thumbnailURL: null,
  visible: true,
  type: 'BUTTON',
  text: ['ボタン'],
  icon: 'aaa',
  horizontalAxisSizingMode: 'AUTO',
  verticalAxisSizingMode: 'AUTO',
  size: {
    width: null,
    height: null,
  },
  shapeHorizontalSpacing: 12,
  shapeVerticalSpacing: 12,
  itemSpacing: 3,
  fills: [{ type: 'SOLID', color: { r: 150, g: 0, b: 0, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  shapeAlignHorizontal: 'LEFT',
  shapeAlignVertical: 'CENTER',
  textStyle: {
    fontFamily: null,
    fontWeight: MEDIUM,
    fontSize: 14,
    lineHeight: 1.2,
    letterSpacing: 1.25,
    textAlignHorizontal: 'CENTER',
    textAlignVertical: 'CENTER',
    fills: [{ type: 'SOLID', color: { r: 255, g: 255, b: 255, a: 1 } }],
  },
  padding: [6, 12, 6, 12],
  cornerRadius: [12, 12, 12, 12],
  actions: [],
}

export const button5: AppV1_Button = {
  id: '4',
  name: 'ボタン',
  thumbnailURL: null,
  visible: true,
  type: 'BUTTON',
  text: ['ボタン'],
  icon: 'aaa',
  horizontalAxisSizingMode: 'AUTO',
  verticalAxisSizingMode: 'AUTO',
  size: {
    width: null,
    height: null,
  },
  shapeHorizontalSpacing: 12,
  shapeVerticalSpacing: 12,
  itemSpacing: 3,
  fills: [{ type: 'SOLID', color: { r: 150, g: 0, b: 0, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  shapeAlignHorizontal: 'CENTER',
  shapeAlignVertical: 'CENTER',
  textStyle: {
    fontFamily: null,
    fontWeight: MEDIUM,
    fontSize: 14,
    lineHeight: 1.2,
    letterSpacing: 1.25,
    textAlignHorizontal: 'CENTER',
    textAlignVertical: 'CENTER',
    fills: [{ type: 'SOLID', color: { r: 255, g: 255, b: 255, a: 1 } }],
  },
  padding: [6, 12, 6, 12],
  cornerRadius: [12, 12, 12, 12],
  actions: [],
}

export const button6: AppV1_Button = {
  id: '5',
  name: 'ボタン',
  thumbnailURL: null,
  visible: true,
  type: 'BUTTON',
  text: ['ボタン'],
  icon: 'aaa',
  horizontalAxisSizingMode: 'AUTO',
  verticalAxisSizingMode: 'AUTO',
  size: {
    width: null,
    height: null,
  },
  shapeHorizontalSpacing: 12,
  shapeVerticalSpacing: 12,
  itemSpacing: 3,
  fills: [{ type: 'SOLID', color: { r: 150, g: 0, b: 0, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  shapeAlignHorizontal: 'RIGHT',
  shapeAlignVertical: 'CENTER',
  textStyle: {
    fontFamily: null,
    fontWeight: MEDIUM,
    fontSize: 14,
    lineHeight: 1.2,
    letterSpacing: 1.25,
    textAlignHorizontal: 'CENTER',
    textAlignVertical: 'CENTER',
    fills: [{ type: 'SOLID', color: { r: 255, g: 255, b: 255, a: 1 } }],
  },
  padding: [6, 12, 6, 12],
  cornerRadius: [12, 12, 12, 12],
  actions: [],
}

export const testItems = [
  {
    id: '1',
    'columnID-1': 'hello',
    'columnID-2': 'world',
    'columnID-3': 'hello world!!!',
  },
  {
    id: '2',
    'columnID-1': 'kurino',
    'columnID-2': 'kosaku',
    'columnID-3': 'k.k',
  },
  {
    id: '3',
    'columnID-1': 'morioka',
    'columnID-2': 'yuichi',
    'columnID-3': 'm.y',
  },
  {
    id: '4',
    'columnID-1': 'aaaaa',
    'columnID-2': 'bbbbb',
    'columnID-3': 'ccccc',
  },
  {
    id: '5',
    'columnID-1': 'hello',
    'columnID-2': 'world',
    'columnID-3': 'hello world!!!',
  },
  {
    id: '6',
    'columnID-1': 'kurino',
    'columnID-2': 'kosaku',
    'columnID-3': 'k.k',
  },
  {
    id: '7',
    'columnID-1': 'morioka',
    'columnID-2': 'yuichi',
    'columnID-3': 'm.y',
  },
  {
    id: '8',
    'columnID-1': 'aaaaa',
    'columnID-2': 'bbbbb',
    'columnID-3': 'ccccc',
  },
]

const listItem1: AppV1_ListItem = {
  id: '1',
  name: 'リストアイテム',
  thumbnailURL: null,
  visible: true,
  type: 'LISTITEM',
  shapeHorizontalSpacing: 12,
  shapeVerticalSpacing: 12,
  icon: null,
  primaryText: [
    '',
    { type: 'TEXT', name: 'Current Data', source: { projectID: 'project1234', tableID: 'table1234', columnID: 'columnID-1', selector: 'LIST_ITEM_DATA' } },
    '',
  ],
  secondaryText: [
    '',
    { type: 'TEXT', name: 'Current Data', source: { projectID: 'project1234', tableID: 'table1234', columnID: 'columnID-3', selector: 'LIST_ITEM_DATA' } },
    '',
  ],
  fills: [],
  horizontalAxisSizingMode: 'STRETCH',
  verticalAxisSizingMode: 'FIXED',
  size: {
    width: null,
    height: 60,
  },
  shapeAlignHorizontal: 'LEFT',
  shapeAlignVertical: 'CENTER',
  primaryTextStyle: {
    fontFamily: null,
    fontWeight: REGULAR,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    textAlignHorizontal: 'LEFT',
    textAlignVertical: 'CENTER',
    fills: [{ type: 'SOLID', color: { r: 33, g: 33, b: 33, a: 1 } }],
  },
  secondaryTextStyle: {
    fontFamily: null,
    fontWeight: REGULAR,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    textAlignHorizontal: 'LEFT',
    textAlignVertical: 'CENTER',
    fills: [{ type: 'SOLID', color: { r: 33, g: 33, b: 33, a: 1 } }],
  },
  padding: [0, 0, 0, 0],
  cornerRadius: [0, 0, 0, 0],
  actions: [],
}

const listItem2: AppV1_ListItem = {
  id: '2',
  name: 'リストアイテム',
  thumbnailURL: null,
  visible: true,
  type: 'LISTITEM',
  shapeHorizontalSpacing: 12,
  shapeVerticalSpacing: 12,
  icon: 'aaaaa',
  primaryText: [
    '',
    { type: 'TEXT', name: 'Current Data', source: { projectID: 'project1234', tableID: 'table1234', columnID: 'columnID-1', selector: 'LIST_ITEM_DATA' } },
    '',
  ],
  secondaryText: [
    '',
    { type: 'TEXT', name: 'Current Data', source: { projectID: 'project1234', tableID: 'table1234', columnID: 'columnID-2', selector: 'LIST_ITEM_DATA' } },
    '',
  ],
  fills: [],
  horizontalAxisSizingMode: 'STRETCH',
  verticalAxisSizingMode: 'FIXED',
  size: {
    width: null,
    height: 60,
  },
  shapeAlignHorizontal: 'LEFT',
  shapeAlignVertical: 'CENTER',
  primaryTextStyle: {
    fontFamily: null,
    fontWeight: REGULAR,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    textAlignHorizontal: 'LEFT',
    textAlignVertical: 'CENTER',
    fills: [{ type: 'SOLID', color: { r: 33, g: 33, b: 33, a: 1 } }],
  },
  secondaryTextStyle: {
    fontFamily: null,
    fontWeight: REGULAR,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    textAlignHorizontal: 'LEFT',
    textAlignVertical: 'CENTER',
    fills: [{ type: 'SOLID', color: { r: 33, g: 33, b: 33, a: 1 } }],
  },
  padding: [0, 0, 0, 0],
  cornerRadius: [0, 0, 0, 0],
  actions: [],
}

export const list1: AppV1_List = {
  id: '1',
  name: 'リスト',
  thumbnailURL: null,
  visible: true,
  type: 'LIST',
  data: {
    type: 'TABLE',
    name: 'test',
    source: {
      projectID: 'project1234',
      tableID: 'table1234',
    },
  },
  item: listItem1,
  listSpacing: [0, 0, 0, 0],
  itemSpacing: 0,
  divider: null,
  layoutMode: 'VERTICAL',
  primaryAxisSizingMode: 'AUTO',
  counterAxisSizingMode: 'STRETCH',
  primaryAxisAlign: 'START',
  counterAxisDistribute: 'START',
  size: {
    width: null,
    height: null,
  },
  listAlignHorizontal: 'CENTER',
  listAlignVertical: 'CENTER',
  fills: [{ type: 'SOLID', color: { r: 255, g: 255, b: 255, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  cornerRadius: [0, 0, 0, 0],
  padding: [6, 12, 6, 12],
}

export const list2: AppV1_List = {
  id: '2',
  name: 'リスト',
  thumbnailURL: null,
  visible: true,
  type: 'LIST',
  data: {
    type: 'TABLE',
    name: 'test',
    source: {
      projectID: 'project1234',
      tableID: 'table1234',
    },
  },
  item: listItem2,
  listSpacing: [0, 0, 0, 0],
  itemSpacing: 0,
  divider: null,
  layoutMode: 'VERTICAL',
  primaryAxisSizingMode: 'FIXED',
  counterAxisSizingMode: 'STRETCH',
  primaryAxisAlign: 'START',
  counterAxisDistribute: 'START',
  size: {
    width: null,
    height: 160,
  },
  listAlignHorizontal: 'CENTER',
  listAlignVertical: 'CENTER',
  fills: [{ type: 'SOLID', color: { r: 255, g: 255, b: 255, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  cornerRadius: [0, 0, 0, 0],
  padding: [6, 12, 6, 12],
}

export const list3: AppV1_List = {
  id: '3',
  name: 'リスト',
  thumbnailURL: null,
  visible: true,
  type: 'LIST',
  data: {
    type: 'TABLE',
    name: 'test',
    source: {
      projectID: 'project1234',
      tableID: 'table1234',
    },
  },
  item: listItem2,
  listSpacing: [0, 0, 0, 0],
  itemSpacing: 0,
  divider: null,
  layoutMode: 'VERTICAL',
  primaryAxisSizingMode: 'FIXED',
  counterAxisSizingMode: 'FIXED',
  primaryAxisAlign: 'START',
  counterAxisDistribute: 'START',
  size: {
    width: 200,
    height: 160,
  },
  listAlignHorizontal: 'RIGHT',
  listAlignVertical: 'CENTER',
  fills: [{ type: 'SOLID', color: { r: 255, g: 255, b: 255, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  cornerRadius: [0, 0, 0, 0],
  padding: [6, 12, 6, 12],
}

export const list4: AppV1_List = {
  id: '4',
  name: 'リスト',
  thumbnailURL: null,
  visible: true,
  type: 'LIST',
  data: {
    type: 'TABLE',
    name: 'test',
    source: {
      projectID: 'project1234',
      tableID: 'table1234',
    },
  },
  item: listItem2,
  listSpacing: [0, 0, 0, 0],
  itemSpacing: 0,
  divider: null,
  layoutMode: 'HORIZONTAL',
  primaryAxisSizingMode: 'AUTO',
  counterAxisSizingMode: 'STRETCH',
  primaryAxisAlign: 'START',
  counterAxisDistribute: 'START',
  size: {
    width: null,
    height: null,
  },
  listAlignHorizontal: 'LEFT',
  listAlignVertical: 'CENTER',
  fills: [{ type: 'SOLID', color: { r: 255, g: 255, b: 255, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  cornerRadius: [0, 0, 0, 0],
  padding: [6, 12, 6, 12],
}

export const frame1: AppV1_Frame = {
  id: '1',
  name: 'フレーム',
  thumbnailURL: null,
  visible: true,
  type: 'FRAME',
  frameSpacing: [0, 0, 0, 0],
  itemSpacing: 0,
  layoutMode: 'VERTICAL',
  primaryAxisSizingMode: 'AUTO',
  counterAxisSizingMode: 'STRETCH',
  primaryAxisAlign: 'CENTER',
  counterAxisDistribute: 'START',
  size: {
    width: null,
    height: null,
  },
  frameAlignHorizontal: 'CENTER',
  frameAlignVertical: 'CENTER',
  fills: [{ type: 'SOLID', color: { r: 244, g: 244, b: 244, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  cornerRadius: [0, 0, 0, 0],
  padding: [6, 12, 6, 12],
}

export const frame2: AppV1_Frame = {
  id: '2',
  name: 'フレーム',
  thumbnailURL: null,
  visible: true,
  type: 'FRAME',
  frameSpacing: [0, 0, 0, 0],
  itemSpacing: 0,
  layoutMode: 'VERTICAL',
  primaryAxisSizingMode: 'FIXED',
  counterAxisSizingMode: 'FIXED',
  primaryAxisAlign: 'CENTER',
  counterAxisDistribute: 'START',
  size: {
    width: 300,
    height: 140,
  },
  frameAlignHorizontal: 'LEFT',
  frameAlignVertical: 'CENTER',
  fills: [{ type: 'SOLID', color: { r: 244, g: 244, b: 244, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  cornerRadius: [0, 0, 0, 0],
  padding: [6, 12, 6, 12],
}

export const frame3: AppV1_Frame = {
  id: '3',
  name: 'フレーム',
  thumbnailURL: null,
  visible: true,
  type: 'FRAME',
  frameSpacing: [0, 0, 0, 0],
  itemSpacing: 0,
  layoutMode: 'VERTICAL',
  primaryAxisSizingMode: 'FIXED',
  counterAxisSizingMode: 'FIXED',
  primaryAxisAlign: 'CENTER',
  counterAxisDistribute: 'START',
  size: {
    width: 300,
    height: 140,
  },
  frameAlignHorizontal: 'RIGHT',
  frameAlignVertical: 'CENTER',
  fills: [{ type: 'SOLID', color: { r: 244, g: 244, b: 244, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  cornerRadius: [0, 0, 0, 0],
  padding: [6, 12, 6, 12],
}

export const frame4: AppV1_Frame = {
  id: '4',
  name: 'フレーム',
  thumbnailURL: null,
  visible: true,
  type: 'FRAME',
  frameSpacing: [0, 0, 0, 0],
  itemSpacing: 0,
  layoutMode: 'HORIZONTAL',
  primaryAxisSizingMode: 'AUTO',
  counterAxisSizingMode: 'STRETCH',
  primaryAxisAlign: 'CENTER',
  counterAxisDistribute: 'START',
  size: {
    width: null,
    height: null,
  },
  frameAlignHorizontal: 'CENTER',
  frameAlignVertical: 'CENTER',
  fills: [{ type: 'SOLID', color: { r: 244, g: 244, b: 244, a: 1 } }],
  stroke: null,
  strokeWeight: 0,
  cornerRadius: [0, 0, 0, 0],
  padding: [6, 12, 6, 12],
}
