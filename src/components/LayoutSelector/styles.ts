import styled, { createGlobalStyle } from "styled-components";

import { Radio, Space } from "antd";

export const LayoutSelectorGlobalStyled = createGlobalStyle`
.ant-form-item-label > label {
  opacity: 0;
}
.select-column .ant-radio {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
.ant-radio-wrapper {
  cursor: pointer;
}

/* CHECKED STYLES */
.select-row .ant-radio-wrapper-checked .ant-card {
  outline: 2px solid #1890ff;
  margin: 0;
}
`;

export const FlexBox = styled(Space)`
  padding: 24px;
  margin: 0 auto;
  min-height: 95%;
  width: 80%;
`;

export const RadioGroup = styled(Radio.Group)`
  padding: 12px 24px 24px 24px;
  margin: 0 auto;
  min-height: 95%;
  width: 80%;
`;
