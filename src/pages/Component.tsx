/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button, Input } from "components";

export default function Component() {
  return (
    <div>
      <Button css={[_button]} backgroundColor="accent">
        123
      </Button>

      <div css={_spacing} />

      <Input css={_input} />
      <Input css={_input} prefix="단위" />
      <Input css={_input} suffix="원" />
      <Input css={_input} isError />
    </div>
  );
}

const _button = css`
  width: 120px;
`;

const _input = css`
  width: 318px;
`;

const _spacing = css`
  height: 64px;
`;
